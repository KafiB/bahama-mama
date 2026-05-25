"use client";

import { useState } from "react";
import NewsFilterBar, { NewsCategory } from "./NewsFilterBar";
import LatestUpdatesSection from "./LatestUpdateSection";

export default function NewsPageClient() {
    const [activeCategory, setActiveCategory] = useState<NewsCategory>("All");
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <>
            <NewsFilterBar
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
            />
            <LatestUpdatesSection
                activeCategory={activeCategory}
                searchQuery={searchQuery}
            />
        </>
    );
}