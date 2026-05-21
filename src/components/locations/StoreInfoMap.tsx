"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet icon paths
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function makeIcon() {
    return L.divIcon({
        className: "",
        html: `<div style="
            width:22px;height:22px;
            background:#FFBE32;
            border:2.5px solid #ffffff;
            border-radius:50%;
            box-shadow:0 0 0 4px rgba(255,190,50,0.25),0 0 16px rgba(255,190,50,0.5);
        "></div>`,
        iconSize: [22, 22],
        iconAnchor: [11, 11],
    });
}

function CenterMap({ lat, lng }: { lat: number; lng: number }) {
    const map = useMap();
    useEffect(() => {
        map.setView([lat, lng], 14);
    }, [lat, lng, map]);
    return null;
}

export interface StoreInfoMapProps { 
    lat: number;
    lng: number;
    name: string;
}

export default function StoreInfoMap({ lat, lng, name }: StoreInfoMapProps) {
    return (
        <MapContainer
            center={[lat, lng]}
            zoom={14}
            style={{ width: "100%", height: "100%" }}
            zoomControl={false}
            scrollWheelZoom={false}
            attributionControl={false}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <CenterMap lat={lat} lng={lng} />
            <Marker
                position={[lat, lng]}
                icon={makeIcon()}
            />
        </MapContainer>
    );
}