"use client";

import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface GalleryCategory {
    id: number;
    label: string;
    icon: string;
}

// ─── Demo Data ────────────────────────────────────────────────────────────────

const DEMO_CATEGORIES: GalleryCategory[] = [
    { id: 1, label: "CBD", icon: "/locations/store_details/gallery/CBD.png" },
    { id: 2, label: "Vape", icon: "/locations/store_details/gallery/Vape.png" },
    { id: 3, label: "Hookah", icon: "/locations/store_details/gallery/Hookah.png" },
    { id: 4, label: "Accessories", icon: "/locations/store_details/gallery/accessories.png" },
];

// ─── Props ────────────────────────────────────────────────────────────────────

interface StoreGalleryProps {
    categories?: GalleryCategory[];
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function StoreGallery({ categories = DEMO_CATEGORIES }: StoreGalleryProps) {
    return (
        <section className="w-full py-12 bg-gradient-to-br from-[#120400] via-[#1e0800] to-[#2d0e00]">
            <div className="max-w-[1400px] mx-auto px-5 md:px-14">

                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-1 h-6 bg-[#FF6A00] rounded-full shrink-0" />
                    <h2 className="text-white text-[16px] font-black uppercase tracking-[2.5px] m-0">
                        Store Gallery
                    </h2>
                </div>

                {/* Category Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            className="group flex flex-col items-center justify-center gap-3 bg-[#2a1200]/70 hover:bg-[#3a1800]/80 border border-white/[0.07] hover:border-[#FF6A00]/30 rounded-xl py-8 px-4 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
                        >
                            {/* Icon */}
                            <div className="relative w-8 h-8">
                                <Image
                                    src={cat.icon}
                                    alt={cat.label}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Label */}
                            <span className="text-white/80 text-[13px] font-semibold tracking-[0.5px] group-hover:text-white transition-colors duration-200">
                                {cat.label}
                            </span>
                        </button>
                    ))}
                </div>

            </div>
        </section>
    );
}