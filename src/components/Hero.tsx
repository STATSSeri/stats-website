'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showJapanese, setShowJapanese] = useState(false);

  useEffect(() => {
    // ローダーが非表示になった後、少し遅延してアニメーション開始
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    // 英語タイトル表示後、0.8秒後に日本語を表示
    if (isLoaded) {
      const japaneseTimer = setTimeout(() => {
        setShowJapanese(true);
      }, 800);

      return () => {
        clearTimeout(japaneseTimer);
      };
    }
  }, [isLoaded]);

  return (
    <header className="hero-section noise-bg section-bg-hero">
      <div className="flex justify-between items-start relative z-10">
        <div className="opacity-0 pointer-events-none">
          {/* Spacer for alignment with Header */}
        </div>
        <span 
          className="u-caps text-[var(--text-secondary)]"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.6s ease-in-out 0.2s',
          }}
        >
          Digital Marketing Agency
        </span>
      </div>

      <div className="relative z-10">
        <h1 className="hero-title">
          <span 
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(100px)',
              transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0s',
              willChange: isLoaded ? 'auto' : 'transform, opacity',
            }}
          >
            Designing
          </span>
          <span 
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(100px)',
              transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
              willChange: isLoaded ? 'auto' : 'transform, opacity',
            }}
          >
            the
          </span>
          <span 
            className="text-[#FF4D00]"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(100px)',
              transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
              willChange: isLoaded ? 'auto' : 'transform, opacity',
            }}
          >
            Inevitable.
          </span>
        </h1>

        <p 
          className="mt-8 text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed"
          style={{
            opacity: showJapanese ? 1 : 0,
            transform: showJapanese ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-in-out 0.3s, transform 0.8s ease-in-out 0.3s',
            willChange: showJapanese ? 'auto' : 'transform, opacity',
          }}
        >
          その「熱狂」は、偶然ではない。
          <br />
          SNSから逆算する、緻密な設計。
        </p>
      </div>

      <div className="flex justify-between items-end relative z-10">
        <span 
          className="u-caps text-[var(--text-muted)]"
          style={{
            opacity: showJapanese ? 1 : 0,
            transition: 'opacity 0.6s ease-in-out 0.5s',
          }}
        >
          Scroll to explore
        </span>
        <span 
          className="u-caps text-[var(--accent)]"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.6s ease-in-out 0.4s',
          }}
        >
          01
        </span>
      </div>
    </header>
  );
}
