"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [search, setSearch] = useState("");

    return (
        <footer className="w-full bg-gradient-to-br from-[#1a0800] to-[#1f0d03]">

            {/* ── MAIN CONTENT ── */}
            <div
                className="
        max-w-[1400px]
        mx-auto
        px-4
        sm:px-6
        md:px-10
        lg:px-14
        py-14
        sm:py-16
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-10
        md:gap-8
        lg:gap-12
        xl:gap-16
    "
            >
                {/* ── COL 1: Logo + tagline + icons ── */}
                <div className="flex flex-col gap-5 items-center md:items-start text-center md:text-left">                    <Link href="/home">
                    <Image
                        src="/footer/logo.svg"
                        alt="Bahama Mama"
                        width={180}
                        height={48}
                        className="h-12 w-auto object-contain"
                    />
                </Link>

                    <p
                        className="
        text-white/55
        text-[13px]
        sm:text-[14px]
        leading-[1.8]
        max-w-[320px]
    "
                    >                        Leading the way in corporate service infrastructure for over three
                        decades. Excellence in every location, precision in every project.
                    </p>

                    {/* Social icons */}
                    <div className="flex gap-3 mt-1">
                        {/* Earth / Website */}
                        <IconBtn href="/" label="Website" icon="/footer/earth.png" />
                        {/* Share */}
                        <IconBtn href="/" label="Share" icon="/footer/share.png" />
                        {/* Mail */}
                        <IconBtn href="mailto:info@bahamama.com" label="Email" icon="/footer/mail.png" />
                    </div>
                </div>

                {/* ── COL 2: Location Directory ── */}
                <div className="flex flex-col gap-4">
                    <div>
                        <h4 className="text-white text-[16px] font-bold mb-1.5">
                            Location Directory
                        </h4>
                        <p className="text-white/50 text-[13px] leading-relaxed">
                            Quick search across our 90+ hubs.
                        </p>
                    </div>

                    {/* Search input */}
                    <div className="
    flex
    items-center
    gap-2.5
    bg-[rgba(255,255,255,0.08)]
    border
    border-white/10
    rounded-xl
    px-4
    h-[52px]
    mt-1
    w-full
">
                        <input
                            type="text"
                            placeholder="Search hubs..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="flex-1 bg-transparent border-none outline-none text-[13px] text-white/80 placeholder:text-white/35 caret-[#FF6B00]"
                        />
                        {/* Search icon */}
                        <svg
                            width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="rgba(255,255,255,0.4)" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round"
                            className="shrink-0"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                    </div>
                </div>

                {/* ── COL 3: Newsletter Signup ── */}
                <div className="flex flex-col gap-4">
                    <div>
                        <h4 className="text-white text-[16px] font-bold mb-1.5">
                            Newsletter Signup
                        </h4>
                        <p className="text-white/50 text-[13px] leading-relaxed">
                            Get corporate updates and industry insights.
                        </p>
                    </div>

                    {/* Email input */}
                    <div className="flex items-center bg-[rgba(255,255,255,0.08)] border border-white/10 rounded-xl px-4 h-[52px] mt-1 w-full">
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="
    flex-1
    bg-transparent
    border-none
    outline-none
    text-[14px]
    sm:text-[15px]
    text-white/80
    placeholder:text-white/35
    caret-[#FF6B00]
    min-w-0
"
                        />
                    </div>

                    {/* Subscribe button */}
                    <button className="
    w-full
    h-[52px]
    rounded-xl
    bg-gradient-to-r
    from-[#FF4C03]
    to-[#FF960B]
    text-white
    text-[14px]
    sm:text-[15px]
    font-bold
    tracking-[0.5px]
    border-none
    cursor-pointer
    hover:opacity-90
    transition-all
    duration-300
    hover:scale-[1.01]
">
                        Subscribe
                    </button>
                </div>
            </div>

            {/* ── DIVIDER ── */}
            <div className="max-w-[1400px] mx-auto px-5 md:px-14">
                <div className="w-full h-px bg-white/10" />
            </div>

            {/* ── BOTTOM BAR ── */}
            <div
                className="
        max-w-[1400px]
        mx-auto
        px-4
        sm:px-6
        md:px-10
        lg:px-14
        py-5
        flex
        flex-col
        md:flex-row
        items-center
        justify-between
        gap-4
    "
            >                <p className="text-white/40 text-[12px]">
                    © 2024 Bahama Mama Corporate. All rights reserved.
                </p>

                <div
                    className="
        flex
        flex-wrap
        items-center
        justify-center
        gap-x-6
        gap-y-2
    "
                >                    {["Accessibility", "Compliance", "Cookie Settings"].map((item) => (
                    <Link
                        key={item}
                        href="/"
                        className="text-white/40 text-[12px] no-underline hover:text-white/70 transition-colors duration-200"
                    >
                        {item}
                    </Link>
                ))}
                </div>
            </div>
        </footer>
    );
}

// ─── Icon Button ──────────────────────────────────────────────────────────────

function IconBtn({ href, label, icon }: { href: string; label: string; icon: string }) {
    return (
        <Link
            href={href}
            aria-label={label}
           className="
    w-[42px]
    h-[42px]
    rounded-full
    bg-white/10
    border
    border-white/15
    flex
    items-center
    justify-center
    hover:bg-white/20
    hover:border-[#FF6B00]/50
    transition-all
    duration-300
    hover:scale-105
">
            <Image
                src={icon}
                alt={label}
                width={18}
                height={18}
                className="w-[18px] h-[18px] object-contain opacity-70"
            />
        </Link>
    );
}