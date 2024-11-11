;'use client'
import StatesSection from "@/components/Sections/AboutPage/StatesSection";
import FeaturedRecipes from "@/components/Sections/FeaturedRecipes";
import HeroSection from "@/components/Sections/HeroSection";
import PricingSection from "@/components/Sections/PricingSection";
import ReviewSection from "@/components/Sections/ReviewSection";
import SubscribeNowSection from "@/components/Sections/SubscribeNowSection";
import { ScrollBasedVelocityDemo } from "@/components/ui/MagicUI/ScrollBasedVelocity";
import { PlaceholdersAndVanishInput } from "@/components/ui/AceternityUI/placeholders-and-vanish-input";
import BoxReveal from "@/components/ui/box-reveal";
import { AnimatedTooltipPreview } from "@/components/ui/Tooltip/AnimatedTooltip";
import { SparklesText } from "@/components/ui/MagicUI/SparklesText";

const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
];


const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
};
const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
};

export default function Home() {
    return (
        <section className="min-h-screen text-center">
            <>
            <div className="w-full md:hidden mt-32 mx-auto px-6">
                                <div className="flex items-center text-sm font-medium text-gray-500 justify-center lg:justify-start">
                                    {/* <span className="bg-indigo-600 py-1 px-3 rounded-2xl text-xs font-medium text-white mr-3 ">#1</span>
                                Investment app */}
                                    {/* <TextHoverEffect text="CHEF'S CIRCLE" /> */}
                                </div>
                                <BoxReveal boxColor={"#6366f1"} duration={0.5}>
                                    <h1 className="py-8 text-center text-gray-900 font-bold font-manrope text-5xl lg:text-left leading-[70px]">
                                        Welcome To The
                                        <span className="bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]"> <SparklesText text={`CHEF'S CIRCLE`} /> </span>
                                    </h1>
                                </BoxReveal>
                                <BoxReveal boxColor={"#6366f1"} duration={0.5}>
                                    <p className=" text-gray-500 text-lg text-center lg:text-left">
                                    {`Cook, Share, Savor – Discover Delicious Recipes from Home Cooks to Culinary Pros! This highlights the community aspect, encourages sharing, and speaks to a wide range of users from home cooks to professionals. Let me know if you'd like any adjustments!`}
                                    </p>
                                </BoxReveal>
                                <BoxReveal boxColor={"#6366f1"} duration={0.5}>
                                    <div
                                        className="my-10 rounded-full md:shadow">
                                        <PlaceholdersAndVanishInput
                                            placeholders={placeholders}
                                            onChange={handleChange}
                                            onSubmit={onSubmit}
                                        />
                                    </div>
                                </BoxReveal>
                                <div className="flex justify-start">
                                    <AnimatedTooltipPreview  />
                                </div>
                                <BoxReveal boxColor={"#6366f1"} duration={0.5}>
                                    <div className="flex items-center flex-col lg:flex-row">
                                        <span className="mt-3 text-base text-gray-600 font-medium lg:ml-3">Meet Our Admin Team</span>
                                    </div>
                                </BoxReveal>
                            </div>
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
