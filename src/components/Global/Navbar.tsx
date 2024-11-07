"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Cookies from 'js-cookie';
import Logo from "@/Assets/logo/Cheaf's_CircleLogo_WithoutBG_1.png";
import ShineBorder from '@/components/ui/shine-border';
import DropdownProfile from './Dropdown';
import { useAuthStore } from '@/zustand/store/authStore';

export default function NavbarComponent() {
    const [state, setState] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const { userData, setUserData } = useAuthStore();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const userDataFromCookie = Cookies.get('userData');
        if (userDataFromCookie) {
            setUserData(JSON.parse(userDataFromCookie));
        }
    }, [setUserData]);

    if (!isMounted) return null;

    const navigation = [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Recipe", path: "/recipes/recipe" },
        { title: "Contact", path: "/contact" }
    ];

    return (
        <nav className="bg-white max-w-7xl mx-auto md:rounded-full fixed top-0 md:top-5 left-0 right-0 shadow-md z-50 ">
            <ShineBorder
                borderRadius={50}
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
                <div className="items-center px-4 max-w-7xl md:flex md:px-8">
                    <div className="flex items-center justify-between py-3 md:block">
                        <Link href="/">
                            <Image
                                src={Logo}
                                width={120}
                                height={50}
                                alt="Float UI logo"
                            />
                        </Link>
                        <div className="md:hidden z-50">
                            <button
                                className="text-gray-500 hover:text-gray-800"
                                onClick={() => setState(!state)}
                            >
                                {state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'} z-50`}>
                        <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                            {navigation.map((item, idx) => (
                                <li key={idx} className="text-gray-700 hover:text-indigo-600 text-sm cursor-pointer z-50">
                                    <Link href={item.path} className="block text-center">
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                            <span className='hidden w-px h-6 bg-gray-300 md:block'></span>
                            <div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'>
                                {!userData ? (
                                    <>
                                        <li>
                                            <Link href="/login" className="block py-3 text-center text-gray-700 hover:text-indigo-600 border rounded-lg md:border-none text-sm">
                                                Log in
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/register" className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline text-sm">
                                                Sign in
                                            </Link>
                                        </li>
                                    </>
                                ) : (
                                    <DropdownProfile userData={userData} />
                                )}
                            </div>
                        </ul>
                    </div>
                </div>
            </ShineBorder>
        </nav>
    );
}
