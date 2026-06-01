"use client";

import Image from "next/image";
import {
    Briefcase,
    Magnifier,
    Persons,
    Star,
    Buildings,
    ArrowRight,
    Factory,
} from "@gravity-ui/icons";

const stats = [
    {
        icon: Briefcase,
        value: "50K",
        label: "Active Jobs",
    },
    {
        icon: Factory,
        value: "12K",
        label: "Companies",
    },
    {
        icon: Persons,
        value: "2M",
        label: "Job Seekers",
    },
    {
        icon: Star,
        value: "97%",
        label: "Satisfaction Rate",
    },
];

const tags = [
    "Technology",
    "Design",
    "AI Engineer",
    "Remote",
];

export default function HeroSection() {
    return (
        <section className="relative min-h-screen overflow-hidden">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/globe.png"
                    alt="Hero Background"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            {/* Optional Dark Overlay */}
            <div className="absolute inset-0 z-10 bg-black/20" />

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-6">

                {/* Badge */}
                <div className="flex justify-center pt-24">
                    <div className="rounded-full border border-white/10 bg-black/30 backdrop-blur-md px-4 py-2 text-xs text-gray-300">
                        🚀 50,000+ Jobs • 12K Companies • 2M Talent Network
                    </div>
                </div>

                {/* Heading */}
                <div className="text-center mt-8">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                        Find Your Dream Job Today
                    </h1>

                    <p className="mt-6 max-w-2xl mx-auto text-gray-300 text-lg">
                        HireVerse connects exceptional talent with leading companies.
                        Discover thousands of opportunities tailored to your skills.
                    </p>
                </div>

                {/* Search */}
                <div className="max-w-4xl mx-auto mt-10">
                    <div className="flex flex-col md:flex-row gap-3 md:gap-0 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-3">

                        <div className="flex items-center flex-1 gap-3 px-4">
                            <Magnifier className="text-gray-500" />
                            <input
                                type="text"
                                placeholder="Job title, keyword or company"
                                className="w-full bg-transparent outline-none text-white placeholder:text-gray-500"
                            />
                        </div>

                        <div className="hidden md:block w-px bg-white/10 mx-3" />

                        <div className="flex items-center px-4 text-gray-400">
                            Remote
                        </div>

                        <button className="bg-fuchsia-600 hover:bg-fuchsia-500 transition rounded-xl px-6 py-3 text-white flex items-center gap-2">
                            Search
                            <ArrowRight />
                        </button>

                    </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-3 mt-6">
                    {tags.map((tag) => (
                        <button
                            key={tag}
                            className="rounded-full border border-white/10 bg-black/30 backdrop-blur-md px-4 py-2 text-sm text-gray-300 hover:border-fuchsia-500/40 hover:text-white transition"
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Spacer for Globe Area */}
                <div className="h-40" />

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pb-20">
                    {stats.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-black/60
                backdrop-blur-xl
                p-6
                
              "
                            >
                                <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-fuchsia-600/10 blur-3xl" />

                                <Icon
                                    width={20}
                                    height={20}
                                    className="text-white/70 mb-8"
                                />

                                <h3 className="text-4xl md:text-5xl font-bold text-white">
                                    {item.value}
                                </h3>

                                <p className="mt-3 text-sm text-gray-400">
                                    {item.label}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}