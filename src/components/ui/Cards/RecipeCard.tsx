import { TRecipe } from "@/types";
import Image from "next/image";
import StarRatings from "react-star-ratings";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import ShineBorder from "../shine-border";
import PremiumAccessButton from "../Buttons/PremiumAccessButton";
import LockedImage from "@/Assets/Images/locked_content.png";


const RecipeCard = ({ recipe }: { recipe: TRecipe }) => {
    return (
        <aside className="col-span-12 lg:col-span-6 hover:scale-[1.02] transition-all cursor-pointer">
            <ShineBorder
                borderRadius={10}
                className="p-6 shadow-md"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
                <div className="grid grid-cols-5 gap-6 lg:h-64">
                    <div className="p-4 border-double rounded-full border-indigo-500 col-span-5 sm:col-span-2 mx-auto">
                        {
                            recipe?.isPremium ?
                                (
                                    <Image className="rounded-full object-cover w-[250px] h-[180px] my-auto bg-indigo-100 shadow-lg shadow-slate-800" src={LockedImage} alt="Recipe Image" width={600} height={600} />
                                )
                                : (
                                    <Image className="rounded-full object-cover w-[250px] h-[180px] my-auto shadow-lg shadow-slate-800" src={recipe?.images[0]} alt="Recipe Image" width={600} height={600} />
                                )
                        }
                    </div>
                    <div className="flex flex-col col-span-5 sm:col-span-3 mx-auto sm:mx-0">
                        <div className="h-full">
                            <span className="playfair-display-bold text-indigo-500">{recipe?.category}</span>
                            <h2 className="playfair-display-bold text-4xl md:w-full text-wrap pr-6">{recipe?.name}</h2>
                            <div className="flex gap-2 my-2 w-full">
                                <StarRatings
                                    rating={recipe?.rating}
                                    starDimension="15px"
                                    starSpacing="2px"
                                    starRatedColor="#ffa534"
                                    starEmptyColor="white"
                                />
                                <span className="mt-[3px] playfair-display-normal">{recipe?.rating}</span>
                            </div>
                            <span className="playfair-display-normal text-gray-500 w-48 text-wrap">{recipe?.cookingTime} Minutes / {recipe?.nutrations?.calories} Calories</span>
                        </div>

                        {
                            recipe?.isPremium ? <PremiumAccessButton /> : (
                                <Link href={`/recipes/${recipe?._id}`} className="flex align-middle gap-4 mt-8 bg-indigo-500 hover:bg-indigo-600 px-3 md:px-6 py-2 md:py-3 text-nowrap rounded-xl w-max text-white cursor-pointer z-20">
                                    View Recipe
                                    <FaArrowRight className="bg-white p-1 h-5 w-5 text-indigo-600 hover:text-indigo-600 rounded-full  my-auto -rotate-45" />
                                </Link>
                            )
                        }
                    </div>
                </div>
            </ShineBorder>
        </aside>
    );
};

export default RecipeCard;
