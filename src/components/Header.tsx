'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Works', href: '/#works' },
  { label: 'Business', href: '/#business' },
  { label: 'Lab', href: '/contents-lab' },
  { label: 'News', href: '/news' },
  { label: 'Careers', href: '/#careers' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // メニューが開いている時はbodyのスクロールを無効化
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[var(--bg-secondary)] border-b-[2px] border-[var(--border)] backdrop-blur-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-[1440px] mx-auto px-4 md:px-[2vw] py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-[1.8rem] uppercase text-[#111111] hover:text-[var(--accent)] transition-colors"
            onClick={closeMenu}
            style={{ 
              fontFamily: 'var(--font-staatliches), sans-serif',
              fontWeight: 400,
              letterSpacing: '0.03em',
              fontSize: '37px',
              color: 'rgba(0, 0, 0, 1)',
              lineHeight: '0px',
              backgroundClip: 'unset',
              WebkitBackgroundClip: 'unset'
            }}
          >
            STATS
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="u-caps text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="u-caps text-sm text-[var(--accent)] border-[2px] border-[var(--accent)] px-4 py-2 bg-[var(--accent)] text-white hover:bg-[var(--accent-light)] transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden u-caps text-sm text-[var(--text-secondary)] min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Menu"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? '✕' : 'Menu'}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
          <div
            className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[var(--bg-secondary)] border-l-2 border-[var(--border)] z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="p-6 pt-20 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="u-caps text-lg text-[var(--text)] hover:text-[var(--accent)] transition-colors py-2 min-h-[44px] flex items-center"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="u-caps text-lg text-white border-[2px] border-[var(--accent)] px-6 py-3 bg-[var(--accent)] hover:bg-[var(--accent-light)] transition-colors mt-4 min-h-[44px] flex items-center justify-center"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}

