"use client";

import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ValueCard {
    id: number;
    iconSrc: string;
    title: string;
    description: string;
}

// ─── Card Data with Matching Asset Paths ──────────────────────────────────────

const VALUES_DATA: ValueCard[] = [
    {
        id: 1,
        iconSrc: "/about/values/unity.png",
        title: "Customer First",
        description:
            "Every visitor is treated as a guest in our home, receiving personalized care and expert advice.",
    },
    {
        id: 2,
        iconSrc: "/about/values/tick.png",
        title: "Unmatched Quality",
        description:
            "We source only premium, verified products from the world's most trusted manufacturers and artisans.",
    },
    {
        id: 3,
        iconSrc: "/about/values/books.png",
        title: "Deep Knowledge",
        description:
            "Our staff undergoes rigorous training to ensure they provide deep insights into every item in our store.",
    },
    {
        id: 4,
        iconSrc: "/about/values/globe.png",
        title: "Community Hub",
        description:
            "We don&apos;t just sell products; we build safe, welcoming spaces for the communities we serve across Texas.",
    },
];

// ─── Single Value Card Layout Component ───────────────────────────────────────

function ValueCardNode({ card }: { card: ValueCard }) {
    return (
        <div className="flex flex-col items-start p-8 rounded-sm border border-white/[0.05] bg-[#1a0b05]/20 backdrop-blur-sm transition-all duration-300 hover:border-[#FF6B00]/30 hover:bg-[#1a0b05]/40 w-full min-h-[260px]">
            
            {/* Asset Icon Frame */}
            <div className="relative w-8 h-8 mb-6 flex items-center justify-center">
                <Image
                    src={card.iconSrc}
                    alt={card.title}
                    width={32}
                    height={32}
                    className="object-contain"
                    priority
                />
            </div>

            {/* Title: 20px Bold Inter */}
            <h4 className="text-white text-[20px] font-bold font-['Inter',sans-serif] leading-[28px] mb-3">
                {card.title}
            </h4>

            {/* Description: 16px Inter Regular with low opacity */}
            <p className="text-white/70 text-[16px] font-normal font-['Inter',sans-serif] leading-[24px]">
                {card.description}
            </p>
        </div>
    );
}

// ─── Main Structural Section ──────────────────────────────────────────────────

interface OurValuesSectionProps {
    values?: ValueCard[];
}

export default function OurValuesSection({ values = VALUES_DATA }: OurValuesSectionProps) {
    return (
        <section className="w-full py-16 sm:py-24 bg-gradient-to-br from-[#120400] via-[#1e0800] to-[#2d0e00] overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16">
                
                {/* Section Top Header */}
                <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
                    {/* Subtitle Accent Label */}
                    <h5 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] text-[#FF6B00] mb-3">
                        What We Stand For
                    </h5>
                    
                    {/* Dynamic Header Size */}
                    <h2 className="text-[clamp(32px,4vw,48px)] font-black text-white leading-tight tracking-tight">
                        Our Values
                    </h2>
                </div>

                {/* Highly Responsive Component Grid Frame */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {values.map((value) => (
                        <ValueCardNode key={value.id} card={value} />
                    ))}
                </div>

            </div>
        </section>
    );
}