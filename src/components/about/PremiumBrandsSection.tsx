"use client";

import { useState } from "react";
import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Brand {
    id: number;
    tabLabel: string;
    name: string;
    description: string;
    features: string[];
    location: string;
    locationTag: string;
    image: string;
    visitHref: string;
}

// ─── Demo Data ────────────────────────────────────────────────────────────────

const DEMO_BRANDS: Brand[] = [
    {
        id: 1,
        tabLabel: "ROPEACE",
        name: "ROPEACE",
        description:
            "Austin-based retail concept offering a relaxed and modern shopping experience for CBD and lifestyle products.",
        features: ["Curated CBD selection", "Premium retail environment", "Knowledgeable staff"],
        location: "Austin, Texas",
        locationTag: "FLAGSHIP LOCATION",
        image: "/about/brands/Modern.png",
        visitHref: "#",
    },
    {
        id: 2,
        tabLabel: "SECRET LIBRARY",
        name: "SECRET LIBRARY",
        description:
            "A curated boutique blending literary aesthetics with premium CBD and wellness products.",
        features: ["Exclusive product curation", "Boutique atmosphere", "Expert consultations"],
        location: "Houston, Texas",
        locationTag: "FLAGSHIP LOCATION",
        image: "/about/brands/Modern.png",
        visitHref: "#",
    },
    {
        id: 3,
        tabLabel: "ROLLING & CO",
        name: "ROLLING & CO",
        description:
            "A premium lifestyle brand bringing together the finest rolling accessories and CBD products.",
        features: ["Premium accessories", "Lifestyle-focused curation", "Community events"],
        location: "Dallas, Texas",
        locationTag: "FLAGSHIP LOCATION",
        image: "/about/brands/Modern.png",
        visitHref: "#",
    },
    {
        id: 4,
        tabLabel: "CANNAPHORIA",
        name: "CANNAPHORIA",
        description:
            "Elevating the cannabis lifestyle with premium products and an immersive retail experience.",
        features: ["Full-spectrum products", "Immersive store design", "Wellness programs"],
        location: "San Antonio, Texas",
        locationTag: "FLAGSHIP LOCATION",
        image: "/about/brands/Modern.png",
        visitHref: "#",
    },
    {
        id: 5,
        tabLabel: "KNNOVA",
        name: "KNNOVA",
        description:
            "Innovation meets retail — a forward-thinking CBD brand for the modern consumer.",
        features: ["Tech-forward experience", "Innovative product lines", "Data-driven curation"],
        location: "Austin, Texas",
        locationTag: "FLAGSHIP LOCATION",
        image: "/about/brands/Modern.png",
        visitHref: "#",
    },
    {
        id: 6,
        tabLabel: "THE GOOD PALM",
        name: "THE GOOD PALM",
        description:
            "A tropical-inspired wellness brand offering the best in CBD and lifestyle essentials.",
        features: ["Tropical wellness focus", "Nature-inspired products", "Community-first values"],
        location: "Miami, Florida",
        locationTag: "FLAGSHIP LOCATION",
        image: "/about/brands/Modern.png",
        visitHref: "#",
    },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function TabButton({
    label,
    active,
    onClick,
}: {
    label: string;
    active: boolean;
    onClick: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className={`
    relative
    px-4
    sm:px-5
    py-3
    text-[11px]
    sm:text-[13px]
    font-bold
    uppercase
    tracking-[0.1em]
    whitespace-nowrap
    bg-transparent
    border-none
    cursor-pointer
    transition-colors
    duration-200
    ${active
                    ? "text-[#FF6B00]"
                    : "text-white/50 hover:text-white/80"
                }
`}
        >
            {label}
            {active && (
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#FF6B00] rounded-t-sm" />
            )}
        </button>
    );
}

function FeatureItem({ text }: { text: string }) {
    return (
        <li className="flex items-center gap-3 list-none">
            <div className="w-5 h-5 flex-shrink-0">
                <Image
                    src="/about/brands/Icon.png"
                    alt=""
                    width={20}
                    height={20}
                    className="w-full h-full object-contain"
                />
            </div>
            <span
                className="
        text-white/80
        text-[13px]
        sm:text-sm
        font-medium
    "
            >
                {text}
            </span>        </li>
    );
}

// ─── Section Props ────────────────────────────────────────────────────────────

interface PremiumBrandsSectionProps {
    brands?: Brand[];
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function PremiumBrandsSection({
    brands = DEMO_BRANDS,
}: PremiumBrandsSectionProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const brand = brands[activeIndex];

    return (
        <section
            className="
        w-full
        py-14
        sm:py-16
        md:py-20
        bg-gradient-to-br
        from-[#180800]
        via-[#2a0e00]
        to-[#180800]
        overflow-hidden
    "
        >
            <div
                className="
        max-w-[1320px]
        mx-auto
        px-4
        sm:px-6
        md:px-10
        lg:px-16
    "
            >

                {/* ── Top Label ── */}
                <p
                    className="
        text-center
        text-white
        font-bold
        uppercase
        tracking-[0.18em]
        text-[12px]
        sm:text-[13px]
        mb-5
        sm:mb-6
    "
                >
                    Our Premium Brands
                </p>

                {/* ── Brand Tabs ── */}
                <div
                    className="
        w-full
        overflow-x-auto
        scrollbar-hide
        pb-px
        mb-8
        sm:mb-10
        border-b
        border-white/10
    "
                >
                    <div className="flex items-end min-w-max gap-1 sm:gap-2">
                        {brands.map((b, i) => (
                            <TabButton
                                key={b.id}
                                label={b.tabLabel}
                                active={i === activeIndex}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                </div>

                {/* ── Content Area ── */}
                <div
                    key={activeIndex}
                    className="
        brand-content-animate
        flex
        flex-col
        lg:flex-row
        gap-10
        lg:gap-16
        items-center
    "
                >                    {/* ── LEFT: Text Content ── */}
                    <div
                        className="
        flex-1
        flex
        flex-col
        gap-5
        sm:gap-6
        text-center
        lg:text-left
        items-center
        lg:items-start
    "
                    >
                        {/* Brand Name */}
                        <h2
                            className="
        text-[#FF6B00]
        font-black
        uppercase
        tracking-[0.04em]
        leading-none
        m-0
        text-[32px]
        sm:text-[40px]
        md:text-[48px]
    "
                        >                            {brand.name}
                        </h2>

                        {/* Description */}
                        <p
                            className="
        text-white/70
        text-[14px]
        sm:text-[15px]
        leading-[1.9]
        m-0
        max-w-[520px]
    "
                        >                            {brand.description}
                        </p>

                        {/* Feature List */}
                        <ul
                            className="
        flex
        flex-col
        gap-3
        m-0
        p-0
        items-start
    "
                        >                            {brand.features.map((feat, i) => (
                            <FeatureItem key={i} text={feat} />
                        ))}
                        </ul>

                        {/* Visit Button (Now contains the SVG Pin icon) */}
                        <a
                            href={brand.visitHref}
                            className="
    inline-flex
    items-center
    justify-center
    gap-2
    mt-2
    w-full
    sm:w-fit
    min-w-[220px]
    px-6
    py-[15px]
    bg-[#FF6B00]
    hover:bg-[#e55f00]
    rounded-xl
    font-bold
    uppercase
    tracking-[0.1em]
    text-[12px]
    sm:text-[13px]
    text-white
    transition-all
    duration-300
    no-underline
    hover:-translate-y-1
"                        >
                            <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            Visit Locations
                        </a>
                    </div>

                    {/* ── RIGHT: Image ── */}
                    <div
                        className="
        flex-1
        w-full
        max-w-[620px]
        relative
    "
                    >
                        {/* Store Image */}
                        <div
                            className="
        relative
        w-full
        rounded-2xl
        overflow-hidden
        aspect-[16/11]
        sm:aspect-[16/10]
    "
                        >                            <Image
                                src={brand.image}
                                alt={brand.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Location Badge (Now contains the image asset overlay) */}
                        {/* Location Badge */}
                        <div className="
    absolute
    bottom-3
    left-3
    sm:bottom-4
    sm:left-4
    flex
    items-center
    gap-3
    px-3
    sm:px-4
    py-3
    rounded-xl
    bg-[#140800]/90
    backdrop-blur-sm
    border
    border-[#FF6B00]/20
    min-w-[190px]
    sm:min-w-[220px]
    translate-x-0
    sm:translate-x-[-30px]
    translate-y-0
    sm:translate-y-8
">

                            {/* Increased container from w-9 h-9 to w-11 h-11 */}
                            <div>

                                {/* Increased icon dimensions from w-5 h-5 (20px) to w-7 h-7 (28px) */}
                                <div className="w-7 h-7 relative">
                                    <Image
                                        src="/about/brands/Overlay.png"
                                        alt=""
                                        width={38}
                                        height={38}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                            </div>
                            <div>
                                <p
                                    className="
        text-white
        text-[12px]
        sm:text-sm
        font-bold
        leading-snug
        m-0
    "
                                >
                                    {brand.location}
                                </p>                                <p className="text-[#FF6B00]/70 text-[10px] uppercase tracking-[0.12em] font-semibold m-0 mt-[2px]">
                                    {brand.locationTag}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}