'use client'
import Lottie from 'lottie-react';
import LoadingAnimation from "../../LoadingAnimation.json";

const GlobalLoading = () => {
    return (
        <section className='flex justify-center align-middle min-h-screen'>
            <Lottie className='w-[300px] md:w-[500px] h-[300px] md:h-[500px]' animationData={LoadingAnimation} />
        </section>
    );
};

export default GlobalLoading;