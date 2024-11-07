'use client';
import FAQSection from "@/components/Global/FAQSection";
import { FaPhoneAlt } from "react-icons/fa";
import { TbMessage } from "react-icons/tb";
import StarRatings from "react-star-ratings";
import { FaChevronRight } from "react-icons/fa6";

const ContactPage = () => {
    return (
        <section className="mt-20 md:mt-24">
            <section className="w-full xl:py-24 lg:py-20 py-12 bg-slate-50 border-gray-300">
                <div className="w-full max-w-7xl px-6 lg:px-8 mx-auto">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-16 xl:gap-x-24 gap-y-14 max-w-lg md:max-w-3xl lg:max-w-full mx-auto">
                        <div>
                            <h1 className="font-manrope text-gray-900 md:text-5xl text-4xl font-bold leading-tight mb-8 lg:text-left text-center">
                                Contact Us
                            </h1>
                            <p className="text-gray-900 text-lg font-normal leading-7 lg:text-left text-center">
                                {`Have questions, feedback, or recipe requests? We're here to help! Reach out to us and we'll get back to you as soon as possible.`}
                            </p>
                            <div className="my-12 grid md:grid-cols-2 grid-cols-1 md:gap-x-8 gap-y-8">
                                <div className="rounded-2xl border border-gray-200 bg-white p-7 group transition-all duration-500 hover:bg-indigo-600">
                                    <a href="mailto:support@recipesharing.com" className="w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-white cursor-pointer">
                                        <FaPhoneAlt className="transition-all duration-500 size-7 text-white group-hover:text-indigo-600" />
                                    </a>
                                    <h5 className="text-gray-900 text-xl font-semibold leading-8 mb-3 transition-all duration-500 group-hover:text-white">Support</h5>
                                    <p className="text-gray-500 text-sm font-normal leading-5 transition-all duration-500 group-hover:text-white">
                                        Need assistance with a recipe or facing technical issues? Our team is ready to help you out.
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-gray-200 bg-white p-7 group transition-all duration-500 hover:bg-indigo-600">
                                    <a href="mailto:feedback@recipesharing.com" className="w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-white cursor-pointer">
                                        <TbMessage className="stroke-white transition-all duration-500 group-hover:stroke-indigo-600 size-7" />
                                    </a>
                                    <h5 className="text-gray-900 text-xl font-semibold leading-8 mb-3 transition-all duration-500 group-hover:text-white">Feedback</h5>
                                    <p className="text-gray-500 text-sm font-normal leading-5 transition-all duration-500 group-hover:text-white">
                                        Share your thoughts, suggestions, or improvements for our platform and recipes. We value your input!
                                    </p>
                                </div>
                            </div>
                            <div className="border-t border-slate-200 pt-12 flex lg:justify-start justify-center">
                                <div className="flex gap-x-1 border-r border-indigo-300 items-center">
                                    <StarRatings
                                        rating={4.9}
                                        starDimension="30px"
                                        starSpacing="2px"
                                        starRatedColor="#FBBF24"
                                        starEmptyColor="aliceblue"
                                    />
                                    <a href="" className="text-indigo-600 text-lg font-normal leading-7 pl-2.5 pr-3.5">4.9 Rating</a>
                                </div>
                                <a href="" className="pl-3.5 text-indigo-600 text-lg font-normal leading-7">
                                    163 Reviews on <span className="text-emerald-500"> Trustpilot </span>
                                </a>
                            </div>
                        </div>
                        <form action="" className="h-fit bg-white border border-slate-200 rounded-2xl lg:p-12 p-8 w-full max-w-lg md:max-w-3xl lg:max-w-full mx-auto">
                            <div className="relative mb-8">
                                <label className="flex items-center mb-2 text-gray-600 text-base leading-6 font-medium">Name</label>
                                <div className="relative text-gray-500 focus-within:text-gray-900">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 21C20 18.1716 20 16.7574 19.1213 15.8787C18.2426 15 16.8284 15 14 15H10C7.17157 15 5.75736 15 4.87868 15.8787C4 16.7574 4 18.1716 4 21M12.1441 11C12.0541 10.991 11.9459 10.991 11.8468 11C9.7027 10.9278 8 9.16911 8 7.00451C8 4.79481 9.78378 3 12 3C14.2072 3 16 4.79481 16 7.00451C15.991 9.16911 14.2883 10.9278 12.1441 11Z" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <input type="text" id="name" className="w-full block h-12 pr-5 pl-12 py-2.5 text-lg leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none" placeholder="Antu Das" />
                                </div>
                            </div>
                            <div className="relative mb-8">
                                <label className="flex items-center mb-2 text-gray-600 text-base leading-6 font-medium">Email</label>
                                <div className="relative text-gray-500 focus-within:text-gray-900">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.25201 7L8.15881 10.8953C10.2686 12.1612 11.3235 12.7941 12.4825 12.7665C13.6416 12.739 14.6652 12.0566 16.7124 10.6917L21.748 7M10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20Z" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" />
                                        </svg>
                                    </div>
                                    <input type="email" id="email" className="w-full block h-12 pr-5 pl-12 py-2.5 text-lg leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none" placeholder="Enter Your Email" />
                                </div>
                            </div>
                            <div className="relative mb-8">
                                <label className="flex items-center mb-2 text-gray-600 text-base leading-6 font-medium">Message</label>
                                <div className="relative">
                                    <textarea className="block w-full h-40 px-4 py-2.5 text-lg leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-none resize-none" placeholder="Write your message"></textarea>
                                </div>
                            </div>
                            <button className="w-full h-12 rounded-full bg-indigo-600 hover:bg-indigo-900 transition-all duration-700 shadow-sm text-white text-base font-semibold leading-6 flex items-center justify-center gap-4">
                                Send Message
                                {/* <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L5 9L12 16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>*/}
                                <FaChevronRight />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <FAQSection />
        </section>
    );
};

export default ContactPage;