"use client";

import Image from "next/image";
import Link from "next/link";

export default function PremiumProducts() {
    return (
        <section className="relative w-full h-[650px] overflow-hidden">
            {/* BACKGROUND IMAGE */}
            <Image
                src="/home/retail/retailbrand.png"
                alt="Store Background"
                fill
                priority
                className="object-cover"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/65 z-[1]" />

            {/* ORANGE GLOW */}
            <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_right,rgba(255,106,0,0.25),transparent_45%)]" />

            {/* CONTENT */}
            <div className="relative z-10 h-full max-w-[1280px] mx-auto px-6 md:px-12 flex items-center">
                {/* Expanded max-w to let the heading layout correctly without breaking */}
                <div className="max-w-[850px]">

                    {/* HEADING */}
                    {/* Changed leading from [0.95] to normal/tight for better readability and removed tracking compression */}
                    <h1 className="text-white font-extrabold leading-tight tracking-normal text-[36px] sm:text-[48px]">
                        Explore Our{" "}
                        <span className="text-[#FF6B00]">
                            Premium
                        </span>{" "}
                        Product Collection
                    </h1>

                    {/* DESCRIPTION */}
                    <p className="mt-6 text-white/80 text-[5px] md:text-[17px] leading-relaxed max-w-[650px]"> 
                        Bahama Mama offers 3,500+ premium CBD, vape,
                        and lifestyle products across our Texas locations.
                    </p>

                    {/* BUTTONS */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4">

                        {/* PRIMARY BUTTON */}
                        <Link
                            href="/products"
                            className="w-full sm:w-auto inline-block font-sans text-[12px] font-bold text-white bg-[#FF6B00] hover:bg-[#ff7b1a] py-4 px-9 tracking-[1.2px] uppercase transition-all duration-300"
                        >
                            Shop Products
                        </Link>

                        {/* SECONDARY BUTTON */}
                        <Link
                            href="/stores"
                            className="w-full sm:w-auto inline-block font-sans text-[12px] font-bold text-white bg-white/10 hover:bg-white/20
                            backdrop-blur-md border border-white/20
                            py-4 px-9 tracking-[1.2px] uppercase transition-all duration-300
                            text-center"
                        >
                            Find Store
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}