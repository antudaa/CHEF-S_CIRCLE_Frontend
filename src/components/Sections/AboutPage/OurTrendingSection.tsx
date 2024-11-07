'use client';
import TrendingRecipeCard from "@/components/ui/Cards/TrendingRecipeCard";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const RecipeCategory = [
    'Biryani',
    'Vegetarian',
    'Polau',
    'Keto',
    'Dessert',
    'Grilled',
    'Rice',
    'Soups',
    'Salad',
    'Breakfast',
    'Dinner',
    'Lunch',
    'Snacks',
    'Drinks',
    'Appetizer',
    'Main Course',
    'Side Dish',
    'Pizza',
    'Pasta',
    'Curry'
];

const OurTrendingSection = () => {
    const categoryContainerRef = useRef<HTMLDivElement>(null);

    // Function to scroll the category container
    const scrollLeft = () => {
        if (categoryContainerRef.current) {
            categoryContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (categoryContainerRef.current) {
            categoryContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <section className="max-w-7xl flex flex-col lg:flex-row gap-10 mx-10 lg:mx-0">
            <aside className="mt-8 w-5/5 lg:w-2/5">
                <p className="text-left text-indigo-500 text-lg">Our Trending</p>
                <h3 className="playfair-display-bold text-3xl md:text-4xl text-left">
                    Fresh & Best Food Recipes For You
                </h3>

                <p className="text-justify my-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, recusandae vel quas enim id expedita, hic repellendus minus ipsum, aspernatur voluptatem obcaecati praesentium eligendi ab.
                </p>

                {/* Slider buttons */}
                <div className=" -top-10 right-0 flex items-center space-x-2 z-10">
                    <button
                        onClick={scrollLeft}
                        className="px-3 py-3 border border-indigo-500 rounded-full"
                    >
                        <FaArrowLeft className="text-indigo-500" />
                    </button>
                    <button
                        onClick={scrollRight}
                        className="px-3 py-3 border border-indigo-500 rounded-full"
                    >
                        <FaArrowRight className="text-indigo-500" />
                    </button>
                </div>
            </aside>

            <aside className="w-5/5 lg:w-3/5">

                <div className="relative">

                    {/* Scrollable container for categories */}
                    <div className="flex gap-4 overflow-x-auto no-scrollbar pt-4" ref={categoryContainerRef}>
                        {RecipeCategory.map((category, index) => (
                            <TrendingRecipeCard key={index} />
                        ))}
                    </div>
                </div>
                {/* <TrendingRecipeCard /> */}
            </aside>
        </section>
    );
};

export default OurTrendingSection;