import GridSection from '../GridSection';

export default function CompanySection() {
  return (
    <GridSection
      number="06"
      title="Company"
      subtitle="About Us"
      id="company"
    >
      <table className="company-table">
        <tbody>
          <tr>
            <th>COMPANY NAME</th>
            <td>
              スタッツ株式会社
              <br />
              <span className="text-[var(--text-muted)]">STATS INC.</span>
            </td>
          </tr>
          <tr>
            <th>ESTABLISHED</th>
            <td>2021年4月5日</td>
          </tr>
          <tr>
            <th>CEO</th>
            <td>芹田樹也</td>
          </tr>
          <tr>
            <th>ADDRESS</th>
            <td>
              〒151-0066
              <br />
              東京都渋谷区西原3-30-4
            </td>
          </tr>
          <tr>
            <th>TEL</th>
            <td>03-5324-2638</td>
          </tr>
          <tr>
            <th>CAPITAL</th>
            <td>506万円</td>
          </tr>
          <tr>
            <th>EMPLOYEES</th>
            <td>20名（業務委託含む）</td>
          </tr>
          <tr>
            <th>BUSINESS</th>
            <td>SNSを軸としたデジタルマーケティング支援</td>
          </tr>
          <tr>
            <th>LEGAL COUNSEL</th>
            <td>プロコミットパートナーズ法律事務所</td>
          </tr>
          <tr>
            <th>PARTNERS</th>
            <td className="text-sm leading-loose">
              阪急阪神百貨店 / ザ・ゴール / 博報堂 / 博報堂Gravity / 双葉通信社 / ベクトル / 読売新聞大阪本社 / ダイヤモンド社 / CHASE / AIAD etc.
            </td>
          </tr>
        </tbody>
      </table>
    </GridSection>
  );
}
