"use client";

import { useEffect, useId, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { StoreLocation } from "../lib/demo-store-locations";

// ─── Fix Leaflet default icon paths broken by webpack ────────────────────────
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl; L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// ─── Custom marker icon factory ───────────────────────────────────────────────

function makeIcon(isActive: boolean) {
    return L.divIcon({
        className: "",
        html: `
      <div style="
        width: ${isActive ? "22px" : "14px"};
        height: ${isActive ? "22px" : "14px"};
        background: ${isActive ? "#FF6B00" : "#5e9e9f"};
        border: 2.5px solid ${isActive ? "#ffffff" : "#2a6b6c"};
        border-radius: 50%;
        box-shadow: ${isActive ? "0 0 0 4px rgba(255,107,0,0.25), 0 0 16px rgba(255,107,0,0.5)" : "0 2px 6px rgba(0,0,0,0.4)"};
        transition: all 0.3s ease;
      "></div>
    `,
        iconSize: [isActive ? 22 : 14, isActive ? 22 : 14],
        iconAnchor: [isActive ? 11 : 7, isActive ? 11 : 7],
    });
}

// ─── Fly-to controller ────────────────────────────────────────────────────────

function FlyToStore({ store }: { store: StoreLocation | undefined }) {
    const map = useMap();
    useEffect(() => {
        if (!store) return;
        map.flyTo([store.lat, store.lng], 14, { duration: 0.9, easeLinearity: 0.25 });
    }, [store, map]);
    return null;
}

// ─── Custom Zoom Control ──────────────────────────────────────────────────────

function CustomZoom() {
    const map = useMap();
    return (
        <div
            style={{
                position: "absolute",
                top: "12px",
                left: "12px",
                zIndex: 999,
                display: "flex",
                flexDirection: "column",
                gap: "4px",
            }}
        >
            {["+", "−"].map((sym) => (
                <button
                    key={sym}
                    onClick={() => (sym === "+" ? map.zoomIn() : map.zoomOut())}
                    style={{
                        width: "32px",
                        height: "32px",
                        background: "#1a0a00",
                        border: "1px solid rgba(255,255,255,0.2)",
                        borderRadius: "0",
                        color: "#ffffff",
                        fontSize: "18px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        lineHeight: 1,
                        transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,107,0,0.2)";
                        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,107,0,0.5)";
                    }}
                    onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background = "#1a0a00";
                        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.2)";
                    }}
                    aria-label={sym === "+" ? "Zoom in" : "Zoom out"}
                >
                    {sym}
                </button>
            ))}
        </div>
    );
}

// ─── Props ────────────────────────────────────────────────────────────────────

interface MapInnerProps {
    stores: StoreLocation[];
    activeStoreId: number;
    onMarkerClick: (id: number) => void;
}

// ─── Main Map Component ───────────────────────────────────────────────────────

export default function MapInner({ stores, activeStoreId, onMarkerClick }: MapInnerProps) {
    const [mounted, setMounted] = useState(false);
    const mapKey = useId();
    const activeStore = stores.find((s) => s.id === activeStoreId);
    const center: [number, number] = [29.7604, -95.3698];

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div
                className="w-full h-full min-h-[320px] bg-[#1e0800]"
                aria-hidden
            />
        );
    }

    return (
        <MapContainer
            key={mapKey}
            center={center}
            zoom={11}
            style={{
                width: "100%",
                height: "100%",
                minHeight: "320px",
                zIndex: 0,
            }}
            className="!z-0"
            zoomControl={false}
            scrollWheelZoom={false}
            attributionControl={false}
        >
            {/* ── OpenStreetMap tiles — no API key needed ── */}
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />

            {/* ── Fly to active store ── */}
            <FlyToStore store={activeStore} />

            {/* ── Custom zoom buttons ── */}
            <CustomZoom />

            {/* ── Markers ── */}
            {stores.map((store) => (
                <Marker
                    key={store.id}
                    position={[store.lat, store.lng]}
                    icon={makeIcon(store.id === activeStoreId)}
                    eventHandlers={{
                        click: () => onMarkerClick(store.id),
                    }}
                />
            ))}
        </MapContainer>
    );
}