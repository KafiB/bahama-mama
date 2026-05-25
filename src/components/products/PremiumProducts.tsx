"use client";

import Image from "next/image";
import Link from "next/link";

export default function PremiumProducts() {
    return (
        <section
            className="
                relative
                w-full
                min-h-[720px]
                sm:min-h-[760px]
                md:min-h-screen
                overflow-hidden
                flex
                items-center
            "
        >
            {/* BACKGROUND IMAGE */}
            <Image
                src="/home/retail/retailbrand.png"
                alt="Store Background"
                fill
                priority
                className="object-cover object-center"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 z-[1] bg-black/65" />

            {/* ORANGE GLOW */}
            <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_right,rgba(255,106,0,0.25),transparent_45%)]" />

            {/* CONTENT */}
            <div
                className="
                    relative
                    z-10
                    w-full
                    max-w-[1280px]
                    mx-auto
                    px-4
                    sm:px-6
                    md:px-10
                    lg:px-14
                    py-24
                    sm:py-28
                    md:py-0
                "
            >
                <div
                    className="
                        max-w-[950px]
                        w-full
                        flex
                        flex-col
                        items-start
                        
                    "
                >
                    {/* HEADING */}
                    <h1
                        className="
                            text-white
                            font-extrabold
                            leading-[1]
                            tracking-[-0.04em]
                            text-[34px]
                            sm:text-[48px]
                            md:text-[64px]
                            lg:text-[76px]
                        "
                    >
                        Explore Our{" "}
                        <span className="text-[#FF6B00]">
                            Premium
                        </span>{" "}
                        Product Collection
                    </h1>

                    {/* DESCRIPTION */}
                    <p
                        className="
                            mt-6
                            text-white/80
                            text-[15px]
                            sm:text-[17px]
                            md:text-[19px]
                            leading-relaxed
                            max-w-[720px]
                        "
                    >
                        Bahama Mama offers 3,500+ premium CBD, vape,
                        and lifestyle products across our Texas locations.
                    </p>

                    {/* BUTTONS */}
                    <div
                        className="
                            mt-10
                            flex
                            flex-col
                            sm:flex-row
                            gap-4
                            w-full
                            sm:w-auto
                        "
                    >
                        {/* PRIMARY BUTTON */}
                        <Link
                            href="/products"
                            className="
                                w-full
                                sm:w-auto
                                min-w-[230px]
                                inline-flex
                                items-center
                                justify-center
                            
                                bg-[#FF6B00]
                                hover:bg-[#ff7b1a]
                                px-8
                                py-[16px]
                                text-white
                                text-[12px]
                                sm:text-[13px]
                                font-bold
                                uppercase
                                tracking-[1.2px]
                                transition-all
                                duration-300
                                hover:-translate-y-1
                            "
                        >
                            Shop Products
                        </Link>

                        {/* SECONDARY BUTTON */}
                        <Link
                            href="/stores"
                            className="
                                w-full
                                sm:w-auto
                                min-w-[230px]
                                inline-flex
                                items-center
                                justify-center
                                
                                border
                                border-white/20
                                bg-white/10
                                hover:bg-white/20
                                backdrop-blur-md
                                px-8
                                py-[16px]
                                text-white
                                text-[12px]
                                sm:text-[13px]
                                font-bold
                                uppercase
                                tracking-[1.2px]
                                transition-all
                                duration-300
                                hover:-translate-y-1
                            "
                        >
                            Find Store
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}