"use client";

export default function VisitStore() {
    return (
        <section className="relative overflow-hidden bg-[#FF6A00] py-16 md:py-20 px-6">

            {/* Bottom Inner Shadow Depth Effect */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_-30px_50px_rgba(0,0,0,0.15)]" />

            <div className="relative max-w-[1200px] mx-auto flex flex-col items-center text-center">

                {/* Heading */}
                {/* Heading */}
                <h2 className="
    text-[26px] 
    sm:text-[32px]
    md:text-[40px] 
    lg:text-[46px]
    font-extrabold 
    uppercase 
    tracking-[-0.01em]
    text-[#1D1D1D]
    drop-shadow-[0_4px_6px_rgba(0,0,0,0.25)]
    whitespace-nowrap
    leading-none
">
                    Visit a Bahama Mama Store
                </h2>

                {/* Subtitle */}
                <p className="
    mt-5 
    max-w-[500px]
    text-white
    text-[14px] 
    md:text-[15px]
    font-medium
    leading-relaxed
    opacity-95
">
                    Experience the full range of our 3,500+ premium products in person.
                    Our experts are ready to guide you to the perfect selection.
                </p>

            </div>
        </section>
    );
}