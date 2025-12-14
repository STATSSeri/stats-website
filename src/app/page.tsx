import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WorksSection from "@/components/sections/WorksSection";
import BusinessSection from "@/components/sections/BusinessSection";
import ContentsLabSection from "@/components/sections/ContentsLabSection";
import NewsSection from "@/components/sections/NewsSection";
import CareersSection from "@/components/sections/CareersSection";
import Footer from "@/components/Footer";

// 重いコンポーネントを動的インポート（コード分割）
// const WorksSection = dynamic(() => import("@/components/sections/WorksSection"), {
//   loading: () => <div className="min-h-screen" />,
// });

export default function Home() {
  return (
    <>
      <Loader />
      <Hero />
      <Marquee />
      <AboutSection />
      <ServicesSection />
      <WorksSection />
      <BusinessSection />
      <ContentsLabSection />
      <NewsSection />
      <CareersSection />
      <Footer />
    </>
  );
}
