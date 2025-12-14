/** @type {import('next').NextConfig} */
const nextConfig = {
  // 画像最適化設定
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    // 外部画像ドメイン（プレースホルダー用）
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.microcms.io',
      },
    ],
  },
  
  // 圧縮設定
  compress: true,
  
  // 本番環境でのソースマップ無効化（パフォーマンス向上）
  productionBrowserSourceMaps: false,
  
  // 実験的機能
  experimental: {
    // 最適化されたパッケージインポート
    optimizePackageImports: ['@/components'],
    // CSS最適化を無効化（cssnanoエラー回避）
    optimizeCss: false,
  },
  
  // Webpack設定
  webpack: (config, { dev, isServer }) => {
    // 本番ビルドでのCSS最小化を無効化
    if (!dev && !isServer) {
      config.optimization.minimizer = config.optimization.minimizer?.filter(
        (minimizer) => minimizer.constructor.name !== 'CssMinimizerPlugin'
      );
    }
    return config;
  },
  
  // 出力設定
  output: 'standalone',
  
  // パワー設定
  poweredByHeader: false,
};

export default nextConfig;
