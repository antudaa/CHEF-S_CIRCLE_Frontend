import Image from "next/image";

const CommentsSection = () => {
    return (
        <section className="mb-16 relative playfair-display-normal mx-4">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full flex-col justify-start items-start lg:gap-10 gap-6 inline-flex">
                    <h2 className="text-gray-900 text-3xl font-bold font-manrope leading-normal">Comments</h2>
                    <div className="w-full flex-col justify-start items-start lg:gap-9 gap-6 flex">
                        <div className="w-full relative flex justify-between gap-2">
                            <input type="text"
                                className="w-full py-3 px-5 rounded-lg border border-gray-300 bg-white shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed"
                                placeholder="Write comments here...." />
                            <a href="#" className="absolute right-6 top-[18px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M11.3011 8.69906L8.17808 11.8221M8.62402 12.5909L8.79264 12.8821C10.3882 15.638 11.1859 17.016 12.2575 16.9068C13.3291 16.7977 13.8326 15.2871 14.8397 12.2661L16.2842 7.93238C17.2041 5.17273 17.6641 3.79291 16.9357 3.06455C16.2073 2.33619 14.8275 2.79613 12.0679 3.71601L7.73416 5.16058C4.71311 6.16759 3.20259 6.6711 3.09342 7.7427C2.98425 8.81431 4.36221 9.61207 7.11813 11.2076L7.40938 11.3762C7.79182 11.5976 7.98303 11.7083 8.13747 11.8628C8.29191 12.0172 8.40261 12.2084 8.62402 12.5909Z"
                                        stroke="#111827" stroke-width="1.6" stroke-linecap="round" />
                                </svg>
                            </a>
                        </div>
                        <div className="w-full flex-col justify-start items-start gap-8 flex">
                            <div className="w-full flex-col justify-start items-end gap-5 flex">
                                <div className="w-full p-6 bg-white rounded-2xl border border-gray-200 flex-col justify-start items-start gap-8 flex">
                                    <div className="w-full flex-col justify-center items-start gap-3.5 flex">
                                        <div className="w-full justify-between items-center inline-flex">
                                            <div className="justify-start items-center gap-2.5 flex">
                                                <div className="w-10 h-10 bg-gray-300 rounded-full flex justify-start items-start gap-2.5">
                                                    <Image className="rounded-full object-cover" src="https://pagedone.io/asset/uploads/1714988283.png"
                                                        alt="Jenny wilson image" width={40} height={40} />
                                                </div>
                                                <div className="flex-col justify-start items-start gap-1 inline-flex">
                                                    <h5 className="text-gray-900 text-sm font-semibold leading-snug">Jenny Wilson</h5>
                                                    <h6 className="text-gray-500 text-xs font-normal leading-5">1 hr ago</h6>
                                                </div>
                                            </div>
                                            <div className="w-6 h-6 relative">
                                                <div className="w-full h-fit flex">
                                                    <div className="relative w-full">
                                                        <button id="dropdown-button" data-target="dropdown-1"
                                                            className="w-full justify-center dropdown-toggle flex-shrink-0 z-10 flex items-center text-base font-medium text-center text-gray-900 bg-transparent absolute right-0 top-0"
                                                            type="button">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                                viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M12.0161 16.9893V17.0393M12.0161 11.9756V12.0256M12.0161 6.96191V7.01191"
                                                                    stroke="black" stroke-width="2.5"
                                                                    stroke-linecap="round" />
                                                            </svg>
                                                        </button>
                                                        <div id="dropdown-1"
                                                            className="absolute top-10 right-0 z-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                                                            <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdown-button">
                                                                <li>
                                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Edit</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Save</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Delete</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-800 text-sm font-normal leading-snug">This character development is outstanding</p>
                                    </div>
                                    <div className="w-full justify-between items-center inline-flex">
                                        <div className="justify-start items-center gap-4 flex">
                                            <div className="justify-start items-center gap-1.5 flex">
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none">
                                                        <path
                                                            d="M7.04962 9.99504L7 10M12 10L11.9504 10.005M17 10L16.9504 10.005M10.5 3H13.5C16.7875 3 18.4312 3 19.5376 3.90796C19.7401 4.07418 19.9258 4.25989 20.092 4.46243C21 5.56878 21 7.21252 21 10.5V12.4777C21 13.8941 21 14.6023 20.8226 15.1779C20.4329 16.4427 19.4427 17.4329 18.1779 17.8226C17.6023 18 16.8941 18 15.4777 18C15.0811 18 14.8828 18 14.6985 18.0349C14.2966 18.1109 13.9277 18.3083 13.6415 18.6005C13.5103 18.7345 13.4003 18.8995 13.1803 19.2295L13.1116 19.3326C12.779 19.8316 12.6126 20.081 12.409 20.198C12.1334 20.3564 11.7988 20.3743 11.5079 20.2462C11.2929 20.1515 11.101 19.9212 10.7171 19.4605L10.2896 18.9475C10.1037 18.7244 10.0108 18.6129 9.90791 18.5195C9.61025 18.2492 9.23801 18.0748 8.83977 18.0192C8.70218 18 8.55699 18 8.26662 18C7.08889 18 6.50002 18 6.50002 15.5L6.5 13.5L6.5 12C6.5 9.75 7.5 9.75 7.5 9.5C7.5 9.25 7.5 9.5 7.04962 9.99504Z"
                                                            stroke="#4B5563" stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                    </svg>
                                                </a>
                                                <span className="text-gray-900 text-sm font-semibold leading-snug">10</span>
                                            </div>
                                            <div className="justify-start items-center gap-1.5 flex">
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none">
                                                        <path
                                                            d="M12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4C10 5.10457 10.8954 6 12 6ZM12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18C14 19.1046 13.1046 20 12 20Z"
                                                            fill="#4B5563" />
                                                    </svg>
                                                </a>
                                                <span className="text-gray-900 text-sm font-semibold leading-snug">2</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommentsSection;
