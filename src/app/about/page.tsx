import Footer from "@/components/Footer";
import UpperFooter from "@/components/UpperFooter";
import { AboutTeamSection } from "@/components/about/about-team-section";
import { aboutPageContent } from "@/data/about_data";
import { MarketingLayout } from "@/components/layout/marketing-layout";
import { createPageMetadata } from "@/lib/metadata";
import AboutHeroSection from "@/components/about/about-hero-section";
import AboutInNumbers from "@/components/about/about-in-number";
import AboutOurStory from "@/components/about/about-our-story";
import AboutMeetTeam from "@/components/about/about-meet-team";
import AboutJoinTeam from "@/components/about/about-join-team";

export const metadata = createPageMetadata("About", "Meet the people behind ReflexAI.");

const AboutPage = () => {
  const { hero } = aboutPageContent;

  return (
    <MarketingLayout>
      <AboutHeroSection />

      <AboutInNumbers />

      <AboutOurStory />

      <main className="bg-forest text-white">
        <section className="relative overflow-hidden bg-forest pt-12 md:pt-16 lg:pt-20">
          <div className="container-app">
            <div className="max-w-[620px]">
              <h1 className="text-[36px] font-semibold leading-[1.08] text-white sm:text-[44px] lg:text-[56px]">
                {hero.titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>

              <p className="mt-5 max-w-[620px] text-[16px] font-medium leading-[1.55] text-white/78 sm:text-[18px] lg:text-[20px]">
                {hero.description}
              </p>
            </div>
          </div>
        </section>

        <AboutTeamSection />
        <AboutMeetTeam />
        <AboutJoinTeam />

        <UpperFooter />
        <Footer />
      </main>
    </MarketingLayout>
  );
};

export default AboutPage;
