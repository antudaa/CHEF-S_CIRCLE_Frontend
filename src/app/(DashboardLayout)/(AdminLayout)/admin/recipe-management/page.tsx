"use client"
// import ManageRecipeTable from '@/components/ui/Table/ManageRecipeTable';
import { useState } from 'react';

const RecipeManagement = () => {
    const [activeTab, setActiveTab] = useState('tabs-with-background-1');
    const [filter, setFilter] = useState('Filter');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(event.target.value);
    };

    return (
        <section className="py-16 w-full playfair-display-normal">
            {/* Header Section */}
            <div className="mx-auto w-full px-6 tabs mb-10">
                <div className="p-4 flex sm:flex-row flex-col gap-5 md:items-center justify-between bg-white rounded-2xl">
                    <h5 className="text-gray-900 font-semibold leading-7 text-4xl flex items-center">
                        {`Manage Recipe's`}
                    </h5>
                    {/* Switch */}
                    <div className="flex gap-4">
                        <div className="flex gap-[1px] justify-center items-center bg-gray-100 rounded-md p-1">
                            <button
                                className={`text-gray-900 tab-active:bg-white tab-active:rounded-md rounded-md border-none text-xs font-medium justify-center items-center inline-block text-center transition-all duration-500 py-1.5 px-3 tablink whitespace-nowrap ${activeTab === 'tabs-with-background-1' ? 'active' : ''
                                    }`}
                                onClick={() => handleTabClick('tabs-with-background-1')}
                            >
                                Tab CTA
                            </button>
                            <button
                                className={`text-gray-900 tab-active:bg-white tab-active:rounded-md rounded-md border-none text-xs font-medium justify-center items-center inline-block text-center transition-all duration-500 py-1.5 px-3 tablink whitespace-nowrap ${activeTab === 'tabs-with-background-2' ? 'active' : ''
                                    }`}
                                onClick={() => handleTabClick('tabs-with-background-2')}
                            >
                                Present
                            </button>
                            <button
                                className={`text-gray-900 tab-active:bg-white tab-active:rounded-md rounded-md border-none text-xs font-medium justify-center items-center inline-block text-center transition-all duration-500 py-1.5 px-3 tablink whitespace-nowrap ${activeTab === 'tabs-with-background-3' ? 'active' : ''
                                    }`}
                                onClick={() => handleTabClick('tabs-with-background-3')}
                            >
                                On Leave
                            </button>
                        </div>
                        <div className="relative flex items-center w-[70px] h-8 cursor-pointer">
                            <svg
                                className="absolute top-1/2 -translate-y-1/2 left-2 z-50 mr-1.5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <path
                                    d="M2 4.6665H14M4 7.99984H12M6.66667 11.3332H9.33333"
                                    stroke="#111827"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                ></path>
                            </svg>
                            <select
                                id="Offer"
                                className="text-gray-900 py-1.5 text-xs cursor-pointer font-medium leading-5 block w-full pr-1.5 pl-7 rounded-md shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 appearance-none relative focus:outline-none bg-white transition-all duration-500 hover:bg-gray-50 focus-within:border-gray-300"
                                value={filter}
                                onChange={handleFilterChange}
                            >
                                <option value="Filter">Filter</option>
                                <option value="Designer">Designer</option>
                                <option value="Researcher">Researcher</option>
                                <option value="Developer">Developer</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div
                    id="tabs-with-background-1"
                    role="tabpanel"
                    aria-labelledby="tabs-with-background-item-1"
                    className={`tabcontent ${activeTab === 'tabs-with-background-1' ? 'block' : 'hidden'}`}
                >
                    {/* Content for Tab CTA */}
                </div>
                <div
                    id="tabs-with-background-2"
                    role="tabpanel"
                    aria-labelledby="tabs-with-background-item-2"
                    className={`tabcontent ${activeTab === 'tabs-with-background-2' ? 'block' : 'hidden'}`}
                >
                    {/* Content for Present */}
                </div>
                <div
                    id="tabs-with-background-3"
                    role="tabpanel"
                    aria-labelledby="tabs-with-background-item-3"
                    className={`tabcontent ${activeTab === 'tabs-with-background-3' ? 'block' : 'hidden'}`}
                >
                    {/* Content for On Leave */}
                </div>
            </div>

            {/* <ManageRecipeTable /> */}
        </section>
    );
};

export default RecipeManagement;
