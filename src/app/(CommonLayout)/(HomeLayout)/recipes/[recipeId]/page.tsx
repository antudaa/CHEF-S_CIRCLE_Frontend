"use client"
import { TRecipe } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { CiCircleQuestion } from "react-icons/ci";
import { ImSpoonKnife } from "react-icons/im";
import { IoMdTime } from "react-icons/io";
import { BiSolidLeaf } from "react-icons/bi";
import StarRatings from "react-star-ratings";
import RecipeReviewSection from "@/components/Sections/RecipeReviewSection";
import CommentsSection from "@/components/Sections/CommentsSection";


interface IRecipeID {
    recipeId: string;
}

const RecipeDetailsPage = ({ params }: { params: IRecipeID }) => {
    const [recipe, setRecipe] = useState<TRecipe | null>(null);
    const [imageIndex, setImageIndex] = useState(0);

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    // Fetch recipe details when the component mounts
    useEffect(() => {
        if (params) {
            const fetchRecipe = async () => {
                try {
                    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/recipe/${params?.recipeId}`);
                    const data = await response.json();
                    setRecipe(data.data);
                } catch (error) {
                    console.error("Error fetching recipe details:", error);
                }
            };
            fetchRecipe();
        }
    }, [params?.recipeId, params]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <section className="min-h-screen mt-32 mx-auto max-w-7xl">
            <article className="max-w-7xl mx-4 md:mx-10">
                {/* Recipe Images */}
                <picture>
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                        className="lg:flex-1 p-4 md:p-0">
                        <div className="h-[300px] md:h-[500px] w-full rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                            {recipe?.images[imageIndex] ? (
                                <Image className="h-full w-full object-cover rounded-lg" src={recipe?.images[imageIndex]} alt="Recipe Image" width={500} height={500} />
                            ) : (
                                <span className="text-5xl text-gray-400">No Image</span>
                            )}
                        </div>

                        <div className="flex -mx-2 mb-4">
                            {recipe?.images.map((imgUrl: string, i: number) => (
                                <div key={i} className="flex-1 px-2">
                                    <button
                                        onClick={() => setImageIndex(i)}
                                        className={`focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center ${imageIndex === i ? 'ring-2 ring-indigo-300 ring-inset' : ''}`}
                                    >
                                        <Image className="h-full w-full object-cover rounded-lg" src={imgUrl} alt="Recipe Image" width={500} height={500} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </picture>

                {/* Header Recipe Name  */}
                <h2 className="playfair-display-bold text-4xl md:text-6xl mx-4 md:mx-0">{recipe?.name}</h2>
                <p className="playfair-display-normal-italic text-sm md:text-xl mt-4 p-2 border border-indigo-500 rounded-full w-1/2 md:w-1/6 text-center text-nowrap mx-4 md:mx-0">{recipe?.category} Item</p>

                {/* Time Count */}
                <div className="mt-10 w-full md:w-1/2 flex gap-6 md:gap-10 mx-4 md:mx-0 flex-wrap">
                    <p className="flex gap-2"> <ImSpoonKnife className="my-auto" /><span className="playfair-display-bold">{recipe?.servings} Servings</span></p>

                    <p className="flex gap-2"> <IoMdTime className="my-auto" /> Prep <span className="playfair-display-bold">{recipe?.preppingTime}m</span></p>

                    <p className="flex gap-2"> <IoMdTime className="my-auto" /> Cook <span className="playfair-display-bold">{recipe?.cookingTime}m</span></p>
                </div>

                {/* Star Rating */}
                <div className="flex gap-2 my-6 w-48 mx-4 md:mx-0">
                    <StarRatings
                        rating={recipe?.rating}
                        starDimension="30px"
                        starSpacing="2px"
                        starRatedColor="#FBBF24"
                        starEmptyColor="aliceblue"
                    />
                </div>

                {/* Ingredients Info Card */}
                <div className="my-10 py-3 px-5 bg-indigo-200 flex justify-between w-10/12 md:w-1/2 playfair-display-normal mx-4 md:mx-0 rounded-sm">
                    <div className="flex gap-2">
                        <BiSolidLeaf className="my-auto w-4 h-4" />
                        <p className="">This recipe contains
                            <span className="playfair-display-bold">
                                {` ${recipe?.ingredients?.length}`} different ingredients.
                            </span>
                        </p>
                    </div>
                    <CiCircleQuestion className="my-auto w-6 h-6" />
                </div>

                {/* Nutrations */}
                <p className="playfair-display-normal text-xl mx-4 md:mx-0">Nutrations per servings</p>
                <div className="my-6 flex flex-wrap gap-6 mx-4 md:mx-0">
                    <p className="playfair-display-normal flex flex-col p-3 bg-indigo-100 rounded-full">
                        <span className="playfair-display-bold p-2 w-[45px] h-[45px] rounded-full bg-white text-center text-md mx-auto">{recipe?.nutrations?.calories}</span>
                        <span className="mx-auto mt-3">Calories</span>
                    </p>
                    <p className="playfair-display-normal flex flex-col p-3 bg-indigo-100 rounded-full">
                        <span className="playfair-display-bold p-2 w-[45px] h-[45px] rounded-full bg-white text-center text-md mx-auto">{recipe?.nutrations?.protein}g</span>
                        <span className="mx-auto mt-3">Protine</span>
                    </p>
                    <p className="playfair-display-normal flex flex-col p-3 bg-indigo-100 rounded-full">
                        <span className="playfair-display-bold p-2 w-[45px] h-[45px] rounded-full bg-white text-center text-md mx-auto">{recipe?.nutrations?.carbs}g</span>
                        <span className="mx-auto mt-3">Carbs</span>
                    </p>
                    <p className="playfair-display-normal flex flex-col p-3 bg-indigo-100 rounded-full">
                        <span className="playfair-display-bold p-2 w-[45px] h-[45px] rounded-full bg-white text-center text-md mx-auto">{recipe?.nutrations?.fats}g</span>
                        <span className="mx-auto mt-3">Fats</span>
                    </p>
                </div>

                <hr className="my-6 800 border border-gray-800 mx-4 md:mx-0" />

                {/* Description */}
                <h3 className="font-fancy text-2xl text-nutmeg playfair-display-normal uppercase mb-2">Description</h3>
                <p className="playfair-display-normal">{recipe?.description}</p>

                <div className="flex flex-col md:flex-row justify-evenly mx-4 md:mx-0 my-10">
                    {/* Ingredients */}
                    <div className="w-12/12 md:w-5/12">
                        <h3 className="font-fancy text-2xl text-nutmeg playfair-display-normal uppercase mb-8">Ingredients</h3>
                        {
                            recipe?.ingredients.map((ingredient) => {
                                return (
                                    <div key={ingredient?.name} className="flex justify-between my-2">
                                        <p className="playfair-display-normal">{ingredient?.name}</p>

                                        <p >{ingredient?.quantity} {ingredient?.unit}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <hr className="mb-16 hidden md:block 800 border h-96 mx-10 border-gray-800 rotate-180" />

                    {/* Instructions */}
                    <div className="w-12/12 md:w-7/12 my-10 md:my-0">
                        <h3 className="font-fancy text-2xl text-nutmeg playfair-display-normal uppercase mb-8">Instructions</h3>
                        {
                            recipe?.steps.map((step, index) => {
                                return (
                                    <div key={index} className="flex align-middle gap-4 playfair-display-normal mt-4 my-auto">
                                        <span className="p-3 w-9 h-9 rounded-full bg-indigo-200 text-xs text-center">{index + 1}</span>
                                        <div className="flex flex-col gap-2">
                                            <p className="flex gap-4 my-auto">{step?.instructions} <span className="px-3 py-0 text-sm border border-indigo-500 my-auto text-nowrap rounded-full">{step?.duration} min</span></p>

                                            <div className="py-1 px-5 bg-indigo-100 flex justify-between gap-6 playfair-display-normal mx-4 md:mx-0 rounded-sm">
                                                <p className="">
                                                    Tips: {step?.tips}
                                                </p>
                                                <CiCircleQuestion className="my-auto w-6 h-6" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                {/* Author Profile */}
                <div className="my-10">
                    <div className="py-6 bg-indigo-100 h-full lg:h-[110px] flex flex-col md:flex-row gap-8">
                        <Image className="h-40 w-40 object-cover rounded-lg -mt-[75px] md:-mt-[55px] mx-auto md:mx-0 md:ml-10" src={recipe?.author?.profileImage} alt="Recipe Image" width={100} height={100} />

                        <div className="flex flex-col md:flex-row gap-10 justify-between p-6 md:p-0">
                            <div className="mx-auto md:mx-0">
                                <p className="playfair-display-normal text-2xl mb-2 text-nowrap">{recipe?.author?.name}</p>
                                <span className="py-1 px-4 text-sm capitalize border border-indigo-500 rounded-full">Author</span>
                            </div>

                            <div className=" flex flex-wrap gap-6 justify-center md:justify-start">
                                <p className="playfair-display-normal flex gap-4 p-3 bg-indigo-50 border border-indigo-500 rounded-full h-16">
                                    <span className="playfair-display-bold p-2 w-[45px] h-[45px] rounded-full bg-white my-auto text-center text-md mx-auto">{recipe?.author?.followers?.length}</span>
                                    <span className="mx-auto my-auto">Followers</span>
                                </p>
                                <p className="playfair-display-normal flex gap-4 p-3 bg-indigo-50 border border-indigo-500 rounded-full h-16">
                                    <span className="playfair-display-bold p-2 w-[45px] h-[45px] rounded-full bg-white my-auto text-center text-md mx-auto">{recipe?.author?.following?.length}</span>
                                    <span className="mx-auto my-auto">Following</span>
                                </p>
                                <p className="playfair-display-normal flex gap-4 p-3 bg-indigo-50 border border-indigo-500 rounded-full h-16">
                                    <span className="playfair-display-bold p-2 w-[45px] h-[45px] rounded-full bg-white my-auto text-center text-md mx-auto">{recipe?.author?.recipeCount}</span>
                                    <span className="mx-auto my-auto">Recipes</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <RecipeReviewSection />

            <CommentsSection />
        </section>
    );
};

export default RecipeDetailsPage;