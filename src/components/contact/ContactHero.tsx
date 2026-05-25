export default function ContactHero() {
    return (
        <section className="w-full py-20 md:py-28 bg-gradient-to-br from-[#120400] via-[#2a0800] to-[#3d0c00] flex flex-col items-center justify-center text-center px-5">
            <h1 className="translate-y-10 text-[clamp(48px,7vw,96px)] font-black uppercase leading-none tracking-tight m-0 mb-6">
                <span className="text-white">Contact </span>
                <span className="text-[#FF6B00]">Us</span>
            </h1>
            <p className="translate-y-10 text-white/55 text-[clamp(14px,1.4vw,17px)] leading-[1.7] max-w-[600px] m-0">
                We&apos;re here to help you find your perfect CBD experience. Reach out to
                our team or visit one of our 90+ premium retail locations across the nation.
            </p>
        </section>
    );
}