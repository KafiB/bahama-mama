import Image from "next/image";
import Link from "next/link";

export default function CareersHero() {
    return (
        <section className="relative w-full min-h-[520px] sm:min-h-[620px] lg:min-h-[720px] flex items-center overflow-hidden">

            {/* Background */}
           

            {/* Main image (full visible) */}
            <Image
                src="/career/hero.png"
                alt="Join the Bahama Mama Team"
                fill
                priority
                className="object-contain scale-[1.54] z-10"
            />

            {/* Overlay */}
            <div className="absolute inset-0 z-20 bg-gradient-to-r from-[rgba(10,3,0,.88)] via-[rgba(20,6,0,.45)] to-[rgba(20,6,0,.10)]" />

            {/* Content */}
            <div className="relative z-30 max-w-[1400px] mx-auto w-full px-5 sm:px-8 md:px-14">

                <div className="max-w-[700px] flex flex-col gap-5">

                    <h1 className="text-white font-black text-[34px] sm:text-[48px] md:text-[56px] lg:text-[42px] leading-[1.05]">
                        Join The Bahama Mama Team
                    </h1>

                    <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.8] max-w-[500px]">
                        Build your career with a fast-growing retail brand with 90+ locations in Texas.
                    </p>



                    {/* Button */}
                    <div>

                        <Link
                            href="#open-positions"
                            className="inline-flex items-center justify-center bg-[#FF6B00] text-white text-[11px] sm:text-[12px] font-black uppercase tracking-[2px] px-7 py-4 rounded-md hover:bg-[#e55f00] transition"
                        >

                            View Open Positions

                        </Link>

                    </div>

                </div>

            </div>

        </section>
    );
}