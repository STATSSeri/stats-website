import GridSection from '@/components/GridSection';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      {/* Philosophy Section */}
      <GridSection
        number="01"
        title="Philosophy"
        subtitle="Our Vision"
        className="pt-[100px]"
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
      </GridSection>

      {/* Why Stats Section */}
      <GridSection
        number="02"
        title="Why Stats?"
        subtitle="Our Strengths"
      >
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
      </GridSection>

      {/* Company Information Section */}
      <GridSection
        number="03"
        title="Company"
        subtitle="会社概要"
      >
        <div className="company-table">
          <table className="w-full">
            <tbody>
              <tr>
                <th>会社名</th>
                <td>スタッツ株式会社 / STATS INC.</td>
              </tr>
              <tr>
                <th>設立</th>
                <td>2021年4月5日</td>
              </tr>
              <tr>
                <th>代表者</th>
                <td>芹田樹也</td>
              </tr>
              <tr>
                <th>所在地</th>
                <td>〒151-0066 東京都渋谷区西原3-30-4</td>
              </tr>
              <tr>
                <th>TEL</th>
                <td>03-5324-2638</td>
              </tr>
              <tr>
                <th>資本金</th>
                <td>506万円</td>
              </tr>
              <tr>
                <th>従業員数</th>
                <td>20名（業務委託含む）</td>
              </tr>
              <tr>
                <th>事業内容</th>
                <td>SNSを軸としたデジタルマーケティング支援</td>
              </tr>
              <tr>
                <th>顧問弁護士</th>
                <td>プロコミットパートナーズ法律事務所</td>
              </tr>
              <tr>
                <th>主要取引先</th>
                <td>
                  阪急阪神百貨店 / ザ・ゴール / 博報堂 / 博報堂Gravity / 双葉通信社 / ベクトル / 読売新聞大阪本社 / ダイヤモンド社 / CHASE / AIAD etc.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Back to Home Link */}
        <div className="mt-12 text-right">
          <Link
            href="/"
            className="inline-flex items-center text-[var(--accent)] hover:text-[var(--accent-light)] transition-colors u-caps"
          >
            ← BACK TO HOME
          </Link>
        </div>
      </GridSection>
    </>
  );
}

