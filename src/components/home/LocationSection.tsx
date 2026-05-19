"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LocationSection() {
    const [query, setQuery] = useState("");

    return (
        <section className="relative bg-gradient-to-br from-[#120400] via-[#2a0800] to-[#1a0400] py-20 overflow-hidden">
            {/* Radial glow right side */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(120,30,0,0.25)_0%,transparent_65%)] pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-14 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

                {/* ── LEFT ── */}
                <div className="flex flex-col items-start text-left">
                    {/* Headline: Uses font-black (900) and tracking-tighter to match the heavy, compressed look */}
                    <h2 className="text-[34px] md:text-[44px] md:text-[48px] font-black uppercase leading-[0.95] tracking-tighter mb-4">
                        <span className="text-white">Find a Bahama Mama </span>
                        <br />
                        <span className="text-[#FF6B00]">Store Near You</span>
                    </h2>

                    {/* Subtext: Smaller font size and slightly tighter leading to match the block-text style */}
                    <p className="text-[9px] md:text-xs text-white/60 leading-[1.6] mb-10 max-w-[480px] font-medium">
                        With over 90 locations nationwide, your premium lifestyle essentials
                        are never far away. Enter your city or zip code to find the nearest
                        experience.
                    </p>

                    {/* Search Row: Adjusted for better vertical centering and button scale */}
                    {/* Parent container increased to max-w-[640px] for more horizontal room */}
                    <div className="flex flex-col sm:flex-row w-full max-w-[640px] items-center gap-3 mb-6">

                        {/* Input Container: Increased flex-grow to flex-[2.5] to make it much wider than the button */}
                        <div className="flex flex-[2.5] items-center gap-3 bg-[#3d2e2c] rounded-full px-6 h-[56px] w-full border border-white/5 shadow-inner">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="rgba(255,255,255,0.5)"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="shrink-0"
                            >
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <input
                                type="text"
                                placeholder="City or Zip Code"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="flex-1 bg-transparent border-none outline-none text-[14px] text-white/90 placeholder:text-white/30 font-semibold"
                            />
                        </div>

                        {/* Search Button: Stays flex-1 so it remains smaller than the input */}
                        <button className="flex-1 h-[56px] rounded-full bg-gradient-to-r from-[#FF5100] to-[#FF9000] text-white text-[12px] font-black uppercase tracking-[0.1em] hover:brightness-110 transition-all shadow-lg w-full sm:w-auto">
                            Search
                        </button>
                    </div>
                    {/* View All Locations Link: Thin underline and heavy tracking */}
                    <Link
                        href="/locations"
                        className="text-[12px] font-bold text-white uppercase tracking-[0.1em] border-b-[1.5px] border-[#FF6B00] pb-0.5 inline-block transition-opacity hover:opacity-80"
                    >
                        View All Locations
                    </Link>
                </div>
                {/* ── RIGHT — MAP ── */}
                <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.55)] border border-white/[0.08] aspect-video">
                    <Image
                        src="/home/laction/Background.png"
                        alt="Store Locations Map"
                        fill
                        className="object-cover object-center"
                    />
                </div>
            </div>
        </section>
    );
}