import Footer from "@/components/Footer";
import UpperFooter from "@/components/UpperFooter";
import { InsightsContentAnimatedSection } from "@/components/insights/insights-content-animated-section";
import { InsightsFeatureSlider } from "@/components/insights/insights-feature-slider";
import { InsightsHero } from "@/components/insights/insights-hero";
import { MarketingLayout } from "@/components/layout/marketing-layout";
import { createPageMetadata } from "@/lib/metadata";
import InsightsHeroMMobile from "@/components/insights/insights-animated-heroMobile";

export const metadata = createPageMetadata(
  "Insights",
  "Explore product and performance insights.",
);

const InsightsPage = () => {
  return (
    <MarketingLayout>
      <div className="insights-page">
        <div className="hidden lg:block">
          <InsightsHero />
        </div>

        {/* Mobile + Tablet */}
        <div className="lg:hidden">
          <InsightsHeroMMobile />
        </div>
        <div className="hidden lg:block">
          <InsightsFeatureSlider />
        </div>

        <InsightsContentAnimatedSection />
        <UpperFooter />
        <Footer />
      </div>
    </MarketingLayout>
  );
};

export default InsightsPage;
