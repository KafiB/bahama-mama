import Image from "next/image";

export default function AtmosphereSection() {
    return (
        <section className="w-full py-16 bg-gradient-to-br from-[#0e0400] via-[#1f0800] to-[#2a0e00]">
            <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

                    {/* ── LEFT: Text Content ── */}
                    <div className="flex-1 flex flex-col gap-5 max-w-[560px]">

                        {/* Tag */}
                        <span className="text-[#FFBE32] text-[11px] font-bold uppercase tracking-[0.2em]">
                            Local Impact
                        </span>

                        {/* Heading */}
                        <h2 className="text-white font-bold text-3xl sm:text-4xl leading-[1.2] m-0">
                            A Welcoming Atmosphere for Everyone
                        </h2>

                        {/* Body */}
                        <p className="text-white/60 text-sm leading-[1.85] m-0">
                            We take pride in our inclusive and pet-friendly environment. Bahama Mama stores are
                            designed as modern social hubs where every visitor feels respected and comfortable.
                            From our air-conditioned lounges to our friendly resident &quot;shop dogs,&quot; we&apos;ve
                            created a unique retail atmosphere that feels more like community than commerce.
                        </p>

                        {/* Tags Row */}
                        <div className="flex items-center gap-6 flex-wrap pt-1">
                            {/* Pet Friendly */}
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 flex-shrink-0">
                                    <Image
                                        src="/about/atmosphere/paw.png"
                                        alt="Pet Friendly"
                                        width={20}
                                        height={20}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <span className="text-white text-[13px] font-semibold">Pet Friendly</span>
                            </div>

                            {/* Community Events */}
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 flex-shrink-0">
                                    <Image
                                        src="/about/atmosphere/unity.png"
                                        alt="Community Events"
                                        width={20}
                                        height={20}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <span className="text-white text-[13px] font-semibold">Community Events</span>
                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT: Tilted Image ── */}
                    <div className="flex-1 w-full max-w-[580px] flex items-center justify-center lg:justify-end">
                        <div className="relative w-full max-w-[520px] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] aspect-[4/3]">
                            <Image
                                src="/about/atmosphere/together.png"
                                alt="Welcoming atmosphere at Bahama Mama"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}