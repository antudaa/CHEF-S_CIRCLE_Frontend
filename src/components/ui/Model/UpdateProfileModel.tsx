"use client"
import React, { useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import {
    Modal,
    Form,
    Input,
} from 'antd';

const { TextArea } = Input;

const UpdateProfile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
    const onFinish = (values: { name: string, bio: string }) => {
        console.log('Form Submitted:', values);
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
                    onFinish={onFinish}
                >
                    <Form.Item label="Name" name="name">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Bio" name="bio">
                        <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
                        <button type="submit" className="ant-btn ant-btn-primary">
                            Submit
                        </button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default UpdateProfile;
