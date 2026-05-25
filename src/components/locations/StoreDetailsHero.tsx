"use client";

import Image from "next/image";
import { Phone } from "lucide-react";

export interface StoreDetail {
    id: number;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    isOpen: boolean;
    closesAt: string;
    opensAt: string;
    heroImage: string;
    directionsUrl: string;
    lat?: number;
    lng?: number;
}

interface StoreDetailsHeroProps {
    store: StoreDetail;
}

export default function StoreDetailsHero({
    store,
}: StoreDetailsHeroProps) {
    return (
        <section className="relative w-full min-h-[620px] md:min-h-[595px] flex items-center overflow-hidden">

            {/* Background */}
            {store.heroImage ? (
                <Image
                    src={store.heroImage}
                    alt={store.name || "Store"}
                    fill
                    priority
                    className="object-cover object-center z-0"
                />
            ) : (
                <div className="absolute inset-0 bg-[#2a0800] z-0" />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[rgba(26,20,23,0.88)] via-[rgba(62,28,27,0.75)] to-[rgba(92,35,31,0.55)]" />


            {/* Main Content */}
            <div className="
                relative
                z-20
                max-w-[1400px]
                mx-auto
                w-full
                px-4
                sm:px-6
                md:px-14
                flex
                flex-col
                lg:flex-row
                justify-between
                lg:items-end
                gap-8
                md:gap-10
                pt-36
                md:pt-44
                pb-12
            ">

                {/* LEFT */}
                <div className="max-w-[560px] flex flex-col gap-4 text-left">

                    {store.isOpen ? (
                        <span className="
                            inline-flex
                            w-fit
                            items-center
                            gap-1.5
                            bg-[#22c55e]/15
                            border
                            border-[#22c55e]/30
                            text-[#22c55e]
                            text-[10px]
                            sm:text-[11px]
                            font-black
                            uppercase
                            tracking-[2px]
                            px-3
                            py-1.5
                            rounded-full
                        ">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                            Open Now
                        </span>
                    ) : (
                        <span className="
                            inline-flex
                            w-fit
                            items-center
                            gap-1.5
                            bg-white/10
                            border
                            border-white/20
                            text-white/50
                            text-[10px]
                            sm:text-[11px]
                            font-black
                            uppercase
                            tracking-[2px]
                            px-3
                            py-1.5
                            rounded-full
                        ">
                            Closed · Opens {store.opensAt}
                        </span>
                    )}


                    {/* Title */}
                    <h1 className="
                        text-white
                        font-black
                        text-[30px]
                        sm:text-[38px]
                        md:text-[48px]
                        lg:text-[52px]
                        leading-tight
                    ">
                        {store.name}
                    </h1>


                    {/* Address */}
                    <p className="
                        text-white/70
                        text-[13px]
                        sm:text-[14px]
                        leading-relaxed
                    ">
                        {store.address}, {store.city},{" "}
                        {store.state} {store.zip}
                    </p>


                    {/* Phone */}
                    <a
                        href={`tel:${store.phone}`}
                        className="
                            text-white/60
                            text-[13px]
                            sm:text-[14px]
                            hover:text-white
                            transition
                        "
                    >
                        {store.phone}
                    </a>

                </div>



                {/* RIGHT BUTTONS */}
                <div className="
                    flex
                    flex-col
                    sm:flex-row
                    w-full
                    lg:w-auto
                    gap-4
                    lg:justify-end
                ">

                    {/* Directions */}
                    <a
                        href={store.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            inline-flex
                            justify-center
                            items-center
                            gap-2.5
                            bg-gradient-to-r
                            from-[#FF4C03]
                            to-[#FE950A]
                            text-white
                            font-bold
                            px-6
                            sm:px-8
                            py-4
                            sm:py-5
                            rounded-full
                            hover:opacity-90
                            transition
                            w-full
                            sm:w-auto
                        "
                    >

                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                        >
                            <polygon points="3 11 22 2 13 21 11 13 3 11" />
                        </svg>

                        Get Directions

                    </a>



                    {/* Call Button */}
                    <a
                        href={`tel:${store.phone}`}
                        className="
                            inline-flex
                            items-center
                            justify-center
                            gap-2.5
                            bg-white
                            text-black
                            font-bold
                            px-6
                            sm:px-8
                            py-4
                            sm:py-5
                            rounded-lg
                            border
                            border-black/10
                            hover:bg-gray-100
                            transition
                            w-full
                            sm:w-auto
                        "
                    >

                        <Phone
                            size={18}
                            strokeWidth={2.2}
                        />

                        Call Store

                    </a>

                </div>

            </div>
        </section>
    );
}