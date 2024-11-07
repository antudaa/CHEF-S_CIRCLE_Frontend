const DetailsRecipeButton = ({ recipeId }: { recipeId: string }) => {
    const handleClick = () => {
        console.log(recipeId);
    }

    return (
        <button
            onClick={handleClick}
            className="py-1.5 px-2.5 bg-indigo-50 rounded-full flex justify-center items-center gap-1 border border-indigo-500">
            <span className="font-medium text-xs text-indigo-600">Details</span>

        </button>
    );
};

export default DetailsRecipeButton;