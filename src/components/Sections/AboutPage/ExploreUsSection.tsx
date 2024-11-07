"use client";
import React from "react";
import Image from "next/image";
import Image1 from "@/Assets/Images/About_Page_Image_3.jpg";
import { ContainerScroll } from "@/components/ui/AceternityUI/container-scroll-animation";

export function ExploreUsSection() {
    return (
        <div className="flex flex-col overflow-hidden max-w-7xl mx-10 lg:mx-0">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold text-black dark:text-white">
                            Discover, Create, and Share Culinary Masterpieces <br />
                            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                Dive into a world of flavor
                            </span>
                        </h1>
                    </>
                }
            >
                <Image
                    src={Image1}
                    alt="hero"
                    height={720}
                    width={1400}
                    className="mx-auto rounded-2xl object-cover h-full object-bottom-top"
                    draggable={false}
                />
            </ContainerScroll>
        </div>
    );
}
