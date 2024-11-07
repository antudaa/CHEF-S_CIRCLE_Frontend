"use client"
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Helper function to handle counting
const useInViewCounting = (start: number, end: number, duration: number) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current; // Copy ref.current to a variable
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the copied variable in cleanup
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once

  useEffect(() => {
    if (isVisible) {
      let startTime: number | null = null;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / (duration * 1000), 1);
        setCount(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isVisible, start, end, duration]);

  return { count, ref };
};

const StatesSection = () => {
  const expertConsultants = useInViewCounting(0, 465, 3);
  const activeClients = useInViewCounting(0, 5000, 3.5);
  const projectsDelivered = useInViewCounting(0, 250, 3);
  const ordersInQueue = useInViewCounting(0, 350, 3);

  return (
    <section className="pb-10 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl py-10 px-10 xl:py-16 xl:px-20 bg-gray-50 flex items-center justify-between flex-col gap-16 lg:flex-row">
          <div className="w-full lg:w-60">
            <h2 className="font-manrope text-4xl font-bold text-gray-900 mb-4 text-center lg:text-left">
              Our Stats
            </h2>
            <p className="text-sm text-gray-500 leading-6 text-center lg:text-left">
              Discover how our community is growing with delicious recipes, enthusiastic cooks, and interactive sharing.
            </p>
          </div>
          <div className="w-full lg:w-4/5">
            <div className="flex flex-col flex-1 gap-10 lg:gap-0 lg:flex-row lg:justify-between">
              <div className="block" ref={expertConsultants.ref}>
                <motion.div className="font-manrope font-bold text-4xl text-indigo-600 mb-3 text-center lg:text-left">
                  {expertConsultants.count}+
                </motion.div>
                <span className="text-gray-900 text-center block lg:text-left">
                  Recipes Shared
                </span>
              </div>
              <div className="block" ref={activeClients.ref}>
                <motion.div className="font-manrope font-bold text-4xl text-indigo-600 mb-3 text-center lg:text-left">
                  {activeClients.count}+
                </motion.div>
                <span className="text-gray-900 text-center block lg:text-left">
                  Active Users
                </span>
              </div>
              <div className="block" ref={projectsDelivered.ref}>
                <motion.div className="font-manrope font-bold text-4xl text-indigo-600 mb-3 text-center lg:text-left">
                  {projectsDelivered.count}+
                </motion.div>
                <span className="text-gray-900 text-center block lg:text-left">
                  Recipes Favorited
                </span>
              </div>
              <div className="block" ref={ordersInQueue.ref}>
                <motion.div className="font-manrope font-bold text-4xl text-indigo-600 mb-3 text-center lg:text-left">
                  {ordersInQueue.count}+
                </motion.div>
                <span className="text-gray-900 text-center block lg:text-left">
                  Premium Members
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatesSection;