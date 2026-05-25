"use client";

import Image from "next/image";
import Link from "next/link";

export default function RetailExperience() {
    return (
        <section
            className="
        relative
        flex
        min-h-[85vh]
        sm:min-h-screen
        w-full
        items-center
        justify-center
        overflow-hidden
    "
        >            <Image
                src="/home/retail/retailbrand.png"
                alt="Bahama Mama Store"
                fill
                priority
                className="z-0 object-cover object-center"
            />

            <div className="absolute inset-0 z-[1] bg-[#140500]/75" />

            <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.5)_100%)]" />

            <div
                className="
        relative
        z-10
        mx-auto
        flex
        w-full
        max-w-[1200px]
        flex-col
        items-center
        px-4
        sm:px-6
        md:px-10
        text-center
    "
            >                <h1 className="
    mb-5
    font-sans
    text-[30px]
    sm:text-[40px]
    md:text-[52px]
    lg:text-[60px]
    font-extrabold
    leading-[1.02]
    tracking-[-0.03em]
    text-white
    max-w-[1000px]
">
                    Redefining the{" "}
                    <span className="text-[#FF6B00]">Retail Experience</span> in Texas
                </h1>

                <p className="
    mb-8
    sm:mb-10
    max-w-[700px]
    font-sans
    text-[14px]
    sm:text-[15px]
    md:text-[17px]
    font-normal
    leading-relaxed
    text-white/80
">
                    Our mission is to provide a premium, curated smoke shop experience
                    across the Lone Star State. Excellence in every puff, quality in every
                    visit.
                </p>

                <div
                    className="
        flex
        flex-col
        sm:flex-row
        items-center
        justify-center
        gap-4
        w-full
        sm:w-auto
    "
                >                    <Link
                    href="/products"
                    className="
    inline-flex
    items-center
    justify-center
    w-full
    sm:w-auto
    min-w-[220px]
    bg-[#FF6B00]
    px-8
    py-[16px]
    font-sans
    text-[12px]
    sm:text-[13px]
    font-bold
    uppercase
    tracking-[1.2px]
    text-white
    transition-all
    duration-300
    hover:bg-[#ff7b1a]
    hover:-translate-y-1
"                    >
                        Explore Products
                    </Link>

                    <Link
                        href="/locations"
                        className="
    inline-flex
    items-center
    justify-center
    w-full
    sm:w-auto
    min-w-[220px]
    border
    border-white/20
    bg-white/10
    px-8
    py-[16px]
    font-sans
    text-[12px]
    sm:text-[13px]
    font-bold
    uppercase
    tracking-[1.2px]
    text-white
    backdrop-blur-md
    transition-all
    duration-300
    hover:border-white/40
    hover:bg-white/20
    hover:-translate-y-1
"                    >
                        Find Store
                    </Link>
                </div>
            </div>
        </section>
    );
}