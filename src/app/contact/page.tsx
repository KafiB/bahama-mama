import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";
import FAQSection from "@/components/contact/FaqSection";
import HelpBanner from "@/components/contact/HelpBanner";

export default function Contacts() {
  return (
    <main>
      
      <ContactHero />
      <ContactSection/>
      <FAQSection/>
      <HelpBanner/>
    </main>
  );
}