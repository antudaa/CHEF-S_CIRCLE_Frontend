import { GiFoodTruck } from "react-icons/gi";
import { PiBowlFoodFill } from "react-icons/pi";
import { CgCommunity } from "react-icons/cg";
import { LiaShareAltSolid } from "react-icons/lia";
import { PiPaperPlaneRightDuotone } from "react-icons/pi";
import { HoverEffect } from "@/components/ui/AceternityUI/card-hover-effect";

const Items = [
    {
        icon: <GiFoodTruck className="text-4xl text-indigo-500" />,
        title: "Handpicked Ingredients",
        text: "Experience the finest selection of quality ingredients, curated by top home chefs and food enthusiasts from around the world.",
    },
    {
        icon: <PiBowlFoodFill className="text-4xl text-indigo-500" />,
        title: "Exclusive Recipes",
        text: "Unlock a world of premium recipes, crafted for culinary perfection. These dishes are designed to inspire and elevate your cooking skills.",
    },
    {
        icon: <CgCommunity className="text-4xl text-indigo-500" />,
        title: "Interactive Community",
        text: "Share your creations, engage with other cooks, and get real-time feedback. Our platform is built to foster creativity and connection.",
    },
    {
        icon: <LiaShareAltSolid className="text-4xl text-indigo-500" />,
        title: "Seamless Recipe Sharing",
        text: "Share your own recipes with ease, and gain followers who appreciate your unique creations. Be part of a thriving cooking community by contributing your signature dishes.",
    }
];

const WhyVisitUsSection = () => {
    return (
        <section className="max-w-7xl flex flex-col lg:flex-row gap-10 mx-10 mb-16 lg:mx-0">
            <aside className="mt-8 w-full lg:w-2/5">
                <p className="text-left text-indigo-500 text-lg">Why Visit Us</p>
                <h3 className="playfair-display-bold text-3xl md:text-4xl text-left">
                    Fresh & Best Food Recipes For You
                </h3>

                <p className="text-justify my-6">
                    Discover a curated collection of fresh, high-quality recipes designed to inspire your culinary journey. Whether you&apos;re a home cook or a seasoned chef, explore our diverse dishes made with the best ingredients to bring flavor and creativity to your kitchen.
                </p>

                <p className="flex gap-3">
                    <PiPaperPlaneRightDuotone className="my-auto text-indigo-500" />
                    <span>Discover a Haven For Food Lovers</span>
                </p>
                <p className="flex gap-3">
                    <PiPaperPlaneRightDuotone className="my-auto text-indigo-500" />
                    <span>Personalized Recipe Dashboard</span>
                </p>
            </aside>

            <aside className="w-full lg:w-3/5 mt-0 md:mt-10">
                <div className="w-full flex-col justify-center items-start gap-6 flex">
                    <HoverEffect items={Items} />
                </div>
            </aside>
        </section>
    );
};

export default WhyVisitUsSection;
