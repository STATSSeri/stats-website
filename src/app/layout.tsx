import type { Metadata } from "next";
import { Staatliches } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";

// フォント最適化設定
const staatliches = Staatliches({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-staatliches',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: "Stats Inc. | インフルエンサーキャスティング＆SNS PR",
  description: "ラグジュアリーブランドのSNSを裏から支える。キャスティング、デジタル広告、イベント制作、コンテンツ制作、SNS運用まで、ワンストップで支援します。",
  keywords: ["インフルエンサーキャスティング", "SNS PR", "デジタルマーケティング", "ラグジュアリーブランド", "キャスティング", "SNS運用", "イベント制作", "コンテンツ制作"],
  authors: [{ name: "Stats Inc." }],
  creator: "Stats Inc.",
  publisher: "Stats Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://statsworks.tokyo'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Stats Inc. | インフルエンサーキャスティング＆SNS PR",
    description: "ラグジュアリーブランドのSNSを裏から支える。キャスティング、デジタル広告、イベント制作、コンテンツ制作、SNS運用まで、ワンストップで支援します。",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://statsworks.tokyo',
    siteName: "Stats Inc.",
    locale: "ja_JP",
    type: "website",
    // images: [
    //   {
    //     url: '/og-image.jpg',
    //     width: 1200,
    //     height: 630,
    //     alt: 'Stats Inc.',
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stats Inc. | インフルエンサーキャスティング＆SNS PR",
    description: "ラグジュアリーブランドのSNSを裏から支える。キャスティング、デジタル広告、イベント制作、コンテンツ制作、SNS運用まで、ワンストップで支援します。",
    // images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Google Search Console verification code
    // google: 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 構造化データ（JSON-LD）
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'スタッツ株式会社',
    alternateName: 'STATS INC.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://statsworks.tokyo',
    description: 'ラグジュアリーブランドのSNSを裏から支える。キャスティング、デジタル広告、イベント制作、コンテンツ制作、SNS運用まで、ワンストップで支援します。',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '西原3-30-4',
      addressLocality: '渋谷区',
      addressRegion: '東京都',
      postalCode: '151-0066',
      addressCountry: 'JP',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+81-3-5324-2638',
      contactType: 'customer service',
      areaServed: 'JP',
      availableLanguage: ['Japanese', 'English'],
    },
    foundingDate: '2021-04-05',
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Stats Inc.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://statsworks.tokyo',
    description: 'ラグジュアリーブランドのSNSを裏から支える。キャスティング、デジタル広告、イベント制作、コンテンツ制作、SNS運用まで、ワンストップで支援します。',
    publisher: {
      '@type': 'Organization',
      name: 'スタッツ株式会社',
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'デジタルマーケティング支援',
    provider: {
      '@type': 'Organization',
      name: 'スタッツ株式会社',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Japan',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'サービス一覧',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'インフルエンサーキャスティング',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'デジタル広告運用',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'イベント制作',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'コンテンツ制作',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SNS運用代行',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'EC・CRM支援',
          },
        },
      ],
    },
  };

  return (
    <html lang="ja" className={staatliches.variable}>
      <body>
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="service-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <Header />
        {children}
      </body>
    </html>
  );
}
