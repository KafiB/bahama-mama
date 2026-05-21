"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { DEMO_STORE_LOCATIONS, StoreLocation, StoreTag } from "../lib/demo-store-locations";
import Link from "next/link";
import Image from "next/image";


// ─── Dynamically import map to avoid SSR issues ───────────────────────────────
const MapSection = dynamic(() => import("./MapInner"), { ssr: false });

// ─── Constants ────────────────────────────────────────────────────────────────

const FILTERS = ["Open Now", "CBD", "Vape", "Pet Friendly"] as const;
type Filter = (typeof FILTERS)[number];

// ─── Tag Icons (using actual images) ─────────────────────────────────────
const TAG_ICONS: Record<StoreTag, string> = {
    "Delivery Available": "/locations/map/delivery.png",
    "Pet Friendly": "/locations/map/pet.png",
    "Premium CBD": "/locations/map/cbd.png",
    "CBD": "/locations/map/cbd.png",           // reuse cbd.png
    "Vape": "/locations/map/vape.png",
};

// ─── Filter Button ────────────────────────────────────────────────────────────

function FilterBtn({
    label,
    active,
    onClick,
}: {
    label: string;
    active: boolean;
    onClick: () => void;
}) {
    const getIcon = (label: string) => {
        switch (label) {
            case "Open Now":
                return (
                    <span
                        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${active ? "bg-white" : "bg-[#22c55e]"
                            }`}
                    />
                );
            case "CBD":
                return <Image src="/locations/map/cbd.png" alt="CBD" className="w-4 h-4" width={16} height={16} />;
            case "Vape":
                return <Image src="/locations/map/vape.png" alt="Vape" className="w-4 h-4" width={16} height={16} />;
            case "Pet Friendly":
                return <Image src="/locations/map/pet.png" alt="Pet" className="w-4 h-4" width={16} height={16} />;
            default:
                return null;
        }
    };

    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-none text-[12px] font-semibold transition-all duration-200 border cursor-pointer ${active
                ? "bg-[#FF6B00] border-[#FF6B00] text-white"
                : "bg-white/5 border-white/15 text-white/70 hover:border-white/30 hover:text-white"
                }`}
        >
            {getIcon(label)}
            {label}
        </button>
    );
}

// ─── Store Card ───────────────────────────────────────────────────────────────

function StoreCard({
    store,
    active,
    onClick,
}: {
    store: StoreLocation;
    active: boolean;
    onClick: () => void;
}) {
    return (
        <div
            onClick={onClick}
            className={`rounded-xl p-5 cursor-pointer transition-all duration-200 border ${active
                ? "border-[#FF6B00]/50 bg-[#2a1200]/80"
                : "border-white/10 bg-[#1e0900]/70 hover:border-[#FF6B00]/30 hover:bg-[#2a1200]/50"
                }`}
        >
            {/* Top row: badge + distance */}
            {/* Top row: badge + distance */}
            <div className="flex items-center justify-between mb-2">
                {store.isOpen ? (
                    <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#22c55e] bg-[#22c55e]/10 px-2 py-0.5 rounded-full">
                        Open Now
                    </span>
                ) : (
                    <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-white/40 bg-white/5 px-2 py-0.5 rounded-full">
                        Closed
                    </span>
                )}
                {/* FIXED FOR FIGMA SPECIFICATIONS: #FF6A00, 14px text, 20px line-height, Bold */}
                <span className="text-[#FF6A00] text-[14px] leading-[20px] font-bold align-middle">
                    {store.distance}
                </span>
            </div>

            {/* Name */}
            <h3 className="text-white font-bold text-[15px] leading-snug m-0 mb-1">
                {store.name}
            </h3>

            {/* Address */}
            <p className="text-white/50 text-[12px] m-0 mb-3">
                {store.address}, {store.city}, {store.state} {store.zip}
            </p>

            {/* Meta */}
            <div className="flex items-center gap-4 flex-wrap mb-4">
                <span className="flex items-center gap-1.5 text-white/50 text-[12px]">
                    <svg
                        width="12" height="12" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                    </svg>
                    Closes {store.closesAt}
                </span>
                {store.tags.map((tag: StoreTag) => (
                    <span key={tag} className="flex items-center gap-1.5 text-white/50 text-[12px]">
                        <Image
                            src={TAG_ICONS[tag]}
                            alt={tag}
                            className="w-4 h-4 object-contain flex-shrink-0"
                            width={16}
                            height={16}
                        />
                        {tag}
                    </span>
                ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-2 mt-2">

                {/* View In Map */}
                <button className="
                            flex-1
                            bg-[#2A1200]
                            hover:bg-[#3a1800]
                            border border-[#FF6B00]/30
                            text-white
                            font-bold
                            text-[11px]
                            uppercase
                            tracking-[1.2px]
                            py-3
                            rounded-lg
                            transition-all
                            duration-200
                            flex
                            items-center
                            justify-center
                            gap-2
                            cursor-pointer
                        ">
                    View In Map

                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </button>

                {/* View Details */}
                <Link
                    href={`/store-details/${store.id}`}
                    className="
                    flex-1
                    bg-[#FF6B00]
                    hover:bg-[#e55f00]
                    text-white
                    font-bold
                    text-[11px]
                    uppercase
                    tracking-[1.2px]
                    py-3
                    rounded-lg
                    transition-all
                    duration-200
                    flex
                    items-center
                    justify-center
                    gap-2
                    cursor-pointer
                    border-none
                    no-underline
                "
                >
                    Details

                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </Link>

            </div>
        </div>
    );
}

// ─── Section Props ────────────────────────────────────────────────────────────

interface StoreLocatorSectionProps {
    stores?: StoreLocation[];
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function StoreLocatorSection({
    stores = DEMO_STORE_LOCATIONS,
}: StoreLocatorSectionProps) {
    const [activeFilter, setActiveFilter] = useState<Filter>("Open Now");
    const [activeStoreId, setActiveStoreId] = useState<number>(stores[0]?.id);

    const filteredStores = stores.filter((s) => {
        if (activeFilter === "Open Now") return s.isOpen;
        if (activeFilter === "CBD")
            return s.tags.includes("CBD") || s.tags.includes("Premium CBD");
        if (activeFilter === "Vape") return s.tags.includes("Vape");
        if (activeFilter === "Pet Friendly") return s.tags.includes("Pet Friendly");
        return true;
    });

    const activeStore = filteredStores.find((s) => s.id === activeStoreId) ?? filteredStores[0];

    return (
        <section className="w-full py-14 bg-gradient-to-br from-[#191317] to-[#5D231F]">
            <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">

                {/* Filter Tabs */}
                <div className="flex items-center gap-2 flex-wrap mb-5">
                    {FILTERS.map((f) => (
                        <FilterBtn
                            key={f}
                            label={f}
                            active={activeFilter === f}
                            onClick={() => {
                                setActiveFilter(f);
                                const first = stores.filter((s) => {
                                    if (f === "Open Now") return s.isOpen;
                                    if (f === "CBD") return s.tags.includes("CBD") || s.tags.includes("Premium CBD");
                                    if (f === "Vape") return s.tags.includes("Vape");
                                    if (f === "Pet Friendly") return s.tags.includes("Pet Friendly");
                                    return true;
                                })[0];
                                if (first) setActiveStoreId(first.id);
                            }}
                        />
                    ))}
                </div>

                {/* Map + List */}
                <div className="flex flex-col lg:flex-row gap-4 items-stretch">

                    {/* LEFT: Map */}
                    <div className="relative flex-1 min-h-[420px] lg:min-h-[560px] rounded-xl overflow-hidden border border-white/10 z-0">
                        <MapSection
                            stores={filteredStores}
                            activeStoreId={activeStore?.id ?? 0}
                            onMarkerClick={(id) => setActiveStoreId(id)}
                        />
                    </div>

                    {/* RIGHT: Store List */}
                    {/* RIGHT: Store List */}
                    <div className="
                                w-full
                                lg:w-[400px]
                                flex
                                flex-col
                                gap-3
                                overflow-y-auto
                                pr-2
                                custom-scrollbar
                            "
                        style={{ maxHeight: "560px" }}
                    >
                        {filteredStores.length === 0 ? (
                            <div className="flex items-center justify-center h-40 text-white/40 text-sm">
                                No stores match this filter.
                            </div>
                        ) : (
                            filteredStores.map((store) => (
                                <StoreCard
                                    key={store.id}
                                    store={store}
                                    active={store.id === activeStore?.id}
                                    onClick={() => setActiveStoreId(store.id)}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>

            <style>{`
        .store-list::-webkit-scrollbar { width: 4px; }
        .store-list::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); border-radius: 9999px; }
        .store-list::-webkit-scrollbar-thumb { background: rgba(255,107,0,0.4); border-radius: 9999px; }
        .store-list::-webkit-scrollbar-thumb:hover { background: rgba(255,107,0,0.7); }
      `}</style>
        </section>
    );
}