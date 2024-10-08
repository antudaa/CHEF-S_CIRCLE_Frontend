'use client';
import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <Link rel="noopener noreferrer" href="/admin/dashboard">
                Dashboard
            </Link>
        ),
    },
    {
        key: '2',
        label: (
            <Link rel="noopener noreferrer" href="/user/profile">
                Profile
            </Link>
        ),
    },
    {
        key: '3',
        label: (
            <Link rel="noopener noreferrer" href="/">
                Settings
            </Link>
        ),
    },
];

const DropdownProfile = ({ userData}) => (
    <Space direction="vertical">
        <Space wrap>
            <Dropdown menu={{ items }} placement="bottom">
                <div className='relative z-50 cursor-pointer'>
                    <Image className='w-10 h-10 rounded-full border-2 border-solid border-gray-500' width={40} height={40} src={userData?.profileImage as string} alt='Bordered rounded avatar' />
                    <span className='bottom-0 left-7 absolute  w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full'></span>
                </div>
            </Dropdown>
        </Space>
    </Space>
);

export default DropdownProfile;