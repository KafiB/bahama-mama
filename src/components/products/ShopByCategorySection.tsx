"use client";

import Image from "next/image";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ProductCategory {
  id: number;
  image: string;
  name: string;
  href: string;
}

// ─── Demo Data ────────────────────────────────────────────────────────────────

const DEMO_CATEGORIES: ProductCategory[] = [
  { id: 1, image: "/products/p1.png", name: "CBD",              href: "/products/cbd" },
  { id: 2, image: "/products/p2.png", name: "Vape Devices",     href: "/products/vape-devices" },
  { id: 3, image: "/products/p3.png", name: "Disposable Vapes", href: "/products/disposable-vapes" },
  { id: 4, image: "/products/p4.png", name: "Kratom",           href: "/products/kratom" },
  { id: 5, image: "/products/p5.png", name: "Hookah & Pipes",   href: "/products/hookah" },
  { id: 6, image: "/products/p6.png", name: "Cigars & Tobacco", href: "/products/cigars" },
  { id: 7, image: "/products/p7.png", name: "Accessories",      href: "/products/accessories" },
  { id: 8, image: "/products/p8.png", name: "Wellness",         href: "/products/wellness" },
];

// ─── ProductCard ──────────────────────────────────────────────────────────────

function ProductCard({ image, name, href }: ProductCategory) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col rounded-xl overflow-hidden no-underline w-full h-[360px]"
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#23230F] via-[#23230F]/50 to-transparent" />

      {/* Text — bottom left */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-[10px] p-8">
        {/* Name */}
        <h3 className="m-0 text-[#F1F5F9] text-[22px] font-black leading-tight tracking-[0px]">
          {name}
        </h3>

        {/* Learn More */}
        <span className="flex items-center gap-1.5 text-[#FF6B00] text-[13px] font-bold uppercase tracking-[2px] transition-all duration-200 group-hover:gap-2.5 w-fit">
          Learn More
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="flex-shrink-0"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

// ─── Section Props ────────────────────────────────────────────────────────────

interface ShopByCategorySectionProps {
  categories?: ProductCategory[];
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function ShopByCategorySection({
  categories = DEMO_CATEGORIES,
}: ShopByCategorySectionProps) {
  return (
    <section className="w-full py-14 bg-gradient-to-br from-[#180800] via-[#2a0e00] to-[#180800]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="mb-8">
          <p className="text-[#FF6B00] uppercase tracking-[0.2em] text-[11px] font-bold mb-1">
            Selection
          </p>
          <h2 className="text-white font-bold text-2xl sm:text-3xl m-0">
            Shop by Category
          </h2>
        </div>

        {/* Grid — 4 cols desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <ProductCard key={cat.id} {...cat} />
          ))}
        </div>

      </div>
    </section>
  );
}