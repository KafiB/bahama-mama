"use client";

import { useState } from "react";
import { DEMO_STORE_LOCATIONS } from "@/components/lib/demo-store-locations";

const STORE_CONTACT_DATA: Record<number, { hours: string; sunHours: string; email: string; phone: string }> = {
    1: { hours: "Mon - Sat: 10am - 9pm", sunHours: "Sun: 11am - 7pm", email: "houston@bahamamama.com", phone: "(713) 555-0123" },
    2: { hours: "Mon - Sat: 10am - 11pm", sunHours: "Sun: 11am - 9pm", email: "midtown@bahamamama.com", phone: "(713) 555-0456" },
    3: { hours: "Mon - Sat: 10am - 10pm", sunHours: "Sun: 11am - 8pm", email: "heights@bahamamama.com", phone: "(713) 555-0789" },
    4: { hours: "Mon - Sat: 10am - 9pm", sunHours: "Sun: 11am - 7pm", email: "riveroaks@bahamamama.com", phone: "(713) 555-1011" },
    5: { hours: "Mon - Sat: 10am - 10pm", sunHours: "Sun: 12pm - 8pm", email: "galleria@bahamamama.com", phone: "(713) 555-1213" },
    6: { hours: "Mon - Sat: 10am - 9pm", sunHours: "Sun: 11am - 7pm", email: "sugarland@bahamamama.com", phone: "(281) 555-1415" },
};

const SUBJECTS = ["Product Inquiry", "Store Feedback", "Wholesale Inquiry", "Partnership", "Press & Media", "Other"];

