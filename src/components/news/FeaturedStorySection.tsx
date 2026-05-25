import Image from "next/image";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface FeaturedStory {
  category: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
}

// ─── Demo Data ────────────────────────────────────────────────────────────────

const DEFAULT_STORY: FeaturedStory = {
  category: "Store Openings",
  title: "Bahama Mama Opens 5 New Locations in Texas",
  excerpt:
    "Expanding our footprint in the Lone Star State, we're bringing the premium Bahama Mama experience to Austin, Dallas, and Houston. Each location features our signature curated selection of lifestyle products.",
  image: "/news/hero/fs/Image.png",
  href: "/news/bahama-mama-opens-5-new-locations",
};

// ─── Section Props ────────────────────────────────────────────────────────────

interface FeaturedStorySectionProps {
  story?: FeaturedStory;
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function FeaturedStorySection({
  story = DEFAULT_STORY,
}: FeaturedStorySectionProps) {
  return (
    <section className="w-full py-14 bg-gradient-to-br from-[#0e0400] via-[#1a0800] to-[#3a1200]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16">

        {/* ── FEATURED STORY label ── */}
        <p className="text-[#FF6B00] text-[11px] font-black uppercase tracking-[0.22em] mb-6">
          Featured Story
        </p>

        {/* ── Main content row ── */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

          {/* ── LEFT: Image ── */}
          <div className="w-full lg:w-[52%] flex-shrink-0">
            <Link href={story.href} className="block group">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                style={{ aspectRatio: "16/10" }}
              >
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle inner shadow */}
                <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]" />
              </div>
            </Link>
          </div>

          {/* ── RIGHT: Text ── */}
          <div className="flex-1 flex flex-col gap-5">

            {/* Category */}
            <span className="text-[#FF6B00] text-[11px] font-black uppercase tracking-[0.2em]">
              {story.category}
            </span>

            {/* Title */}
            <h2
              className="text-white font-black uppercase m-0 leading-[1.1]"
              style={{ fontSize: "clamp(26px, 3.5vw, 46px)" }}
            >
              {story.title}
            </h2>

            {/* Excerpt */}
            <p className="text-white/60 text-[15px] leading-[1.8] m-0">
              {story.excerpt}
            </p>

            {/* Read Full Story */}
            <Link
              href={story.href}
              className="inline-flex items-center gap-2 text-[#FF6B00] text-[12px] font-black uppercase tracking-[0.18em] no-underline group w-fit mt-2 transition-all duration-200"
            >
              Read Full Story
              <svg
                width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}