import CorporateAnnouncementsSection from "@/components/news/CorporateAnnouncementsSection";
import NewsPageClient from "@/components/news/NewsPageClient";
import FeaturedStorySection from "@/components/news/FeaturedStorySection";
import LatestUpdatesSection from "@/components/news/LatestUpdateSection";
import NewsHeroSection from "@/components/news/NewsHeroSection";
import StayConnected from "@/components/news/StayConnected";
export default function News(){
     
    return(
        <main>
                <NewsHeroSection/>
                <NewsPageClient/>
                <FeaturedStorySection/>
                <CorporateAnnouncementsSection/>
                <StayConnected/>
        </main>
    );

}