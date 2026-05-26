"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface FlagshipLocation {
    id: number;
    image: string;
    badge: string;
    name: string;
    description: string;
    href: string;
}

// ─── Demo Data ────────────────────────────────────────────────────────────────

const DEMO_LOCATIONS: FlagshipLocation[] = [
    {
        id: 1,
        image: "/locations/flagship/i1.png",
        badge: "EST. 2018",
        name: "The Houston Lab",
        description: "Our original concept store featuring a full tasting bar and custom glass collection.",
        href: "/locations/houston-lab",
    },
    {
        id: 2,
        image: "/locations/flagship/i3.png",
        badge: "NEW OPENING",
        name: "Austin Downtown",
        description: "A tech-infused location in the heart of 6th street with 24/7 smart lockers.",
        href: "/locations/austin-downtown",
    },
    {
        id: 3,
        image: "/locations/flagship/i2.png",
        badge: "FLAGSHIP",
        name: "Dallas North Park",
        description: "Luxury meets lifestyle. Our largest inventory of premium hardware and limited accessories.",
        href: "/locations/dallas-north-park",
    },
    {
        id: 4,
        image: "/locations/flagship/i4.jpg",
        badge: "EST. 2020",
        name: "San Antonio Hub",
        description: "A community-first space with weekly events, workshops, and exclusive product drops.",
        href: "/locations/san-antonio-hub",
    },
    {
        id: 5,
        image: "/locations/flagship/i5.jpeg",
        badge: "NEW OPENING",
        name: "Fort Worth Studio",
        description: "Minimalist design meets maximum product variety in our newest experiential concept.",
        href: "/locations/fort-worth-studio",
    },
];

// ─── Flagship Card ────────────────────────────────────────────────────────────

function FlagshipCard({
    location,
    featured = false,
}: {
    location: FlagshipLocation;
    featured?: boolean;
}) {
    return (
        <div
            className={`group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${featured
                ? "scale-[1.04] shadow-[0_24px_60px_rgba(0,0,0,0.7)] z-10"
                : "scale-100 shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:scale-[1.02]"
                }`}
        >
            {/* Image */}
            <div className="relative w-full h-[340px] overflow-hidden">
                <Image
                    src={location.image}
                    alt={location.name}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay — bottom dark fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,3,0,0.92)] via-[rgba(10,3,0,0.3)] to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                    <span className="bg-[#FF6A00] text-white text-[10px] font-black uppercase tracking-[1.5px] px-3 py-1.5 rounded-sm">
                        {location.badge}
                    </span>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 pb-7 flex flex-col gap-3">
                    <h3 className="text-white text-[18px] font-black leading-tight m-0 tracking-tight">
                        {location.name}
                    </h3>
                    <p className="text-white/65 text-[12px] leading-[1.6] m-0 line-clamp-2">
                        {location.description}
                    </p>
                    <Link
                        href={location.href}
                        className="inline-flex items-center gap-1.5 text-[#FF6A00] text-[11px] font-black uppercase tracking-[1.5px] no-underline mt-1 transition-gap duration-200 hover:gap-2.5 group/link"
                        onClick={(e) => e.stopPropagation()}
                    >
                        Explore Location
                        <svg
                            width="12" height="12" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="3"
                            strokeLinecap="round" strokeLinejoin="round"
                            className="transition-transform duration-200 group-hover/link:translate-x-1"
                        >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

interface FlagshipExperiencesSectionProps {
    locations?: FlagshipLocation[];
    autoPlayInterval?: number;
}

