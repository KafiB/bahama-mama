"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { JournalPost } from "../lib/types";
import { DEMO_POSTS } from "../lib/demo-post";


// ─── Journal Card ─────────────────────────────────────────────────────────────

function JournalCard({ post }: { post: JournalPost }) {
    return (
        <div className="group flex flex-col rounded-xl overflow-hidden bg-[#1e0a02] border border-white/[0.07] hover:border-[rgba(255,107,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)] h-full">
            {/* Image */}
            <div className="relative w-full h-[220px] overflow-hidden shrink-0">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-5 gap-3">
                {/* Category + Date */}
                <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[#FF6B00] text-[11px] font-bold uppercase tracking-[1.5px]">
                        {post.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/40 inline-block" />
                    <span className="text-white/45 text-[11px] uppercase tracking-[1px]">
                        {post.date}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-white text-[14px] font-extrabold uppercase leading-snug tracking-[0.5px] m-0">
                    {post.title}
                </h3>

                {/* Description */}
                <p className="text-white/55 text-[13px] leading-[1.7] flex-grow m-0 line-clamp-3">
                    {post.description}
                </p>

                {/* Read More */}
                <Link
                    href={post.href}
                    className="inline-flex items-center gap-2 text-white text-[12px] font-bold uppercase tracking-[1.5px] no-underline mt-1 hover:text-[#FF6B00] transition-colors duration-200 group/link"
                >
                    Read More
                    <svg
                        width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5"
                        strokeLinecap="round" strokeLinejoin="round"
                        className="transition-transform duration-200 group-hover/link:translate-x-1"
                    >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

interface LatestJournalSectionProps {
    posts?: JournalPost[];
    readAllHref?: string;
    autoPlayInterval?: number;
}

export default function LatestJournalSection({
    posts = DEMO_POSTS,
    readAllHref = "/news",
    autoPlayInterval = 2000,
}: LatestJournalSectionProps) {
    // Duplicate posts to create seamless infinite loop
    const extendedPosts = [...posts, ...posts, ...posts];

    const [currentIndex, setCurrentIndex] = useState(posts.length); // start at second copy
    const [isAnimating, setIsAnimating] = useState(true);
    const trackRef = useRef<HTMLDivElement>(null);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const isPaused = useRef(false);

    // Cards visible per breakpoint — driven by CSS but we use JS too
    const getVisible = () => {
        if (typeof window === "undefined") return 3;
        if (window.innerWidth < 640) return 1;
        if (window.innerWidth < 1024) return 2;
        return 3;
    };

    const [visible, setVisible] = useState(3);

    useEffect(() => {
        const update = () => setVisible(getVisible());
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    // Slide to next
    const slideNext = () => {
        if (isPaused.current) return;
        setIsAnimating(true);
        setCurrentIndex((i) => i + 1);
    };

    // When we hit the end of the second copy — silently reset to second copy start
    useEffect(() => {
        if (currentIndex >= posts.length * 2) {
            const timer = setTimeout(() => {
                setIsAnimating(false); // disable transition for instant jump
                setCurrentIndex(posts.length); // reset silently
            }, 600); // after slide animation completes
            return () => clearTimeout(timer);
        }
        if (currentIndex < posts.length) {
            const timer = setTimeout(() => {
                setIsAnimating(false);
                setCurrentIndex(posts.length * 2 - 1);
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, posts.length]);

    // Re-enable animation after silent reset
    useEffect(() => {
        if (!isAnimating) {
            const t = setTimeout(() => setIsAnimating(true), 50);
            return () => clearTimeout(t);
        }
    }, [isAnimating]);

    // Auto-play timer
    useEffect(() => {
        timerRef.current = setInterval(slideNext, autoPlayInterval);
        return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }, [autoPlayInterval]);

    const pauseAuto = () => {
        isPaused.current = true;
        if (timerRef.current) clearInterval(timerRef.current);
    };

    const resumeAuto = () => {
        isPaused.current = false;
        timerRef.current = setInterval(slideNext, autoPlayInterval);
    };

    // Card width as percentage of container
    const gap = 20; // px gap between cards
    const cardWidthPct = visible === 1 ? 100 : visible === 2 ? 50 : 33.333;

    // Translate: each card is (100/visible)% wide + gap
    // We use a wrapper trick: translate by index * (cardWidth + gap)
    const translateX = `calc(-${currentIndex} * (${cardWidthPct}% + ${gap / visible}px) + ${gap / 2}px)`;

    return (
        <section className="py-16 md:py-20 w-full bg-gradient-to-b from-[#150800] to-[#1a0a00] overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-5 md:px-14">

                {/* ── Header ── */}
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h2 className="text-[clamp(20px,2.2vw,28px)] font-extrabold text-white uppercase tracking-[2px] mb-2.5 m-0">
                            The Latest Journal
                        </h2>
                        <div className="w-14 h-[3px] bg-[#FF6B00] rounded-sm" />
                    </div>
                    <Link
                        href={readAllHref}
                        className="text-[12px] font-bold text-white uppercase tracking-[2px] no-underline border-b border-white/60 pb-0.5 hover:text-[#FF6B00] hover:border-[#FF6B00] transition-colors duration-200"
                    >
                        Read All News
                    </Link>
                </div>

                {/* ── Slider Track ── */}
                <div
                    className="relative overflow-hidden"
                    onMouseEnter={pauseAuto}
                    onMouseLeave={resumeAuto}
                >
                    {/* Track */}
                    <div
                        ref={trackRef}
                        className="flex"
                        style={{
                            transform: `translateX(${translateX})`,
                            transition: isAnimating
                                ? "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                                : "none",
                            gap: `${gap}px`,
                        }}
                    >
                        {extendedPosts.map((post, idx) => (
                            <div
                                key={`${post.id}-${idx}`}
                                style={{
                                    width: `calc(${cardWidthPct}% - ${gap * (visible - 1) / visible}px)`,
                                    flexShrink: 0,
                                }}
                            >
                                <JournalCard post={post} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Dot indicators ── */}
                <div className="flex justify-center gap-2 mt-9">
                    {posts.map((_, i) => {
                        const active = (currentIndex % posts.length) === i;
                        return (
                            <button
                                key={i}
                                onClick={() => {
                                    pauseAuto();
                                    setIsAnimating(true);
                                    setCurrentIndex(posts.length + i);
                                    resumeAuto();
                                }}
                                aria-label={`Go to post ${i + 1}`}
                                className={`h-2 rounded-full border-none cursor-pointer transition-all duration-300 ${
                                    active ? "w-6 bg-[#FF6B00]" : "w-2 bg-white/25"
                                }`}
                            />
                        );
                    })}
                </div>

            </div>
        </section>
    );
}