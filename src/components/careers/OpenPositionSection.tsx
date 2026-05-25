"use client";

import { useState, useMemo } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface JobPosition {
  id: number;
  title: string;
  location: string;
  type: "Full Time" | "Part Time" | "Contract";
  department: string;
  applyUrl: string;
}

// ─── Demo Data ────────────────────────────────────────────────────────────────

const DEMO_JOBS: JobPosition[] = [
  { id: 1, title: "Retail Associate",      location: "Houston, TX",     type: "Full Time",  department: "Retail",      applyUrl: "#" },
  { id: 2, title: "Store Manager",         location: "Dallas, TX",      type: "Full Time",  department: "Management",  applyUrl: "#" },
  { id: 3, title: "Inventory Specialist",  location: "Austin, TX",      type: "Part Time",  department: "Operations",  applyUrl: "#" },
  { id: 4, title: "CBD Product Advisor",   location: "Houston, TX",     type: "Full Time",  department: "Retail",      applyUrl: "#" },
  { id: 5, title: "District Manager",      location: "San Antonio, TX", type: "Full Time",  department: "Management",  applyUrl: "#" },
  { id: 6, title: "Visual Merchandiser",   location: "Austin, TX",      type: "Contract",   department: "Marketing",   applyUrl: "#" },
  { id: 7, title: "HR Coordinator",        location: "Dallas, TX",      type: "Full Time",  department: "HR",          applyUrl: "#" },
  { id: 8, title: "E-Commerce Specialist", location: "Remote",          type: "Full Time",  department: "Marketing",   applyUrl: "#" },
];


// ─── Job Row ──────────────────────────────────────────────────────────────────

function JobRow({ job, index }: { job: JobPosition; index: number }) {
  return (
    <div
      className="flex items-center justify-between gap-4 px-6 py-5 rounded-xl bg-[#1e0900]/80 border border-white/8 hover:border-[#FF6B00]/30 hover:bg-[#2a1200]/60 transition-all duration-200 group"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Left */}
      <div className="flex flex-col gap-2 min-w-0">
        <h3 className="text-white font-black text-[15px] sm:text-[16px] uppercase tracking-[0.06em] m-0 leading-none">
          {job.title}
        </h3>
        <div className="flex items-center gap-4 flex-wrap">
          {/* Location */}
          <span className="flex items-center gap-1.5 text-white/45 text-[11px] font-bold uppercase tracking-[0.1em]">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            {job.location}
          </span>
          {/* Type */}
          <span className="flex items-center gap-1.5 text-white/45 text-[11px] font-bold uppercase tracking-[0.1em]">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            {job.type}
          </span>
        </div>
      </div>

      {/* Apply Button */}
      <a
        href={job.applyUrl}
        className="flex-shrink-0 px-5 py-2.5 rounded-full bg-white/10 border border-white/15 text-white text-[12px] font-bold tracking-[0.08em] uppercase transition-all duration-200 no-underline hover:bg-[#FF6B00] hover:border-[#FF6B00] hover:shadow-[0_4px_20px_rgba(255,107,0,0.35)] group-hover:bg-[#FF6B00] group-hover:border-[#FF6B00]"
      >
        Apply Now
      </a>
    </div>
  );
}

// ─── Select ───────────────────────────────────────────────────────────────────

function FilterSelect({
  value,
  onChange,
  options,
  icon,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  icon: React.ReactNode;
}) {
  return (
    <div className="relative flex-1 min-w-[160px]">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none">
        {icon}
      </div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-[52px] pl-10 pr-10 rounded-full bg-white/8 border border-white/15 text-white/80 text-[13px] font-medium appearance-none cursor-pointer outline-none focus:border-[#FF6B00]/50 focus:bg-white/10 transition-all duration-200"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-[#1a0a00] text-white">
            {o}
          </option>
        ))}
      </select>
      {/* Chevron */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
    </div>
  );
}

// ─── Section Props ────────────────────────────────────────────────────────────

interface OpenPositionsSectionProps {
  jobs?: JobPosition[];
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function OpenPositionsSection({ jobs = DEMO_JOBS }: OpenPositionsSectionProps) {
  const [keyword,    setKeyword]    = useState("");
  const [location,  setLocation]   = useState("All Locations");
  const [department, setDepartment] = useState("All Departments");

  // ── Filter logic ──────────────────────────────────────────────────────────
  const filtered = useMemo(() => {
    return jobs.filter((j) => {
      const matchKeyword    = j.title.toLowerCase().includes(keyword.toLowerCase());
      const matchLocation   = location   === "All Locations"   || j.location   === location;
      const matchDepartment = department === "All Departments" || j.department === department;
      return matchKeyword && matchLocation && matchDepartment;
    });
  }, [jobs, keyword, location, department]);

  const locations   = useMemo(() => ["All Locations",   ...Array.from(new Set(jobs.map((j) => j.location)))],   [jobs]);
  const departments = useMemo(() => ["All Departments", ...Array.from(new Set(jobs.map((j) => j.department)))], [jobs]);

  return (
    <section className="w-full py-16 bg-gradient-to-br from-[#0e0400] via-[#1a0800] to-[#2a0e00]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16">

        {/* Header */}
        <div className="flex flex-col items-center gap-3 mb-12">
          <h2 className="text-white font-black text-3xl sm:text-4xl uppercase italic tracking-wide m-0">
            Open Positions
          </h2>
          <div className="w-16 h-[3px] bg-[#FF6B00] rounded-full" />
        </div>

        {/* Search + Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">

          {/* Keyword input */}
          <div className="relative flex-1 min-w-[180px]">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Keyword (e.g. Sales)"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full h-[52px] pl-11 pr-4 rounded-full bg-white/8 border border-white/15 text-white text-[13px] placeholder-white/35 outline-none focus:border-[#FF6B00]/50 focus:bg-white/10 transition-all duration-200"
            />
          </div>

          {/* Location select */}
          <FilterSelect
            value={location}
            onChange={setLocation}
            options={locations}
            icon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            }
          />

          {/* Department select */}
          <FilterSelect
            value={department}
            onChange={setDepartment}
            options={departments}
            icon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            }
          />

          {/* Search button */}
          <button
            onClick={() => {}}
            className="h-[52px] px-8 rounded-full bg-[#FF6B00] hover:bg-[#e55f00] text-white font-bold text-[13px] uppercase tracking-[0.08em] transition-all duration-200 flex-shrink-0 hover:shadow-[0_4px_20px_rgba(255,107,0,0.4)] border-none cursor-pointer"
          >
            Search
          </button>
        </div>

        {/* Results count */}
        <p className="text-white/35 text-[12px] font-medium mb-5">
          {filtered.length} position{filtered.length !== 1 ? "s" : ""} found
        </p>

        {/* Job Listings */}
        <div className="flex flex-col gap-3">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-white/30 gap-3">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <p className="text-[14px] font-medium m-0">No positions match your search.</p>
              <button
                onClick={() => { setKeyword(""); setLocation("All Locations"); setDepartment("All Departments"); }}
                className="text-[#FF6B00] text-[12px] font-bold uppercase tracking-wider border-none bg-transparent cursor-pointer hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            filtered.map((job, i) => (
              <JobRow key={job.id} job={job} index={i} />
            ))
          )}
        </div>

      </div>
    </section>
  );
}