import { ModalTrigger, Modal } from "../AceternityUI/animated-model";
import { RiDeleteBinLine } from "react-icons/ri";
import { Popconfirm, Button, message } from 'antd';
import { deleteRecipe } from "@/services/RecipeService/recipeService";
import { useRecipeStore } from "@/zustand/store/recipeStore";
import { TError } from "@/types";

const DeleteRecipeButton = ({ recipeId }: { recipeId: string }) => {
    const { removeRecipe } = useRecipeStore();
    const handleConfirm = async () => {
        try {
            const res = await deleteRecipe(recipeId);
            if (res?.success) {
                message.success(`Recipe deleted successfully.`);
                removeRecipe(recipeId);
            }
        } catch (err: unknown) {
            if (err && typeof err === 'object' && 'data' in err) {
                const error = err as TError;
                message.error(`${error?.data?.message} Check slot availability.` || 'Delete Recipe failed.');
            } else {
                message.error('An unknown error occurred.');
            }
        }
    };

    return (
        <Popconfirm
            title="Delete the Recipe"
            description="Are you sure to delete this Recipe?"
            okText="Yes"
            cancelText="No"
            onConfirm={handleConfirm}
        >
            <button>
                <Modal>
                    <ModalTrigger
                        className="bg-red-50 text-red-600 flex justify-center group/modal-btn rounded-full py-1 border border-red-600"
                    >
                        <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                            Delete
                        </span>
                        <Button className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 border-none bg-red-50 text-white z-20">
                            <RiDeleteBinLine className="size-4 text-red-600" />
                        </Button>
                    </ModalTrigger>
                </Modal>
            </button>
        </Popconfirm>
    );
};

export default DeleteRecipeButton;
