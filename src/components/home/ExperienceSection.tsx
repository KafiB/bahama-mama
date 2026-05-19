"use client";

import Link from "next/link";

export default function ExperienceSection() {
    return (
        <section className="relative overflow-hidden bg-[#FF6B00] py-16 md:py-20 px-6">

            {/* Subtle Glow */}
            <div className="absolute inset-0 shadow-[0_0_80px_rgba(0,0,0,0.35)_inset]" />

            <div className="relative max-w-[1100px] mx-auto flex flex-col items-center text-center">

                {/* Heading */}
                <h2 className="
                    text-[26px] 
                    sm:text-[32px]
                    md:text-[40px] 
                    lg:text-[46px]
                    font-extrabold 
                    uppercase 
                    tracking-[-0.01em]
                    text-[#1D1D1D]
                    drop-shadow-[0_4px_6px_rgba(0,0,0,0.25)]
                    whitespace-nowrap
                    leading-none
                ">
                    Discover The Bahama Mama Experience
                </h2>

                {/* Subtitle */}
                <p className="
                    mt-5 
                    max-w-[620px]
                    text-white/90 
                    text-base 
                    md:text-[17px]
                    leading-relaxed
                ">
                    Experience the full range of our 3,500+ premium products in person.
                    Our experts are ready to guide you to the perfect selection.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-wrap gap-4 justify-center">

                    {/* Dark button */}
                    <Link
                        href="/stores"
                        className="
                            px-9 py-[17px]
                            bg-[#262A1F] 
                            text-[#FF8A00] 
                            uppercase 
                            font-bold 
                            tracking-[0.08em]
                            rounded-lg
                            shadow-lg
                            hover:-translate-y-1 
                            active:scale-[0.98]
                            transition-all duration-200
                        "
                    >
                        FIND A STORE
                    </Link>

                    {/* Outline button */}
                    <Link
                        href="/stores"
                        className="
                            px-9 py-[17px]
                            bg-[#FF8A00]                                    
                            text-[#262A1F] 
                            uppercase 
                            font-bold 
                            tracking-[0.08em]
                            rounded-lg
                            shadow-lg
                            hover:-translate-y-1 
                            active:scale-[0.98]
                            transition-all duration-200
                        "
                    >
                        FIND A STORE
                    </Link>

                </div>

            </div>
        </section>
    );
}