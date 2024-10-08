import FeaturedRecipes from "@/app/Component/Sections/FeaturedRecipes";
import HeroSection from "@/app/Component/Sections/HeroSection";
import ReviewSection from "@/app/Component/Sections/ReviewSection";
import SubscribeNowSection from "@/app/Component/Sections/SubscribeNowSection";
import { ScrollBasedVelocityDemo } from "@/app/Component/ui/MagicUI/ScrollBasedVelocity";

export default function Home() {
    return (
        <section className="min-h-screen text-center">
            <HeroSection />
            <FeaturedRecipes />
            <ScrollBasedVelocityDemo />
            <SubscribeNowSection />
            <ReviewSection />
        </section>
    );
}
