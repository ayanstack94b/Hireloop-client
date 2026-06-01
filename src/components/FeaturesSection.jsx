"use client";

import {
    Star,
    ChartColumn,
    Persons,
    Briefcase,
    Bell,
    Display,
} from "@gravity-ui/icons";

const features = [
    {
        icon: Persons,
        title: "Smart Talent Matching",
        description:
            "AI-powered matching connects candidates with the most relevant opportunities.",
    },
    {
        icon: ChartColumn,
        title: "Salary Insights",
        description:
            "Access real-time salary benchmarks across industries and locations.",
    },
    {
        icon: Briefcase,
        title: "Top Companies",
        description:
            "Discover opportunities from trusted startups and global enterprises.",
    },
    {
        icon: Bell,
        title: "Saved Jobs",
        description:
            "Bookmark opportunities and track applications in one place.",
    },
    {
        icon: Display,
        title: "One-Click Apply",
        description:
            "Submit applications faster using a streamlined profile system.",
    },
    {
        icon: Star,
        title: "Career Growth Resources",
        description:
            "Learn from expert career guides, interview prep and industry insights.",
    },
];

export default function FeaturesSection() {
    return (
        <section className="py-28 bg-black">

            <div className="max-w-7xl mx-auto px-6">

                {/* Badge */}
                <div className="flex justify-center">
                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md px-4 py-2 text-xs text-gray-300">
                        <Star width={12} height={12} />
                        FEATURES
                    </div>
                </div>

                {/* Heading */}
                <div className="text-center mt-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Everything you need
                        <br />
                        to succeed
                    </h2>

                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Built for modern recruiters and job seekers with
                        powerful tools designed to simplify hiring.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">

                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={index}
                                className="
                                    relative
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/[0.03]
                                    backdrop-blur-xl
                                    p-6
                                    transition-all
                                    duration-300
                                    hover:border-fuchsia-500/40
                                    hover:-translate-y-1
                                "
                            >
                                <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-fuchsia-600/10 blur-3xl" />

                                <Icon
                                    width={18}
                                    height={18}
                                    className="text-fuchsia-400 mb-5"
                                />

                                <h3 className="text-lg font-semibold text-white">
                                    {feature.title}
                                </h3>

                                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}