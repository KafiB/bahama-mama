import PremiumProducts from "@/components/products/PremiumProducts";
import ShopByCategorySection from "@/components/products/ShopByCategorySection";
import BrandTabs from "@/components/products/BrandTabs";
import ExploreCollectionBanner from "@/components/products/ExploreCollectionBanner";

export default function Products() {
  return (
    <main>
        <PremiumProducts />
        <ShopByCategorySection />
        <BrandTabs />
        <ExploreCollectionBanner />
    </main>
  );
}