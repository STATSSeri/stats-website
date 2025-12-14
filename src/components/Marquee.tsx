'use client';

const brands = [
  'JIMMY CHOO',
  'GUCCI',
  'BALMAIN',
  'Christian Louboutin',
  'Mercedes-Benz',
  'CHAUMET',
];

export default function Marquee() {
  const marqueeText = brands.join(' / ') + ' / ';

  return (
    <div className="marquee-wrap">
      <div className="marquee-content">
        <span className="marquee-text">
          {marqueeText.repeat(4)}
        </span>
      </div>
    </div>
  );
}
