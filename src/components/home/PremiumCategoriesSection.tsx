"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export interface Category {
    id: number;
    image: string;
    name: string;
    description: string;
    href: string;
}

const CATEGORIES: Category[] = [
    {
        id: 1,
        image: "/home/categories/c1.png",
        name: "CBD Products",
        description: "Premium full-spectrum oils, topicals, and edibles for daily wellness.",
        href: "/products/cbd",
    },
    {
        id: 2,
        image: "/home/categories/c2.png",
        name: "Vape Devices",
        description: "Advanced mods, pods, and high-performance hardware for enthusiasts.",
        href: "/products/vape-devices",
    },
    {
        id: 3,
        image: "/home/categories/c3.png",
        name: "Disposable Vapes",
        description: "Convenient, flavorful, and top-rated disposables from leading brands.",
        href: "/products/disposable-vapes",
    },
    {
        id: 4,
        image: "/home/categories/c4.png",
        name: "Hookah & Water Pipes",
        description: "Artisan glass, luxury hookahs, and premium accessories for collectors.",
        href: "/products/hookah",
    },
    {
        id: 5,
        image: "/home/categories/c5.png",
        name: "Premium Devices",
        description: "Next-generation devices engineered for superior performance and style.",
        href: "/products/premium-devices",
    },
];

const VISIBLE = 4;

export default function PremiumCategoriesSection() {
    const [startIndex, setStartIndex] = useState(0);
    const total = CATEGORIES.length;

    const prev = () => setStartIndex((i) => (i - 1 + total) % total);
    const next = () => setStartIndex((i) => (i + 1) % total);

    const visibleItems = Array.from(
        { length: Math.min(VISIBLE, total) },
        (_, i) => CATEGORIES[(startIndex + i) % total]
    );

    return (
        <section className="bg-gradient-to-b from-[#1a0800] to-[#1f0d03] py-16 md:py-20 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-5 md:px-14">

                {/* HEADER ROW */}
                <div className="flex items-start justify-between mb-10">
                    <div>
                        <h2 className="text-[clamp(20px,2.2vw,30px)] font-extrabold text-white uppercase tracking-[2px] leading-none">
                            Premium Categories
                        </h2>
                        <div className="w-14 h-[3px] bg-[#FF6B00] mt-2.5 rounded-sm" />
                    </div>

                    {/* Arrows */}
                    <div className="flex gap-2.5">
                        <ArrowButton direction="left" onClick={prev} />
                        <ArrowButton direction="right" onClick={next} />
                    </div>
                </div>

                {/* CARDS GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {visibleItems.map((cat) => (
                        <CategoryCard key={`${cat.id}-${startIndex}`} category={cat} />
                    ))}
                </div>

                {/* DOT INDICATORS */}
                <div className="flex justify-center gap-2 mt-9">
                    {CATEGORIES.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setStartIndex(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`h-2 rounded-full border-none cursor-pointer transition-all duration-300 ${
                                i === startIndex
                                    ? "w-6 bg-[#FF6B00]"
                                    : "w-2 bg-white/25"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ArrowButton({ direction, onClick }: { direction: "left" | "right"; onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            aria-label={direction === "left" ? "Previous" : "Next"}
            className="w-12 h-12 rounded-lg border border-white/25 bg-white/5 text-white flex items-center justify-center cursor-pointer transition-all duration-250 hover:border-[#FF6B00] hover:bg-[rgba(255,107,0,0.12)] hover:text-[#FF6B00]"
        >
            {direction === "left" ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                </svg>
            ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                </svg>
            )}
        </button>
    );
}

function CategoryCard({ category }: { category: Category }) {
    return (
        <div className="group bg-[rgba(30,10,3,0.90)] border border-white/[0.07] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(255,107,0,0.35)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)] cursor-pointer">
            {/* IMAGE */}
            <div className="relative w-full aspect-[1/1.05] overflow-hidden">
                <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* TEXT */}
            <div className="p-5 pb-6">
                <h3 className="text-[15px] font-extrabold text-white uppercase tracking-[1.5px] mb-2">
                    {category.name}
                </h3>
                <p className="text-[13px] text-white/55 leading-relaxed mb-3.5">
                    {category.description}
                </p>
                <Link
                    href={category.href}
                    className="text-[13px] font-semibold text-[#FF6B00] no-underline inline-flex items-center gap-1.5 transition-all duration-200 hover:gap-2.5"
                >
                    Explore Category
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}