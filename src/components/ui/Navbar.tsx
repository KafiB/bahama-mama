"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
    { label: "Home", href: "/home" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Locations", href: "/locations" },
    { label: "Careers", href: "/careers" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();

    const [mobileOpen, setMobileOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    return (
        <>
            <div className="fixed top-[18px] left-1/2 w-full z-50 -translate-x-1/2 pointer-events-none transition-all duration-500 ease-in-out">
                <nav
                    className="mx-auto flex items-center justify-between rounded-full bg-gradient-to-br from-[#1C1417]/92 to-[#5A221E]/92 border-[1.5px] border-white/20 backdrop-blur-[16px] pointer-events-auto transition-all duration-500 ease max-w-[1280px] py-[18px] px-[42px]"
                >
                    {/* LOGO */}
                    <Link href="/home" className="shrink-0 flex items-center">
                        <Image
                            src="/navbar/logo.svg"
                            alt="Bahama Mama"
                            width={190}
                            height={52}
                            priority
                            className="w-auto h-[52px]"
                        />
                    </Link>

                    {/* DESKTOP NAV */}
                    {!isMobile && (
                        <div className="flex flex-1 items-center justify-center gap-[18px] mx-[50px]">
                            {NAV_ITEMS.map((item) => {
                                const isActive =
                                    pathname === item.href ||
                                    pathname.startsWith(item.href + "/");

                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className={`font-sans font-medium whitespace-nowrap py-[6px] px-[8px] transition-all duration-300 ease border-b-2 text-[16px] ${
                                            isActive
                                                ? "text-[#FF6B00] border-[#FF6B00]"
                                                : "text-white border-transparent hover:text-[#FF6B00]"
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </div>
                    )}

                    {/* RIGHT SIDE */}
                    <div className="flex items-center gap-4">
                        {/* SEARCH */}
                        {!isMobile && (
                            <button
                                aria-label="Search"
                                className="flex items-center p-[10px] bg-transparent border-none cursor-pointer text-white/80 transition-colors duration-300 hover:text-white"
                            >
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="11" cy="11" r="8" />
                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                </svg>
                            </button>
                        )}

                        {/* CTA BUTTON */}
                        {!isMobile && (
                            <Link
                                href="/locations"
                                className="font-sans font-semibold text-white bg-[#FF6B00] rounded-full whitespace-nowrap transition-all duration-300 ease shadow-[0_6px_20px_rgba(255,107,0,0.35)] hover:bg-[#e85f00] hover:shadow-[0_8px_25px_rgba(255,107,0,0.45)] text-[15px] py-[14px] px-[28px]"
                            >
                                Find a Location
                            </Link>
                        )}

                        {/* MOBILE MENU BUTTON */}
                        {isMobile && (
                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                aria-label="Toggle Menu"
                                className="flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer text-white"
                            >
                                <span
                                    className={`block w-[24px] h-[2px] bg-white transition-transform duration-300 ${
                                        mobileOpen ? "rotate-45 translate-x-[5px] translate-y-[5px]" : ""
                                    }`}
                                />
                                <span
                                    className={`block w-[24px] h-[2px] bg-white transition-opacity duration-300 ${
                                        mobileOpen ? "opacity-0" : "opacity-100"
                                    }`}
                                />
                                <span
                                    className={`block w-[24px] h-[2px] bg-white transition-transform duration-300 ${
                                        mobileOpen ? "-rotate-45 translate-x-[5px] -translate-y-[5px]" : ""
                                    }`}
                                />
                            </button>
                        )}
                    </div>
                </nav>

                {/* MOBILE MENU */}
                {isMobile && (
                    <div
                        className={`mt-[10px] overflow-hidden transition-all duration-300 ease pointer-events-auto ${
                            mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                        <div className="bg-black/45 backdrop-blur-[16px] rounded-[24px] p-4 mx-4 shadow-xl border border-white/10">
                            {NAV_ITEMS.map((item) => {
                                const isActive = pathname === item.href;

                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className={`block font-sans text-[16px] font-medium py-[14px] px-[18px] rounded-[12px] transition-colors ${
                                            isActive
                                                ? "text-[#FF6B00] bg-[#FF6B00]/10"
                                                : "text-white bg-transparent hover:bg-white/5"
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}