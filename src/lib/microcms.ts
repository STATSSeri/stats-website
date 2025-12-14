// microCMS API連携用の型定義と関数

export interface NewsItem {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  date: string;
  category: 'PRESS' | 'INFO';
  title: string;
  description?: string;
  content?: string;
}

export interface MicroCMSResponse<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}

// フォールバック用のデフォルトデータ
export const fallbackNewsItems: NewsItem[] = [
  {
    id: '1',
    createdAt: '2024-12-15T00:00:00.000Z',
    updatedAt: '2024-12-15T00:00:00.000Z',
    publishedAt: '2024-12-15T00:00:00.000Z',
    revisedAt: '2024-12-15T00:00:00.000Z',
    date: '2024.12.15',
    category: 'PRESS',
    title: '新サービス「EC & CRM」を開始しました',
    description: 'ECサイト構築からCRM運用まで、ワンストップでサポートする新サービスを開始しました。',
  },
  {
    id: '2',
    createdAt: '2024-11-20T00:00:00.000Z',
    updatedAt: '2024-11-20T00:00:00.000Z',
    publishedAt: '2024-11-20T00:00:00.000Z',
    revisedAt: '2024-11-20T00:00:00.000Z',
    date: '2024.11.20',
    category: 'INFO',
    title: 'オフィス移転のお知らせ',
    description: '2024年11月より、東京都渋谷区西原にオフィスを移転いたしました。',
  },
  {
    id: '3',
    createdAt: '2024-10-05T00:00:00.000Z',
    updatedAt: '2024-10-05T00:00:00.000Z',
    publishedAt: '2024-10-05T00:00:00.000Z',
    revisedAt: '2024-10-05T00:00:00.000Z',
    date: '2024.10.05',
    category: 'PRESS',
    title: 'ラグジュアリーブランド向けSNS運用ガイドを公開',
    description: 'ラグジュアリーブランドのSNS運用におけるベストプラクティスをまとめたガイドを公開しました。',
  },
  {
    id: '4',
    createdAt: '2024-09-12T00:00:00.000Z',
    updatedAt: '2024-09-12T00:00:00.000Z',
    publishedAt: '2024-09-12T00:00:00.000Z',
    revisedAt: '2024-09-12T00:00:00.000Z',
    date: '2024.09.12',
    category: 'INFO',
    title: '採用情報：SNSディレクター募集',
    description: 'SNSディレクターを募集しています。ラグジュアリーブランドの現場で最前線の仕事に携われます。',
  },
  {
    id: '5',
    createdAt: '2024-08-25T00:00:00.000Z',
    updatedAt: '2024-08-25T00:00:00.000Z',
    publishedAt: '2024-08-25T00:00:00.000Z',
    revisedAt: '2024-08-25T00:00:00.000Z',
    date: '2024.08.25',
    category: 'PRESS',
    title: '新規クライアント獲得のお知らせ',
    description: '複数のラグジュアリーブランド様より新規案件をいただきました。',
  },
  {
    id: '6',
    createdAt: '2024-07-10T00:00:00.000Z',
    updatedAt: '2024-07-10T00:00:00.000Z',
    publishedAt: '2024-07-10T00:00:00.000Z',
    revisedAt: '2024-07-10T00:00:00.000Z',
    date: '2024.07.10',
    category: 'INFO',
    title: 'Contents Lab オープン予定',
    description: 'クリエイティブ素材を無料公開する「Contents Lab」を準備中です。',
  },
];

/**
 * microCMSからニュース一覧を取得
 * @param limit 取得件数（デフォルト: 10）
 * @param offset オフセット（デフォルト: 0）
 * @returns ニュース一覧
 */
export async function getNewsItems(
  limit: number = 10,
  offset: number = 0
): Promise<NewsItem[]> {
  const apiUrl = process.env.NEXT_PUBLIC_MICROCMS_API_URL || process.env.MICROCMS_API_URL;
  const apiKey = process.env.NEXT_PUBLIC_MICROCMS_API_KEY || process.env.MICROCMS_API_KEY;

  // 環境変数が設定されていない場合はフォールバックデータを返す
  if (!apiUrl || !apiKey) {
    console.warn('microCMS API credentials not found. Using fallback data.');
    return fallbackNewsItems.slice(offset, offset + limit);
  }

  try {
    const url = `${apiUrl}/news?limit=${limit}&offset=${offset}&orders=-publishedAt`;
    const response = await fetch(url, {
      headers: {
        'X-MICROCMS-API-KEY': apiKey,
      },
      next: { revalidate: 60 }, // ISR: 60秒ごとに再検証
    });

    if (!response.ok) {
      throw new Error(`microCMS API error: ${response.status}`);
    }

    const data: MicroCMSResponse<NewsItem> = await response.json();
    return data.contents;
  } catch (error) {
    console.error('Failed to fetch news from microCMS:', error);
    // エラー時はフォールバックデータを返す
    return fallbackNewsItems.slice(offset, offset + limit);
  }
}

/**
 * microCMSから特定のニュースを取得
 * @param id ニュースID
 * @returns ニュースアイテム
 */
export async function getNewsItem(id: string): Promise<NewsItem | null> {
  const apiUrl = process.env.NEXT_PUBLIC_MICROCMS_API_URL || process.env.MICROCMS_API_URL;
  const apiKey = process.env.NEXT_PUBLIC_MICROCMS_API_KEY || process.env.MICROCMS_API_KEY;

  if (!apiUrl || !apiKey) {
    console.warn('microCMS API credentials not found.');
    return fallbackNewsItems.find(item => item.id === id) || null;
  }

  try {
    const url = `${apiUrl}/news/${id}`;
    const response = await fetch(url, {
      headers: {
        'X-MICROCMS-API-KEY': apiKey,
      },
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`microCMS API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch news item from microCMS:', error);
    return fallbackNewsItems.find(item => item.id === id) || null;
  }
}

/**
 * 日付をフォーマット（YYYY.MM.DD形式）
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
}

