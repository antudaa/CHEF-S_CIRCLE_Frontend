'use client'
import Image from "next/image";
import BurgerImage from "@/Assets/Images/BurgerImage_1.jpg";
import CakeImage from "@/Assets/Images/CakeImage_1.jpg";
import BiryaniImage from "@/Assets/Images/BiryaniImage_1.jpg";
import SaladeImage from "@/Assets/Images/SaladeImage_2.jpg";
import PizzaImage from "@/Assets/Images/PizzaImage_1.jpg";
import PestryImage from "@/Assets/Images/PestryImage_1.jpg";
import { PlaceholdersAndVanishInput } from "../ui/AceternityUI/placeholders-and-vanish-input";
import { BackgroundBeamsWithCollision } from "../ui/AceternityUI/background-beams-with-collision";
import { BoxReveal } from "../ui/MagicUI/BoxReveal";
import { SparklesText } from "../ui/MagicUI/SparklesText";
import { AnimatedTooltipPreview } from "../ui/Tooltip/AnimatedTooltip";


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

const HeroSection = () => {
    return (
        <section className="lg:pt-32 pt-0 h-full">
            <BackgroundBeamsWithCollision>
                <div
                    className="rounded-2xl py-10 overflow-hidden m-5 lg:m-0 2xl:py-16 xl:py-8  lg:rounded-tl-2xl lg:rounded-bl-2xl">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-14 items-center lg:grid-cols-12 lg:gap32">
                            <div className="w-full xl:col-span-5 lg:col-span-6 2xl:-mx-5 xl:-mx-0">
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
                                    <AnimatedTooltipPreview />
                                </div>
                                <BoxReveal boxColor={"#6366f1"} duration={0.5}>
                                    <div className="flex items-center flex-col lg:flex-row">
                                        <span className="mt-3 text-base text-gray-600 font-medium lg:ml-3">Meet Our Admin Team</span>
                                    </div>
                                </BoxReveal>
                            </div>
                            <div className="w-full xl:col-span-7  lg:col-span-6 hidden md:block">
                                <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">
                                    <Image
                                        src={BurgerImage}
                                        width={176}
                                        height={224}
                                        className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0"
                                        alt="" />
                                    <Image
                                        src={SaladeImage}
                                        width={176}
                                        height={224}
                                        className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mx-auto"
                                        alt="" />
                                    <Image
                                        src={CakeImage}
                                        width={176}
                                        height={224}
                                        className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0 md:ml-0"
                                        alt="" />
                                    <Image
                                        src={PizzaImage}
                                        width={176}
                                        height={224}
                                        className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0 md:ml-auto"
                                        alt="" />
                                    <Image
                                        src={BiryaniImage}
                                        width={176}
                                        height={224}
                                        className="w-44 h-56 rounded-2xl object-cover md:-mt-20 mx-auto min-[450px]:mr-0 md:mx-auto"
                                        alt="" />
                                    <Image
                                        src={PestryImage}
                                        width={176}
                                        height={224}
                                        className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0"
                                        alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BackgroundBeamsWithCollision>
        </section>
    );
};

export default HeroSection;