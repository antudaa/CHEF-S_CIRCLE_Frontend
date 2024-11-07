"use client"
import React, { useEffect, useState } from "react";
import Logo from "@/Assets/logo/Cheaf's_CircleLogo_WithoutBG_1.png";
import Image from "next/image";

const SettingsPage = () => {
    // State to hold the countdown time
    const [time, setTime] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    useEffect(() => {
        // Countdown timer logic
        const countdown = () => {
            let dest = new Date("Mar 31, 2024 23:59:59").getTime();
            const timerInterval = setInterval(() => {
                const now = new Date().getTime();
                const diff = dest - now;

                // Check if the countdown has reached zero or negative
                if (diff <= 0) {
                    // Set the destination date to the same day next month
                    const nextMonthDate = new Date();
                    nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);

                    // If the current month is December, set the destination date to the same day next year
                    if (nextMonthDate.getMonth() === 0) {
                        nextMonthDate.setFullYear(nextMonthDate.getFullYear() + 1);
                    }

                    dest = nextMonthDate.getTime();
                    return; // Exit the function
                }

                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);

                setTime({
                    days: days < 10 ? `0${days}` : `${days}`,
                    hours: hours < 10 ? `0${hours}` : `${hours}`,
                    minutes: minutes < 10 ? `0${minutes}` : `${minutes}`,
                    seconds: seconds < 10 ? `0${seconds}` : `${seconds}`,
                });
            }, 1000);

            return () => clearInterval(timerInterval);
        };

        countdown();
    }, []);

    return (
        <section className="py-24 mx-auto">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full md:px-16 px-10 md:pt-16 pt-10 pb-10 bg-indigo-50 rounded-2xl flex-col justify-end items-center lg:gap-28 md:gap-16 gap-10 inline-flex">
                    <div className="flex-col justify-end items-center lg:gap-16 gap-10 flex">
                        <Image src={Logo} alt="Logo" className=" w-52 h-32" width={300} height={300} />
                        <div className="flex-col justify-center items-center gap-10 flex">
                            <div className="flex-col justify-start items-center gap-2.5 flex">
                                <h2 className="text-center text-indigo-500 md:text-6xl text-5xl font-bold font-manrope leading-normal">
                                    Coming Soon
                                </h2>
                                <p className="text-center text-gray-500 text-base font-normal leading-relaxed">
                                    Just 20 days remaining until the big reveal of our new product!
                                </p>
                            </div>
                            <div className="flex items-start justify-center w-full gap-2 count-down-main">
                                <div className="timer flex flex-col gap-0.5">
                                    <div>
                                        <h3 className="countdown-element days text-center text-gary-900 text-2xl font-bold font-manrope leading-9">
                                            {time.days}
                                        </h3>
                                    </div>
                                    <p className="text-center text-gray-500 text-xs font-normal leading-normal w-full">
                                        DAYS
                                    </p>
                                </div>
                                <h3 className="w-3 text-center text-gray-500 text-2xl font-medium font-manrope leading-9">
                                    :
                                </h3>
                                <div className="timer flex flex-col gap-0.5">
                                    <div>
                                        <h3 className="countdown-element hours text-center text-gary-900 text-2xl font-bold font-manrope leading-9">
                                            {time.hours}
                                        </h3>
                                    </div>
                                    <p className="text-center text-gray-500 text-xs font-normal leading-normal w-full">
                                        HRS
                                    </p>
                                </div>
                                <h3 className="w-3 text-center text-gray-500 text-2xl font-medium font-manrope leading-9">
                                    :
                                </h3>
                                <div className="timer flex flex-col gap-0.5">
                                    <div>
                                        <h3 className="countdown-element minutes text-center text-gray-900 text-2xl font-bold font-manrope leading-9">
                                            {time.minutes}
                                        </h3>
                                    </div>
                                    <p className="text-center text-gray-500 text-xs font-normal leading-normal w-full">
                                        MINS
                                    </p>
                                </div>
                                <h3 className="w-3 text-center text-gray-500 text-2xl font-medium font-manrope leading-9">
                                    :
                                </h3>
                                <div className="timer flex flex-col gap-0.5">
                                    <div>
                                        <h3 className="countdown-element seconds text-center text-gary-900 text-2xl font-bold font-manrope leading-9">
                                            {time.seconds}
                                        </h3>
                                    </div>
                                    <p className="text-center text-gray-500 text-xs font-normal leading-normal w-full">
                                        SECS
                                    </p>
                                </div>
                            </div>
                            <div className="w-full flex-col justify-center items-center gap-5 flex">
                                <h6 className="text-center text-indigo-500 text-base font-semibold leading-relaxed">
                                    Launched Date: November 03, 2024
                                </h6>
                                <div className="justify-center items-center gap-2.5 flex sm:flex-row flex-col">
                                    <input
                                        type="text"
                                        className="w-80 focus:outline-none px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-white-900 placeholder-gray-400 text-sm font-normal leading-relaxed h-10 bg-white rounded-lg border border-gray-200 justify-start items-center gap-1.5 inline-flex"
                                        placeholder="Type your mail..."
                                    />
                                    <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-500 hover:bg-indigo-700 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                                        <span className="px-1.5 text-white text-sm font-medium leading-6 whitespace-nowrap">
                                            Notify Me
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-center text-gray-500 text-sm font-normal leading-snug">
                        Get in touch with us:{" "}
                        <a
                            href="mailto:mail@pagedone.com"
                            className="hover:text-gray-100 transition-all duration-700 ease-in-out"
                        >
                            antu.programmer@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SettingsPage;