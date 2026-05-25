import CareersHero from "@/components/careers/CareersHero";
import EmployeeBenefitsSection from "@/components/careers/EmployeeBenefitsSection";
import OpenPositionsSection from "@/components/careers/OpenPositionSection";
import OurCultureSection from "@/components/careers/OurCulturSection";
import StartCareer from "@/components/careers/StartCareer";

export default function Careers() {
  return (
    <main>
      <CareersHero />
      <OurCultureSection />
      <OpenPositionsSection/>
      <EmployeeBenefitsSection />
      <StartCareer/>
    </main>
  );
}