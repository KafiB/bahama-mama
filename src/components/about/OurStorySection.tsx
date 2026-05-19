"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface StoryEvent {
    id: number;
    year: string;
    title: string;
    description: string;
    side: "left" | "right";
    isLast?: boolean;
}

// ─── Demo Data ────────────────────────────────────────────────────────────────

const STORY_EVENTS: StoryEvent[] = [
    {
        id: 1,
        year: "2019",
        title: "Founded in Texas",
        description:
            "Started our mission to redefine the retail experience from our first storefront in Dallas, focusing on customer education and premium product sourcing.",
        side: "left",
    },
    {
        id: 2,
        year: "2020",
        title: "Regional Expansion",
        description:
            "Successfully navigated a challenging year by opening 20+ locations across major Texas hubs, proving the resilience of our community-first model.",
        side: "right",
    },
    {
        id: 3,
        year: "2021",
        title: "Digital Innovation",
        description:
            "Launched our proprietary ecosystem of premium brands and omnichannel shopping experience, setting new standards for retail technology.",
        side: "left",
    },
    {
        id: 4,
        year: "TODAY",
        title: "Market Leaders",
        description:
            "Serving millions of Texans with 90+ physical locations and a thriving online community, we continue to grow while staying true to our local roots.",
        side: "right",
        isLast: true,
    },
];

// ─── Single Timeline Node ─────────────────────────────────────────────────────

function TimelineNode({
    event,
    index,
    lineVisible,
}: {
    event: StoryEvent;
    index: number;
    lineVisible: boolean;
}) {
    const [lineReached, setLineReached] = useState(false);
    const [contentVisible, setContentVisible] = useState(false);

    useEffect(() => {
        if (!lineVisible) return;

        const lineDelay = index * 650 + 300;

        const lineTimer = setTimeout(() => {
            setLineReached(true);
            setTimeout(() => setContentVisible(true), 200);
        }, lineDelay);

        return () => clearTimeout(lineTimer);
    }, [lineVisible, index]);

    const isLeft = event.side === "left";

    return (
        <div className="relative flex flex-row sm:items-start w-full min-h-[150px] sm:min-h-[140px] mb-8 sm:mb-0">

            {/* ── LEFT CONTENT (Desktop Only) ── */}
            <div
                className={`hidden sm:flex w-[calc(50%-32px)] flex-col items-end text-right pr-8 pt-1 transition-all duration-700 ease-out ${
                    isLeft
                        ? contentVisible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-16"
                        : "pointer-events-none opacity-0"
                }`}
            >
                {isLeft && (
                    <>
                        <span className="font-['Bebas_Neue',sans-serif] font-bold text-[36px] leading-[40px] text-white tracking-normal mb-1">
                            {event.year}
                        </span>
                        <span className="text-[#FF6B00] text-[20px] font-bold font-['Inter',sans-serif] leading-[28px] mb-3">
                            {event.title}
                        </span>
                        <p className="text-white/70 text-[16px] font-normal font-['Inter',sans-serif] leading-[24px] max-w-[644px]">
                            {event.description}
                        </p>
                    </>
                )}
            </div>

            {/* ── CENTER TRACK BALLS ── */}
            <div className="flex flex-col items-center w-12 sm:w-16 shrink-0 absolute left-0 sm:relative sm:left-auto h-full justify-start pt-2 sm:pt-1">
                <div
                    className={`transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-10 ${
                        lineReached ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    }`}
                >
                    <Image
                        src={event.isLast ? "/about/star.png" : "/about/circle.png"}
                        alt={event.isLast ? "star" : "circle"}
                        width={event.isLast ? 96 : 28}
                        height={event.isLast ? 36 : 28}
                        className="object-contain"
                    />
                </div>
            </div>

            {/* ── RIGHT CONTENT (Desktop right nodes AND all mobile view cards) ── */}
            <div
                className={`w-full sm:w-[calc(50%-32px)] flex flex-col items-start text-left pl-14 sm:pl-8 pt-1 transition-all duration-700 ease-out ${
                    contentVisible 
                        ? "opacity-100 translate-x-0" 
                        : isLeft 
                            ? "sm:opacity-0 opacity-0 sm:translate-x-0 -translate-x-10" 
                            : "opacity-0 translate-x-16"
                }`}
            >
                {/* Mobile Element Block (Visible on all screens under 640px wide) */}
                <div className="block sm:hidden w-full">
                    <span className="font-['Bebas_Neue',sans-serif] font-bold text-[36px] leading-[40px] text-white tracking-normal mb-1 block">
                        {event.year}
                    </span>
                    <span className="text-[#FF6B00] text-[20px] font-bold font-['Inter',sans-serif] leading-[28px] mb-2 block">
                        {event.title}
                    </span>
                    <p className="text-white/70 text-[15px] font-normal font-['Inter',sans-serif] leading-[22px]">
                        {event.description}
                    </p>
                </div>

                {/* Desktop Right Item Render Block (Fixed to be vertical flex) */}
                {!isLeft && (
                    <div className="hidden sm:flex flex-col items-start">
                        <span className="font-['Bebas_Neue',sans-serif] font-bold text-[36px] leading-[40px] text-white tracking-normal mb-1">
                            {event.year}
                        </span>
                        <span className="text-[#FF6B00] text-[20px] font-bold font-['Inter',sans-serif] leading-[28px] mb-3">
                            {event.title}
                        </span>
                        <p className="text-white/70 text-[16px] font-normal font-['Inter',sans-serif] leading-[24px] max-w-[644px]">
                            {event.description}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

interface OurStorySectionProps {
    events?: StoryEvent[];
}

export default function OurStorySection({ events = STORY_EVENTS }: OurStorySectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    const [lineHeight, setLineHeight] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);
    const totalHeight = useRef(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!inView || !trackRef.current) return;
        totalHeight.current = trackRef.current.scrollHeight;

        let start: number | null = null;
        const duration = events.length * 650 + 400;

        const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const elapsed = timestamp - start;
            const progress = Math.min(elapsed / duration, 1);
            setLineHeight(progress * totalHeight.current);
            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    }, [inView, events.length]);

    return (
        <section
            ref={sectionRef}
            className="w-full py-12 sm:py-20 bg-gradient-to-br from-[#120400] via-[#1e0800] to-[#2d0e00] overflow-hidden"
        >
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-14">
                
                {/* Header Container */}
                <div className="flex flex-col items-center text-center py-6 sm:py-10">
                    <h5 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] text-[#FF6B00] mb-3">
                        Journey
                    </h5>
                    <h2 className="text-[clamp(28px,4vw,48px)] font-black text-white leading-tight tracking-tight">
                        Our Story
                    </h2>
                </div>

                {/* ── Timeline Track Wrapper ── */}
                <div className="relative pl-0" ref={trackRef}>

                    {/* Animated vertical track line */}
                    <div
                        className="absolute left-[18px] sm:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#FF6B00] to-[#FF6B00]/30 origin-top rounded-full z-0"
                        style={{
                            height: `${lineHeight}px`,
                            transition: "height 0.05s linear",
                            top: 0,
                        }}
                    />

                    {/* Faint static tracking line */}
                    <div className="absolute left-[18px] sm:left-1/2 -translate-x-1/2 w-[2px] h-full bg-white/[0.06] rounded-full z-0" />

                    {/* Timeline Data Nodes Layout Container */}
                    <div className="relative z-10 flex flex-col gap-6 sm:gap-0">
                        {events.map((event, index) => (
                            <TimelineNode
                                key={event.id}
                                event={event}
                                index={index}
                                lineVisible={inView}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}