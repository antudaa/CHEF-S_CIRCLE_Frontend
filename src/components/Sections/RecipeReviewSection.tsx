import StarRatings from "react-star-ratings";
import { FaStar } from "react-icons/fa";

const RecipeReviewSection = () => {
    return (
        <section className="py-24 relative">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
                <div className="">
                    <h2 className="font-manrope font-bold text-4xl sm:text-4xl leading-10 text-black mb-8 text-center playfair-display-bold">
                        Reviews &
                        Rating</h2>
                    <div className="grid grid-cols-12 mb-11">

                        <div className="col-span-12 xl:col-span-4 flex items-center playfair-display-normal">
                            <div className="box flex flex-col gap-y-4 w-full max-xl:max-w-7xl mx-4">
                                <div className="flex items-center w-full">
                                    <p className="font-medium text-lg py-[1px] text-black mr-[2px]">5</p>
                                    <FaStar className="text-[#FBBF24] w-6 h-6 my-auto ml-2" />
                                    <p className="h-2 w-full sm:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                                        <span className="h-full w-[30%] rounded-[30px] bg-indigo-500 flex"></span>
                                    </p>
                                    <p className="font-medium text-lg py-[1px] text-black mr-[2px]">30</p>
                                </div>
                                <div className="flex items-center w-full">
                                    <p className="font-medium text-lg py-[1px] text-black mr-[2px]">4</p>
                                    <FaStar className="text-[#FBBF24] w-6 h-6 my-auto ml-2" />
                                    <p className="h-2 w-full xl:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                                        <span className="h-full w-[40%] rounded-[30px] bg-indigo-500 flex"></span>
                                    </p>
                                    <p className="font-medium text-lg py-[1px] text-black mr-[2px]">40</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="font-medium text-lg py-[1px] text-black mr-[2px]">3</p>
                                    <FaStar className="text-[#FBBF24] w-6 h-6 my-auto ml-2" />
                                    <p className="h-2 w-full xl:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                                        <span className="h-full w-[20%] rounded-[30px] bg-indigo-500 flex"></span>
                                    </p>
                                    <p className="font-medium text-lg py-[1px] text-black mr-[2px]">20</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="font-medium text-lg py-[1px] text-black mr-[2px]">2</p>
                                    <FaStar className="text-[#FBBF24] w-6 h-6 my-auto ml-2" />
                                    <p className="h-2 w-full xl:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                                        <span className="h-full w-[16%] rounded-[30px] bg-indigo-500 flex"></span>
                                    </p>
                                    <p className="font-medium text-lg py-[1px] text-black mr-[2px]">16</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="font-medium text-lg py-[1px] text-black mr-[2px]">1</p>
                                    <FaStar className="text-[#FBBF24] w-6 h-6 my-auto ml-2" />
                                    <p className="h-2 w-full xl:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                                        <span className="h-full w-[8%] rounded-[30px] bg-indigo-500 flex"></span>
                                    </p>
                                    <p className="font-medium text-lg py-[1px] text-black mr-[2px]">8</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 max-xl:mt-8 xl:col-span-8 xl:pl-8 w-full min-h-[230px] playfair-display-normal">
                            <div
                                className="grid grid-cols-12 h-full px-8 max-lg:py-8 rounded-3xl bg-gray-100 w-full max-xl:max-w-7xl mx-auto">
                                <div className="col-span-12 md:col-span-8 flex items-center">
                                    <div className="flex flex-col sm:flex-row items-center max-lg:justify-center w-full h-full">
                                        <div
                                            className="sm:pr-3 sm:border-r border-gray-200 flex items-center justify-center flex-col">
                                            <h2 className="font-manrope font-bold text-5xl text-black text-center mb-4">4.3</h2>
                                            <div className="flex gap-2 my-6 w-48 mx-4 md:mx-0">
                                                <StarRatings
                                                    rating={4.5}
                                                    starDimension="30px"
                                                    starSpacing="2px"
                                                    starRatedColor="#FBBF24"
                                                    starEmptyColor="aliceblue"
                                                />
                                            </div>
                                            <p className="font-normal text-lg leading-8 text-gray-400">46 Ratings</p>
                                        </div>

                                        <div
                                            className="sm:pl-3 sm:border-l border-gray-200 flex items-center justify-center flex-col">
                                            <h2 className="font-manrope font-bold text-5xl text-black text-center mb-4">4.8</h2>
                                            <div className="flex gap-2 my-6 w-48 mx-4 md:mx-0">
                                                <StarRatings
                                                    rating={4.5}
                                                    starDimension="30px"
                                                    starSpacing="2px"
                                                    starRatedColor="#FBBF24"
                                                    starEmptyColor="aliceblue"
                                                />
                                            </div>
                                            <p className="font-normal text-lg leading-8 text-gray-400">Last Month</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 md:col-span-4 max-lg:mt-8 md:pl-8">
                                    <div className="flex items-center flex-col justify-center w-full h-full ">
                                        <button
                                            className="rounded-full px-6 py-4 bg-indigo-600 font-semibold text-lg text-white whitespace-nowrap mb-6 w-full text-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">Write
                                            A Review</button>
                                        <button
                                            className="rounded-full px-6 py-4 bg-white font-semibold text-lg text-indigo-600 whitespace-nowrap w-full text-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200">See
                                            All Reviews</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pb-8 border-b border-gray-200 max-xl:max-w-7xl mx-4 max-xl:mx-auto playfair-display-normal">
                        <h4 className="font-manrope font-semibold text-3xl leading-10 text-black mb-6 mx-4">Most helpful positive
                            review</h4>
                        <div className="flex sm:items-center flex-col sm:flex-row justify-between mx-4 mb-4">
                            <div className="flex gap-2 my-6 w-48 mx-4 md:mx-0">
                                <StarRatings
                                    rating={4.5}
                                    starDimension="30px"
                                    starSpacing="2px"
                                    starRatedColor="#FBBF24"
                                    starEmptyColor="aliceblue"
                                />
                            </div>
                            <div className="flex items-center gap-3">
                                <h6 className="font-semibold text-lg leading-8 text-black">@john.doe</h6>
                                <p className="font-medium text-base leading-7 text-gray-400">Nov 01, 2023</p>
                            </div>
                        </div>

                        <p className="font-normal text-lg leading-8 text-gray-500 mx-4">
                            I recently had the opportunity to explore 
                        </p>

                    </div>
                </div>
            </div>
        </section>

    );
};

export default RecipeReviewSection;