export default function ContactSection() {
    const [selectedStoreId, setSelectedStoreId] = useState(DEMO_STORE_LOCATIONS[0].id);
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        preferredLocation: DEMO_STORE_LOCATIONS[0].name,
        subject: "Product Inquiry",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const activeStore = DEMO_STORE_LOCATIONS.find(s => s.id === selectedStoreId) ?? DEMO_STORE_LOCATIONS[0];
    const contactInfo = STORE_CONTACT_DATA[activeStore.id];

    const handleChange = (field: string, value: string) =>
        setForm(prev => ({ ...prev, [field]: value }));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: connect to backend API
        console.log("Form submitted:", form);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#120400] via-[#1e0800] to-[#3d0c00]">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">

                    {/* ── LEFT ── */}
                    <div className="flex flex-col gap-6 md:gap-8">
                        <div>
                            <h2 className="text-white text-[clamp(22px,3vw,42px)] font-black uppercase leading-tight tracking-tight m-0">
                                Find Your Local
                            </h2>
                            <h2 className="text-[#FF6B00] text-[clamp(22px,3vw,42px)] font-black uppercase leading-tight tracking-tight m-0">
                                Bahama Mama
                            </h2>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-white/60 text-[11px] font-bold uppercase tracking-[2px]">Select Your City</label>
                            <div className="relative">
                                <select
                                    value={selectedStoreId}
                                    onChange={e => setSelectedStoreId(Number(e.target.value))}
                                    className="w-full appearance-none bg-[#2a1200]/80 border border-white/10 text-white text-[14px] font-medium px-4 py-3.5 md:px-5 md:py-4 rounded-xl cursor-pointer outline-none focus:border-[#FF6B00]/50 transition-colors duration-200"
                                >
                                    {DEMO_STORE_LOCATIONS.map(store => (
                                        <option key={store.id} value={store.id} className="bg-[#2a1200]">{store.name}</option>
                                    ))}
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#2a1200]/70 border border-white/[0.08] rounded-2xl p-5 md:p-6 flex flex-col gap-5">
                            <div className="flex items-start justify-between gap-3 flex-wrap">
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-white text-[17px] md:text-[20px] font-black m-0 mb-1 truncate">{activeStore.name}</h3>
                                    <p className="text-white/50 text-[12px] md:text-[13px] m-0">{activeStore.address}, {activeStore.city}, {activeStore.state} {activeStore.zip}</p>
                                </div>
                                {activeStore.isOpen ? (
                                    <span className="shrink-0 bg-[#FF6B00] text-[#120400] text-[10px] font-black uppercase tracking-[1.5px] px-3 py-1.5 rounded-sm whitespace-nowrap">Open Now</span>
                                ) : (
                                    <span className="shrink-0 bg-white/10 text-white/50 text-[10px] font-black uppercase tracking-[1.5px] px-3 py-1.5 rounded-sm whitespace-nowrap">Closed</span>
                                )}
                            </div>

                            <div className="w-full h-px bg-white/[0.08]" />

                            <div className="grid grid-cols-2 gap-4 md:gap-5">
                                <div>
                                    <p className="text-white text-[12px] md:text-[13px] font-bold mb-2">Store Hours</p>
                                    <p className="text-white/50 text-[11px] md:text-[12px] leading-[1.8] m-0">{contactInfo.hours}<br />{contactInfo.sunHours}</p>
                                </div>
                                <div>
                                    <p className="text-white text-[12px] md:text-[13px] font-bold mb-2">Contact Info</p>
                                    <p className="text-white/50 text-[11px] md:text-[12px] leading-[1.8] m-0 break-all">Phone: {contactInfo.phone}<br />{contactInfo.email}</p>
                                </div>
                            </div>

                            <a
                                href={`https://maps.google.com/?q=${activeStore.lat},${activeStore.lng}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full border border-[#FF6B00]/50 text-[#FF6B00] text-[11px] md:text-[12px] font-black uppercase tracking-[2px] py-3.5 md:py-4 rounded-xl text-center no-underline hover:bg-[#FF6B00]/10 active:scale-[0.98] transition-all duration-200"
                            >
                                Get Directions
                            </a>
                        </div>
                    </div>

                    {/* ── RIGHT ── */}
                    <div className="flex flex-col gap-6 md:gap-8">
                        <div>
                            <h2 className="text-[clamp(22px,3vw,42px)] font-black uppercase leading-tight tracking-tight m-0">
                                <span className="text-white">Send Us A </span>
                                <span className="text-[#FF6B00]">Message</span>
                            </h2>
                            <p className="text-white/50 text-[13px] leading-relaxed mt-2 md:mt-3 m-0">
                                Have a specific question? Fill out the form below and our concierge team will be in touch.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <FormField label="Full Name"><InputBase placeholder="e.g. John Doe" value={form.fullName} onChange={v => handleChange("fullName", v)} required /></FormField>
                                <FormField label="Email Address"><InputBase type="email" placeholder="john@example.com" value={form.email} onChange={v => handleChange("email", v)} required /></FormField>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <FormField label="Phone Number"><InputBase type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={v => handleChange("phone", v)} /></FormField>
                                <FormField label="Preferred Location"><SelectBase value={form.preferredLocation} onChange={v => handleChange("preferredLocation", v)} options={DEMO_STORE_LOCATIONS.map(s => s.name)} /></FormField>
                            </div>
                            <FormField label="Subject"><SelectBase value={form.subject} onChange={v => handleChange("subject", v)} options={SUBJECTS} /></FormField>
                            <FormField label="Your Message">
                                <textarea
                                    placeholder="How can we help you today?"
                                    value={form.message}
                                    onChange={e => handleChange("message", e.target.value)}
                                    required
                                    rows={5}
                                    className="w-full bg-[#2a1200]/70 border border-white/10 text-white text-[14px] placeholder:text-white/30 px-4 md:px-4 py-0.5 md:py-4 rounded-xl outline-none focus:border-[#FF6B00]/50 transition-colors duration-200 resize-none caret-[#FF6B00]" />
                            </FormField>
                            <div className="flex justify-stretch sm:justify-end mt-1">
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto bg-gradient-to-r from-[#FF4C03] to-[#FE950A] text-white text-[12px] md:text-[13px] font-black uppercase tracking-[2px] px-8 md:px-10 py-4 rounded-xl hover:opacity-90 active:scale-[0.98] transition-all duration-200 cursor-pointer border-none min-w-[180px]"
                                >
                                    {submitted ? "Message Sent ✓" : "Send Message"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-white/60 text-[11px] font-bold uppercase tracking-[2px]">{label}</label>
            {children}
        </div>
    );
}

function InputBase({ placeholder, value, onChange, type = "text", required = false }: {
    placeholder: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean;
}) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={e => onChange(e.target.value)}
            required={required}
            className="w-full bg-[#2a1200]/70 border border-white/10 text-white text-[14px] placeholder:text-white/30 px-4 py-3.5 md:px-5 md:py-4 rounded-xl outline-none focus:border-[#FF6B00]/50 transition-colors duration-200 caret-[#FF6B00]"
        />
    );
}

function SelectBase({ value, onChange, options }: {
    value: string; onChange: (v: string) => void; options: string[];
}) {
    return (
        <div className="relative">
            <select
                value={value}
                onChange={e => onChange(e.target.value)}
                className="w-full appearance-none bg-[#2a1200]/70 border border-white/10 text-white text-[14px] px-4 py-3.5 md:px-5 md:py-4 rounded-xl outline-none focus:border-[#FF6B00]/50 transition-colors duration-200 cursor-pointer"
            >
                {options.map(opt => (
                    <option key={opt} value={opt} className="bg-[#2a1200]">{opt}</option>
                ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
            </div>
        </div>
    );
}