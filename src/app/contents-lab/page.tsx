import GridSection from '@/components/GridSection';
import Link from 'next/link';

export default function ContentsLabPage() {
  return (
    <>
      {/* Main Section */}
      <GridSection
        number="01"
        title="Contents Lab"
        subtitle="Creative Resources"
        className="pt-[100px]"
      >
        <div className="p-8 md:p-16">
          <p className="text-lg text-[var(--text-secondary)] mb-12 max-w-xl">
            私たちの知見を、無料で公開。
          </p>

          {/* Coming Soon Section */}
          <div className="border-2 border-[var(--border)] p-16 md:p-24 text-center mb-12">
            <h3 className="text-4xl md:text-6xl font-bold mb-6 text-[var(--accent)]">
              COMING SOON
            </h3>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-2xl mx-auto">
              AIイベントイメージ集など、クリエイティブ素材を準備中です。
            </p>
          </div>

          {/* Placeholder for Future Content */}
          <div className="border-2 border-[var(--border)] p-8 md:p-16">
            <h3 className="text-2xl font-bold mb-6">今後公開予定のコンテンツ</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 border-2 border-[var(--border)] hover:bg-[var(--bg-tertiary)] transition-colors">
                <h4 className="font-bold mb-2">AIイベントイメージ集</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  イベント企画に活用できるAI生成画像のコレクション
                </p>
              </div>
              <div className="p-6 border-2 border-[var(--border)] hover:bg-[var(--bg-tertiary)] transition-colors">
                <h4 className="font-bold mb-2">SNS運用ガイド</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  ラグジュアリーブランド向けSNS運用のベストプラクティス
                </p>
              </div>
              <div className="p-6 border-2 border-[var(--border)] hover:bg-[var(--bg-tertiary)] transition-colors">
                <h4 className="font-bold mb-2">キャスティング事例集</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  成功事例とキャスティングのポイントをまとめた資料
                </p>
              </div>
              <div className="p-6 border-2 border-[var(--border)] hover:bg-[var(--bg-tertiary)] transition-colors">
                <h4 className="font-bold mb-2">コンテンツ制作テンプレート</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  SNS投稿用のデザインテンプレート集
                </p>
              </div>
            </div>
          </div>

          {/* Back to Home Link */}
          <div className="mt-12 text-right">
            <Link
              href="/"
              className="inline-flex items-center text-[var(--accent)] hover:text-[var(--accent-light)] transition-colors u-caps"
            >
              ← BACK TO HOME
            </Link>
          </div>
        </div>
      </GridSection>
    </>
  );
}

