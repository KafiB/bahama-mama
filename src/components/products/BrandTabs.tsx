"use client";

const brands = [
    "BRAND A",
    "BRAND B",
    "BRAND C",
    "BRAND D",
    "BRAND E",
];

export default function BrandTabs() {
    return (
        <section className="w-full bg-[#EBC29F] py-12 px-6">
            <div className="max-w-[1450px] mx-auto flex flex-wrap justify-center gap-7">

                {brands.map((brand, index) => (
                    <button
                        key={index}
                        className="
                            min-w-[210px]
                            h-[72px]
                            bg-[#FF6B00]
                            hover:bg-[#ff7b1a]
                            text-white
                            text-[18px]
                            font-extrabold
                            uppercase
                            tracking-wide
                            rounded-sm
                            shadow-lg
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            flex
                            items-center
                            justify-center
                            font-sans
                        "
                    >
                        {brand}
                    </button>
                ))}

            </div>
        </section>
    );
}