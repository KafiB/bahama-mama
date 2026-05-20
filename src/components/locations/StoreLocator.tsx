"use client";

import { useState } from "react";
import Image from "next/image";

export default function StoreLocator() {
    const [query, setQuery] = useState("");

    const handleLocationClick = () => {
        // Add your Map trigger logic here (e.g., opening a modal, showing geolocation)
        alert("Location icon clicked! Trigger your map code here.");
    };

    return (
        <section className="relative w-full h-[500px] md:h-[550px] flex items-center justify-center overflow-hidden">
            {/* BACKGROUND IMAGE */}
            <Image
                src="/home/retail/retailbrand.png"
                alt="Bahama Mama Store"
                fill
                priority
                className="object-cover object-center z-0"
            />

            {/* DARK OVERLAY - Rich brown tint matching your screenshot */}
            <div className="absolute inset-0 z-[1] bg-[#1d0e0a]/80"></div>

            {/* CONTENT CONTAINER */}
            <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 text-center flex flex-col items-center justify-center h-full">

                {/* HEADLINE */}
                <h1 className="text-white font-extrabold text-[28px] sm:text-[38px] md:text-[50px] tracking-tight leading-tight mb-8">
                    Find a <span className="text-[#FF6A00]">Bahama Mama</span> Store Near You
                </h1>

                {/* INPUT BAR & SEARCH BUTTON CONTAINER */}
                <div className="w-full max-w-[720px] flex flex-col sm:flex-row items-center gap-4">

                    {/* INPUT CONTAINER */}
                    <div className="flex flex-[2.5] items-center gap-3 bg-[#5c4946] rounded-full px-5 h-[54px] w-full border border-white/10 shadow-inner group">
                        {/* Interactive Location Icon Button to show map */}
                        <button
                            type="button"
                            onClick={handleLocationClick}
                            className="hover:scale-110 active:scale-95 transition-all p-1 group-hover:brightness-125"
                            title="Show on map"
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="rgba(255,255,255,0.6)"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="shrink-0"
                            >
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                        </button>

                        <input
                            type="text"
                            placeholder="City or Zip Code"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="flex-1 bg-transparent border-none outline-none text-[14px] text-white/90 placeholder:text-white/40 font-medium"
                        />
                    </div>

                    {/* SEARCH BUTTON */}
                    <button className="h-[54px] rounded-full bg-gradient-to-r from-[#FF5100] to-[#FF9000] text-white text-[13px] font-black uppercase tracking-[0.08em] hover:brightness-110 transition-all shadow-lg w-full sm:w-40 px-6 shrink-0">
                        Search
                    </button>

                </div>
            </div>
        </section>
    );
}