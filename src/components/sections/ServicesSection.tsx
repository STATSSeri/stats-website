'use client';

import GridSection from '../GridSection';
import Link from 'next/link';
import { useState } from 'react';

// 仕様書から全46サービスを定義
const serviceCategories = [
  {
    id: 'casting',
    title: 'CASTING',
    count: 7,
    isFlagship: true,
    services: [
      { num: '01', en: 'Influencer Casting', jp: 'インフルエンサーキャスティング', desc: 'ブランドに最適なインフルエンサーを選定・キャスティング' },
      { num: '02', en: 'YouTuber Casting', jp: 'YouTuberキャスティング', desc: 'YouTube向けコンテンツに最適なクリエイターをキャスティング' },
      { num: '03', en: 'TikToker Casting', jp: 'TikTokerキャスティング', desc: 'TikTok向けショート動画に強いクリエイターをキャスティング' },
      { num: '04', en: 'Talent & Model Casting', jp: 'タレント・モデルキャスティング', desc: 'タレント、モデルのキャスティングおよびマネジメント' },
      { num: '05', en: 'KOL / Micro Influencer', jp: 'KOL・マイクロインフルエンサー起用', desc: '特定コミュニティに影響力を持つKOLやマイクロインフルエンサーの起用' },
      { num: '06', en: 'Ambassador Program', jp: 'アンバサダープログラム設計', desc: '長期的なブランドアンバサダー制度の設計・運用' },
      { num: '07', en: 'Gifting Campaign', jp: 'ギフティング施策', desc: 'インフルエンサーへの商品ギフティングキャンペーンの企画・実施' },
    ],
  },
  {
    id: 'digital-advertising',
    title: 'DIGITAL ADVERTISING',
    count: 11,
    isFlagship: false,
    services: [
      { num: '01', en: 'Instagram Ads', jp: 'Instagram広告', desc: 'Instagram Feed、Stories、Reelsへの広告配信' },
      { num: '02', en: 'TikTok Ads / Spark Ads', jp: 'TikTok広告 / Spark Ads', desc: 'TikTok広告およびインフルエンサー投稿を広告化するSpark Ads' },
      { num: '03', en: 'YouTube Ads', jp: 'YouTube広告', desc: 'YouTube動画広告の企画・運用' },
      { num: '04', en: 'X (Twitter) Ads', jp: 'X（Twitter）広告', desc: 'X（旧Twitter）での広告配信' },
      { num: '05', en: 'LINE Ads', jp: 'LINE広告', desc: 'LINE広告の企画・運用' },
      { num: '06', en: 'Google Ads', jp: 'Google広告', desc: '検索広告・ディスプレイ広告の運用' },
      { num: '07', en: 'Meta Ads', jp: 'Meta広告', desc: 'Facebook・Instagramをまたいだ統合広告運用' },
      { num: '08', en: 'Branded Content Ads', jp: 'ブランドコンテンツ広告', desc: 'インフルエンサーコンテンツを活用した広告配信' },
      { num: '09', en: 'UGC Creative Production', jp: 'UGCクリエイティブ制作', desc: 'ユーザー生成コンテンツ風の広告クリエイティブ制作' },
      { num: '10', en: 'Retargeting Strategy', jp: 'リターゲティング広告設計', desc: 'サイト訪問者への再アプローチ広告の設計' },
      { num: '11', en: 'Performance Reporting', jp: '広告効果測定・レポーティング', desc: '広告パフォーマンスの分析・レポート作成' },
    ],
  },
  {
    id: 'event-production',
    title: 'EVENT PRODUCTION',
    count: 6,
    isFlagship: false,
    services: [
      { num: '01', en: 'Launch Event', jp: 'ローンチイベント', desc: '新商品・新サービスのローンチイベント企画・制作' },
      { num: '02', en: 'Influencer Event', jp: 'インフルエンサーイベント', desc: 'インフルエンサー向け体験イベントの企画・運営' },
      { num: '03', en: 'PR Event / Press Conference', jp: 'PRイベント・記者発表会', desc: 'メディア向けPRイベント、記者発表会の企画・運営' },
      { num: '04', en: 'Preview / Experience Event', jp: '試写会・体験会', desc: '先行体験イベント、試写会の企画・運営' },
      { num: '05', en: 'Pop-up Store Planning', jp: 'ポップアップストア企画', desc: '期間限定ポップアップストアの企画・プロデュース' },
      { num: '06', en: 'Party / Reception', jp: 'パーティー・レセプション', desc: 'ブランドパーティー、レセプションの企画・運営' },
    ],
  },
  {
    id: 'content-creation',
    title: 'CONTENT CREATION',
    count: 6,
    isFlagship: false,
    services: [
      { num: '01', en: 'SNS Video Production', jp: 'SNS用動画撮影・編集', desc: 'SNS投稿に最適化された動画の撮影・編集' },
      { num: '02', en: 'Reels / TikTok Video', jp: 'Reels・TikTok動画制作', desc: '縦型ショート動画の企画・制作' },
      { num: '03', en: 'YouTube Video Production', jp: 'YouTube動画制作', desc: 'YouTube向け長尺動画の企画・撮影・編集' },
      { num: '04', en: 'Product Photography', jp: '商品撮影（スチール）', desc: 'ECやSNS用の商品写真撮影' },
      { num: '05', en: 'Look / Visual Production', jp: 'ルック撮影・ビジュアル制作', desc: 'キャンペーンビジュアル、ルック撮影' },
      { num: '06', en: 'Banner / Creative Design', jp: 'バナー・クリエイティブ制作', desc: 'SNS広告用バナー、クリエイティブの制作' },
    ],
  },
  {
    id: 'sns-management',
    title: 'SNS MANAGEMENT',
    count: 9,
    isFlagship: false,
    services: [
      { num: '01', en: 'Instagram Management', jp: 'Instagram運用代行', desc: 'Instagramアカウントの運用代行' },
      { num: '02', en: 'TikTok Management', jp: 'TikTok運用代行', desc: 'TikTokアカウントの運用代行' },
      { num: '03', en: 'X Management', jp: 'X運用代行', desc: 'X（旧Twitter）アカウントの運用代行' },
      { num: '04', en: 'YouTube Management', jp: 'YouTube運用代行', desc: 'YouTubeチャンネルの運用代行' },
      { num: '05', en: 'Community Management', jp: 'コミュニティマネジメント', desc: 'コメント対応、DM対応、コミュニティ運営' },
      { num: '06', en: 'SNS Tracking & Analytics', jp: 'SNSトラッキング・分析', desc: 'SNS上の言及・反応のモニタリングと分析' },
      { num: '07', en: 'Hashtag Strategy', jp: 'ハッシュタグ戦略', desc: '効果的なハッシュタグ選定・戦略立案' },
      { num: '08', en: 'Content Calendar', jp: '投稿スケジュール設計', desc: '年間・月間の投稿カレンダー設計' },
      { num: '09', en: 'Competitive Analysis', jp: '競合分析レポート', desc: '競合アカウントの分析レポート作成' },
    ],
  },
  {
    id: 'ec-crm',
    title: 'EC & CRM',
    count: 7,
    isFlagship: false,
    services: [
      { num: '01', en: 'EC Site Development', jp: 'ECサイト構築', desc: 'ECサイトの企画・構築' },
      { num: '02', en: 'Shopify Development', jp: 'Shopify構築・運用', desc: 'Shopifyを活用したECサイト構築・運用支援' },
      { num: '03', en: 'Landing Page Production', jp: 'LP制作', desc: 'コンバージョン最適化されたLP制作' },
      { num: '04', en: 'AI-Powered CRM', jp: 'AI活用CRM支援', desc: 'Slack×Notion等を活用した自動化CRM構築' },
      { num: '05', en: 'Customer Data Analytics', jp: '顧客データ分析', desc: '顧客データの分析・インサイト抽出' },
      { num: '06', en: 'Email Marketing Design', jp: 'メールマーケティング設計', desc: 'メールマーケティングの戦略・設計' },
      { num: '07', en: 'LTV Optimization', jp: 'LTV最大化施策', desc: '顧客生涯価値を最大化する施策立案' },
    ],
  },
];

