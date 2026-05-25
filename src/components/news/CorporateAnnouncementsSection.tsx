import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Announcement {
  id: number;
  date: string;
  title: string;
  href: string;
}

// ─── Demo Data ────────────────────────────────────────────────────────────────

const DEMO_ANNOUNCEMENTS: Announcement[] = [
  {
    id: 1,
    date: "Oct 12, 2023",
    title: "Bahama Mama Announces Expansion to Austin Metropolitan Area",
    href: "/news/expansion-austin",
  },
  {
    id: 2,
    date: "Sep 28, 2023",
    title: "Quarterly Earnings Report: Record Growth in Direct-to-Consumer Sales",
    href: "/news/quarterly-earnings",
  },
  {
    id: 3,
    date: "Sep 05, 2023",
    title: "New Chief Marketing Officer Joins Bahama Mama Leadership Team",
    href: "/news/new-cmo",
  },
];

// ─── Announcement Row ─────────────────────────────────────────────────────────

function AnnouncementRow({ date, title, href }: Omit<Announcement, "id">) {
  return (
    <Link
      href={href}
      className="group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 px-5 sm:px-6 py-4 sm:py-5 rounded-xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-[#FF6B00]/25 transition-all duration-200 no-underline"
    >
      {/* Date — top on mobile, left on desktop */}
      <span className="text-white/35 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] whitespace-nowrap flex-shrink-0 sm:w-[90px]">
        {date}
      </span>

      {/* Vertical divider — desktop only */}
      <div className="hidden sm:block w-px h-5 bg-white/15 flex-shrink-0" />

      {/* Title + arrow row */}
      <div className="flex items-start sm:items-center justify-between gap-3 flex-1">
        <span className="text-white font-black text-[13px] sm:text-[14px] uppercase tracking-[0.05em] sm:tracking-[0.07em] leading-snug group-hover:text-[#FF6B00] transition-colors duration-200">
          {title}
        </span>

        {/* Arrow */}
        <svg
          width="13" height="13" viewBox="0 0 24 24" fill="none"
          stroke="#FF6B00" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
          className="flex-shrink-0 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 mt-0.5 sm:mt-0"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </Link>
  );
}

// ─── Section Props ────────────────────────────────────────────────────────────

interface CorporateAnnouncementsSectionProps {
  announcements?: Announcement[];
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function CorporateAnnouncementsSection({
  announcements = DEMO_ANNOUNCEMENTS,
}: CorporateAnnouncementsSectionProps) {
  return (
    <section className="w-full py-12 sm:py-16 bg-gradient-to-br from-[#0e0400] via-[#1a0800] to-[#3a1200]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 lg:px-16">

        {/* Header */}
        <div className="flex flex-col items-center gap-3 mb-8 sm:mb-12">
          <h2 className="text-white font-black text-2xl sm:text-3xl lg:text-4xl uppercase italic tracking-wide m-0 text-center leading-tight">
            Corporate Announcements
          </h2>
          <div className="w-14 sm:w-16 h-[3px] bg-[#FF6B00] rounded-full" />
        </div>

        {/* List */}
        <div className="flex flex-col gap-3">
          {announcements.map((a) => (
            <AnnouncementRow
              key={a.id}
              date={a.date}
              title={a.title}
              href={a.href}
            />
          ))}
        </div>

      </div>
    </section>
  );
}