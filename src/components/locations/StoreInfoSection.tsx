"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { StoreDetail } from "./StoreDetailsHero";

// Dynamically import map to avoid SSR issues
import type { StoreInfoMapProps } from "./StoreInfoMap";

const StoreInfoMap = dynamic<StoreInfoMapProps>(() => import("./StoreInfoMap"), { ssr: false });
interface StoreInfoSectionProps {
    store: StoreDetail & { lat?: number; lng?: number };
}

export default function StoreInfoSection({ store }: StoreInfoSectionProps) {
    return (
        <section className="w-full py-16 bg-gradient-to-br from-[#120400] via-[#1e0800] to-[#2d0e00]">
            <div className="max-w-[1400px] mx-auto px-5 md:px-14">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* ── LEFT: Store Information ── */}
                    <div className="flex flex-col gap-8">

                        {/* Header */}
                        <div className="flex items-center gap-3">
                            <Image
                                src="/locations/store_details/info.png"
                                alt="Info"
                                width={22}
                                height={22}
                                className="object-contain"
                            />
                            <h2 className="text-white text-[20px] font-bold m-0">
                                Store Information
                            </h2>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-white/10" />

                        {/* Info rows */}
                        <div className="flex flex-col gap-7">

                            {/* Hours */}
                            <div className="flex items-start gap-4">
                                <Image
                                    src="/locations/store_details/clock.png"
                                    alt="Hours"
                                    width={22}
                                    height={22}
                                    className="object-contain mt-0.5 shrink-0"
                                />
                                <div>
                                    <p className="text-white text-[14px] font-bold mb-1.5 m-0">
                                        Hours
                                    </p>
                                    <p className="text-white/55 text-[13px] leading-[1.8] m-0">
                                        Mon - Sat: 9:00 AM – {store.closesAt}
                                        <br />
                                        Sun: 11:00 AM – 8:00 PM
                                    </p>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-start gap-4">
                                <Image
                                    src="/locations/store_details/location.png"
                                    alt="Address"
                                    width={22}
                                    height={22}
                                    className="object-contain mt-0.5 shrink-0"
                                />
                                <div>
                                    <p className="text-white text-[14px] font-bold mb-1.5 m-0">
                                        Address
                                    </p>
                                    <p className="text-white/55 text-[13px] leading-[1.8] m-0">
                                        {store.address}, {store.city}, {store.state} {store.zip}
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <Image
                                    src="/locations/store_details/call.png"
                                    alt="Phone"
                                    width={22}
                                    height={22}
                                    className="object-contain mt-0.5 shrink-0"
                                />
                                <div>
                                    <p className="text-white text-[14px] font-bold mb-1.5 m-0">
                                        Phone
                                    </p>
                                    <a
                                        href={`tel:${store.phone}`}
                                        className="text-white/55 text-[13px] no-underline hover:text-[#FFBE32] transition-colors duration-200"
                                    >
                                        {store.phone}
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>


                    
                    {/* ── RIGHT: Map ── */}
                    <div className="relative w-full rounded-xl overflow-hidden border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.5)]"
                        style={{ height: "320px" }}
                    >
                        {store.lat && store.lng ? (
                            <StoreInfoMap lat={store.lat} lng={store.lng} name={store.name} />
                        ) : (
                            <div className="w-full h-full bg-[#1e0800] flex items-center justify-center">
                                <p className="text-white/30 text-sm">Map unavailable</p>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}