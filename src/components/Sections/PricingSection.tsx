"use client"
import { useState } from "react";

const PricingSection = () => {
    const [isYearly, setIsYearly] = useState(false);

    const toggleBilling = () => {
        setIsYearly(!isYearly);
    };

    const CheckIcon = () => (
        <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    return (
        <section className="py-24 playfair-display-bold">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="font-manrope text-5xl text-center font-bold text-gray-900 mb-4">Choose Your Plan</h2>
                    <p className="text-gray-500 text-center leading-6 mb-9">Explore our plans and pick what suits your cooking journey best.</p>

                    {/* Toggle Billing */}
                    <div className="flex justify-center items-center">
                        <label className="min-w-[3.5rem] text-xl text-gray-900 mr-4 font-medium">Monthly</label>
                        <input
                            type="checkbox"
                            id="billing-toggle"
                            className="relative shrink-0 size-6 bg-indigo-100 checked:bg-indigo-100 rounded-full cursor-pointer transition-colors duration-200"
                            checked={isYearly}
                            onChange={toggleBilling}
                            aria-label="Toggle billing between monthly and yearly"
                        />
                        <label className="min-w-[3.5rem] text-xl font-medium text-gray-500 ml-4">Yearly</label>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0 lg:items-center">
                    {/* Free Plan */}
                    <div className="flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl bg-gray-50 p-6 xl:py-9 xl:px-12 hover:bg-gray-100 transition-all">
                        <h3 className="font-manrope text-2xl font-bold mb-3">Free</h3>
                        <div className="flex items-center mb-6">
                            <span className="font-manrope mr-2 text-6xl font-semibold">$0</span>
                            <span className="text-xl text-gray-500">/ {isYearly ? "year" : "month"}</span>
                        </div>
                        <ul className="mb-12 space-y-6 text-left text-lg text-gray-500">
                            <li className="flex items-center space-x-4">
                                <CheckIcon />
                                <span>Access to free recipes</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <CheckIcon />
                                <span>Save favorite recipes</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <CheckIcon />
                                <span>Basic search functionality</span>
                            </li>
                        </ul>
                        <a href="#purchase-free" className="py-2.5 px-5 bg-indigo-600 shadow-sm rounded-full text-base text-white font-semibold text-center hover:bg-indigo-700">Start for Free</a>
                    </div>

                    {/* Premium Plan */}
                    <div className="flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl bg-indigo-50 hover:bg-indigo-100 transition-all">
                        <div className="uppercase bg-gradient-to-r from-indigo-600 to-violet-600 rounded-t-2xl p-3 text-center text-white">
                            MOST POPULAR
                        </div>
                        <div className="p-6 xl:py-9 xl:px-12">
                            <h3 className="font-manrope text-2xl font-bold mb-3">Premium</h3>
                            <div className="flex items-center mb-6">
                                <span className="font-manrope mr-2 text-6xl font-semibold text-indigo-600">{isYearly ? "$120" : "$15"}</span>
                                <span className="text-xl text-gray-500">/ {isYearly ? "year" : "month"}</span>
                            </div>
                            <ul className="mb-12 space-y-6 text-left text-lg">
                                <li className="flex items-center space-x-4">
                                    <CheckIcon />
                                    <span>Access to all recipes</span>
                                </li>
                                <li className="flex items-center space-x-4">
                                    <CheckIcon />
                                    <span>Ad-free experience</span>
                                </li>
                                <li className="flex items-center space-x-4">
                                    <CheckIcon />
                                    <span>Submit your own recipes</span>
                                </li>
                                <li className="flex items-center space-x-4">
                                    <CheckIcon />
                                    <span>Priority customer support</span>
                                </li>
                            </ul>
                            <a href="#purchase-premium" className="py-2.5 px-5 bg-indigo-600 shadow-sm rounded-full text-base text-white font-semibold text-center hover:bg-indigo-700">Purchase Plan</a>
                        </div>
                    </div>

                    {/* Pro Plan */}
                    <div className="flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl bg-gray-50 p-6 xl:py-9 xl:px-12 hover:bg-gray-100 transition-all">
                        <h3 className="font-manrope text-2xl font-bold mb-3">Pro</h3>
                        <div className="flex items-center mb-6">
                            <span className="font-manrope mr-2 text-6xl font-semibold">{isYearly ? "$200" : "$20"}</span>
                            <span className="text-xl text-gray-500">/ {isYearly ? "year" : "month"}</span>
                        </div>
                        <ul className="mb-12 space-y-6 text-left text-lg text-gray-500">
                            <li className="flex items-center space-x-4">
                                <CheckIcon />
                                <span>Access to premium recipes</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <CheckIcon />
                                <span>Exclusive video tutorials</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <CheckIcon />
                                <span>Early access to new features</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <CheckIcon />
                                <span>Personalized cooking tips</span>
                            </li>
                        </ul>
                        <a href="#purchase-pro" className="py-2.5 px-5 bg-indigo-600 shadow-sm rounded-full text-base text-white font-semibold text-center hover:bg-indigo-700">Purchase Plan</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
