import FlagshipExperiencesSection from "@/components/locations/FlagshipExperiencesSection";
import LocationsByCity from "@/components/locations/LocationByCIty";
import StoreLocator from "@/components/locations/StoreLocator";
import MapStore from "@/components/locations/StoreMap";
import VisitStore from "@/components/locations/VisitStore";
export default function Locations() {
  return (
    <main>
        <StoreLocator />
        <MapStore/>
        <LocationsByCity />
        <FlagshipExperiencesSection/>
        <VisitStore/>
    </main>
  );
}
        