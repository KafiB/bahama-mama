"use client";

import Link from "next/link";

// ─── PROPS INTERFACE ──────────────────────────────────────────────────────────
export interface CityLocationData {
    city: string;
    state: string;
    count: number;
    href: string;
}

interface LocationsByCityProps {
    cities?: CityLocationData[];
}

// ─── DEFAULT DEMO DATA ────────────────────────────────────────────────────────
const DEFAULT_CITIES: CityLocationData[] = [
    { city: "Houston", state: "TEXAS", count: 12, href: "/locations/houston" },
    { city: "Dallas", state: "TEXAS", count: 8, href: "/locations/dallas" },
    { city: "Austin", state: "TEXAS", count: 5, href: "/locations/austin" },
    { city: "San Antonio", state: "TEXAS", count: 4, href: "/locations/san-antonio" },
];

export default function LocationsByCity({ cities = DEFAULT_CITIES }: LocationsByCityProps) {
    return (
        <section className="w-full py-12 bg-gradient-to-br from-[#1a0800] to-[#1f0d03]">
            <div className="max-w-[1400px] mx-auto px-5 md:px-14">
                
                {/* Section Title with Left Orange Indicator Line */}
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-[3px] h-[24px] bg-[#FF6A00] rounded-sm" />
                    <h2 className="text-white font-black text-[16px] md:text-[18px] uppercase tracking-[0.12em]">
                        Locations by City
                    </h2>
                </div>

                {/* Cities Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {cities.map((item, idx) => (
                        <Link
                            key={idx}
                            href={item.href}
                            className="flex items-center justify-between bg-[#3D2622]/60 hover:bg-[#4E322D]/80 border border-white/[0.03] backdrop-blur-sm rounded-xl p-5 transition-all duration-200 group"
                        >
                            {/* Left Side: Meta Text */}
                            <div className="flex flex-col items-start text-left">
                                <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.15em] mb-1">
                                    {item.state}
                                </span>
                                {/* City Typography: Inter, 900 weight, 24px text sizing */}
                                <h3 className="text-white font-black text-[24px] leading-[32px] tracking-tight m-0 transition-colors group-hover:text-[#FF6A00]">
                                    {item.city}
                                </h3>
                            </div>

                            {/* Right Side: Count Number */}
                            <span className="text-[#FF6A00] font-black text-[28px] leading-none select-none pl-4">
                                {item.count}
                            </span>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}