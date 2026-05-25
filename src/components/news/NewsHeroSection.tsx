import Image from "next/image";

export default function NewsHeroSection() {
    return (
        <section className="relative w-full overflow-hidden" style={{ height: "600px" }}>

            {/* ── Background Image ── */}
            <Image
                src="/news/hero/hero.png"
                alt="News & Updates"
                fill
                priority
                className="object-cover object-center"
            />

            {/* ── Gradient Overlay — Figma: #1A1417 79%, #3E1C1B 65%, #5C231F 53% ── */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(135deg, rgba(26,20,23,0.79) 0%, rgba(62,28,27,0.65) 50%, rgba(92,35,31,0.53) 100%)",
                }}
            />

            {/* ── Content ── */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">

                {/* Leaf icon */}


                {/* Heading */}
                <h1
                    className="text-white font-black m-0 leading-tight"
                    style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
                >
                    News &amp; Updates
                </h1>

                {/* Subheading */}
                <p className="text-white/70 mt-4 max-w-[520px] text-[15px] sm:text-[16px] leading-[1.7] m-0">
                    Stay informed on our latest store openings, premium product launches, and the Bahama Mama lifestyle.
                </p>
            </div>

        </section>
    );
}