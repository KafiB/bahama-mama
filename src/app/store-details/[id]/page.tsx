import StoreDetailsHero from "@/components/locations/StoreDetailsHero";
import { DEMO_STORE_LOCATIONS } from "@/components/lib/demo-store-locations";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function StoreDetailsPage({ params }: PageProps) {
    // Next.js 15: params is a Promise — must await
    const { id } = await params;

    const found = DEMO_STORE_LOCATIONS.find((s) => s.id === Number(id));
    const raw = found ?? DEMO_STORE_LOCATIONS[0];

    // Build StoreDetail inline (no client function call)
    const store = {
        id: raw.id,
        name: raw.name,
        address: raw.address,
        city: raw.city,
        state: raw.state,
        zip: raw.zip,
        phone: "(713) 555-0123",
        isOpen: raw.isOpen,
        closesAt: raw.closesAt,
        opensAt: "9:00 AM",
        heroImage: "/locations/map/details/Hero Section.png",
        directionsUrl:
            "lat" in raw && "lng" in raw
                ? `https://maps.google.com/?q=${(raw as any).lat},${(raw as any).lng}`
                : "https://maps.google.com",
    };

    return (
        <main className="min-h-screen bg-[#120400]">
            <StoreDetailsHero store={store} />
        </main>
    );
}