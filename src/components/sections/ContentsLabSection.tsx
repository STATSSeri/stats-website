import GridSection from '../GridSection';
import Link from 'next/link';

export default function ContentsLabSection() {
  return (
    <GridSection
      number="06"
      title="Contents Lab"
      subtitle="Creative Resources"
      id="contents-lab"
      bgClass="section-bg-contents-news-careers"
    >
      <div className="p-4 md:p-8 lg:p-16">
        <p className="text-lg text-[var(--text-secondary)] mb-12 max-w-xl">
          私たちの知見を、無料で公開。
        </p>

        <div className="border-2 border-[var(--border)] p-16 md:p-24 text-center">
          <h3 className="text-4xl md:text-6xl font-bold mb-6 text-[var(--accent)]">
            COMING SOON
          </h3>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-2xl mx-auto">
            AIイベントイメージ集など、クリエイティブ素材を準備中です。
          </p>
        </div>

        <div className="mt-12 text-right">
          <Link
            href="/contents-lab"
            className="inline-flex items-center text-[var(--accent)] hover:text-[var(--accent-light)] transition-colors u-caps"
          >
            VIEW CONTENTS LAB →
          </Link>
        </div>
      </div>
    </GridSection>
  );
}

