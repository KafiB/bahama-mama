"use client";
import Image from "next/image";

import React from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface CultureCard {
    id: number;
    icon: React.ReactNode;
    title: string;
    description: string;
}

// ─── Icons (SVG inline — no image files needed) ───────────────────────────────

const ICONS = {
    team: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    ),
    growth: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
        </svg>
    ),
    pet: (
        <div className="w-7 h-7 relative">
            <Image
                src="/career/paw.png"
                alt="Paw Icon"
                fill
                className="object-contain"
            />
        </div>
    ),
    training: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
    ),
};

// ─── Demo Data ────────────────────────────────────────────────────────────────

const DEMO_CARDS: CultureCard[] = [
    {
        id: 1,
        icon: ICONS.team,
        title: "Friendly Work Environment",
        description: "Join a team that feels like family. We prioritize positive vibes and collaboration.",
    },
    {
        id: 2,
        icon: ICONS.growth,
        title: "Career Growth",
        description: "We promote from within. Your ambition is the only limit to your advancement here.",
    },
    {
        id: 3,
        icon: ICONS.pet,
        title: "Inclusive & Pet-Friendly",
        description: "Everyone is welcome. Our stores are safe spaces for staff, customers, and pets.",
    },
    {
        id: 4,
        icon: ICONS.training,
        title: "Training & Knowledge",
        description: "Become an expert. We provide comprehensive training on all our premium products.",
    },
];

// ─── Card ─────────────────────────────────────────────────────────────────────

function CultureCardItem({ icon, title, description }: Omit<CultureCard, "id">) {
    return (
        <div className="flex flex-col gap-5 p-7 rounded-xl bg-[#2a1200]/60 border border-white/8 hover:border-[#FF6B00]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]">
            {/* Icon */}
            <div className="w-9 h-9 flex items-center justify-center flex-shrink-0">
                {icon}
            </div>

            {/* Title */}
            <h3 className="text-white font-bold text-[17px] leading-snug m-0">
                {title}
            </h3>

            {/* Description */}
            <p className="text-white/55 text-[13px] leading-[1.75] m-0">
                {description}
            </p>
        </div>
    );
}

// ─── Section Props ────────────────────────────────────────────────────────────

interface OurCultureSectionProps {
    cards?: CultureCard[];
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function OurCultureSection({ cards = DEMO_CARDS }: OurCultureSectionProps) {
    return (
        <section className="w-full py-16 bg-gradient-to-br from-[#0e0400] via-[#1a0800] to-[#2a0e00]">
            <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16">

                {/* Header */}
                <div className="flex flex-col items-center gap-3 mb-14">
                    <h2 className="text-white font-black text-3xl sm:text-4xl uppercase italic tracking-wide m-0">
                        Our Culture
                    </h2>
                    <div className="w-16 h-[3px] bg-[#FF6B00] rounded-full" />
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {cards.map((card) => (
                        <CultureCardItem
                            key={card.id}
                            icon={card.icon}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}