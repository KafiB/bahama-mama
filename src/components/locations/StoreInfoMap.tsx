"use client";

import { useEffect, useId, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// ─── Fix Leaflet webpack icon bug ─────────────────────────────────────────────
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// ─── Orange pulsing marker ────────────────────────────────────────────────────

const ORANGE_ICON = L.divIcon({
  className: "",
  html: `
    <div style="position:relative;width:28px;height:28px;">
      <div style="
        position:absolute;inset:-8px;border-radius:50%;
        background:rgba(255,107,0,0.18);
        animation:sim-pulse 2s ease-out infinite;
      "></div>
      <div style="
        width:28px;height:28px;border-radius:50%;
        background:#FF6B00;border:3px solid #ffffff;
        box-shadow:0 0 0 3px rgba(255,107,0,0.3),0 4px 12px rgba(255,107,0,0.5);
      "></div>
    </div>
    <style>
      @keyframes sim-pulse {
        0%   { transform:scale(1);opacity:0.7; }
        100% { transform:scale(2.6);opacity:0; }
      }
    </style>
  `,
  iconSize: [28, 28],
  iconAnchor: [14, 14],
});

// ─── Fly to on prop change ────────────────────────────────────────────────────

function FlyTo({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo([lat, lng], 13, { duration: 1, easeLinearity: 0.25 });
  }, [lat, lng, map]);
  return null;
}

// ─── Custom zoom ──────────────────────────────────────────────────────────────

function ZoomControls() {
  const map = useMap();
  return (
    <div className="absolute top-3 left-3 z-[999] flex flex-col gap-1">
      {[
        { sym: "+", fn: () => map.zoomIn(), label: "Zoom in" },
        { sym: "−", fn: () => map.zoomOut(), label: "Zoom out" },
      ].map(({ sym, fn, label }) => (
        <button key={sym} onClick={fn} aria-label={label}
          className="w-8 h-8 bg-[#1a0a00] border border-white/20 text-white font-bold text-lg flex items-center justify-center rounded-md cursor-pointer transition-all duration-200 hover:bg-[#FF6B00]/20 hover:border-[#FF6B00]/50 leading-none"
        >
          {sym}
        </button>
      ))}
    </div>
  );
}

// ─── Props ────────────────────────────────────────────────────────────────────

export interface StoreInfoMapProps {
  lat: number;
  lng: number;
  name: string;
}

// ─── Export ───────────────────────────────────────────────────────────────────

export default function StoreInfoMap({ lat, lng }: StoreInfoMapProps) {
  const [mounted, setMounted] = useState(false);
  const mapKey = useId();

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <div
        className="relative w-full h-full min-h-[300px] bg-[#1e0800]"
        aria-hidden
      />
    );
  }

  return (
    <div className="relative w-full h-full min-h-[300px]">
      <MapContainer
        key={mapKey}
        center={[lat, lng]}
        zoom={13}
        style={{ width: "100%", height: "100%", minHeight: "300px" }}
        zoomControl={false}
        scrollWheelZoom={false}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <FlyTo lat={lat} lng={lng} />
        <ZoomControls />
        <Marker position={[lat, lng]} icon={ORANGE_ICON} />
      </MapContainer>
    </div>
  );
}