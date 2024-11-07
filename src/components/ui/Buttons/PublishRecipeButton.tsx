import { message } from "antd";
import { ModalTrigger, Modal } from "../AceternityUI/animated-model";
import { MdOutlinePublish } from "react-icons/md";
import { publishRecipe } from "@/services/RecipeService/recipeService";
import { useRecipeStore } from "@/zustand/store/recipeStore";
import { TError } from "@/types";

const PublishRecipeButton = ({ recipeId }: { recipeId: string }) => {
    const { publishRecipeState } = useRecipeStore();
    const handleClick = async () => {
        try {
            const res = await publishRecipe(recipeId);
            if (res?.success) {
                message.success(`Recipe publish successfully.`);
                publishRecipeState(recipeId);
            }
        } catch (err: unknown) {
            if (err && typeof err === 'object' && 'data' in err) {
                const error = err as TError;
                message.error(`${error?.data?.message} Check slot availability.` || 'Publish Recipe failed.');
            } else {
                message.error('An unknown error occurred.');
            }
        }
    }

    return (
        <Modal>
            <div onClick={handleClick}>
                <ModalTrigger
                    className="bg-teal-50 text-teal-600 flex justify-center group/modal-btn rounded-full py-1 border border-teal-600">
                    <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                        Publish
                    </span>
                    <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                        <MdOutlinePublish className="size-4 text-teal-600" />
                    </div>
                </ModalTrigger>
            </div>
        </Modal>
    );
};

export default PublishRecipeButton;