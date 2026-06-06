import CustomersHero from "@/components/customer/CustomersHero";
import CustomerStoriesSlider from "@/components/customer/CustomerStoriesSlider";
import CustomersTrustedSection from "@/components/customer/CustomersTrustedSection";
import CustomersAllStories from "@/components/customer/CustomersAllStories";
import Footer from "@/components/Footer";
import { MarketingLayout } from "@/components/layout/marketing-layout";
import { createPageMetadata } from "@/lib/metadata";
import CustomersLogoTicker from "@/components/customer/CustomersLogoTicker";
import UpperFooter from "@/components/UpperFooter";

export const metadata = createPageMetadata(
  "Customers",
  "See how ReflexAI customers use simulations, readiness workflows, and coaching in practice.",
);

export default function CustomersPage() {
  return (
    <MarketingLayout>
      <CustomersHero />
      <CustomerStoriesSlider />
      <CustomersLogoTicker />
      <CustomersTrustedSection />
      <CustomersAllStories />
      <UpperFooter />
      <Footer />
    </MarketingLayout>
  );
}
