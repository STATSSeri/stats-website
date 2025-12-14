import GridSection from '../GridSection';

export default function BusinessSection() {
  return (
    <GridSection
      number="05"
      title="Business"
      subtitle="New Ventures"
      id="business"
      bgClass="section-bg-business"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Private Club */}
        <div className="p-8 md:p-12 border-b-2 md:border-b-0 md:border-r-2 border-[var(--border)]">
          <span className="inline-block text-xs text-[var(--accent)] tracking-widest uppercase border border-[var(--accent)] px-3 py-1 mb-6">
            New Venture
          </span>
          <h3 className="text-2xl font-bold mb-4">PRIVATE CLUB</h3>
          <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
            特別な空間で日常をさらに豊かにする体験を。
            <br />
            パーソナライズスタイリング、ヘアメイクなど。
          </p>
          <p className="text-sm text-[var(--accent)]">
            COMING 2026 SUMMER
          </p>
        </div>

        {/* S / CAFE */}
        <div className="p-8 md:p-12">
          <span className="inline-block text-xs text-[var(--accent)] tracking-widest uppercase border border-[var(--accent)] px-3 py-1 mb-6">
            New Venture
          </span>
          <h3 className="text-2xl font-bold mb-4">S / CAFE</h3>
          <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
            代々木上原駅 徒歩4分
            <br />
            東京都渋谷区西原3-30-4 1F
          </p>
          <p className="text-sm text-[var(--accent)] mb-6">
            2025.12.22 OPEN
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
              → Official Site
            </a>
            <a href="#" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
              → Instagram
            </a>
          </div>
        </div>
      </div>
    </GridSection>
  );
}
