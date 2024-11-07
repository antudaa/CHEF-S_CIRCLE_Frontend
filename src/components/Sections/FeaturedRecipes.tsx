'use client';
import Prawn from "@/Assets/Images/Grilled_Prawns.jpg";
import grilledChicken from "@/Assets/Images/Grilled_Chicken.jpg";
import grilledWholeChicken from "@/Assets/Images/Grilled_Hole_Chicken.jpg";
import seafoodVegis from "@/Assets/Images/Seafood_Vegis.jpg";
import chickenCurry from "@/Assets/Images/Chicken_Curry.jpg";
import chicken from "@/Assets/Images/ChickenImage_1.jpg";
import ricePlater from "@/Assets/Images/Rice_Plater.jpg";
import vegis from "@/Assets/Images/Vegis.jpg";
import soup from "@/Assets/Images/Soup.jpg";
import sortedVegis from "@/Assets/Images/Sorted_Vegis.jpg";
import sandwich from "@/Assets/Images/Sandwitch.jpg";
import recipeImage1 from "@/Assets/Images/RecipeImage_1.jpg";
import recipeImage2 from "@/Assets/Images/RecipeImage_2.jpg";
import recipeImage3 from "@/Assets/Images/RecipeImage_3.jpg";
import biryani from "@/Assets/Images/BiryaniImage_1.jpg";

import { HeroParallax } from "../ui/AceternityUI/hero-parallax";

export const products = [
    {
        title: "Grilled Prawn",
        link: "https://gomoonbeam.com",
        thumbnail:
        Prawn,
    },
    {
        title: "Grilled Chicken",
        link: "https://cursor.so",
        thumbnail:
        grilledChicken,
    },
    {
        title: "Whole Grilled Chicken",
        link: "https://userogue.com",
        thumbnail:
        grilledWholeChicken,
    },

    {
        title: "Seafood Plater",
        link: "https://editorially.org",
        thumbnail:
        seafoodVegis,
    },
    {
        title: "Chicken Curry",
        link: "https://editrix.ai",
        thumbnail:
        chickenCurry,
    },
    {
        title: "Chicken",
        link: "https://app.pixelperfect.quest",
        thumbnail:
        chicken,
    },

    {
        title: "Chicken Rice",
        link: "https://algochurn.com",
        thumbnail:
        ricePlater,
    },
    {
        title: "Vegatable",
        link: "https://ui.aceternity.com",
        thumbnail:
        vegis,
    },
    {
        title: "Thai Soup",
        link: "https://tailwindmasterkit.com",
        thumbnail:
        soup,
    },
    {
        title: "Sorted Vegis",
        link: "https://smartbridgetech.com",
        thumbnail:
        sortedVegis,
    },
    {
        title: "Thai Sandwich",
        link: "https://renderwork.studio",
        thumbnail:
        sandwich,
    },

    {
        title: "Paneer Tikka Recipe",
        link: "https://cremedigital.com",
        thumbnail:
        recipeImage1,
    },
    {
        title: "Chicken Tikka Recipe",
        link: "https://goldenbellsacademy.com",
        thumbnail:
        recipeImage2,
    },
    {
        title: "Marshroom",
        link: "https://invoker.lol",
        thumbnail:
        recipeImage3,
    },
    {
        title: "Hydrabadi Biryani",
        link: "https://efreeinvoice.com",
        thumbnail:
        biryani,
    },
];

const FeaturedRecipes = () => {
    return (
        <section>
            <HeroParallax products={products} />
        </section>
    );
};

export default FeaturedRecipes;