"use client"
import React, { useState } from 'react';
import { motion } from "framer-motion";

interface FAQ {
    question: string;
    answer: string;
}

const FAQSection: React.FC = () => {
    // Animation variants for the cards
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs: FAQ[] = [
        {
            question: 'How do I submit a recipe?',
            answer: 'To submit a recipe, simply sign up or log in to your account. Then, go to the "Submit Recipe" page, fill out the necessary details, upload photos, and hit submit!'
        },
        {
            question: 'Is there a cost to access recipes?',
            answer: 'Many of our recipes are free to access, but we also offer exclusive premium recipes for paid users. You can explore the free content or upgrade for premium access.'
        },
        {
            question: 'How can I save my favorite recipes?',
            answer: 'You can save any recipe by clicking the "Favorite" button on the recipe page. Your saved recipes will appear in your profile under the "Favorites" section.'
        },
        {
            question: 'Can I modify or delete my recipe after posting?',
            answer: 'Yes, you can edit or delete your recipe from your profile. Simply go to "My Recipes" and select the recipe you want to modify or delete.'
        },
        {
            question: 'How can I find specific recipes?',
            answer: 'You can use the search bar to look for recipes by ingredients, name, or category. You can also use the filter and sorting options to narrow down your search.'
        },
        {
            question: 'How do I leave a comment or review on a recipe?',
            answer: 'To leave a comment or review, navigate to the recipe page and scroll down to the comments section. You must be logged in to post a comment or rate a recipe.'
        },
        {
            question: 'What benefits do premium users receive?',
            answer: 'Premium users get access to exclusive recipes, early access to new content, and an ad-free experience. Plus, they can interact with top chefs and culinary experts on the platform.'
        },
    ];
    

    return (
        <section className="py-24 bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-5 text-gray-600 text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="text-center mb-10">
                        <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                        <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                        <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                        <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                        <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                    </div>
                </motion.div>
                <div className="accordion-group">
                    {faqs.map((faq, index) => (
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                            key={index}
                            className={`accordion border border-solid border-gray-300 p-4 rounded-xl mb-8 lg:p-4 transition-all duration-500 ${openIndex === index ? 'bg-indigo-50 border-indigo-600' : ''
                                }`}
                        >
                            <button
                                className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600"
                                onClick={() => toggleAccordion(index)}
                            >
                                <h5>{faq.question}</h5>
                                <svg
                                    className={`w-6 h-6 text-gray-900 transition-transform duration-500 ${openIndex === index ? 'rotate-45' : ''
                                        }`}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6 12H18M12 18V6"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            </button>
                            <div
                                className={`accordion-content overflow-hidden pr-4 transition-all duration-1000 ${openIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                aria-labelledby={`accordion-heading-${index}`}
                            >
                                <p className="text-base text-gray-900 font-normal leading-6">
                                    {faq.answer}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;