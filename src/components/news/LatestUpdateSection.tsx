"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import type { NewsCategory } from "./NewsFilterBar";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface NewsArticle {
    id: number;
    image: string;
    category: string;
    title: string;
    excerpt: string;
    date: string;
    href: string;
}

// ─── Demo Data ────────────────────────────────────────────────────────────────

const DEMO_ARTICLES: NewsArticle[] = [
    { id: 1, image: "/news/latest/news1,4.png", category: "Product Updates", title: "The Zen Blend Collection: Now Available Nationwide", excerpt: "Our most requested wellness blend has officially launched in all stores and online, featuring pure...", date: "Oct 24, 2023", href: "/news/zen-blend" },
    { id: 2, image: "/news/latest/new2.png", category: "Company News", title: "Sustainability: Our 2024 Green Initiative Roadmap", excerpt: "Learn how Bahama Mama is transitioning to 100% biodegradable packaging across all product lines...", date: "Oct 20, 2023", href: "/news/green-initiative" },
    { id: 3, image: "/news/latest/news3.png", category: "Press Releases", title: "Partnership With Local Texas Organic Hemp Farmers", excerpt: "We've secured long-term contracts with regional farmers to ensure the highest quality seed-to-shelf...", date: "Oct 15, 2023", href: "/news/hemp-partnership" },
    { id: 4, image: "/news/latest/news1,4.png", category: "Product Updates", title: "The Zen Blend Collection: Now Available Nationwide", excerpt: "Our most requested wellness blend has officially launched in all stores and online, featuring pure...", date: "Oct 24, 2023", href: "/news/zen-blend-2" },
    { id: 5, image: "/news/latest/n1.jpg", category: "Store Openings", title: "Bahama Mama Opens 5 New Locations in Texas", excerpt: "Expanding our footprint in the Lone Star State, bringing the premium experience to Austin, Dallas...", date: "Oct 12, 2023", href: "/news/new-locations" },
    { id: 6, image: "/news/latest/n2.png", category: "Company News", title: "New Chief Marketing Officer Joins Bahama Mama Leadership", excerpt: "We are thrilled to welcome a seasoned marketing executive with over 20 years of retail experience...", date: "Sep 28, 2023", href: "/news/new-cmo" },
    { id: 7, image: "/news/latest/n3.jpg", category: "Product Updates", title: "Introducing Our New Line of Premium Vape Devices", excerpt: "Engineered for superior performance, our latest vape hardware lineup sets a new standard for the...", date: "Sep 20, 2023", href: "/news/vape-devices" },
    { id: 8, image: "/news/latest/n4.avif", category: "Press Releases", title: "Bahama Mama Announces Q3 Record Revenue Growth", excerpt: "Strong consumer demand across all product categories drove record third-quarter revenue, reflecting...", date: "Sep 15, 2023", href: "/news/q3-earnings" },
    { id: 9, image: "/news/latest/new2.png", category: "Store Openings", title: "Grand Opening: Houston Galleria Premium Concept Store", excerpt: "Our largest flagship yet opens its doors with an immersive retail experience unlike anything in...", date: "Sep 10, 2023", href: "/news/houston-galleria" },
    { id: 10, image: "/news/latest/news3.png", category: "Company News", title: "Bahama Mama Partners With National CBD Association", excerpt: "A landmark partnership that strengthens industry standards and promotes responsible retail practices...", date: "Sep 05, 2023", href: "/news/cbd-association" },
    { id: 11, image: "/news/latest/n1.jpg", category: "Product Updates", title: "Premium CBD Tinctures: New Flavors Now In Stock", excerpt: "Customers can now enjoy four exciting new flavors in our best-selling full-spectrum CBD tincture...", date: "Aug 28, 2023", href: "/news/tinctures" },
    { id: 12, image: "/news/latest/n3.jpg", category: "Press Releases", title: "Bahama Mama Recognized as Top Employer in Texas Retail", excerpt: "For the second consecutive year, we have been honored with the Texas Retail Employer of the Year...", date: "Aug 20, 2023", href: "/news/employer-award" },
];

const INITIAL_COUNT = 4;
const LOAD_MORE_COUNT = 4;

// ─── News Card ────────────────────────────────────────────────────────────────

