import Image from "next/image";

const TrendingRecipeCard = () => {
    return (
            <div className="relative mx-auto mt-6 max-w-lg my-16 w-[370px] rounded-sm transition">
                <div className="relative bg-white p-8 shadow-md z-10 rounded-lg w-[370px]">
                    <div className="flex">
                        <div className="flex-1">
                            <span className=" text-gray-400 rounded-full border border-gray-400 w-6 h-6 flex items-center justify-center text-xs">
                                01
                            </span>
                            <span className="block text-gray-400 mt-4 text-xs uppercase text-left">
                                John Smith
                            </span>
                            <h2 className="text-3xl md:text-5xl font-light mt-4 text-left">New Brunch Recipe</h2>
                            <p className="mt-4 text-gray-600 text-sm text-left">
                                These last few weeks I have been working hard on a new brunch recipe for you all.
                            </p>
                            <div className="text-right mt-4">
                                <div className="relative text-sm font-bold uppercase tracking-widest cursor-pointer">
                                    Read
                                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 h-px bg-gray-300 w-3/4 mr-16"></div>
                                </div>
                            </div>
                            {/* <span className=" text-gray-400 rounded-full border border-gray-400 w-6 h-6 flex items-center justify-center text-xs float-right">
                            C
                        </span> */}
                        </div>

                        <Image
                            src="https://s15.postimg.cc/temvv7u4r/recipe.jpg"
                            alt="Recipe Image"
                            className="ml-4 rounded-lg w-40 object-cover"
                            width={160}
                            height={160}
                        />
                    </div>
                </div>

                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-4/5 bg-white shadow-2xl h-px"></div>
            </div>
    );
};

export default TrendingRecipeCard;