'use client';

import GridSection from '@/components/GridSection';
import Link from 'next/link';
import { useState } from 'react';

const serviceCategories = [
  {
    id: 'casting',
    title: 'CASTING',
    subtitle: 'Flagship Service',
    description: 'インフルエンサー、タレント、モデルのキャスティング',
    services: [
      { en: 'Influencer Casting', jp: 'インフルエンサーキャスティング', desc: 'ブランドに最適なインフルエンサーを選定・キャスティング' },
      { en: 'YouTuber Casting', jp: 'YouTuberキャスティング', desc: 'YouTube向けコンテンツに最適なクリエイターをキャスティング' },
      { en: 'TikToker Casting', jp: 'TikTokerキャスティング', desc: 'TikTok向けショート動画に強いクリエイターをキャスティング' },
      { en: 'Talent & Model Casting', jp: 'タレント・モデルキャスティング', desc: 'タレント、モデルのキャスティングおよびマネジメント' },
      { en: 'KOL / Micro Influencer', jp: 'KOL・マイクロインフルエンサー起用', desc: '特定コミュニティに影響力を持つKOLやマイクロインフルエンサーの起用' },
      { en: 'Ambassador Program', jp: 'アンバサダープログラム設計', desc: '長期的なブランドアンバサダー制度の設計・運用' },
      { en: 'Gifting Campaign', jp: 'ギフティング施策', desc: 'インフルエンサーへの商品ギフティングキャンペーンの企画・実施' },
    ],
  },
  {
    id: 'digital-advertising',
    title: 'DIGITAL ADVERTISING',
    subtitle: '11 Services',
    description: 'Instagram、TikTok、YouTube等の広告運用',
    services: [
      { en: 'Instagram Ads', jp: 'Instagram広告', desc: 'Instagram Feed、Stories、Reelsへの広告配信' },
      { en: 'TikTok Ads / Spark Ads', jp: 'TikTok広告 / Spark Ads', desc: 'TikTok広告およびインフルエンサー投稿を広告化するSpark Ads' },
      { en: 'YouTube Ads', jp: 'YouTube広告', desc: 'YouTube動画広告の企画・運用' },
      { en: 'X (Twitter) Ads', jp: 'X（Twitter）広告', desc: 'X（旧Twitter）での広告配信' },
      { en: 'LINE Ads', jp: 'LINE広告', desc: 'LINE広告の企画・運用' },
      { en: 'Google Ads', jp: 'Google広告', desc: '検索広告・ディスプレイ広告の運用' },
      { en: 'Meta Ads', jp: 'Meta広告', desc: 'Facebook・Instagramをまたいだ統合広告運用' },
      { en: 'Branded Content Ads', jp: 'ブランドコンテンツ広告', desc: 'インフルエンサーコンテンツを活用した広告配信' },
      { en: 'UGC Creative Production', jp: 'UGCクリエイティブ制作', desc: 'ユーザー生成コンテンツ風の広告クリエイティブ制作' },
      { en: 'Retargeting Strategy', jp: 'リターゲティング広告設計', desc: 'サイト訪問者への再アプローチ広告の設計' },
      { en: 'Performance Reporting', jp: '広告効果測定・レポーティング', desc: '広告パフォーマンスの分析・レポート作成' },
    ],
  },
  {
    id: 'event-production',
    title: 'EVENT PRODUCTION',
    subtitle: '6 Services',
    description: 'ローンチイベント、PRイベント、パーティー企画',
    services: [
      { en: 'Launch Event', jp: 'ローンチイベント', desc: '新商品・新サービスのローンチイベント企画・制作' },
      { en: 'Influencer Event', jp: 'インフルエンサーイベント', desc: 'インフルエンサー向け体験イベントの企画・運営' },
      { en: 'PR Event / Press Conference', jp: 'PRイベント・記者発表会', desc: 'メディア向けPRイベント、記者発表会の企画・運営' },
      { en: 'Preview / Experience Event', jp: '試写会・体験会', desc: '先行体験イベント、試写会の企画・運営' },
      { en: 'Pop-up Store Planning', jp: 'ポップアップストア企画', desc: '期間限定ポップアップストアの企画・プロデュース' },
      { en: 'Party / Reception', jp: 'パーティー・レセプション', desc: 'ブランドパーティー、レセプションの企画・運営' },
    ],
  },
  {
    id: 'content-creation',
    title: 'CONTENT CREATION',
    subtitle: '6 Services',
    description: 'SNS用動画、商品撮影、ビジュアル制作',
    services: [
      { en: 'SNS Video Production', jp: 'SNS用動画撮影・編集', desc: 'SNS投稿に最適化された動画の撮影・編集' },
      { en: 'Reels / TikTok Video', jp: 'Reels・TikTok動画制作', desc: '縦型ショート動画の企画・制作' },
      { en: 'YouTube Video Production', jp: 'YouTube動画制作', desc: 'YouTube向け長尺動画の企画・撮影・編集' },
      { en: 'Product Photography', jp: '商品撮影（スチール）', desc: 'ECやSNS用の商品写真撮影' },
      { en: 'Look / Visual Production', jp: 'ルック撮影・ビジュアル制作', desc: 'キャンペンビジュアル、ルック撮影' },
      { en: 'Banner / Creative Design', jp: 'バナー・クリエイティブ制作', desc: 'SNS広告用バナー、クリエイティブの制作' },
    ],
  },
  {
    id: 'sns-management',
    title: 'SNS MANAGEMENT',
    subtitle: '9 Services',
    description: 'Instagram、TikTok、X運用代行',
    services: [
      { en: 'Instagram Management', jp: 'Instagram運用代行', desc: 'Instagramアカウントの運用代行' },
      { en: 'TikTok Management', jp: 'TikTok運用代行', desc: 'TikTokアカウントの運用代行' },
      { en: 'X Management', jp: 'X運用代行', desc: 'X（旧Twitter）アカウントの運用代行' },
      { en: 'YouTube Management', jp: 'YouTube運用代行', desc: 'YouTubeチャンネルの運用代行' },
      { en: 'Community Management', jp: 'コミュニティマネジメント', desc: 'コメント対応、DM対応、コミュニティ運営' },
      { en: 'SNS Tracking & Analytics', jp: 'SNSトラッキング・分析', desc: 'SNS上の言及・反応のモニタリングと分析' },
      { en: 'Hashtag Strategy', jp: 'ハッシュタグ戦略', desc: '効果的なハッシュタグ選定・戦略立案' },
      { en: 'Content Calendar', jp: '投稿スケジュール設計', desc: '年間・月間の投稿カレンダー設計' },
      { en: 'Competitive Analysis', jp: '競合分析レポート', desc: '競合アカウントの分析レポート作成' },
    ],
  },
  {
    id: 'ec-crm',
    title: 'EC & CRM',
    subtitle: '7 Services',
    description: 'ECサイト構築、顧客データ分析、LTV最大化',
    services: [
      { en: 'EC Site Development', jp: 'ECサイト構築', desc: 'ECサイトの企画・構築' },
      { en: 'Shopify Development', jp: 'Shopify構築・運用', desc: 'Shopifyを活用したECサイト構築・運用支援' },
      { en: 'Landing Page Production', jp: 'LP制作', desc: 'コンバージョン最適化されたLP制作' },
      { en: 'AI-Powered CRM', jp: 'AI活用CRM支援', desc: 'Slack×Notion等を活用した自動化CRM構築' },
      { en: 'Customer Data Analytics', jp: '顧客データ分析', desc: '顧客データの分析・インサイト抽出' },
      { en: 'Email Marketing Design', jp: 'メールマーケティング設計', desc: 'メールマーケティングの戦略・設計' },
      { en: 'LTV Optimization', jp: 'LTV最大化施策', desc: '顧客生涯価値を最大化する施策立案' },
    ],
  },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <>
      {/* Navigation Section */}
      <GridSection
        number="00"
        title="Services"
        subtitle="All Services"
        className="pt-[100px]"
      >
        <div className="p-8 md:p-16">
          <p className="text-lg text-[var(--text-secondary)] mb-12 max-w-xl">
            SNSに関わるすべてを、ワンストップで。
          </p>

          {/* Category Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-[var(--border)] mb-12">
            {serviceCategories.map((category, index) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className={`p-6 border-b-2 md:border-b-0 ${
                  index % 3 !== 2 ? 'md:border-r-2' : ''
                } ${
                  index < 3 ? 'lg:border-b-2' : ''
                } border-[var(--border)] hover:bg-[var(--bg-tertiary)] transition-colors`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {category.id === 'casting' && (
                    <span className="text-[var(--accent)] text-xl">★</span>
                  )}
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-1">
                  {category.subtitle}
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  {category.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </GridSection>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <GridSection
          key={category.id}
          number={String(categoryIndex + 1).padStart(2, '0')}
          title={category.title}
          subtitle={category.subtitle}
        >
          <div className="p-8 md:p-16" id={category.id}>
            {category.id === 'casting' && (
              <div className="mb-8 flex items-center gap-3">
                <span className="text-[var(--accent)] text-2xl">★</span>
                <span className="u-caps text-[var(--accent)] text-sm font-bold">
                  FLAGSHIP SERVICE
                </span>
              </div>
            )}

            <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-xl">
              {category.description}
            </p>

            {/* Services List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-[var(--border)]">
              {category.services.map((service, serviceIndex) => (
                <div
                  key={serviceIndex}
                  className={`p-6 border-b-2 ${
                    serviceIndex % 2 === 0 ? 'md:border-r-2' : ''
                  } ${
                    serviceIndex < category.services.length - 2 ? '' : 'md:border-b-0'
                  } border-[var(--border)] hover:bg-[var(--bg-tertiary)] transition-colors`}
                >
                  <div className="work-header mb-3">
                    <span className="work-num">
                      ({String(serviceIndex + 1).padStart(2, '0')})
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.en}</h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-2">
                    {service.jp}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </GridSection>
      ))}

      {/* Back to Home Link */}
      <GridSection
        number="07"
        title="Contact"
        subtitle="Let's Work Together"
      >
        <div className="p-8 md:p-16 text-center">
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            ご相談・お見積もりなど、お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="u-caps text-sm text-white border-[2px] border-[var(--accent)] px-6 py-3 bg-[var(--accent)] hover:bg-[var(--accent-light)] transition-colors"
            >
              CONTACT US →
            </Link>
            <Link
              href="/"
              className="u-caps text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              ← BACK TO HOME
            </Link>
          </div>
        </div>
      </GridSection>
    </>
  );
}

