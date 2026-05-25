"use client";

import Link from "next/link";

export default function ExperienceSection() {
    return (
        <section
            className="
        relative
        overflow-hidden
        bg-[#FF6B00]
        py-14
        sm:py-16
        md:py-20
        px-4
        sm:px-6
    "
        >
            {/* Subtle Glow */}
            <div className="absolute inset-0 shadow-[0_0_80px_rgba(0,0,0,0.35)_inset]" />

            <div
                className="
        relative
        max-w-[1100px]
        mx-auto
        flex
        flex-col
        items-center
        text-center
    "
            >
                {/* Heading */}
                <h2 className="
    text-[28px]
    sm:text-[34px]
    md:text-[42px]
    lg:text-[50px]
    font-extrabold
    uppercase
    tracking-[-0.02em]
    text-[#1D1D1D]
    drop-shadow-[0_4px_6px_rgba(0,0,0,0.25)]
    leading-[1.05]
    max-w-[950px]
">
                    Discover The Bahama Mama Experience
                </h2>

                {/* Subtitle */}
                <p className="
    mt-5
    max-w-[680px]
    text-white/90
    text-[15px]
    sm:text-base
    md:text-[17px]
    leading-relaxed
">
                    Experience the full range of our 3,500+ premium products in person.
                    Our experts are ready to guide you to the perfect selection.
                </p>

                {/* Buttons */}
                <div
                    className="
        mt-8
        sm:mt-10
        flex
        flex-col
        sm:flex-row
        w-full
        sm:w-auto
        gap-4
        justify-center
        items-center
    "
                >
                    {/* Dark button */}
                    <Link
                        href="/stores"
                        className="
    w-full
    sm:w-auto
    min-w-[220px]
    px-8
    py-[16px]
    bg-[#262A1F]
    text-[#FF8A00]
    uppercase
    text-[13px]
    sm:text-[14px]
    font-bold
    tracking-[0.08em]
    rounded-xl
    text-center
    shadow-lg
    hover:-translate-y-1
    active:scale-[0.98]
    transition-all
    duration-300
"
                    >
                        FIND A STORE
                    </Link>

                    {/* Outline button */}
                    <Link
                        href="/stores"
                        className="
    w-full
    sm:w-auto
    min-w-[220px]
    px-8
    py-[16px]
    bg-[#FF8A00]
    text-[#262A1F]
    uppercase
    text-[13px]
    sm:text-[14px]
    font-bold
    tracking-[0.08em]
    rounded-xl
    text-center
    shadow-lg
    hover:-translate-y-1
    active:scale-[0.98]
    transition-all
    duration-300
"
                    >
                        FIND A STORE
                    </Link>

                </div>

            </div>
        </section>
    );
}