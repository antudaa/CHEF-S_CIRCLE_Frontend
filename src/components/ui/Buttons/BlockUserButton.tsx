import { blockUser } from "@/services/User/userService";
import { TError, TUser } from "@/types";
import { useUserStore } from "@/zustand/store/userStore";
import { Popconfirm, message } from "antd";

const BlockUserButton = ({ user }: { user: TUser }) => {
    const { blockUser: blockUserInStore } = useUserStore();

    const handleBlockUser = async () => {
        try {
            const res = await blockUser(user?._id as string);
            if (res?.success) {
                message.success(`${user?.name} Blocked successfully.`);
                // Update the state
                blockUserInStore(user?._id as string);
            }
        } catch (err: unknown) {
            if (err && typeof err === 'object' && 'data' in err) {
                const error = err as TError;
                message.error(`${error?.data?.message} Check slot availability.` || 'Block User failed.');
            } else {
                message.error('An unknown error occurred.');
            }
        }
    };

    return (
        <Popconfirm
            title="Block the User"
            description="Are you sure to Block this User?"
            okText="Yes"
            cancelText="No"
            onConfirm={handleBlockUser}
        >
            <button className="bg-red-100 text-red-600 border border-red-600 rounded-full px-3">Block</button>
        </Popconfirm>
    );
};

export default BlockUserButton;
