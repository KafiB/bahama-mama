"use client";

import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ServiceImage {
    id: number;
    src: string;
    alt: string;
}

// ─── Demo Data ────────────────────────────────────────────────────────────────

const DEMO_IMAGES: ServiceImage[] = [
    { id: 1, src: "/locations/store_details/service/i1.png", alt: "Store interior" },
    { id: 2, src: "/locations/store_details/service/i2.png", alt: "CBD products" },
    { id: 3, src: "/locations/store_details/service/i3.png", alt: "Lounge area" },
    { id: 4, src: "/locations/store_details/service/i4.png", alt: "Display shelf" },
    { id: 5, src: "/locations/store_details/service/i5.png", alt: "Store exterior" },
    { id: 6, src: "/locations/store_details/service/i6.png", alt: "Product lineup" },
    { id: 7, src: "/locations/store_details/service/i7.png", alt: "Store hallway" },
];

interface ServicesAvailableSectionProps {
    images?: ServiceImage[];
}

function GalleryImg({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
    return (
        <div className={`group relative overflow-hidden rounded-xl ${className}`}>
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-300" />
        </div>
    );
}

export default function ServicesAvailableSection({
    images = DEMO_IMAGES,
}: ServicesAvailableSectionProps) {
    const [i1, i2, i3, i4, i5, i6, i7] = images;

    return (
        <section className="w-full py-12 bg-gradient-to-br from-[#120400] via-[#1e0800] to-[#2d0e00]">
            <div className="max-w-[1400px] mx-auto px-5 md:px-14">

                {/* Header */}
                <div className="flex items-center gap-3 mb-7">
                    <div className="w-1 h-6 bg-[#FF6A00] rounded-full shrink-0" />
                    <h2 className="text-white text-[15px] font-black uppercase tracking-[2.5px] m-0">
                        Services Available
                    </h2>
                </div>


                {/* OUTER: left 2/3 + right 1/3 */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">

                    {/* LEFT 2 cols */}
                    <div className="lg:col-span-2 flex flex-col gap-3">

                        {/* TOP: i1 narrow + i2+i3 stacked */}
                        <div className="grid grid-cols-3 gap-3">

                            {/* i1 — narrow tall */}
                            <GalleryImg
                                src={i1?.src} alt={i1?.alt}
                                className="col-span-1 aspect-[3/4]"
                            />

                            {/* i2 + i3 stacked */}
                            <div className="col-span-2 flex flex-col gap-3">
                                <GalleryImg
                                    src={i2?.src} alt={i2?.alt}
                                    className="w-full aspect-[16/9]"
                                />
                                <GalleryImg
                                    src={i3?.src} alt={i3?.alt}
                                    className="w-full aspect-[16/9]"
                                />
                            </div>
                        </div>

                        {/* BOTTOM: i5 wide */}
                        <GalleryImg
                            src={i5?.src} alt={i5?.alt}
                            className="w-full aspect-[16/7]"
                        />
                    </div>

                    {/* RIGHT 1 col: i4 tall top + i6 + i7 stacked bottom */}
                    <div className="flex flex-col gap-3">

                        {/* i4 — tall */}
                        <GalleryImg
                            src={i4?.src} alt={i4?.alt}
                            className="w-full flex-1 min-h-[240px]"
                        />

                        {/* i6 + i7 side by side */}
                        <div className="grid grid-cols-2 gap-3">
                            <GalleryImg
                                src={i6?.src} alt={i6?.alt}
                                className="aspect-square"
                            />
                            <GalleryImg
                                src={i7?.src} alt={i7?.alt}
                                className="aspect-square"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}