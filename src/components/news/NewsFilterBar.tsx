"use client";

import { useState } from "react";

export type NewsCategory = "All" | "Company News" | "Store Openings" | "Product Updates" | "Press Releases";

export const NEWS_CATEGORIES: NewsCategory[] = [
    "All", "Company News", "Store Openings", "Product Updates", "Press Releases"
];

interface NewsFilterBarProps {
    activeCategory: NewsCategory;
    onCategoryChange: (cat: NewsCategory) => void;
    searchQuery: string;
    onSearchChange: (q: string) => void;
}

export default function NewsFilterBar({
    activeCategory,
    onCategoryChange,
    searchQuery,
    onSearchChange,
}: NewsFilterBarProps) {
    const [searchFocused, setSearchFocused] = useState(false);

    return (
        <div className="w-full bg-gradient-to-br from-[#0e0400] via-[#1a0800] to-[#3a1200] backdrop-blur-sm border-b border-white/[0.06] sticky top-0 z-30">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 py-3 md:py-4">

                    {/* ── Filter Tabs ── */}
                    <div className="flex items-center gap-2 flex-wrap">
                        {NEWS_CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => onCategoryChange(cat)}
                                className={`px-4 py-2 rounded-lg text-[12px] font-bold uppercase tracking-[1px] border cursor-pointer transition-all duration-200 whitespace-nowrap ${
                                    activeCategory === cat
                                        ? "bg-[#FF6B00] border-[#FF6B00] text-white"
                                        : "bg-transparent border-white/15 text-white/60 hover:border-white/30 hover:text-white"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* ── Search ── */}
                    <div className={`flex items-center gap-2 bg-white/[0.06] border rounded-lg px-3 py-2 transition-all duration-200 w-full sm:w-auto sm:min-w-[220px] md:min-w-[260px] ${
                        searchFocused ? "border-[#FF6B00]/50 bg-white/[0.09]" : "border-white/10"
                    }`}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search Articles"
                            value={searchQuery}
                            onChange={e => onSearchChange(e.target.value)}
                            onFocus={() => setSearchFocused(true)}
                            onBlur={() => setSearchFocused(false)}
                            className="flex-1 bg-transparent border-none outline-none text-white/80 text-[13px] placeholder:text-white/35 caret-[#FF6B00] min-w-0"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => onSearchChange("")}
                                className="text-white/30 hover:text-white/60 transition-colors text-[16px] leading-none cursor-pointer bg-transparent border-none shrink-0"
                            >
                                ×
                            </button>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}