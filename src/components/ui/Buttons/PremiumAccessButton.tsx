import Link from "next/link";
import { CiLock } from "react-icons/ci";
import { MdArrowRightAlt } from "react-icons/md";

const PremiumAccessButton = () => {
    return (
        <Link href={`/pricing-page`} className="flex gap-2 bg-indigo-500 hover:bg-indigo-600 py-2 md:py-3 px-4 text-nowrap rounded-xl w-max text-white cursor-pointer z-20">
            <CiLock className="my-auto" />
            <span>Unlock The Recipe</span>
            <MdArrowRightAlt className="my-auto" />
        </Link>
    );
};

export default PremiumAccessButton;