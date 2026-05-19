import AtmosphereSection from "@/components/about/AtmosphereSection";
import FounderSection from "@/components/about/FounderSection";
import OurStorySection from "@/components/about/OurStorySection";
import OurValuesSection from "@/components/about/OurValuesSection";
import PremiumBrandsSection from "@/components/about/PremiumBrandsSection";
import RetailExperience from "@/components/about/RetailExperience";
import ExperienceSection from "@/components/home/ExperienceSection";
import StatsSection from "@/components/home/StatSection";


export default function About() {
  return (
    <main>
      
      <RetailExperience />
      <OurStorySection />
      <FounderSection />
      <OurValuesSection />
      <StatsSection />
      <PremiumBrandsSection />
      <AtmosphereSection />
      <ExperienceSection/>
    </main>
  );
}