function NewsCard({ article }: { article: NewsArticle }) {
    return (
        <Link
            href={article.href}
            className="group flex flex-col bg-[#1e0900]/80 border border-white/[0.07] rounded-xl overflow-hidden hover:border-[#FF6B00]/25 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)] transition-all duration-300 no-underline h-full"
        >
            {/* Image */}
            <div className="relative w-full overflow-hidden shrink-0" style={{ height: "220px" }}>
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-5 gap-2.5">
                <span className="text-[#FF6B00] text-[10px] font-black uppercase tracking-[2px]">
                    {article.category}
                </span>
                <h3 className="text-white text-[14px] font-black uppercase leading-snug tracking-[0.5px] m-0 line-clamp-2">
                    {article.title}
                </h3>
                <p className="text-white/50 text-[12px] leading-[1.7] flex-grow m-0 line-clamp-2">
                    {article.excerpt}
                </p>
                <div className="flex items-center justify-between mt-2 pt-3 border-t border-white/[0.07]">
                    <span className="text-white/35 text-[11px] font-medium uppercase tracking-[1px]">
                        {article.date}
                    </span>
                    <span className="text-white text-[11px] font-black uppercase tracking-[1.5px] group-hover:text-[#FF6B00] transition-colors duration-200">
                        Read More
                    </span>
                </div>
            </div>
        </Link>
    );
}

// ─── Props ────────────────────────────────────────────────────────────────────

interface LatestUpdatesSectionProps {
    articles?: NewsArticle[];
    activeCategory?: NewsCategory | string;
    searchQuery?: string;
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function LatestUpdatesSection({
    articles = DEMO_ARTICLES,
    activeCategory = "All",
    searchQuery = "",
}: LatestUpdatesSectionProps) {
    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
    const [loading, setLoading] = useState(false);

    // Filter + search
    const filtered = useMemo(() => {
        return articles.filter(a => {
            const matchCat = activeCategory === "All" || a.category === activeCategory;
            const matchSearch = !searchQuery ||
                a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                a.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                a.category.toLowerCase().includes(searchQuery.toLowerCase());
            return matchCat && matchSearch;
        });
    }, [articles, activeCategory, searchQuery]);

    // Reset visible count when filter/search changes
    useMemo(() => {
        setVisibleCount(INITIAL_COUNT);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeCategory, searchQuery]);

    const visible = filtered.slice(0, visibleCount);
    const hasMore = visibleCount < filtered.length;

    const loadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setVisibleCount(prev => prev + LOAD_MORE_COUNT);
            setLoading(false);
        }, 400);
    };

    return (
        <section id="latest-updates" className="w-full py-12 md:py-16 bg-gradient-to-br from-[#120400] via-[#1a0800] to-[#3a1200]">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">

                {/* Header row */}
                <div className="flex items-center justify-between mb-8 md:mb-10">
                    <div>
                        <h2 className="text-white text-[clamp(18px,2.2vw,26px)] font-black uppercase tracking-[3px] m-0 mb-2">
                            Latest Updates
                        </h2>
                        <div className="w-12 h-[3px] bg-[#FF6B00] rounded-sm" />
                    </div>
                    {hasMore && (
                        <button
                            onClick={loadMore}
                            className="text-[#FF6B00] text-[12px] font-black uppercase tracking-[2px] bg-transparent border-none cursor-pointer hover:text-white transition-colors duration-200"
                        >
                            View All
                        </button>
                    )}
                </div>

                {/* Empty state */}
                {filtered.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-20 gap-3">
                        <p className="text-white/30 text-[14px]">No articles found.</p>
                    </div>
                )}

                {/* Cards grid */}
                {filtered.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {visible.map(article => (
                            <NewsCard key={article.id} article={article} />
                        ))}
                    </div>
                )}

                {/* Load more */}
                {hasMore && (
                    <div className="flex justify-center mt-10">
                        <button
                            onClick={loadMore}
                            disabled={loading}
                            className="flex items-center gap-2.5 bg-transparent border border-[#FF6B00]/50 text-[#FF6B00] text-[12px] font-black uppercase tracking-[2px] px-8 py-4 rounded-xl hover:bg-[#FF6B00]/10 transition-all duration-200 cursor-pointer disabled:opacity-50"
                        >
                            {loading ? (
                                <>
                                    <span className="w-4 h-4 border-2 border-[#FF6B00]/30 border-t-[#FF6B00] rounded-full animate-spin" />
                                    Loading...
                                </>
                            ) : (
                                <>
                                    Load More Articles
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </>
                            )}
                        </button>
                    </div>
                )}

                {/* All loaded + View Less */}
                {!hasMore && filtered.length > 0 && visibleCount > INITIAL_COUNT && (
                    <div className="flex flex-col items-center gap-3 mt-10">
                        <p className="text-white/25 text-[12px] uppercase tracking-[2px] m-0">
                            All articles loaded
                        </p>
                        <button
                            onClick={() => {
                                setVisibleCount(INITIAL_COUNT);
                                // Smooth scroll back to section top
                                document.querySelector("#latest-updates")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="flex items-center gap-2.5 bg-transparent border border-white/20 text-white/50 text-[12px] font-black uppercase tracking-[2px] px-8 py-4 rounded-xl hover:border-[#FF6B00]/50 hover:text-[#FF6B00] hover:bg-[#FF6B00]/10 transition-all duration-200 cursor-pointer"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="18 15 12 9 6 15" />
                            </svg>
                            View Less
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
}