export default function ServicesSection() {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const totalServices = serviceCategories.reduce((sum, cat) => sum + cat.count, 0);

  return (
    <GridSection
      number="03"
      title="Services"
      subtitle="What We Do"
      id="services"
      bgClass="section-bg-services"
    >
      <div className="p-4 md:p-8 lg:p-16">
        {/* セクションヘッダー */}
        <div className="mb-12 md:mb-16">
          <div className="text-[4rem] md:text-[8rem] lg:text-[10rem] font-black leading-none mb-4" style={{ color: 'var(--accent)' }}>
            {totalServices}+
          </div>
          <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-xl">
            SNSに関わるすべてを、ワンストップで。
          </p>
        </div>

        {/* カテゴリ一覧（アコーディオン形式） */}
        <div className="space-y-0 border-2 border-[var(--border)]">
          {serviceCategories.map((category, index) => {
            const isExpanded = expandedCategories.has(category.id);
            const isLast = index === serviceCategories.length - 1;

            return (
              <div key={category.id} className={!isLast ? 'border-b border-[var(--border)]' : ''}>
                {/* カテゴリヘッダー */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full text-left p-6 md:p-8 hover:bg-[var(--bg-tertiary)] active:bg-[var(--bg-tertiary)] transition-colors flex items-center justify-between group min-h-[44px]"
                >
                  <div className="flex items-center gap-4">
                    {category.isFlagship && (
                      <span className="text-[var(--accent)] text-xl">★</span>
                    )}
                    <h3 className="text-2xl md:text-3xl font-bold">{category.title}</h3>
                    <span className="u-caps text-sm text-[var(--text-secondary)] px-3 py-1 border border-[var(--border)]">
                      ({category.count})
                    </span>
                  </div>
                  <span
                    className={`text-2xl font-light transition-transform duration-300 ${
                      isExpanded ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* 展開時のサービス一覧 */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 md:p-8 pt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      {category.services.map((service) => (
                        <div
                          key={service.num}
                          className="p-4 md:p-6 border border-[var(--border)] hover:bg-[var(--bg-tertiary)] transition-colors"
                        >
                          <div className="mb-2">
                            <span className="text-sm font-semibold text-[var(--accent)]">
                              ({service.num})
                            </span>
                          </div>
                          <h4 className="text-lg md:text-xl font-bold mb-1">{service.en}</h4>
                          <p className="text-sm text-[var(--accent)] mb-2">{service.jp}</p>
                          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                            {service.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Services Link */}
        <div className="mt-12 text-right">
          <Link
            href="/services"
            className="inline-flex items-center text-[var(--accent)] hover:text-[var(--accent-light)] transition-colors u-caps"
          >
            VIEW ALL SERVICES →
          </Link>
        </div>
      </div>
    </GridSection>
  );
}
