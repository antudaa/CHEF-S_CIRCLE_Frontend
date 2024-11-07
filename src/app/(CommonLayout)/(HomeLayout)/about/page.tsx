import Image1 from "@/Assets/Images/AboutPageImage_1.jpg";
import Image2 from "@/Assets/Images/AboutPageImage_2.jpg";
import Image from "next/image";
import OurTrendingSection from "@/components/Sections/AboutPage/OurTrendingSection";
import WhyVisitUsSection from "@/components/Sections/AboutPage/WhyVisitUsSection";
import { ExploreUsSection } from "@/components/Sections/AboutPage/ExploreUsSection";
import StatesSection from "@/components/Sections/AboutPage/StatesSection";
import PricingSection from "@/components/Sections/PricingSection";

const AboutPage = () => {
    return (
        <section className="min-h-screen text-center mt-32 xl:mt-48 mb-16 h-full playfair-display-normal mx-auto md:max-w-5xl xl:max-w-7xl ">
            <div className="flex flex-col lg:flex-row mx-10 lg:gap-16 md:mx-22 lg:mx-0">
                <aside className="relative lg:w-1/2">
                    <Image className="rounded-2xl mx-auto md:mx-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px]" height={500} width={500} src={Image2} alt="Food Image 1" />
                    <Image className="rounded-2xl w-[100px] h-[150px] md:w-[300px] md:h-[350px] hidden lg:block absolute top-20 -right-12" height={500} width={500} src={Image1} alt="Food Image 2" />
                </aside>

                <aside className="mt-8 lg:w-1/2">
                    <p className="text-left text-indigo-500 text-lg">About Us</p>
                    <h3 className="playfair-display-bold text-3xl md:text-4xl text-left">
                        Our  Journey to Sweet Success. A Tale of Flour & Sugar
                    </h3>

                    <p className="text-justify my-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, recusandae vel quas enim id expedita, hic repellendus minus ipsum, aspernatur voluptatem obcaecati praesentium eligendi ab. Iste, ea. Doloribus debitis recusandae facilis eum perferendis. Sunt non rerum repellendus repellat quidem inventore, asperiores ducimus facilis vel incidunt sapiente a cumque culpa quae fuga tempore harum, iure dolorem architecto itaque quaerat. Quae distinctio a vitae ullam repellat tempora pariatur laudantium dicta, accusantium velit. Laborum earum hic eveniet quis odit nobis, ipsam eos. Nihil dicta impedit sapiente suscipit enim perferendis ad aperiam nostrum culpa eligendi asperiores quod earum, soluta consequuntur obcaecati voluptatum voluptate ipsum.
                    </p>
                </aside>
            </div>

            <ExploreUsSection />
            <OurTrendingSection />
            <WhyVisitUsSection />
            <StatesSection />
            <PricingSection />
        </section>
    );
};

export default AboutPage;