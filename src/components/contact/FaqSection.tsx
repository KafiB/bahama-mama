"use client";

import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

// ─── Demo Data ────────────────────────────────────────────────────────────────

const DEMO_FAQS: FAQItem[] = [
    {
        id: 1,
        question: "How can I find a store near me?",
        answer: "Use our Store Locator on the Locations page. Simply enter your city or zip code and we'll show you the nearest Bahama Mama locations with hours, directions, and contact info.",
    },
    {
        id: 2,
        question: "Do you offer CBD pet products?",
        answer: "Yes! Bahama Mama carries a curated line of premium CBD oils and treats specifically formulated for dogs and cats.",
    },
    {
        id: 3,
        question: "Are your products lab tested?",
        answer: "Absolutely. Every product we carry undergoes third-party lab testing for potency, purity, and safety. Certificates of Analysis (COAs) are available upon request at any of our locations.",
    },
    {
        id: 4,
        question: "What is your return policy?",
        answer: "We offer a 30-day satisfaction guarantee on most products. If you're not completely satisfied, bring your receipt and the unused portion of the product to any Bahama Mama location for a full exchange or store credit.",
    },
    {
        id: 5,
        question: "Do I need an ID to purchase CBD products?",
        answer: "Yes, you must be 21 or older to purchase products at Bahama Mama. A valid government-issued ID is required at the time of purchase.",
    },
    {
        id: 6,
        question: "Can I order online for in-store pickup?",
        answer: "Online ordering with in-store pickup is coming soon! In the meantime, you can browse our product catalog online and visit any of our 90+ locations to purchase.",
    },
];

// ─── FAQ Item ─────────────────────────────────────────────────────────────────

function FAQRow({ item, isOpen, onToggle }: {
    item: FAQItem;
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <div
            className={`rounded-xl border transition-all duration-300 overflow-hidden ${isOpen
                ? "border-[#FF6B00]/30 bg-[#2a1200]/70"
                : "border-white/[0.07] bg-[#1e0900]/60 hover:border-white/15 hover:bg-[#2a1200]/40"
                }`}
        >
            {/* Question row */}
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-4 md:py-5 text-left cursor-pointer bg-transparent border-none"
            >
                <span className={`text-[13px] md:text-[14px] font-semibold leading-snug transition-colors duration-200 ${isOpen ? "text-white" : "text-white/80"
                    }`}>
                    {item.question}
                </span>

                {/* Chevron */}
                <span className={`shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-all duration-300 ${isOpen ? "bg-[#FF6B00]/15 text-[#FF6B00] rotate-180" : "text-[#FF6B00] rotate-0"
                    }`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </span>
            </button>

            {/* Answer — animated expand */}
            <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                    maxHeight: isOpen ? "400px" : "0px",
                    opacity: isOpen ? 1 : 0,
                }}
            >
                <p className="text-white/55 text-[13px] leading-[1.8] px-5 md:px-6 pb-5 m-0">
                    {item.answer}
                </p>
            </div>
        </div>
    );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

interface FAQSectionProps {
    faqs?: FAQItem[];
}

export default function FAQSection({ faqs = DEMO_FAQS }: FAQSectionProps) {
    const [openId, setOpenId] = useState<number | null>(2); // second open by default like design

    const toggle = (id: number) =>
        setOpenId(prev => (prev === id ? null : id));

    return (
        <section className="w-full py-14 md:py-20 bg-gradient-to-br from-[#120400] via-[#2a0800] to-[#3d0c00]">            <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-10">
            {/* Heading */}
            <h2 className="text-center text-[clamp(18px,2.5vw,28px)] font-black uppercase tracking-[2px] mb-8 md:mb-10 m-0">
                <span className="text-white">Frequently Asked </span>
                <span className="text-[#FF6B00]">Questions</span>
            </h2>

            {/* FAQ List */}
            <div className="flex flex-col gap-3">
                {faqs.map(item => (
                    <FAQRow
                        key={item.id}
                        item={item}
                        isOpen={openId === item.id}
                        onToggle={() => toggle(item.id)}
                    />
                ))}
            </div>

        </div>
        </section>
    );
}