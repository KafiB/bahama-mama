"use client";

import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface FounderProfile {
  id: number;
  name: string;
  title: string;
  experience: string;       // e.g. "25+ YEARS RETAIL EXPERIENCE"
  bio: string;              // plain text bio
  bioHighlight: string;     // the bold orange phrase inside bio
  quote: string;
  linkedin: string;
  twitter: string;
  photo: string;            // path to person photo
}

// ─── Demo Data ────────────────────────────────────────────────────────────────
// Move to src/lib/demo_founders.ts later

const DEMO_FOUNDERS: FounderProfile[] = [
  {
    id: 1,
    name: "John Smith",
    title: "Founder & CEO",
    experience: "25+ YEARS RETAIL EXPERIENCE",
    bio: "John Smith has dedicated his career to elevating the standards of modern commerce. His leadership vision focuses on integrating premium service with local community values, ensuring every interaction is meaningful and every product meets the highest quality standards. He is currently spearheading a major initiative aimed at",
    bioHighlight: "redefining the retail experience in Texas",
    quote: '"Our goal is to create a premium retail experience that customers can trust and enjoy."',
    linkedin: "#",
    twitter: "#",
    photo: "/about/founder/khuni.png",
  },
  {
    id: 2,
    name: "Jane Doe",
    title: "Co-Founder & COO",
    experience: "20+ YEARS OPERATIONS EXPERIENCE",
    bio: "Jane Doe has spent two decades building operational excellence across retail and lifestyle brands. She leads with a people-first philosophy, driving teams to deliver exceptional customer experiences at every touchpoint. She is currently focused on",
    bioHighlight: "scaling operations across 90+ locations nationwide",
    quote: '"Excellence is not a destination — it is a continuous journey we take with our customers."',
    linkedin: "#",
    twitter: "#",
    photo: "/about/founder/khuni.png",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

interface FounderSectionProps {
  founders?: FounderProfile[];
}

export default function FounderSection({ founders = DEMO_FOUNDERS }: FounderSectionProps) {
const current = 0;
  
  const f = founders[current];

  return (
    <section
      className="w-full py-16 md:py-20"
      style={{
        background: "linear-gradient(160deg, #180800 0%, #2a0e00 55%, #180800 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16">

        {/* ── Main Card ── */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-16">

          {/* ── LEFT: Photo ── */}
          <div className="relative flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]">

            {/* Overlay+Border decorative behind photo */}
            <div className="absolute bottom-0 right-0 w-[40%] h-[40%] z-0 translate-x-5 translate-y-1">
              <Image
                src="/about/founder/Overlay+Border.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            {/* Person photo */}
            <div
              className="relative z-10 rounded-2xl overflow-hidden"
              style={{
                width: "100%",
                aspectRatio: "3/4",
                maxHeight: "420px",
              }}
            >
              <Image
                src={f.photo}
                alt={f.name}
                fill
                className="object-cover object-top grayscale"
              />
            </div>

            {/* FOUNDER badge — top left of photo */}
            <div className="absolute top-4 left-4 z-20">
              <Image
                src="/about/founder/founder.png"
                alt="Founder"
                width={100}
                height={32}
                className="object-contain"
              />
            </div>
          </div>

          {/* ── RIGHT: Content ── */}
          <div className="flex-1 flex flex-col justify-center gap-5">

            {/* Name */}
            <div>
              <h2
                className="text-white font-bold m-0 mb-1"
                style={{ fontSize: "clamp(26px, 3vw, 38px)" }}
              >
                {f.name}
              </h2>
              <p className="text-[#FFBE32] text-[15px] font-medium m-0">
                {f.title}
              </p>
            </div>

            {/* Experience Badge */}
            <div
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg w-full"
              style={{ background: "rgba(255,107,0,0.12)", border: "#FFBE32" }}
            >
              {/* Clock icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFBE32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span
                className="text-[#FFBE32] text-[11px] font-bold uppercase tracking-[0.12em]"
              >
                {f.experience}
              </span>
            </div>

            {/* Bio */}
            <p className="text-white/70 text-[14px] leading-[1.85] m-0">
              {f.bio}{" "}
              <strong className="text-white font-bold">
                {f.bioHighlight}
              </strong>
              , blending digital innovation with physical excellence.
            </p>

            {/* Blockquote */}
            <div
              className="relative rounded-lg px-6 py-5"
              style={{ background: "rgba(255,107,0,0.07)", borderLeft: "3px solid #FFBE32" }}
            >
              <p className="text-white text-[15px] font-medium leading-[1.7] m-0 pr-10">
                {f.quote}
              </p>
              {/* 99 decorative */}
              <div className="absolute top-3 right-4 w-10 h-10 opacity-80">
                <Image
                  src="/about/founder/99.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Connect + Pagination Row */}
            <div className="flex items-center justify-between flex-wrap gap-4 pt-1">

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <span className="text-white/40 text-[11px] font-bold uppercase tracking-[0.15em]">
                  Connect
                </span>
                <a
                  href={f.linkedin}
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <Image
                    src="/about/founder/link.png"
                    alt="LinkedIn"
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                </a>
                <a
                  href={f.twitter}
                  aria-label="Twitter"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <Image
                    src="/about/founder/twitter.png"
                    alt="Twitter"
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                </a>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}