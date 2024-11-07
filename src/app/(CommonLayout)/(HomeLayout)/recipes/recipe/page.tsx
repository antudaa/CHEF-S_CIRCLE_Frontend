"use client"
import RecipeCard from "@/components/ui/Cards/RecipeCard";
import { GradualSpacing } from "@/components/ui/MagicUI/GradualSpacing";
import DebounceSearch from "@/hook/debounceSearchHook";
import { TRecipe } from "@/types";
import { useState, useRef, useEffect, useCallback } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GrSort } from "react-icons/gr";
import { RecipeCategory } from "@/types/index";
import GlobalLoading from "@/app/loading";

const RecipePage = () => {
    const [searchKeyword, setSearchKeyword] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortOption, setSortOption] = useState("");
    const [recipes, setRecipes] = useState<TRecipe[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const categoryContainerRef = useRef<HTMLDivElement>(null);
    const debouncedSearchKeyword = DebounceSearch(searchKeyword, 500);
    const observer = useRef<IntersectionObserver | null>(null);

    // Function to scroll the category container
    const scrollLeft = () => {
        if (categoryContainerRef.current) {
            categoryContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (categoryContainerRef.current) {
            categoryContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    // Fetch recipes with query parameters (search, sort, category, page)
    const fetchRecipes = useCallback(async (pageNum: number) => {
        try {
            const query = new URLSearchParams({
                ...(debouncedSearchKeyword && { searchTerm: debouncedSearchKeyword }),
                ...(selectedCategory && selectedCategory !== "All" && { category: selectedCategory }),
                ...(sortOption && { sort: sortOption }),
                page: pageNum.toString(), // Pass the page number for pagination
            }).toString();
    
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_API}/recipe?${query}`
            );
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
    
            if (data.data.recipes.length === 0) {
                setHasMore(false); // No more recipes to load
            } else {
                setRecipes((prevRecipes) => [...prevRecipes, ...data.data.recipes]); // Append new recipes
            }
        } catch (error) {
            console.log(error);
        }
    }, [debouncedSearchKeyword, selectedCategory, sortOption]);

    // Fetch recipes whenever debouncedSearchKeyword, selectedCategory, or sortOption changes
    useEffect(() => {
        setPage(1);
        setRecipes([]);
        setHasMore(true);
        fetchRecipes(1); // Use the memoized fetchRecipes
    }, [debouncedSearchKeyword, selectedCategory, sortOption, fetchRecipes]);

    // Infinite scrolling logic
    const lastRecipeRef = useCallback(
        (node: HTMLDivElement) => {
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setPage(prevPage => prevPage + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [hasMore]
    );

    // Fetch more recipes when page number increases
    useEffect(() => {
        if (page > 1) fetchRecipes(page);
    }, [page, fetchRecipes]);

    if (recipes?.length <= 0) {
        return <GlobalLoading />;
    }

    return (
        <>
            <section className="mt-2 relative min-h-screen overflow-hidden overflow-y-auto h-[1000px]">
                {/* Sticky part */}
                <div className="w-full top-[100px] py-4 left-0 right-0 z-40 sticky bg-white">
                    <div className="max-w-7xl px-6 md:px-10 xl:px-0 mx-auto flex flex-col space-y-6">
                        {/* Search and Sort Fields */}
                        <div className="flex justify-between gap-4 flex-col md:flex-row">
                            <div className="flex justify-between items-center flex-1">
                                <div className="w-full max-w-lg">
                                    <div className="relative bg-white rounded-full flex items-center w-full p-3 shadow-sm border border-gray-200">
                                        <button className="outline-none focus:outline-none">
                                            <svg
                                                className="w-5 text-gray-600 h-5 cursor-pointer"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                            </svg>
                                        </button>
                                        <input
                                            type="search"
                                            placeholder="Search for recipes"
                                            value={searchKeyword}
                                            onChange={(e) => setSearchKeyword(e.target.value)}
                                            className="w-full pl-4 text-sm outline-none bg-transparent"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="w-full max-w-lg">
                                    <div className="relative bg-white rounded-full flex items-center w-full p-3 shadow-sm border border-gray-200">
                                        <GrSort className="w-5 text-gray-600 h-5 cursor-pointer" />
                                        <select
                                            className="w-full pl-4 text-sm outline-none bg-transparent"
                                            value={sortOption}
                                            onChange={(e) => setSortOption(e.target.value)}
                                        >
                                            <option value="">Sort By</option>
                                            <option value="name">Name</option>
                                            <option value="rating">Rating</option>
                                            <option value="date">Date</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Heading */}
                        <div className="text-center">
                            <h3 className="">
                                <GradualSpacing
                                    className="font-display hidden sm:block text-3xl lg:text-5xl font-bold -tracking-widest text-black dark:text-white leading-normal md:leading-[5rem] whitespace-normal text-center md:text-left"
                                    text="Learn, Cook, & Eat your food"
                                />
                            </h3>
                        </div>

                        {/* Category Filter */}
                        <div className="relative">
                            {/* Slider buttons */}
                            <div className="absolute -top-10 right-0 flex items-center space-x-2 z-10">
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

                            {/* Scrollable container for categories */}
                            <div
                                className="flex gap-4 overflow-x-auto no-scrollbar pt-4"
                                ref={categoryContainerRef}
                            >
                                {RecipeCategory.map((category, index) => (
                                    <p
                                        key={index}
                                        className={`px-4 py-2 border shadow-sm ${selectedCategory === category
                                            ? "border-indigo-500 bg-indigo-100"
                                            : "border-indigo-300 hover:border-indigo-500"
                                            } rounded-full text-black cursor-pointer whitespace-nowrap hover:bg-indigo-100 transition`}
                                        onClick={() => setSelectedCategory(category)}
                                    >
                                        {category}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scrollable Recipes Card Section */}
                <div className="grid grid-cols-12 gap-6 my-16 pt-20 px-6 max-w-7xl mx-auto overflow-hidden">
                    {recipes.map((recipe, index) => {
                        if (recipes.length === index + 1) {
                            return (
                                <div key={index} ref={lastRecipeRef}>
                                    <RecipeCard recipe={recipe} />
                                </div>
                            );
                        } else {
                            return <RecipeCard key={index} recipe={recipe} />;
                        }
                    })}
                </div>
            </section>
        </>
    );
};

export default RecipePage;
