# Stats Inc. Corporate Website Renewal
# 実装引継書【最終版】

---

## 目次

1. [プロジェクト概要](#1-プロジェクト概要)
2. [サイト構成](#2-サイト構成)
3. [デザイン仕様](#3-デザイン仕様)
4. [セクション別詳細仕様](#4-セクション別詳細仕様)
5. [コピーライティング](#5-コピーライティング)
6. [サービス一覧詳細](#6-サービス一覧詳細)
7. [技術仕様・実装ガイドライン](#7-技術仕様実装ガイドライン)
8. [画像生成指示書](#8-画像生成指示書)

---

## 1. プロジェクト概要

### 1.1 クライアント情報

| 項目 | 内容 |
|------|------|
| 会社名 | スタッツ株式会社 / STATS INC. |
| 現サイト | https://statsworks.tokyo/ |
| 設立 | 2021年4月5日 |
| 代表者 | 芹田樹也 |
| 所在地 | 〒151-0066 東京都渋谷区西原3-30-4 |
| TEL | 03-5324-2638 |
| 資本金 | 506万円 |
| 従業員数 | 20名（業務委託含む） |
| 事業内容 | SNSを軸としたデジタルマーケティング支援 |
| 顧問弁護士 | プロコミットパートナーズ法律事務所 |

### 1.2 リニューアルの目的

**現状の課題**
- 「キャスティング会社」という印象が強い
- フルサービスでPR支援ができる会社というポジショニングが伝わりにくい

**目指す姿**
- 「ラグジュアリーブランドのSNSを裏から支える、フルサービスPR支援会社」
- SNS×PR×デジタル×新規事業まで網羅する総合力をアピール
- 「こんなにたくさんのことできるのか！」という印象を与える
- 謙虚さを兼ね備えた、「裏方に徹する」姿勢の表現

### 1.3 ターゲット

- 外資系ラグジュアリーブランドのマーケティング担当者
- 高級感・プロフェッショナルさを重視する企業

### 1.4 主要取引先（実績）

**HEROセクション表示用（代表6社）**
- JIMMY CHOO
- GUCCI
- BALMAIN
- Christian Louboutin
- Mercedes-Benz
- CHAUMET

**全クライアントリスト**
Airbnb / agnes b / adidas Originals / BALMAIN / BALMUDA / BEAMS / BURBERRY FRAGRANCE / Calvin Klein / Cassina / CHAUMET / Champion / Chloe FRAGRANCE / Christian Louboutin / CONVERSE / C.P. Company / DOLCE&GABBANA FRAGRANCE / EDWIN / Ferragamo / gelato pique / HANKYU UMEDA / Hanes / HERA / JIMMY CHOO / Le Creuset / MACKINTOSH / Manhattan Portage / MANOLO BLAHNIK / Mercedes-Benz / MOROCCANOIL / PLAN C / TABASCO / THREE / TOMMY HILFIGER / Triumph / TUMI / ZENITH / etc.

**その他取引先（会社概要用）**
阪急阪神百貨店 / ザ・ゴール / 博報堂 / 博報堂Gravity / 双葉通信社 / ベクトル / 読売新聞大阪本社 / ダイヤモンド社 / CHASE / AIAD etc.

### 1.5 差別化ポイント（Why Stats?）

| ポイント | 英語 | 内容 |
|---------|------|------|
| 信頼 | TRUST | 外資系ラグジュアリーブランドからの信頼 |
| コネクション | CONNECTION | 芸能事務所等とのコネクション |
| ハイブリッド人材 | HYBRID TALENT | デジタル×ブランドビジネスの感性を持つチーム |

### 1.6 キャスティング事業 実績数（FLAGSHIP SERVICE）

| 指標 | 数値 |
|------|------|
| 累計キャスティング人数 | 2,000名以上 |
| 年間案件数 | 200件以上 |
| 取引ブランド数 | 300社以上 |

---

## 2. サイト構成

### 2.1 サイトマップ

```
TOP（1ページ完結型 + 各独立ページへのリンク）
│
├── [01] HERO
├── [02] ABOUT（サマリー）→ 独立ページあり
├── [03] SERVICES（サマリー）→ 独立ページあり
├── [04] WORKS
├── [05] BUSINESS
├── [06] CONTENTS LAB（サマリー）→ 独立ページあり
├── [07] NEWS（サマリー）→ 独立ページあり
├── [08] CAREERS
├── [09] CONTACT（CTA）→ 独立ページあり
│
├── /about - 会社概要詳細
├── /services - サービス一覧詳細（アンカーリンク）
├── /contents-lab - コンテンツ一覧
├── /news - ニュース一覧
└── /contact - お問い合わせフォーム
```

### 2.2 ページ構成詳細

| ページ | 種別 | 内容 |
|--------|------|------|
| TOP | メイン | 全9セクションを縦スクロールで表示 |
| /about | 独立 | Philosophy + Why Stats? + 会社概要 |
| /services | 独立 | 6カテゴリ全サービス詳細（アンカーリンク対応） |
| /contents-lab | 独立 | ダウンロードコンテンツ一覧 |
| /news | 独立 | ニュース一覧（microCMS連携） |
| /contact | 独立 | お問い合わせフォーム |

### 2.3 ナビゲーション構成

**グローバルナビゲーション**
```
[STATS LOGO]  About  Services  Works  Business  Lab  News  Careers  [Contact]
```

---

## 3. デザイン仕様

### 3.1 参考サイト

| サイト | 取り入れる要素 |
|--------|---------------|
| SAKURA DEEPTECH SHIBUYA | モノクロ＋グレーのグラデーション、番号付きセクション（01, 02...） |
| kontext | カンバン形式のグリッドレイアウト、項目を大量に並べた時の「圧」の出し方 |
| Amrit Palace | 角張ったコンテナ、細い線での空間区切り、余白の使い方 |

### 3.2 デザインスタイル

- **基調**: Swiss Modern（スイスモダン）
- **テーマ**: ダーク
- **印象**: 高級感、プロフェッショナル、黒子に徹する姿勢、謙虚さ

### 3.3 カラーパレット

```css
:root {
  /* Primary Colors */
  --color-bg-primary: #0A0A0A;      /* ほぼ黒 - メイン背景 */
  --color-bg-secondary: #1A1A1A;    /* ダークグレー - セクション背景 */
  --color-bg-tertiary: #2A2A2A;     /* グレー - カード背景 */
  --color-bg-quaternary: #3A3A3A;   /* ライトグレー - ホバー */
  
  /* Accent */
  --color-accent: #C9A962;          /* シャンパンゴールド */
  --color-accent-light: #D4B978;    /* ゴールド（ホバー時） */
  
  /* Text */
  --color-text-primary: #FFFFFF;    /* 白 - メインテキスト */
  --color-text-secondary: #888888;  /* グレー - サブテキスト */
  --color-text-tertiary: #555555;   /* ダークグレー - 補助テキスト */
  
  /* Border */
  --color-border: #333333;          /* 細い線 */
  --color-border-light: #444444;    /* ホバー時の線 */
}
```

### 3.4 タイポグラフィ

```css
/* 英語（メイン） */
font-family: 'Helvetica Neue', 'Inter', sans-serif;

/* 日本語（サブ） */
font-family: 'Noto Sans JP', 'Hiragino Sans', sans-serif;

/* サイズ */
--font-size-hero: 72px;
--font-size-h1: 48px;
--font-size-h2: 32px;
--font-size-h3: 24px;
--font-size-body: 16px;
--font-size-small: 14px;
```

### 3.5 レイアウト原則

- 角張ったコンテナ（border-radius: 0 or 2px）
- 細い線（1px solid）
- 余白を贅沢に使う
- グリッドベース（12カラム）
- 最大幅: 1440px

### 3.6 アニメーション

```javascript
// スクロールアニメーション
{ opacity: 0, y: 30 } → { opacity: 1, y: 0 }
transition: 0.6s cubic-bezier(0.4, 0, 0.2, 1)

// テキスト時間差表示
staggerChildren: 0.03

// ホバー画像
{ opacity: 0, y: 10 } → { opacity: 1, y: 0 }
transition: 0.3s
```

---

## 4. セクション別詳細仕様

### 4.1 【01】HEROセクション

**コンセプト**
- キャッチコピーがドンと目に入る
- 余白が多く、情報を詰め込まない「引き」のデザイン
- 謙虚さと信頼感の両立

**ワイヤーフレーム**
```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  [背景: ノイズ・グレイン系テクスチャ / モノトーン / 先進的]                 │
│                                                                         │
│                                                                         │
│                    Designing the Inevitable.                            │
│                                                                         │
│                         ↓ 時間差フェードイン（0.5〜1秒後）                 │
│                                                                         │
│                    その「熱狂」は、偶然ではない。                          │
│                    SNSから逆算する、緻密な設計。                           │
│                                                                         │
│                          [↓ SCROLL]                                     │
│                                                                         │
│  ─────────────────────────────────────────────────────────────────────  │
│   JIMMY CHOO / GUCCI / BALMAIN / Christian Louboutin /                  │
│   Mercedes-Benz / CHAUMET                                               │
│   （テキストのみ・モノクロ・小さめ・控えめに）                              │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**仕様**
| 要素 | 詳細 |
|------|------|
| 背景 | ノイズ・グレイン系テクスチャ、モノトーン、先進的な印象 |
| メインコピー | "Designing the Inevitable." 超大きく |
| サブコピー | "その「熱狂」は、偶然ではない。SNSから逆算する、緻密な設計。" |
| アニメーション | 英語→時間差（0.5〜1秒）→日本語フェードイン |
| ブランド名 | テキストのみ、ロゴなし、控えめに |

---

### 4.2 【02】ABOUTセクション

**コンセプト**
- 「SNS逆算」アプローチの訴求
- ラグジュアリーブランドとの実績（権威性）
- 代表ステートメント（ビジョン）

**TOPページ内ワイヤーフレーム**
```
┌─────────────────────────────────────────────────────────────────────────┐
│  02  ABOUT                                                              │
│                                                                         │
│  ┌────────────────────────────────────────────────────────────────┐    │
│  │                                                                │    │
│  │  人をつなぎ、縁を広げ、感動の連鎖をつくりだす。                    │    │
│  │                                                                │    │
│  │  AIやデジタルにより世界が大きく変わる世の中で、                   │    │
│  │  本質的なコミュニケーションを大事にする会社でありたい。            │    │
│  │                                                                │    │
│  │                                    ── 代表取締役 芹田樹也        │    │
│  │                                                                │    │
│  └────────────────────────────────────────────────────────────────┘    │
│                                                                         │
│  ┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐        │
│  │  TRUST           │ │  CONNECTION      │ │  HYBRID TALENT   │        │
│  │  外資系ラグジュア │ │  芸能事務所等     │ │  デジタル×ブランド│        │
│  │  リーブランドから │ │  とのコネクション │ │  ビジネスの感性   │        │
│  │  の信頼          │ │                  │ │                  │        │
│  └──────────────────┘ └──────────────────┘ └──────────────────┘        │
│                                                                         │
│                                        [MORE ABOUT US →]                │
└─────────────────────────────────────────────────────────────────────────┘
```

**独立ABOUTページ - 会社概要**
| 項目 | 内容 |
|------|------|
| 会社名 | スタッツ株式会社 / STATS INC. |
| 設立 | 2021年4月5日 |
| 代表者 | 芹田樹也 |
| 所在地 | 〒151-0066 東京都渋谷区西原3-30-4 |
| TEL | 03-5324-2638 |
| 資本金 | 506万円 |
| 従業員数 | 20名（業務委託含む） |
| 事業内容 | SNSを軸としたデジタルマーケティング支援 |
| 顧問弁護士 | プロコミットパートナーズ法律事務所 |
| 主要取引先 | 阪急阪神百貨店 / ザ・ゴール / 博報堂 / 博報堂Gravity / 双葉通信社 / ベクトル / 読売新聞大阪本社 / ダイヤモンド社 / CHASE / AIAD etc. |

---

### 4.3 【03】SERVICESセクション ★メインコンテンツ

**コンセプト**
- 「こんなにたくさんできるのか！」という印象
- Castingを「FLAGSHIP SERVICE」として強調
- カンバン形式グリッド + ホバーで詳細展開

**TOPページ内ワイヤーフレーム**
```
┌─────────────────────────────────────────────────────────────────────────┐
│  03  SERVICES                                                           │
│                                                                         │
│  SNSに関わるすべてを、ワンストップで。                                     │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │ ★ FLAGSHIP SERVICE                                              │   │
│  │                                                                  │   │
│  │  CASTING                                                         │   │
│  │                                                                  │   │
│  │  2,000+          200+           300+                             │   │
│  │  Talents         Projects       Brands                           │   │
│  │  累計キャスティング   年間案件数      取引ブランド                     │   │
│  │                                                                  │   │
│  │  7 Services                                                      │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐           │
│  │ DIGITAL         │ │ EVENT           │ │ CONTENT         │           │
│  │ ADVERTISING     │ │ PRODUCTION      │ │ CREATION        │           │
│  │ 11 Services     │ │ 6 Services      │ │ 6 Services      │           │
│  └─────────────────┘ └─────────────────┘ └─────────────────┘           │
│                                                                         │
│  ┌─────────────────┐ ┌─────────────────┐                               │
│  │ SNS             │ │ EC & CRM        │                               │
│  │ MANAGEMENT      │ │                 │                               │
│  │ 9 Services      │ │ 7 Services      │                               │
│  └─────────────────┘ └─────────────────┘                               │
│                                                                         │
│                                        [VIEW ALL SERVICES →]            │
└─────────────────────────────────────────────────────────────────────────┘
```

**ホバー時仕様**
- サービス名（英語＋日本語）
- 説明文（2〜3行）
- AI生成画像（ダークトーン＋ゴールドアクセント）

**独立Servicesページ**
- カテゴリナビゲーション（アンカーリンク）
- 6カテゴリを縦に配置
- 各サービスの詳細説明

---

### 4.4 【04】WORKSセクション

**コンセプト**
- 実績写真ギャラリー（30枚以上）
- クライアント名はテキストのみ（ロゴなし）
- 業界・カテゴリ別に分類

**ワイヤーフレーム**
```
┌─────────────────────────────────────────────────────────────────────────┐
│  04  WORKS                                                              │
│                                                                         │
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │  [写真] [写真] [写真] [写真] [写真] [写真]                          │ │
│  │  ← 実績写真ギャラリー（30枚以上）→                                   │ │
│  └───────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│  LUXURY FASHION                                                         │
│  BALMAIN / Christian Louboutin / JIMMY CHOO / MANOLO BLAHNIK / ...     │
│                                                                         │
│  BEAUTY / FRAGRANCE                                                     │
│  MOROCCANOIL / THREE / HERA / BURBERRY FRAGRANCE / ...                 │
│                                                                         │
│  LIFESTYLE / HOME                                                       │
│  Cassina / Le Creuset / BALMUDA / TABASCO                              │
│                                                                         │
│  FASHION / APPAREL                                                      │
│  adidas Originals / agnes b / BEAMS / Calvin Klein / ...               │
│                                                                         │
│  TRAVEL / MOBILITY                                                      │
│  Airbnb / Mercedes-Benz / TUMI / Manhattan Portage                     │
│                                                                         │
│  RETAIL                                                                 │
│  HANKYU UMEDA                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

**クライアント分類**
| カテゴリ | ブランド |
|---------|---------|
| LUXURY FASHION | BALMAIN, Christian Louboutin, JIMMY CHOO, MANOLO BLAHNIK, Ferragamo, CHAUMET, ZENITH |
| BEAUTY / FRAGRANCE | MOROCCANOIL, THREE, HERA, BURBERRY FRAGRANCE, Chloe FRAGRANCE, DOLCE&GABBANA FRAGRANCE |
| LIFESTYLE / HOME | Cassina, Le Creuset, BALMUDA, TABASCO |
| FASHION / APPAREL | adidas Originals, agnes b, BEAMS, Calvin Klein, Champion, CONVERSE, C.P. Company, EDWIN, gelato pique, Hanes, MACKINTOSH, PLAN C, TOMMY HILFIGER, Triumph |
| TRAVEL / MOBILITY | Airbnb, Mercedes-Benz, TUMI, Manhattan Portage |
| RETAIL | HANKYU UMEDA |

---

### 4.5 【05】BUSINESSセクション

**コンセプト**
- 新規事業の紹介
- 「NEW VENTURE」ラベルで新しさをアピール

**ワイヤーフレーム**
```
┌─────────────────────────────────────────────────────────────────────────┐
│  05  BUSINESS                                                           │
│                                                                         │
│  NEW VENTURES                                                           │
│                                                                         │
│  ┌─────────────────────────────────┐  ┌─────────────────────────────────┐
│  │ [NEW VENTURE]                   │  │ [NEW VENTURE]                   │
│  │                                 │  │                                 │
│  │  PRIVATE CLUB                   │  │  S / CAFE                       │
│  │                                 │  │                                 │
│  │  特別な空間で日常をさらに         │  │  代々木上原駅 徒歩4分            │
│  │  豊かにする体験を。               │  │  東京都渋谷区西原3-30-4 1F      │
│  │                                 │  │                                 │
│  │  パーソナライズスタイリング、      │  │  2025.12.22 OPEN                │
│  │  ヘアメイクなど。                │  │                                 │
│  │                                 │  │  [→ Official Site]              │
│  │  COMING 2026 SUMMER             │  │  [→ Instagram]                  │
│  └─────────────────────────────────┘  └─────────────────────────────────┘
└─────────────────────────────────────────────────────────────────────────┘
```

**新規事業詳細**
| 事業 | 詳細 |
|------|------|
| PRIVATE CLUB | 若年富裕層向け会員制コミュニティ / パーソナライズスタイリング、ヘアメイクなど / 2026年夏ローンチ予定 |
| S / CAFE | シンプルなカフェ / 代々木上原駅 徒歩4分 / 本社1F / 2025年12月22日オープン / Instagram開設予定 / 公式サイトあり |

---

### 4.6 【06】CONTENTS LABセクション

**コンセプト**
- リードジェネレーション用コンテンツ
- ローンチ時は「Coming Soon」

**ワイヤーフレーム**
```
┌─────────────────────────────────────────────────────────────────────────┐
│  06  CONTENTS LAB                                                       │
│                                                                         │
│  私たちの知見を、無料で公開。                                              │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                      COMING SOON                                │   │
│  │        AIイベントイメージ集など、クリエイティブ素材を準備中です。    │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│                                        [VIEW CONTENTS LAB →]            │
└─────────────────────────────────────────────────────────────────────────┘
```

**仕様**
- コンテンツ種別：画像集（AIイベントイメージなど）
- ダウンロード時：メールアドレス任意

---

### 4.7 【07】NEWSセクション

**ワイヤーフレーム**
```
┌─────────────────────────────────────────────────────────────────────────┐
│  07  NEWS                                                               │
│                                                                         │
│  2025.01.15  |  PRESS   |  〇〇ブランドとの取り組みを開始                │
│  2025.01.10  |  INFO    |  年末年始休業のお知らせ                        │
│  2024.12.20  |  PRESS   |  メディア掲載のお知らせ                        │
│                                                                         │
│                                        [VIEW ALL NEWS →]                │
└─────────────────────────────────────────────────────────────────────────┘
```

**仕様**
| 項目 | 内容 |
|------|------|
| CMS | microCMS |
| カテゴリ | PRESS / INFO |
| TOPページ表示 | 最新3件 |
| 更新頻度 | 不定期 |

---

### 4.8 【08】CAREERSセクション

**ワイヤーフレーム**
```
┌─────────────────────────────────────────────────────────────────────────┐
│  08  CAREERS                                                            │
│                                                                         │
│  JOIN OUR TEAM                                                          │
│                                                                         │
│  若いチーム、少数精鋭。                                                   │
│  ラグジュアリーブランドの現場に、最前線で関わる仕事。                       │
│                                                                         │
│  ┌─────────────────────────────────┐                                   │
│  │  SNS DIRECTOR                   │                                   │
│  │  SNSディレクター                 │                                   │
│  │  [→ 応募する（Contactへ）]       │                                   │
│  └─────────────────────────────────┘                                   │
└─────────────────────────────────────────────────────────────────────────┘
```

**仕様**
- 募集職種：SNSディレクター
- カルチャー：若いチーム / 少数精鋭 / ラグジュアリーブランドの現場

---

### 4.9 【09】CONTACTセクション

**TOPページ内**
```
┌─────────────────────────────────────────────────────────────────────────┐
│  09  CONTACT                                                            │
│                                                                         │
│                    LET'S WORK TOGETHER.                                 │
│                    ご相談・お見積もりなど、お気軽にお問い合わせください。    │
│                                                                         │
│                    [CONTACT US →]                                       │
└─────────────────────────────────────────────────────────────────────────┘
```

**独立ページ - フォーム項目**
| 項目 | 必須/任意 |
|------|----------|
| 会社名 | 必須 |
| 部署名 | 任意 |
| お名前 | 必須 |
| メールアドレス | 必須 |
| 電話番号 | 任意 |
| 問い合わせ種別 | 必須（サービスについて / 採用について / その他） |
| 問い合わせ内容 | 必須 |

**通知先**: serita@statsworks.tokyo
**表示情報**: 住所のみ（電話番号は非表示）

---

## 5. コピーライティング

### 5.1 メインキャッチコピー

**英語（メイン）**
```
Designing the Inevitable.
```

**日本語（サブ）**
```
その「熱狂」は、偶然ではない。
SNSから逆算する、緻密な設計。
```

### 5.2 代表ステートメント

```
人をつなぎ、縁を広げ、感動の連鎖をつくりだす。

AIやデジタルにより世界が大きく変わる世の中で、
本質的なコミュニケーションを大事にする会社でありたい。

── 代表取締役 芹田樹也
```

### 5.3 セクション別コピー

| セクション | リード文 |
|-----------|---------|
| SERVICES | SNSに関わるすべてを、ワンストップで。 |
| CONTENTS LAB | 私たちの知見を、無料で公開。 |
| CAREERS | 若いチーム、少数精鋭。ラグジュアリーブランドの現場に、最前線で関わる仕事。 |
| CONTACT | LET'S WORK TOGETHER. ご相談・お見積もりなど、お気軽にお問い合わせください。 |

---

## 6. サービス一覧詳細

### 6.1 CASTING（7項目）★FLAGSHIP

| # | EN | JP | 説明 |
|---|----|----|------|
| 1 | Influencer Casting | インフルエンサーキャスティング | ブランドに最適なインフルエンサーを選定・キャスティング |
| 2 | YouTuber Casting | YouTuberキャスティング | YouTube向けコンテンツに最適なクリエイターをキャスティング |
| 3 | TikToker Casting | TikTokerキャスティング | TikTok向けショート動画に強いクリエイターをキャスティング |
| 4 | Talent & Model Casting | タレント・モデルキャスティング | タレント、モデルのキャスティングおよびマネジメント |
| 5 | KOL / Micro Influencer | KOL・マイクロインフルエンサー起用 | 特定コミュニティに影響力を持つKOLやマイクロインフルエンサーの起用 |
| 6 | Ambassador Program | アンバサダープログラム設計 | 長期的なブランドアンバサダー制度の設計・運用 |
| 7 | Gifting Campaign | ギフティング施策 | インフルエンサーへの商品ギフティングキャンペーンの企画・実施 |

### 6.2 DIGITAL ADVERTISING（11項目）

| # | EN | JP | 説明 |
|---|----|----|------|
| 1 | Instagram Ads | Instagram広告 | Instagram Feed、Stories、Reelsへの広告配信 |
| 2 | TikTok Ads / Spark Ads | TikTok広告 / Spark Ads | TikTok広告およびインフルエンサー投稿を広告化するSpark Ads |
| 3 | YouTube Ads | YouTube広告 | YouTube動画広告の企画・運用 |
| 4 | X (Twitter) Ads | X（Twitter）広告 | X（旧Twitter）での広告配信 |
| 5 | LINE Ads | LINE広告 | LINE広告の企画・運用 |
| 6 | Google Ads | Google広告 | 検索広告・ディスプレイ広告の運用 |
| 7 | Meta Ads | Meta広告 | Facebook・Instagramをまたいだ統合広告運用 |
| 8 | Branded Content Ads | ブランドコンテンツ広告 | インフルエンサーコンテンツを活用した広告配信 |
| 9 | UGC Creative Production | UGCクリエイティブ制作 | ユーザー生成コンテンツ風の広告クリエイティブ制作 |
| 10 | Retargeting Strategy | リターゲティング広告設計 | サイト訪問者への再アプローチ広告の設計 |
| 11 | Performance Reporting | 広告効果測定・レポーティング | 広告パフォーマンスの分析・レポート作成 |

### 6.3 EVENT PRODUCTION（6項目）

| # | EN | JP | 説明 |
|---|----|----|------|
| 1 | Launch Event | ローンチイベント | 新商品・新サービスのローンチイベント企画・制作 |
| 2 | Influencer Event | インフルエンサーイベント | インフルエンサー向け体験イベントの企画・運営 |
| 3 | PR Event / Press Conference | PRイベント・記者発表会 | メディア向けPRイベント、記者発表会の企画・運営 |
| 4 | Preview / Experience Event | 試写会・体験会 | 先行体験イベント、試写会の企画・運営 |
| 5 | Pop-up Store Planning | ポップアップストア企画 | 期間限定ポップアップストアの企画・プロデュース |
| 6 | Party / Reception | パーティー・レセプション | ブランドパーティー、レセプションの企画・運営 |

### 6.4 CONTENT CREATION（6項目）

| # | EN | JP | 説明 |
|---|----|----|------|
| 1 | SNS Video Production | SNS用動画撮影・編集 | SNS投稿に最適化された動画の撮影・編集 |
| 2 | Reels / TikTok Video | Reels・TikTok動画制作 | 縦型ショート動画の企画・制作 |
| 3 | YouTube Video Production | YouTube動画制作 | YouTube向け長尺動画の企画・撮影・編集 |
| 4 | Product Photography | 商品撮影（スチール） | ECやSNS用の商品写真撮影 |
| 5 | Look / Visual Production | ルック撮影・ビジュアル制作 | キャンペーンビジュアル、ルック撮影 |
| 6 | Banner / Creative Design | バナー・クリエイティブ制作 | SNS広告用バナー、クリエイティブの制作 |

### 6.5 SNS MANAGEMENT（9項目）

| # | EN | JP | 説明 |
|---|----|----|------|
| 1 | Instagram Management | Instagram運用代行 | Instagramアカウントの運用代行 |
| 2 | TikTok Management | TikTok運用代行 | TikTokアカウントの運用代行 |
| 3 | X Management | X運用代行 | X（旧Twitter）アカウントの運用代行 |
| 4 | YouTube Management | YouTube運用代行 | YouTubeチャンネルの運用代行 |
| 5 | Community Management | コミュニティマネジメント | コメント対応、DM対応、コミュニティ運営 |
| 6 | SNS Tracking & Analytics | SNSトラッキング・分析 | SNS上の言及・反応のモニタリングと分析 |
| 7 | Hashtag Strategy | ハッシュタグ戦略 | 効果的なハッシュタグ選定・戦略立案 |
| 8 | Content Calendar | 投稿スケジュール設計 | 年間・月間の投稿カレンダー設計 |
| 9 | Competitive Analysis | 競合分析レポート | 競合アカウントの分析レポート作成 |

### 6.6 EC & CRM（7項目）

| # | EN | JP | 説明 |
|---|----|----|------|
| 1 | EC Site Development | ECサイト構築 | ECサイトの企画・構築 |
| 2 | Shopify Development | Shopify構築・運用 | Shopifyを活用したECサイト構築・運用支援 |
| 3 | Landing Page Production | LP制作 | コンバージョン最適化されたLP制作 |
| 4 | AI-Powered CRM | AI活用CRM支援 | Slack×Notion等を活用した自動化CRM構築 |
| 5 | Customer Data Analytics | 顧客データ分析 | 顧客データの分析・インサイト抽出 |
| 6 | Email Marketing Design | メールマーケティング設計 | メールマーケティングの戦略・設計 |
| 7 | LTV Optimization | LTV最大化施策 | 顧客生涯価値を最大化する施策立案 |

---

## 7. 技術仕様・実装ガイドライン

### 7.1 推奨技術スタック

```
Frontend: Next.js 14+ (App Router)
Styling: Tailwind CSS
Animation: Framer Motion / GSAP
CMS: microCMS（NEWS用）
Hosting: Vercel
Form: Formspree or microCMS Forms
```

### 7.2 ブレイクポイント

```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1440px;
```

### 7.3 コンポーネント設計

```
components/
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── SectionWrapper.tsx
├── ui/
│   ├── Button.tsx
│   ├── SectionNumber.tsx
│   ├── ServiceCard.tsx
│   └── NewsItem.tsx
├── sections/
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ServicesSection.tsx
│   ├── WorksSection.tsx
│   ├── BusinessSection.tsx
│   ├── ContentsLabSection.tsx
│   ├── NewsSection.tsx
│   ├── CareersSection.tsx
│   └── ContactSection.tsx
└── animations/
    ├── FadeIn.tsx
    └── TextReveal.tsx
```

### 7.4 SEO要件

```html
<title>Stats Inc. | インフルエンサーキャスティング＆SNS PR</title>
<meta name="description" content="ラグジュアリーブランドのSNSを裏から支える。キャスティング、デジタル広告、イベント制作、コンテンツ制作、SNS運用まで、ワンストップで支援します。">
```

### 7.5 パフォーマンス目標

```
Lighthouse Performance: 90+
First Contentful Paint: < 1.5s
Largest Contentful Paint: < 2.5s
```

---

## 8. 画像生成指示書

### 8.1 HEROセクション背景

**プロンプト方向性**
```
ノイズ・グレイン系テクスチャ
モノトーン（黒〜グレー）
先進的・モダンな印象
フィルム感のあるざらつき
古さではなく先進性を表現
```

### 8.2 サービスホバー画像（46枚）

**共通トーン**
```
ダークトーン基調
シャンパンゴールドのアクセント
高級感・プロフェッショナル感
抽象的すぎず、サービス内容が連想できる
```

**カテゴリ別イメージ**
| カテゴリ | イメージ方向性 |
|---------|---------------|
| CASTING | インフルエンサー、撮影現場、コラボレーション |
| DIGITAL ADVERTISING | データビジュアライゼーション、広告クリエイティブ |
| EVENT PRODUCTION | イベント会場、パーティー、ステージ |
| CONTENT CREATION | カメラ、撮影機材、編集作業 |
| SNS MANAGEMENT | スマートフォン、アナリティクス、コミュニティ |
| EC & CRM | ECサイト、データ分析、自動化 |

---

## 実装チェックリスト

### Phase 1: 基盤構築
- [ ] プロジェクトセットアップ（Next.js + Tailwind）
- [ ] カラー・フォント・変数定義
- [ ] 共通コンポーネント作成
- [ ] レイアウト実装

### Phase 2: TOPページ実装
- [ ] HEROセクション（背景 + アニメーション）
- [ ] ABOUTセクション
- [ ] SERVICESセクション（ホバーインタラクション）
- [ ] WORKSセクション
- [ ] BUSINESSセクション
- [ ] CONTENTS LABセクション
- [ ] NEWSセクション（microCMS連携）
- [ ] CAREERSセクション
- [ ] CONTACTセクション

### Phase 3: 独立ページ実装
- [ ] /about
- [ ] /services
- [ ] /contents-lab
- [ ] /news
- [ ] /contact

### Phase 4: 仕上げ
- [ ] アニメーション実装
- [ ] レスポンシブ対応
- [ ] 画像最適化
- [ ] SEO対応
- [ ] パフォーマンス最適化

---

**ドキュメント作成日**: 2025年1月
**バージョン**: 2.0（最終版）
**クライアント**: スタッツ株式会社
