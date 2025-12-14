'use client';

import { useEffect, useState } from 'react';

export default function Loader() {
  const [isHidden, setIsHidden] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    // ローダーを非表示にする
    const timer = setTimeout(() => {
      setIsHidden(true);
      document.body.classList.add('loaded');
    }, 800);

    // DOMから完全に削除する
    const removeTimer = setTimeout(() => {
      setIsRemoved(true);
    }, 1600);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (isRemoved) return null;

  return (
    <div className={`loader ${isHidden ? 'hide' : ''}`}>
      <div className="loader-text">STATS</div>
    </div>
  );
}
