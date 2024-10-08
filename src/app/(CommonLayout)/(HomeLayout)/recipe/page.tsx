"use client"; // Marks RecipePage as a Client Component

import { useState } from "react"; // Import useState to manage state
import Search from "@/app/Component/Global/Search";
import Filter from "@/app/Component/Global/Filter";
import Sort from "@/app/Component/Global/Sort";

const RecipePage = () => {
    const [searchKeyword, setSearchKeyword] = useState(""); // State for search keyword
    const [imageType, setImageType] = useState("all"); // State for image type

    // Search handler
    const handleSearch = (searchKeyword: string) => {
        console.log("Search keyword:", searchKeyword);
        // Set search keyword state
        setSearchKeyword(searchKeyword);
        // Perform search logic here, e.g., trigger an API call
    };

    // Filter handler
    const handleFilter = (category: string) => {
        console.log("Selected category:", category);
        // Perform filter logic here, e.g., update state or trigger an API call
    };

    // Sort handler
    const handleSort = (sortOption: string) => {
        console.log("Sort option:", sortOption);
        // Perform sorting logic here, e.g., update state or trigger an API call
    };

    // Search for images handler
    const getImages = () => {
        console.log("Searching for images with:", searchKeyword, "and type:", imageType);
        // Implement your logic to fetch images here
    };

    return (
        <section className="pt-24 lg:pt-32 relative min-h-screen">
            <div className="fixed top-25 left-0 w-full z-50 py-4">
                <div className="w-full max-w-7xl mx-auto md:px-8">
                        <div className="box pt-6 ">
                            <div className="box-wrapper">
                                <div className="bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
                                    <button 
                                        onClick={getImages} // React onClick handler
                                        className="outline-none focus:outline-none"
                                    >
                                        <svg className="w-5 text-gray-600 h-5 cursor-pointer" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                        </svg>
                                    </button>
                                    <input 
                                        type="search" 
                                        placeholder="Search for images" 
                                        value={searchKeyword} // Controlled input
                                        onChange={(e) => setSearchKeyword(e.target.value)} // Update state on change
                                        className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") getImages(); // Trigger search on Enter key
                                        }}
                                    />
                                    <div className="select">
                                        <select 
                                            value={imageType} // Controlled select
                                            onChange={(e) => setImageType(e.target.value)} // Update state on change
                                            className="text-sm outline-none focus:outline-none bg-transparent"
                                        >
                                            <option value="all">All</option>
                                            <option value="photo">Photo</option>
                                            <option value="illustration">Illustration</option>
                                            <option value="vector">Vector</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0">

                        {/* Call your existing components */}
                        <Search onSearch={handleSearch} />
                        <Filter onFilter={handleFilter} />
                        <Sort onSort={handleSort} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecipePage;
