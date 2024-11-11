"use client";
import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown, message, Space } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { TError, TUser } from '@/types';
import { useDispatch } from 'react-redux';
import { logout } from '@/redux/features/auth/authSlice';
import { useLogoutUserMutation } from '@/redux/features/auth/authApi';
import { useRouter } from 'next/navigation';

const DropdownProfile = ({ userData }: { userData: Partial<TUser> }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [logoutUser] = useLogoutUserMutation();

  const handleLogout = async () => {
    try {
        await logoutUser({}).unwrap();
        dispatch(logout());
        message.success("Logged out successfully");
        router.push('/');
    } catch (err: unknown) {
        if (err && typeof err === 'object' && 'data' in err) {
            const error = err as TError;
            message.error(`${error?.data?.message}` || 'Login failed! Please try again.');
        } else {
            message.error('An unknown error occurred.');
        }
    }
};

  // Define menu items including the Logout option
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link rel="noopener noreferrer" href={`/${userData?.role}/profile`}>
          Dashboard
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
    {
      key: '4',
      label: (
        <button
          onClick={handleLogout}
          className="w-full text-left"
        >
          Logout
        </button>
      ),
    },
  ];

  return (
    <Space direction="vertical">
      <Space wrap>
        <Dropdown menu={{ items }} placement="bottom">
          <div className="relative z-50 cursor-pointer">
            <Image
              className="w-10 h-10 rounded-full border-2 border-solid border-gray-500"
              width={40}
              height={40}
              src={userData?.profileImage as string}
              alt="Bordered rounded avatar"
            />
            <span className="bottom-0 left-7 absolute w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></span>
          </div>
        </Dropdown>
      </Space>
    </Space>
  );
};

export default DropdownProfile;
