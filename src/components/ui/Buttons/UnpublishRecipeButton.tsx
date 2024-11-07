import { ModalTrigger, Modal } from "../AceternityUI/animated-model";
import { MdOutlineUnpublished } from "react-icons/md";
import { Popconfirm, Button, message } from 'antd';
import { unPublishRecipe } from "@/services/RecipeService/recipeService";
import { useRecipeStore } from "@/zustand/store/recipeStore";
import { TError } from "@/types";

const UnpublishRecipeButton = ({ recipeId }: { recipeId: string }) => {
    const { unpublishRecipeState } = useRecipeStore();

    const handleUnpublish = async () => {
        try {
            const res = await unPublishRecipe(recipeId);
            if (res?.success) {
                message.success(`Recipe unpublish successfully.`);
                unpublishRecipeState(recipeId);
            }
        } catch (err: unknown) {
            if (err && typeof err === 'object' && 'data' in err) {
                const error = err as TError;
                message.error(`${error?.data?.message} Check slot availability.` || 'UnPublish Recipe failed.');
            } else {
                message.error('An unknown error occurred.');
            }
        }
    }

    return (
        <Popconfirm
            title="Unpublish the Recipe"
            description="Are you sure to unpublish this Recipe?"
            okText="Yes"
            cancelText="No"
            onConfirm={handleUnpublish}
        >
            <button>
                <Modal>
                    <ModalTrigger
                        className="bg-orange-50 text-orange-600 flex justify-center group/modal-btn rounded-full py-1 border border-orange-600"
                    >
                        <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                            Unpublish
                        </span>
                        <Button className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 border-none bg-orange-50 text-white z-20">
                            <MdOutlineUnpublished className="size-4 text-orange-600" />
                        </Button>
                    </ModalTrigger>
                </Modal>
            </button>
        </Popconfirm>
    );
};

export default UnpublishRecipeButton;