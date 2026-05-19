"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            {/* BACKGROUND IMAGE */}
            <Image
                src="/home/retail/retailbrand.png"
                alt="Bahama Mama Store"
                fill
                priority
                className="object-cover object-center z-0"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 z-[1] bg-[#140500]/75"></div>

            {/* VIGNETTE */}
            <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.5)_100%)]"></div>

            {/* CONTENT CONTAINER */}
            <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 text-center flex flex-col items-center">

                {/* HEADLINE - Reduced size to match screenshot */}
                <h1 className="font-sans font-extrabold text-white text-[clamp(32px,4.5vw,62px)] leading-[1.1] mb-5 tracking-tight">
                    <span className="xl:whitespace-nowrap">
                        Experience the <span className="text-[#FF6B00]">Premier</span> CBD &amp; Lifestyle
                    </span>
                    <br />
                    Retail Brand
                </h1>

                {/* SUBTEXT - Reduced size and lighter opacity */}
                <p className="font-sans font-normal text-white/80 text-[clamp(13px,1.1vw,16px)] leading-relaxed mb-10 max-w-[650px] mx-auto">
                    Discover 3,500+ premium products across 90+ locations nationwide.
                    <br className="hidden md:block" />
                    Quality you can trust, variety you won&apos;t find anywhere else.
                </p>

                {/* BUTTONS - Sharper sizing */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

                    {/* PRIMARY */}
                    <Link
                        href="/locations"
                        className="w-full sm:w-auto inline-block font-sans text-[12px] font-bold text-white bg-[#FF6B00] hover:bg-[#ff7b1a] py-4 px-9 tracking-[1.2px] uppercase transition-all duration-300"
                    >
                        Find a Location Near You
                    </Link>

                    {/* SECONDARY */}
                    <Link
                        href="/products"
                        className="w-full sm:w-auto inline-block font-sans text-[12px] font-bold text-white bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 hover:bg-white/20 py-4 px-9 tracking-[1.2px] uppercase transition-all duration-300"
                    >
                        Explore Products
                    </Link>
                </div>
            </div>
        </section>
    );
}