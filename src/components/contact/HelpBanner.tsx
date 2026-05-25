"use client";

export default function ExploreCollectionBanner() {
    return (
        <section
            className="
                relative
                overflow-hidden
                bg-[#FF6A00]
                py-14
                sm:py-16
                md:py-20
                px-4
                sm:px-6
            "
        >

            {/* Bottom Inner Shadow Depth Effect */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_-30px_50px_rgba(0,0,0,0.15)]" />

            <div
                className="
                    relative
                    max-w-[1200px]
                    mx-auto
                    flex
                    flex-col
                    items-center
                    text-center
                "
            >

                {/* Heading */}
                <h2
                    className="
                        text-[28px]
                        sm:text-[34px]
                        md:text-[42px]
                        lg:text-[46px]
                        font-extrabold
                        uppercase
                        tracking-[-0.01em]
                        text-[#1D1D1D]
                        drop-shadow-[0_4px_6px_rgba(0,0,0,0.25)]
                        leading-[1.05]
                        max-w-[1000px]
                    "
                >
                    WE&apos;RE HERE TO HELP 
                </h2>

                {/* Subtitle */}
                <p
                    className="
                        mt-5
                        max-w-[500px]
                        text-white
                        text-[14px]
                        sm:text-[15px]
                        md:text-[15px]
                        font-medium
                        leading-relaxed
                        opacity-95
                    "
                >
                    Have questions about our products or locations?
                    Our team is ready to assist you.
                </p>

            </div>
        </section>
    );
}