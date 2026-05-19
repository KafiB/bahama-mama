import React from "react";

interface Stat {
    number: string;
    label: string;
}

const STATS: Stat[] = [
    { number: "90+",    label: "Retail Locations"  },
    { number: "3,500+", label: "Premium Products"  },
    { number: "25+",    label: "Years Experience"  },
    { number: "3",      label: "Major Cities"      },
];

export default function StatsSection() {
    return (
        <section className="w-full bg-[#FF6B00] py-10">
            <div className="max-w-[1400px] mx-auto px-5 md:px-14 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4">

                {STATS.map((stat) => (
                    <div
                        key={stat.label}
                        className="flex flex-col items-center text-center"
                    >

                        <span
                            className="font-black text-[#2E2E1B] leading-none"
                            style={{
                                fontSize: "clamp(42px,5.5vw,72px)",
                                letterSpacing: "-3.6px",
                                textShadow: `
                                    0 8px 12px rgba(0,0,0,.35),
                                    0 18px 24px rgba(0,0,0,.22),
                                    0 28px 40px rgba(0,0,0,.12)
                                `,
                            }}
                        >
                            {stat.number}
                        </span>

                        <span
                            className="mt-2 text-[11px] md:text-[12px] font-bold uppercase tracking-[2px] text-[#2E2E1B]"
                            style={{
                                textShadow:
                                    "0 5px 12px rgba(0,0,0,.25)",
                            }}
                        >
                            {stat.label}
                        </span>

                    </div>
                ))}
            </div>
        </section>
    );
}