export default function FlagshipExperiencesSection({
    locations = DEMO_LOCATIONS,
    autoPlayInterval = 2000,
}: FlagshipExperiencesSectionProps) {
    const extendedLocations = [...locations, ...locations, ...locations];

    const [currentIndex, setCurrentIndex] = useState(locations.length);
    const [isAnimating, setIsAnimating] = useState(true);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const isPaused = useRef(false);

    const getVisible = () => {
        if (typeof window === "undefined") return 4;
        if (window.innerWidth < 640) return 1;
        if (window.innerWidth < 768) return 2;
        if (window.innerWidth < 1200) return 3;
        return 4;
    };

    const [visible, setVisible] = useState(4);

    useEffect(() => {
        const update = () => setVisible(getVisible());
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const slideNext = () => {
        if (isPaused.current) return;
        setIsAnimating(true);
        setCurrentIndex((i) => i + 1);
    };

    // Seamless infinite loop reset
    useEffect(() => {
        if (currentIndex >= locations.length * 2) {
            const t = setTimeout(() => {
                setIsAnimating(false);
                setCurrentIndex(locations.length);
            }, 650);
            return () => clearTimeout(t);
        }
        if (currentIndex < locations.length) {
            const t = setTimeout(() => {
                setIsAnimating(false);
                setCurrentIndex(locations.length * 2 - 1);
            }, 650);
            return () => clearTimeout(t);
        }
    }, [currentIndex, locations.length]);

    // Re-enable animation after silent reset
    useEffect(() => {
        if (!isAnimating) {
            const t = setTimeout(() => setIsAnimating(true), 50);
            return () => clearTimeout(t);
        }
    }, [isAnimating]);

    // Auto-play
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

    const gap = 16;
    const cardWidthPct = visible === 1 ? 100 : visible === 2 ? 50 : visible === 3 ? 33.333 : 25;
    const translateX = `calc(-${currentIndex} * (${cardWidthPct}% + ${gap / visible}px) + ${gap / 2}px)`;

    // Featured card = the middle of visible cards
    const featuredOffset = Math.floor(visible / 2);

    return (
        <section className="py-16 md:py-20 w-full bg-gradient-to-br from-[#1a0800] to-[#1f0d03] overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-5 md:px-14">

                {/* ── Header ── */}
                <div className="text-center mb-12">
                    <h2 className="text-[clamp(24px,3.5vw,48px)] font-black text-white uppercase tracking-[2px] mb-4">
                        Flagship Experiences
                    </h2>
                    <p className="text-white/50 text-[14px] leading-[1.7] max-w-[480px] mx-auto">
                        Visit our premium concept stores for an elevated shopping experience and
                        exclusive product drops.
                    </p>
                </div>

                {/* ── Slider ── */}
                <div
                    className="relative overflow-hidden"
                    onMouseEnter={pauseAuto}
                    onMouseLeave={resumeAuto}
                >
                    <div
                        className="flex items-center"
                        style={{
                            transform: `translateX(${translateX})`,
                            transition: isAnimating
                                ? "transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                                : "none",
                            gap: `${gap}px`,
                        }}
                    >
                        {extendedLocations.map((loc, idx) => {
                            const positionInView = idx - currentIndex;
                            const isFeatured = positionInView === featuredOffset;
                            return (
                                <div
                                    key={`${loc.id}-${idx}`}
                                    style={{
                                        width: `calc(${cardWidthPct}% - ${gap * (visible - 1) / visible}px)`,
                                        flexShrink: 0,
                                        transition: "transform 0.65s ease, opacity 0.65s ease",
                                    }}
                                >
                                    <FlagshipCard location={loc} featured={isFeatured} />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ── Dot indicators ── */}
                <div className="flex justify-center gap-2 mt-10">
                    {locations.map((_, i) => {
                        const active = (currentIndex % locations.length) === i;
                        return (
                            <button
                                key={i}
                                onClick={() => {
                                    pauseAuto();
                                    setIsAnimating(true);
                                    setCurrentIndex(locations.length + i);
                                    resumeAuto();
                                }}
                                aria-label={`Go to location ${i + 1}`}
                                className={`h-2 rounded-full border-none cursor-pointer transition-all duration-300 ${active ? "w-6 bg-[#FF6A00]" : "w-2 bg-white/25"
                                    }`}
                            />
                        );
                    })}
                </div>

            </div>
        </section>
    );
}