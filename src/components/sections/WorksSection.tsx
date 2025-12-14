'use client';

import GridSection from '../GridSection';
import Image from 'next/image';
import { useState } from 'react';

// 実績写真のプレースホルダー（実際の画像に置き換えてください）
// 30枚以上の写真を生成（カテゴリごとに分散）
const generateGalleryImages = () => {
  const images = [];
  const categories = ['luxury', 'beauty', 'lifestyle', 'fashion', 'travel', 'retail'];
  
  // 各カテゴリに5-6枚ずつ割り当て
  categories.forEach((category, catIndex) => {
    const count = category === 'luxury' ? 6 : 5; // LUXURY FASHIONは6枚、他は5枚
    for (let i = 0; i < count; i++) {
      images.push({
        id: `${category}-${i + 1}`,
        category,
        // プレースホルダー画像（実際の画像パスに置き換えてください）
        // 例: `/images/works/${category}-${i + 1}.jpg`
        src: `https://picsum.photos/seed/${category}-${i + 1}/800/600`,
        alt: `${category} work ${i + 1}`,
      });
    }
  });
  
  return images;
};

const galleryImages = generateGalleryImages();

const clientCategories = [
  {
    category: 'LUXURY FASHION',
    brands: 'BALMAIN / Christian Louboutin / JIMMY CHOO / MANOLO BLAHNIK / Ferragamo / CHAUMET / ZENITH',
  },
  {
    category: 'BEAUTY / FRAGRANCE',
    brands: 'MOROCCANOIL / THREE / HERA / BURBERRY FRAGRANCE / Chloe FRAGRANCE / DOLCE&GABBANA FRAGRANCE',
  },
  {
    category: 'LIFESTYLE / HOME',
    brands: 'Cassina / Le Creuset / BALMUDA / TABASCO',
  },
  {
    category: 'FASHION / APPAREL',
    brands: 'adidas Originals / agnes b / BEAMS / Calvin Klein / Champion / CONVERSE / EDWIN / gelato pique / TOMMY HILFIGER',
  },
  {
    category: 'TRAVEL / MOBILITY',
    brands: 'Airbnb / Mercedes-Benz / TUMI / Manhattan Portage',
  },
  {
    category: 'RETAIL',
    brands: 'HANKYU UMEDA',
  },
];

export default function WorksSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <GridSection
      number="04"
      title="Works"
      subtitle="Selected Clients"
      id="works"
      bgClass="section-bg-works"
    >
      <div className="p-4 md:p-8 lg:p-16">
        <p className="text-lg mb-12 text-[var(--text-secondary)]">
          ラグジュアリーブランドを中心に、300社以上のクライアントをサポート
        </p>

        {/* Photo Gallery */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 border-2 border-[var(--border)]">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="relative aspect-square border-r-2 border-b-2 border-[var(--border)] last:border-r-0 active:opacity-80 transition-opacity cursor-pointer group overflow-hidden touch-manipulation"
                onClick={() => setSelectedImage(image.src)}
                onTouchStart={(e) => {
                  e.currentTarget.style.opacity = '0.8';
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading={index < 8 ? 'eager' : 'lazy'} // 最初の8枚は優先読み込み
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  unoptimized={image.src.includes('picsum.photos')} // プレースホルダーのみ最適化無効
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
            ))}
          </div>
        </div>

        {/* Client Categories */}
        <div className="space-y-8">
          {clientCategories.map((cat) => (
            <div key={cat.category} className="border-b-2 border-[var(--border)] pb-8">
              <h3 className="text-[#FF4D00] text-sm tracking-widest uppercase mb-4">
                {cat.category}
              </h3>
              <p className="text-sm leading-loose text-[var(--text-secondary)]">
                {cat.brands}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl hover:text-[var(--accent)] transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Selected work"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      )}
    </GridSection>
  );
}
