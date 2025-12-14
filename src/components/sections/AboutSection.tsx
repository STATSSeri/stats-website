import GridSection from '../GridSection';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <GridSection
      number="02"
      title="About"
      subtitle="Philosophy & Vision"
      id="about"
      bgClass="section-bg-about"
    >
      <p className="big-lead">
        人をつなぎ、縁を広げ、
        <br />
        感動の連鎖をつくりだす。
        <br />
        <br />
        <span className="text-[var(--text-secondary)]">
          AIやデジタルにより世界が大きく変わる世の中で、
          <br />
          本質的なコミュニケーションを大事にする会社でありたい。
        </span>
        <br />
        <br />
        <span className="text-[var(--text-muted)] text-base font-normal">
          ── 代表取締役 芹田樹也
        </span>
      </p>

      {/* Why Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t-2 border-[var(--border)]">
        <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-[var(--border)]">
          <h3 className="text-[var(--accent)] font-bold text-lg mb-3">TRUST</h3>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            外資系ラグジュアリーブランドからの信頼
          </p>
        </div>
        <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-[var(--border)]">
          <h3 className="text-[var(--accent)] font-bold text-lg mb-3">CONNECTION</h3>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            芸能事務所等とのコネクション
          </p>
        </div>
        <div className="p-8">
          <h3 className="text-[var(--accent)] font-bold text-lg mb-3">HYBRID TALENT</h3>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            デジタル×ブランドビジネスの感性を持つチーム
          </p>
        </div>
      </div>

      {/* More About Us Link */}
      <div className="mt-12 text-right">
        <Link
          href="/about"
          className="inline-flex items-center text-[var(--accent)] hover:text-[var(--accent-light)] transition-colors u-caps"
        >
          MORE ABOUT US →
        </Link>
      </div>
    </GridSection>
  );
}
