import GridSection from '@/components/GridSection';
import Link from 'next/link';
import { getNewsItems, formatDate } from '@/lib/microcms';

export default async function NewsPage() {
  // microCMSからニュース一覧を取得（最大20件）
  const newsItems = await getNewsItems(20, 0);
  return (
    <>
      {/* Main Section */}
      <GridSection
        number="01"
        title="News"
        subtitle="Latest Updates"
        className="pt-[100px]"
      >
        <div className="p-8 md:p-16">
          <p className="text-lg text-[var(--text-secondary)] mb-12 max-w-xl">
            最新のニュース・お知らせをお届けします。
          </p>

          {/* News List */}
          <div className="space-y-0 border-2 border-[var(--border)]">
            {newsItems.map((item, index) => (
              <div
                key={item.id}
                className={`p-6 md:p-8 border-b-2 ${
                  index === newsItems.length - 1 ? 'border-b-0' : ''
                } border-[var(--border)] hover:bg-[var(--bg-tertiary)] transition-colors`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="u-caps text-xs text-[var(--text-muted)]">
                        {item.date || formatDate(item.publishedAt)}
                      </span>
                      <span
                        className={`u-caps text-xs px-3 py-1 border ${
                          item.category === 'PRESS'
                            ? 'border-[var(--accent)] text-[var(--accent)]'
                            : 'border-[var(--text-secondary)] text-[var(--text-secondary)]'
                        }`}
                      >
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Placeholder */}
          {newsItems.length === 0 && (
            <div className="mt-8 text-center">
              <p className="text-sm text-[var(--text-muted)]">
                ニュースがありません。
              </p>
            </div>
          )}

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

