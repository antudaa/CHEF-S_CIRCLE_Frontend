"use client"
import ManageUserTable from '@/components/ui/Table/ManageUserTable';
import { useState } from 'react';

const UserManagement = () => {
    const [activeTab, setActiveTab] = useState('tabs-with-background-1');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <section className="py-16 w-full playfair-display-normal">
            {/* Header Section */}
            <div className="mx-auto w-full px-6 tabs mb-10">
                <div className="p-4 flex sm:flex-row flex-col gap-5 md:items-center justify-between bg-white rounded-2xl">
                    <h5 className="text-gray-900 font-semibold leading-7 text-4xl flex items-center">
                        {`Manage User's`}
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

            <ManageUserTable />
        </section>
    );
};

export default UserManagement;