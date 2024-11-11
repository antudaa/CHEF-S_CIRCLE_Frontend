"use client"
import React, { useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import {
    Modal,
    Form,
    Input,
    message,
} from 'antd';
import { useUpdateUserDataMutation } from '@/redux/features/users/userApi';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser, setUser, useCurrentToken, useRefreshToken } from '@/redux/features/auth/authSlice';
import { TError } from '@/types';
import { Button } from '../button';
import UploadButton from '../Buttons/UploadButton';

const { TextArea } = Input;

type TUpload = {
    profileImage?: {
        file?: {
            response?: {
                display_url: string;
            };
        };
    };
};

const UpdateProfile = () => {
    const userData = useSelector(selectCurrentUser);
    const accessToken = useSelector(useCurrentToken);
    const refreshToken = useSelector(useRefreshToken);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [updateUserData] = useUpdateUserDataMutation();
    const [profileImage, setProfileImage] = useState<string>('');

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // Form submission handler
    const handleUpdateUserData = async (values: { name: string, bio: string, profileImage: TUpload }) => {
        const id = userData?._id;
        const updatedData = {
            name: values?.name,
            bio: values?.bio,
            profileImage: values?.profileImage?.file?.response?.display_url || userData?.profileImage
        }

        try {
            const res = await updateUserData({ id, accessToken, updatedData }).unwrap();
            if (res.statusCode === 200) {
                dispatch(setUser({
                    user: res.data,
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                }));
                message.success(res.message);
                setIsModalOpen(false);
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

    const handleFileUploaded = (url: string) => {
        setProfileImage(url);
    };

    return (
        <>
            <button
                onClick={showModal}
                className="bg-blue-100 hover:bg-blue-500 hover:text-white text-blue-700 py-2 px-4 rounded w-full border border-blue-500 flex gap-4">
                <FaRegEdit className="my-auto" />
                Update Profile
            </button>

            <Modal title="Update Profile" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    style={{ maxWidth: 600 }}
                    onFinish={handleUpdateUserData}
                >
                    <Form.Item label="Name" name="name">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Bio" name="bio">
                        <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item
                        name="profileImage"
                        initialValue={profileImage}
                    >
                        <UploadButton name="profileImage" onFileUploaded={handleFileUploaded} />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
                        <Button type="submit" className="w-full bg-blue-500">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default UpdateProfile;
