'use client';

import { useEffect, useState } from 'react';

export default function Loader() {
  const [isHidden, setIsHidden] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(true);
      document.body.classList.add('loaded');
    }, 800);

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
