import HeroSection from "@/components/home/HeroSection";
import PremiumCategoriesSection from "@/components/home/PremiumCategoriesSection";
import LocationSection from "@/components/home/LocationSection";
import StatSection from "@/components/home/StatSection";
import CommunityFeedbackSection from "@/components/home/CommunityFeedbackSection";
import LatestJournalSection from "@/components/home/LatestJournalSection";
import ExperienceSection from "@/components/home/ExperienceSection";

export default function Home() {
  return (
    <main>
      
      <HeroSection />
      <PremiumCategoriesSection />
      <LocationSection />
      <StatSection />
      <CommunityFeedbackSection />
      <LatestJournalSection />
      <ExperienceSection />

    </main>
  );
}