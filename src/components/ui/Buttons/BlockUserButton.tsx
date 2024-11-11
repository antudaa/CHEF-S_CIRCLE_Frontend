import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { useBlockUserMutation } from "@/redux/features/users/userApi";
import { TError, TUser } from "@/types";
import { Popconfirm, message } from "antd";
import { useSelector } from "react-redux";

const BlockUserButton = ({ user }: { user: TUser }) => {
    const token = useSelector(useCurrentToken);
    const [blockUserMutation] = useBlockUserMutation();

    const handleBlockUser = async () => {
        try {
            const res = await blockUserMutation({ id: user._id, token }).unwrap();
            if (res?.success) {
                message.success(`${user?.name} blocked successfully.`);
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
