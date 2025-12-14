import GridSection from '../GridSection';

export default function CareersSection() {
  return (
    <GridSection
      number="08"
      title="Careers"
      subtitle="Join Our Team"
      id="careers"
      bgClass="section-bg-contents-news-careers"
    >
      <div className="p-4 md:p-8 lg:p-16">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          JOIN OUR TEAM
        </h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-12 max-w-xl">
          若いチーム、少数精鋭。
          <br />
          ラグジュアリーブランドの現場に、最前線で関わる仕事。
        </p>

        <div className="border-2 border-[var(--border)] p-8 hover:border-[var(--accent)] transition-colors max-w-md">
          <h4 className="text-xl font-bold mb-2">SNS DIRECTOR</h4>
          <p className="text-sm text-[var(--text-muted)] mb-6">SNSディレクター</p>
          <a
            href="#contact"
            className="inline-flex items-center text-sm text-[var(--accent)] hover:underline"
          >
            → 応募する（Contactへ）
          </a>
        </div>
      </div>
    </GridSection>
  );
}
