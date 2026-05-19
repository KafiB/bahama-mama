"use client";

import Image from "next/image";
import Link from "next/link";

export default function RetailExperience() {
    return (
        <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
            <Image
                src="/home/retail/retailbrand.png"
                alt="Bahama Mama Store"
                fill
                priority
                className="z-0 object-cover object-center"
            />

            <div className="absolute inset-0 z-[1] bg-[#140500]/75" />

            <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.5)_100%)]" />

            <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center px-6 text-center">
                <h1 className="mb-5 font-sans text-[clamp(26px,3.8vw,55px)] font-extrabold leading-none tracking-tight text-white whitespace-nowrap overflow-hidden text-ellipsis">
                    Redefining the{" "}
                    <span className="text-[#FF6B00]">Retail Experience</span> in Texas
                </h1>

                <p className="mb-10 max-w-[650px] font-sans text-[clamp(13px,1.1vw,16px)] font-normal leading-relaxed text-white/80">
                    Our mission is to provide a premium, curated smoke shop experience
                    across the Lone Star State. Excellence in every puff, quality in every
                    visit.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                        href="/products"
                        className="inline-block w-full bg-[#FF6B00] px-9 py-4 font-sans text-[12px] font-bold uppercase tracking-[1.2px] text-white transition-all duration-300 hover:bg-[#ff7b1a] sm:w-auto"
                    >
                        Explore Products
                    </Link>

                    <Link
                        href="/locations"
                        className="inline-block w-full border border-white/20 bg-white/10 px-9 py-4 font-sans text-[12px] font-bold uppercase tracking-[1.2px] text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/20 sm:w-auto"
                    >
                        Find Store
                    </Link>
                </div>
            </div>
        </section>
    );
}