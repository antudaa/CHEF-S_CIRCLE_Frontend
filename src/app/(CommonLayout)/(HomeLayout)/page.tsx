import StatesSection from "@/components/Sections/AboutPage/StatesSection";
import FeaturedRecipes from "@/components/Sections/FeaturedRecipes";
import HeroSection from "@/components/Sections/HeroSection";
import PricingSection from "@/components/Sections/PricingSection";
import ReviewSection from "@/components/Sections/ReviewSection";
import SubscribeNowSection from "@/components/Sections/SubscribeNowSection";
import { ScrollBasedVelocityDemo } from "@/components/ui/MagicUI/ScrollBasedVelocity";

export default function Home() {
    return (
        <section className="min-h-screen text-center">
<>
                <section className="relative py-14 mt-44 lg:pt-44 lg:pb-24 bg-gray-100 lg:hidden">
                    <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
                        <div className="w-full max-w-4xl mx-auto sm:px-12 mb-10 lg:mb-20">
                            <h1 className="font-manrope font-bold text-4xl leading-snug sm:text-5xl text-center mb-5 text-black">
                                {`Welcome To Chef's Circle`}
                            </h1>
                            <p className="text-xl font-medium leading-8 text-gray-400 text-center mb-14 max-w-xl mx-auto">
                            {`Cook, Share, Savor – Discover Delicious Recipes from Home Cooks to Culinary Pros! This highlights the community aspect, encourages sharing, and speaks to a wide range of users from home cooks to professionals. Let me know if you'd like any adjustments!`}
                            </p>
                            <div className="parent flex flex-col sm:flex-row items-center max-w-xl mx-auto justify-center gap-y-4 sm:justify-between pr-2 sm:pr-1 sm:bg-white rounded-full mb-5 relative group transition-all duration-500 border border-transparent hover:border-indigo-600 focus-within:border-indigo-600">
                                <input type="email" className="block w-full px-6 py-3.5 text-base max-sm:text-center font-normal shadow-xs max-sm:bg-white text-gray-900 bg-transparent border-none rounded-full placeholder-gray-400 focus:outline-none leading-normal" placeholder="What’s your email?" />
                                <button className="py-3 px-6 max-sm:w-full  rounded-full bg-indigo-600 text-white text-sm leading-4 font-medium whitespace-nowrap transition-all duration-300 hover:bg-indigo-700 sm:absolute top-1.5 right-3">Get Started</button>
                            </div>
                            <p className="text-sm font-normal text-gray-500 text-center">
                                {/* no personal credit checks or founder guarantee. */}
                            </p>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:justify-between">
                            {/* <Image src="https://pagedone.io/asset/uploads/1709270640.png" alt="" className="object-cover"/>

                                <Image src="https://pagedone.io/asset/uploads/1710391965.png" alt="" className="mx-auto w-56 object-cover"/>
                                    <Image src="https://pagedone.io/asset/uploads/1709270672.png" alt="" className="object-cover"/> */}
                                    </div>
                                </div>
                            </section>
                        </>
                        <div className="hidden lg:block">
                            <HeroSection />
                        </div>
                        <FeaturedRecipes />
                        <ScrollBasedVelocityDemo />
                        <SubscribeNowSection />
                        <StatesSection />
                        <PricingSection />
                        <ReviewSection />
                </section>
                );
}
