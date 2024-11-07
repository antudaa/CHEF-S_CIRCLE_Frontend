"use client";
import React from "react";
import { TbListDetails } from "react-icons/tb";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalTrigger,
} from "../AceternityUI/animated-model";
import { TRecipe } from "@/types";
import { IoTimerOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { FaNutritionix } from "react-icons/fa";
import { MdOutlineFoodBank } from "react-icons/md";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { BiLike } from "react-icons/bi";


export function RecipeDetailsModel({ recipe }: { recipe: TRecipe }) {
    const handleOnClick = () => {
    }

    return (
        <div className="flex items-center justify-center">
            <Modal>
                <div onClick={handleOnClick}>
                    <ModalTrigger
                        className="bg-indigo-50 text-indigo-600 flex justify-center group/modal-btn rounded-full py-1 border border-indigo-600">
                        <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                            Details
                        </span>
                        <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                            <TbListDetails className="size-4 text-indigo-600" />
                        </div>
                    </ModalTrigger>
                </div>
                <ModalBody>
                    <ModalContent>
                        <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                            {recipe?.name}{" "}
                            <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                                Category : {recipe?.category}
                            </span>{" "}
                            {/* now! ✈️ */}
                        </h4>
                        <div className="flex justify-center items-center">
                            {recipe?.images.map((image, idx) => (
                                <motion.div
                                    key={"images" + idx}
                                    style={{
                                        rotate: Math.random() * 20 - 10,
                                    }}
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: 0,
                                        zIndex: 100,
                                    }}
                                    whileTap={{
                                        scale: 1.1,
                                        rotate: 0,
                                        zIndex: 100,
                                    }}
                                    className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                                >
                                    <Image
                                        src={image}
                                        alt="bali images"
                                        width="500"
                                        height="500"
                                        className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                                    />
                                </motion.div>
                            ))}
                        </div>
                        <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-between max-w-sm mx-auto">
                            <div className="flex  items-center justify-center">
                                <FaRegStar className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                    {recipe?.rating} Ratings
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <IoTimerOutline className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                    Cooking : {recipe?.cookingTime}
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <IoTimerOutline className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                    Prep : {recipe?.preppingTime}
                                </span>
                            </div>
                            <div className="flex  items-center justify-center">
                                <FaNutritionix className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                    Calories : {recipe?.nutrations?.calories}
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <FaNutritionix className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                    Protein : {recipe?.nutrations?.protein}
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <FaNutritionix className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                    Carbs : {recipe?.nutrations?.carbs}
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <FaNutritionix className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                    Fats : {recipe?.nutrations?.fats}
                                </span>
                            </div>
                        </div>
                        <div className="py-2 flex flex-wrap gap-x-4 gap-y-6 items-start justify-between max-w-sm mx-auto">
                            <p>
                                {recipe?.description}
                            </p>
                        </div>
                        <div className="py-4 flex flex-wrap gap-x-4 gap-y-6 items-start justify-between max-w-sm mx-auto">
                            <div className="flex  items-center justify-center">
                                <MdOutlineFoodBank className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                    Servings : {recipe?.servings}
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <BiUpvote className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                    Upvote : {recipe?.upvotes}
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <BiDownvote className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                    Downvote : {recipe?.downvotes}
                                </span>
                            </div>
                            <div className="flex  items-center justify-center">
                                <BiLike className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                    Likes : {recipe?.likes}
                                </span>
                            </div>
                        </div>

                        <div className="py-6 flex flex-col max-w-sm mx-auto">
                            <p className="text-xl font-bold playfair-display-bold mb-4">Steps</p>
                            <ol className="list-decimal list-inside space-y-4">
                                {recipe?.steps?.map((step, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="font-semibold text-lg mr-2">{index + 1}.</span>
                                        <span className="flex-grow">{step?.instructions}</span>
                                        <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200 flex items-center ml-4">
                                            <IoTimerOutline className="mr-1" /> {step?.duration}
                                        </span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </ModalContent>
                </ModalBody>
            </Modal>
        </div>
    );
}
