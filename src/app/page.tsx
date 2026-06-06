import dynamic from "next/dynamic";
import { MarketingLayout } from "@/components/layout/marketing-layout";
import { createPageMetadata } from "@/lib/metadata";
import CompaniesTrustedIcon from "@/components/CompaniesTrustedIcon";
import SimulationCarousel from "@/components/SimulationCarousel";
import Footer from "@/components/Footer";
import VersityTutor from "@/components/VersityTutor";
import SliderSection from "@/components/SliderSection";
import PerformanceDashboard from "@/components/home/PerformanceDashboard";
import UpperFooter from "@/components/UpperFooter";
import AssureSection from "@/components/Assure";
import PerformanceOutcomesDashboard from "@/components/home/PerOutComes";
// import RoleplaySection, { RolePlay } from "@/components/common/RolePlay";
import ReflexStudioSection from "@/components/home/ReflexStudioSection";
// import SecurityCompliance, { SecurityComplianceSection } from "@/components/home/SecurityComplianceSection";
import FeatureRadarSection from "@/components/common/RolePlay";
import RoleplaySection from "@/components/common/RolePlay";
import SecurityComplianceCard from "@/components/home/SecurityComplianceCard";

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
      <section className="container-app">
        <PerformanceDashboard />
      </section>
      {/* Companies */}
      <CompaniesTrustedIcon />

      {/* Simulation Carousel */}
      <SimulationCarousel />
      
      <AssureSection />
      <ReflexStudioSection />

      {/* VersityTutor */}
      <VersityTutor />
      <RoleplaySection/>
      <PerformanceOutcomesDashboard />
      {/* Slider Section */}
      <SliderSection />
      {/* Footer */}
      {/* <UpperFooter /> */}
      <SecurityComplianceCard/>
      <UpperFooter />
      <Footer />
    </MarketingLayout>
  );
};

export default HomePage;
