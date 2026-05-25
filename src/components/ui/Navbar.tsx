"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
    { label: "Home",      href: "/home" },
    { label: "About Us",  href: "/about" },
    { label: "Products",  href: "/products" },
    { label: "Locations", href: "/locations" },
    { label: "Careers",   href: "/careers" },
    { label: "News",      href: "/news" },
    { label: "Contact",   href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => { setMobileOpen(false); }, [pathname]);

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 px-3 sm:px-5 xl:px-8 pt-3 sm:pt-5">
                <nav className={`
                    mx-auto max-w-[1400px]
                    rounded-[22px] xl:rounded-full
                    border border-white/10
                    bg-gradient-to-br from-[#1C1417]/90 to-[#5A221E]/90
                    backdrop-blur-2xl transition-all duration-300
                    ${isScrolled ? "shadow-[0_10px_40px_rgba(0,0,0,0.35)]" : "shadow-[0_4px_20px_rgba(0,0,0,0.18)]"}
                `}>
                    <div className="flex items-center justify-between px-4 sm:px-6 xl:px-10 py-3 xl:py-4">

                        {/* LOGO */}
                        <Link href="/home" className="flex items-center shrink-0 z-50">
                            <Image
                                src="/navbar/logo.svg"
                                alt="Bahama Mama"
                                width={90} height={52} priority
                                className="h-[36px] w-auto sm:h-[40px] xl:h-[48px]"
                            />
                        </Link>

                        {/* ── TABLET (1024–1279px): compact inline links ── */}
                        <div className="hidden lg:flex xl:hidden flex-1 items-center justify-center px-3">
                            <div className="flex items-center gap-3">
                                {NAV_ITEMS.map((item) => {
                                    const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                                    return (
                                        <Link key={item.label} href={item.href}
                                            className={`relative text-[12px] font-medium whitespace-nowrap transition-all duration-300 pb-1 ${isActive ? "text-[#FF6B00]" : "text-white hover:text-[#FF6B00]"}`}
                                        >
                                            {item.label}
                                            <span className={`absolute left-0 bottom-0 h-[2px] rounded-full bg-[#FF6B00] transition-all duration-300 ${isActive ? "w-full" : "w-0"}`} />
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        {/* ── DESKTOP (1280px+): full-size links ── */}
                        <div className="hidden xl:flex flex-1 items-center justify-center px-6">
                            <div className="flex items-center gap-5 2xl:gap-7">
                                {NAV_ITEMS.map((item) => {
                                    const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                                    return (
                                        <Link key={item.label} href={item.href}
                                            className={`relative text-[14px] 2xl:text-[15px] font-medium whitespace-nowrap transition-all duration-300 pb-1 ${isActive ? "text-[#FF6B00]" : "text-white hover:text-[#FF6B00]"}`}
                                        >
                                            {item.label}
                                            <span className={`absolute left-0 bottom-0 h-[2px] rounded-full bg-[#FF6B00] transition-all duration-300 ${isActive ? "w-full" : "w-0"}`} />
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        {/* ── TABLET RIGHT: compact search + CTA ── */}
                        <div className="hidden lg:flex xl:hidden items-center gap-2 shrink-0">
                            <button aria-label="Search"
                                className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 text-white/80 border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-300"
                            >
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                                </svg>
                            </button>
                            <Link href="/locations"
                                className="rounded-full bg-[#FF6B00] px-4 py-2 text-[12px] font-semibold text-white whitespace-nowrap hover:bg-[#e85f00] transition-all duration-300"
                            >
                                Find a Location
                            </Link>
                        </div>

                        {/* ── DESKTOP RIGHT: full search + CTA ── */}
                        <div className="hidden xl:flex items-center gap-3 shrink-0">
                            <button aria-label="Search"
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white/80 border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-300"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                                </svg>
                            </button>
                            <Link href="/locations"
                                className="rounded-full bg-[#FF6B00] px-6 2xl:px-7 py-2.5 2xl:py-3 text-[13px] 2xl:text-[14px] font-semibold text-white whitespace-nowrap transition-all duration-300 shadow-[0_8px_25px_rgba(255,107,0,0.35)] hover:bg-[#e85f00] hover:scale-[1.02]"
                            >
                                Find a Location
                            </Link>
                        </div>

                        {/* ── MOBILE HAMBURGER (below 1024px) ── */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle Menu"
                            className="lg:hidden relative z-50 flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
                        >
                            <div className="relative w-5 h-5">
                                <span className={`absolute left-0 top-[4px] h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 top-[9px]" : ""}`} />
                                <span className={`absolute left-0 top-[9px] h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : "opacity-100"}`} />
                                <span className={`absolute left-0 top-[14px] h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 top-[9px]" : ""}`} />
                            </div>
                        </button>
                    </div>

                    {/* ── MOBILE DROPDOWN MENU ── */}
                    <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${mobileOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"}`}>
                        <div className="px-4 pb-5 pt-1">
                            <div className="rounded-[22px] border border-white/10 bg-black/25 backdrop-blur-2xl p-3 shadow-2xl">
                                <div className="flex flex-col gap-1">
                                    {NAV_ITEMS.map((item) => {
                                        const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                                        return (
                                            <Link key={item.label} href={item.href}
                                                className={`flex items-center justify-between rounded-2xl px-4 py-4 text-[15px] font-medium transition-all duration-300 ${isActive ? "bg-[#FF6B00]/15 text-[#FF6B00]" : "text-white hover:bg-white/5"}`}
                                            >
                                                {item.label}
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
                                                    <path d="M9 18l6-6-6-6" />
                                                </svg>
                                            </Link>
                                        );
                                    })}
                                </div>
                                <div className="pt-4">
                                    <Link href="/locations"
                                        className="flex items-center justify-center w-full rounded-2xl bg-[#FF6B00] py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#e85f00]"
                                    >
                                        Find a Location
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}