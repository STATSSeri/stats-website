import GridSection from '../GridSection';
import Link from 'next/link';
import { getNewsItems, formatDate, type NewsItem } from '@/lib/microcms';

export default async function NewsSection() {
  // microCMSから最新3件を取得
  const newsItems = await getNewsItems(3, 0);

  return (
    <GridSection
      number="07"
      title="News"
      subtitle="Latest Updates"
      id="news"
      bgClass="section-bg-contents-news-careers"
    >
      <div>
        {newsItems.map((item, index) => (
          <Link
            key={item.id}
            href="/news"
            className="flex flex-col md:flex-row md:items-center gap-4 p-6 border-b-2 border-[var(--border)] hover:bg-[var(--bg-tertiary)] transition-colors cursor-pointer block"
          >
            <span className="text-sm text-[var(--text-muted)] w-28 flex-shrink-0">
              {item.date || formatDate(item.publishedAt)}
            </span>
            <span className="text-xs text-[var(--accent)] tracking-widest uppercase border border-[var(--accent)] px-3 py-1 w-fit">
              {item.category}
            </span>
            <span className="text-sm text-[var(--text-secondary)] flex-1">
              {item.title}
            </span>
          </Link>
        ))}
      </div>

      {/* View All News Link */}
      <div className="p-6 text-right border-t-2 border-[var(--border)]">
        <Link
          href="/news"
          className="inline-flex items-center text-[var(--accent)] hover:text-[var(--accent-light)] transition-colors u-caps"
        >
          VIEW ALL NEWS →
        </Link>
      </div>
    </GridSection>
  );
}
