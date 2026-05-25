"use client";

import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Benefit {
  id: number;
  icon: string;
  label: string;
}

// ─── Demo Data ────────────────────────────────────────────────────────────────

const DEMO_BENEFITS: Benefit[] = [
  { id: 1, icon: "health", label: "Health Benefits" },
  { id: 2, icon: "flex", label: "Flexible Scheduling" },
  { id: 3, icon: "discount", label: "Employee Discounts" },
  { id: 4, icon: "career", label: "Career Development" },
  { id: 5, icon: "team", label: "Team Culture" },
];

// ─── Benefit Item ─────────────────────────────────────────────────────────────

function BenefitItem({ icon, label }: Omit<Benefit, "id">) {
  return (
    <div className="flex flex-col items-center gap-4 sm:gap-5 w-full">
      
      {/* Icon box */}
      <div className="w-[78px] h-[78px] sm:w-[88px] sm:h-[88px] rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-105">
        <Image
          src={`/career/benefits/${icon}.png`}
          alt={label}
          width={40}
          height={40}
          className="object-contain w-[34px] h-[34px] sm:w-[40px] sm:h-[40px]"
        />
      </div>

      {/* Label */}
      <p className="text-white font-black text-[11px] sm:text-[13px] uppercase tracking-[0.1em] text-center leading-relaxed m-0 max-w-[140px]">
        {label}
      </p>

    </div>
  );
}

// ─── Section Props ────────────────────────────────────────────────────────────

interface EmployeeBenefitsSectionProps {
  benefits?: Benefit[];
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function EmployeeBenefitsSection({
  benefits = DEMO_BENEFITS,
}: EmployeeBenefitsSectionProps) {
  return (
    <section className="relative w-full py-14 sm:py-16 md:py-20 bg-[#FF6B00] overflow-hidden">
      
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="flex flex-col items-center gap-3 mb-10 sm:mb-14 text-center">
          
          <h2 className="text-[#1E293B] font-black text-[30px] sm:text-[38px] md:text-[44px] uppercase italic tracking-wide leading-none m-0">
            Employee Benefits
          </h2>

          <div className="w-28 sm:w-36 h-[3px] bg-[#FFBE32] rounded-full" />

        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-5 sm:gap-y-12 lg:gap-6 items-start">
          {benefits.map((b) => (
            <BenefitItem
              key={b.id}
              icon={b.icon}
              label={b.label}
            />
          ))}
        </div>

      </div>
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-black/15 pointer-events-none" />

    </section>
  );
}