import dynamic from "next/dynamic";
import { MarketingLayout } from "@/components/layout/marketing-layout";
import { createPageMetadata } from "@/lib/metadata";
import CompaniesTrustedIcon from "@/components/home/CompaniesTrustedIcon";
import SimulationCarousel from "@/components/home/SimulationCarousel";
import Footer from "@/components/Footer";
import VersityTutor from "@/components/home/VersityTutor";
import SliderSection from "@/components/home/SliderSection";
import PerformanceDashboard from "@/components/home/PerformanceDashboard";
import UpperFooter from "@/components/UpperFooter";
import AssureSection from "@/components/home/Assure";
import PerformanceOutcomesDashboard from "@/components/home/PerOutComes";
import ReflexStudioSection from "@/components/home/ReflexStudioSection";
import RoleplaySection from "@/components/home/RolePlay";
import SecurityComplianceCard from "@/components/home/SecurityComplianceCard";
import PerformanceSectionMobile from "@/components/home/PerOutComes-mobile";
import PerformanceDashboardMobile from "@/components/home/PerformanceDashboardMobile";
import SimulationCarouselMobile from "@/components/home/SimulationCarouselMobile";

const HeroMotion = dynamic(() => import("@/components/home/hero-motion"), {
  loading: () => <div className="h-40" />,
});

export const metadata = createPageMetadata(
  "Home",
  "Production-ready Next.js starter with auth, dashboard, and scalable architecture.",
);

const HomePage = () => {
  return (
    <MarketingLayout>
      {/* <section className="container-app">
        <HeroMotion />
      </section> */}
      <HeroMotion />
        {/* Desktop */}
        <div className="hidden lg:block">
          <PerformanceDashboard />
        </div>

        {/* Mobile + Tablet */}
        <div className="lg:hidden">
          <PerformanceDashboardMobile />
        </div>
      {/* </section> */}

      {/* Companies */}
      <CompaniesTrustedIcon />
      <RoleplaySection />
      <div className="hidden lg:block">
        <PerformanceOutcomesDashboard />
      </div>

      <div className="lg:hidden">
        <PerformanceSectionMobile />
      </div>

      {/* Simulation Carousel */}
      {/* Desktop Only */}
      <div className="hidden lg:block">
        <SimulationCarousel />
      </div>

      {/* Mobile + Tablet Only */}
      <div className="lg:hidden">
        <SimulationCarouselMobile />
      </div>
      <AssureSection />
      <ReflexStudioSection />

      {/* VersityTutor */}
      <VersityTutor />

      {/* Slider Section */}
      <SliderSection />
      {/* Footer */}
      {/* <UpperFooter /> */}
      <SecurityComplianceCard />
      <UpperFooter />
      <Footer />
    </MarketingLayout>
  );
};

export default HomePage;
