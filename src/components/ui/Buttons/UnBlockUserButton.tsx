import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { useUnBlockUserMutation } from "@/redux/features/users/userApi";
import { TError, TUser } from "@/types";
import { Popconfirm, message } from "antd";
import { useSelector } from "react-redux";

const UnBlockUserButton = ({ user }: { user: TUser }) => {
    const token = useSelector(useCurrentToken);
    const [unBlockUserMutation] = useUnBlockUserMutation();

    const handleUnblockUser = async () => {
        try {
            const res = await unBlockUserMutation({ id: user._id, token }).unwrap();
            if (res?.success) {
                message.success(`${user?.name} UnBlocked successfully.`);
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
