"use client"
import Logo from "@/Assets/logo/Cheaf's_CircleLogo_WithoutBG_1.png";
import Image from "next/image";
import React, { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useAuthStore } from "@/zustand/store/authStore";
import Cookies from 'js-cookie';
import { useEffect } from "react";
import { IoHome } from "react-icons/io5";
import { BiFoodMenu } from "react-icons/bi";
import { MdManageAccounts } from "react-icons/md";
import { AiOutlineProfile } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import GlobalLoading from "@/app/loading";

const Sidebar = () => {
    const logout = useAuthStore((state) => state.logout);
    const { userData, setUserData } = useAuthStore();

    useEffect(() => {
        const userDataFromCookie = Cookies.get('userData');
        if (userDataFromCookie) {
            setUserData(JSON.parse(userDataFromCookie));
        }
    }, [setUserData]);
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const MenuItems = [
        {
            icon: <IoHome className="size-5 text-gray-600" />,
            label: "Home",
            path: "/",
        },
        {
            icon: <BiFoodMenu className="size-5 text-gray-600" />,
            label: "Recipes",
            path: "/admin/recipe-management",
        },
        ...(userData?.role === "admin"
            ? [
                {
                    icon: <MdManageAccounts className="size-5 text-gray-600" />,
                    label: "Users",
                    path: "/admin/user-management",
                },
            ]
            : []
        ),
    ];

    const SettingsMenuItems = [
        {
            icon: <AiOutlineProfile className="size-5 text-gray-600" />,
            label: "Profile",
            path: "/admin/profile",
        },
        {
            icon: <IoSettingsOutline className="size-5 text-gray-600" />,
            label: "Settings",
            path: "/admin/settings",
        },
        {
            icon: <IoLogOutOutline className="size-5 text-gray-600" />,
            label: "Logout",
            path: "logoutFunction",
        },
    ];

    if (!userData) {
        return <GlobalLoading />;
    }
    return (
        <div className="relative h-full min-h-screen">
            {/* Mobile Toggle Button */}
            <div className="md:hidden fixed top-4 left-4 z-50">
                <button
                    onClick={() => setSidebarOpen(!isSidebarOpen)}
                    className="text-neutral-800 dark:text-neutral-200 p-2 rounded-md bg-neutral-100 dark:bg-neutral-800 shadow-md"
                >
                    {isSidebarOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
                </button>
            </div>

            {/* Sidebar Overlay for Mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}

            {/* Sidebar Container */}
            <div
                className={`fixed top-0 left-0 h-full min-h-screen bg-[aliceblue] z-50 shadow-lg transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } md:translate-x-0 md:static md:shadow-none md:flex md:flex-col md:w-80 xl:w-96 xl:px-4 px-2 border-r`}
            >
                {/* Sidebar Header */}
                <div className="flex justify-between items-center p-4">
                    <a href="#">
                        <Image
                            src={Logo}
                            width={150}
                            height={150}
                            alt="Logo"
                            className="object-contain mx-auto"
                        />
                    </a>
                    {/* Close button for mobile */}
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="md:hidden text-gray-800"
                    >
                        <IconX size={24} />
                    </button>
                </div>

                {/* Profile Section */}
                <div className="w-full p-3 rounded-lg border border-gray-300">
                    <div className="w-full items-center flex">
                        <div className="w-full justify-between items-center inline-flex">
                            <div className="items-center flex">
                                <Image src={userData?.profileImage as string} width={100} height={100} alt="Profile Image" className="rounded-lg border border-indigo-500 w-16 h-16 p-[2px]" />
                                <div className="flex-col inline-flex ml-2.5">
                                    <h2 className="text-gray-700 text-sm font-semibold leading-snug">
                                        {userData?.name}
                                    </h2>
                                    <h6 className="text-black/50 text-xs font-normal leading-4">
                                        {userData?.email}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Menu Items */}
                <div className="w-full mt-4">
                    <div className="w-full h-8 px-3 items-center flex">
                        <h6 className="text-gray-500 text-xs font-semibold leading-4">MENU</h6>
                    </div>
                    <ul className="flex-col gap-1 flex">
                        {/* Home */}
                        {
                            MenuItems?.map((item, index) => (
                                <li key={index}>
                                    <Link href={item?.path}>
                                        <div className="flex-col flex p-3 bg-white rounded-lg">
                                            <div className="h-5 gap-3 flex">
                                                <div className="relative">
                                                    {item?.icon}
                                                </div>
                                                <h2 className="text-gray-500 text-sm font-medium leading-snug">{item?.label}</h2>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            ))
                        }
                        {/* Add more menu items here as needed */}
                    </ul>
                </div>

                {/* Settings and Logout Section */}
                <div className="w-full mt-4">
                    <div className="h-8 px-3 items-center inline-flex">
                        <h6 className="text-gray-500 text-xs font-semibold leading-4">SETTINGS</h6>
                    </div>
                    <ul className="flex-col gap-1 flex">
                        {SettingsMenuItems.map((item, index) => (
                            <li key={index}>
                                {item.label === "Logout" ? (
                                    <button
                                        onClick={async () => {
                                            logout()
                                        }}
                                        className="p-3 w-full rounded-lg items-center inline-flex"
                                    >
                                        <div className="h-5 items-center gap-3 flex">
                                            <div className="relative">{item.icon}</div>
                                            <h2 className="text-gray-500 text-sm font-medium leading-snug">{item.label}</h2>
                                        </div>
                                    </button>
                                ) : (
                                    <Link href={item.path}>
                                        <div className="p-3 rounded-lg items-center inline-flex">
                                            <div className="h-5 items-center gap-3 flex">
                                                <div className="relative">{item.icon}</div>
                                                <h2 className="text-gray-500 text-sm font-medium leading-snug">{item.label}</h2>
                                            </div>
                                        </div>
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Upgrade Plan Section */}
                <div className="p-6 bg-indigo-100 rounded-2xl flex-col gap-4 flex my-6">
                    <div className="flex-col gap-3 flex">
                        <div className="items-center gap-2 inline-flex">
                            <h2 className="text-gray-900 text-base font-bold leading-relaxed">
                                Upgrade To PRO🔥
                            </h2>
                        </div>
                        <h3 className="text-gray-500 text-xs font-normal leading-4">
                            Get 1 month free and unlock all pro features.
                        </h3>
                    </div>
                    <div className="gap-3 inline-flex">
                        <a href="#" className="flex rounded-full text-indigo-300 text-xs font-semibold leading-4">
                            Dismiss
                        </a>
                        <a href="#" className="flex rounded-full text-indigo-700 text-xs font-semibold leading-4">
                            Upgrade Plan
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
