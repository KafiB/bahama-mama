"use client";

import { useState } from "react";
import Image from "next/image";
import { DEMO_FEEDBACK } from "@/components/lib/demo-feedback";
import { Review } from "@/components/lib/types";

const VISIBLE = 3;

// ─── Arrow Button ─────────────────────────────────────────────────────────────

function ArrowButton({ direction, onClick }: { direction: "left" | "right"; onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            aria-label={direction === "left" ? "Previous" : "Next"}
            className="
    w-10
    h-10
    sm:w-12
    sm:h-12
    rounded-xl
    border
    border-white/25
    bg-white/5
    text-white
    flex
    items-center
    justify-center
    cursor-pointer
    transition-all
    duration-300
    hover:border-[#FF6B00]
    hover:bg-[rgba(255,107,0,0.12)]
    hover:text-[#FF6B00]
    hover:scale-105
"        >
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

// ─── Review Card ──────────────────────────────────────────────────────────────

function ReviewCard({ name, store, image, quote, rating, accentTop = true }: Review) {
    return (
        <div
            className={`
        flex
        flex-col
        gap-5
        rounded-2xl
        p-5
        sm:p-6
        lg:p-7
        bg-[#2a1a10]/70
        border
        border-[#3a2010]/60
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_12px_40px_rgba(255,107,0,0.08)]
        h-full
        ${accentTop
                    ? "border-t-[3px] border-t-[#FF6B00]"
                    : "border-t-[3px] border-t-white/20"
                }`}
        >
            {/* Stars */}
            <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                    <span
                        key={i}
                        className={`text-lg leading-none ${i < rating ? "text-[#FF6B00]" : "text-white/20"}`}
                    >
                        ★
                    </span>
                ))}
            </div>

            {/* Quote */}
            <p
                className="
        text-white/75
        text-[13px]
        sm:text-sm
        font-normal
        leading-[1.9]
        flex-grow
    "
            >                &ldquo;{quote}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-1">
                <div
                    className="
        w-[42px]
        h-[42px]
        sm:w-[46px]
        sm:h-[46px]
        rounded-xl
        overflow-hidden
        shrink-0
        bg-[#FF6B00]/20
    "
                >                    <Image
                        src={image}
                        alt={name}
                        width={46}
                        height={46}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            // fallback to orange placeholder if image missing
                            (e.currentTarget as HTMLImageElement).style.display = "none";
                        }}
                    />
                </div>
                <div>
                    <p
                        className="
        text-white
        text-[11px]
        sm:text-[12px]
        font-bold
        uppercase
        tracking-[0.06em]
        leading-none
        m-0
    "
                    >                        {name}
                    </p>
                    <p
                        className="
        text-[#FF6B00]/75
        text-[10px]
        sm:text-[11px]
        font-normal
        mt-1
        leading-none
        m-0
    "
                    >
                        {store}
                    </p>
                </div>
            </div>
        </div>
    );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

interface CommunityFeedbackSectionProps {
    reviews?: Review[];
}

export default function CommunityFeedbackSection({
    reviews = DEMO_FEEDBACK,
}: CommunityFeedbackSectionProps) {
    const [startIndex, setStartIndex] = useState(0);
    const total = reviews.length;

    const prev = () => setStartIndex((i) => (i - 1 + total) % total);
    const next = () => setStartIndex((i) => (i + 1) % total);

    // Always show exactly VISIBLE cards, wrap around circularly
    const visibleReviews = Array.from(
        { length: Math.min(VISIBLE, total) },
        (_, i) => reviews[(startIndex + i) % total]
    );

    return (
        <section
            className="
        py-14
        sm:py-16
        md:py-20
        w-full
        bg-gradient-to-br
        from-[#180800]
        via-[#2a0e00]
        to-[#180800]
        overflow-hidden
    "
        >
            <div
                className="
        max-w-[1400px]
        mx-auto
        px-4
        sm:px-6
        md:px-10
        lg:px-14
    "
            >
                {/* Header */}
                <div
                    className="
        flex
        flex-col
        sm:flex-row
        sm:items-center
        justify-between
        gap-6
        mb-8
        sm:mb-10
        md:mb-12
    "
                >   <div>
                        <h2
                            className="
        text-[24px]
        sm:text-[28px]
        lg:text-[32px]
        font-extrabold
        text-white
        uppercase
        tracking-[0.05em]
        mb-2.5
        leading-none
    "
                        >                            Community Feedback
                        </h2>
                        <div className="w-14 h-[3px] bg-[#FF6B00] rounded-full" />
                    </div>
                    <div className="flex gap-2 sm:gap-3 self-start sm:self-auto">                        <ArrowButton direction="left" onClick={prev} />
                        <ArrowButton direction="right" onClick={next} />
                    </div>
                </div>

                {/* Cards — always 3 in a row */}
                <div
                    className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-3
        gap-5
        sm:gap-6
    "
                >                    {visibleReviews.map((review) => (
                    <ReviewCard key={`${review.id}-${startIndex}`} {...review} />
                ))}
                </div>

                {/* Dot indicators */}
                <div className="flex justify-center gap-2 mt-7 sm:mt-9 flex-wrap">                    {reviews.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setStartIndex(i)}
                        aria-label={`Go to review ${i + 1}`}
                        className={`h-2 rounded-full border-none cursor-pointer transition-all duration-300 ${i === startIndex ? "w-6 bg-[#FF6B00]" : "w-2 bg-white/25"
                            }`}
                    />
                ))}
                </div>

            </div>
        </section>
    );
}