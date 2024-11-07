// UnBlockUserButton.tsx
import { unblockUser } from "@/services/User/userService";
import { TError, TUser } from "@/types";
import { useUserStore } from "@/zustand/store/userStore";
import { Popconfirm, message } from "antd";

const UnBlockUserButton = ({ user }: { user: TUser }) => {
    const { unblockUser: unblockUserInStore } = useUserStore();

    const handleUnblockUser = async () => {
        try {
            const res = await unblockUser(user?._id as string);
            if (res?.success) {
                message.success(`${user?.name} Unblocked successfully.`);
                unblockUserInStore(user?._id as string);
            }
        } catch (err: unknown) {
            if (err && typeof err === 'object' && 'data' in err) {
                const error = err as TError;
                message.error(`${error?.data?.message} Check slot availability.` || 'UnBlock User failed.');
            } else {
                message.error('An unknown error occurred.');
            }
        }
    };

    return (
        <Popconfirm
            title="Unblock the User"
            description="Are you sure to Unblock this User?"
            okText="Yes"
            cancelText="No"
            onConfirm={handleUnblockUser}
        >
            <button className="bg-green-100 text-green-600 border border-green-600 rounded-full px-3">Unblock</button>
        </Popconfirm>
    );
};

export default UnBlockUserButton;
