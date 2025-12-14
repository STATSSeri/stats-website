import Link from 'next/link';

const footerLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Email', href: 'mailto:info@statsworks.tokyo' },
];

export default function Footer() {
  return (
    <footer className="footer section-bg-contact" id="contact">
      <div className="footer-big">
        LET&apos;S WORK
        <br />
        TOGETHER.
      </div>

      <p className="text-[var(--text-secondary)] mb-8 max-w-lg">
        ご相談・お見積もりなど、お気軽にお問い合わせください。
      </p>

      <div className="footer-links mb-16">
        {footerLinks.map((link) => (
          <Link key={link.label} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>

      <div className="border-t border-[var(--border)] pt-8 flex flex-col md:flex-row justify-between gap-4">
        <p className="text-sm text-[var(--text-muted)]">
          〒151-0066 東京都渋谷区西原3-30-4
        </p>
        <p className="text-sm text-[var(--text-muted)]">
          &copy; {new Date().getFullYear()} Stats Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
