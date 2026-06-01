"use client";

import {
    Briefcase,
    Clock,
    Pin,
    Star,
} from "@gravity-ui/icons";

const jobs = [
    {
        title: "Senior Frontend Developer",
        description:
            "Build modern, high-performance interfaces using React, Next.js and TypeScript for millions of users.",
        salary: "$120K - $160K",
        type: "Remote",
        location: "San Francisco",
        featured: true,
    },
    {
        title: "Backend Engineer",
        description:
            "Design scalable APIs, optimize databases and power critical business infrastructure.",
        salary: "$130K - $180K",
        type: "Hybrid",
        location: "New York",
        featured: true,
    },
    {
        title: "Full Stack Developer",
        description:
            "Work across frontend and backend systems to deliver complete product experiences.",
        salary: "$110K - $170K",
        type: "Remote",
        location: "London",
        featured: true,
    },
    {
        title: "DevOps Engineer",
        description:
            "Build CI/CD pipelines, manage cloud infrastructure and improve deployment reliability.",
        salary: "$140K - $190K",
        type: "Full-time",
        location: "Toronto",
        featured: true,
    },
    {
        title: "UI/UX Designer",
        description:
            "Create intuitive user experiences, design systems and beautiful digital products.",
        salary: "$90K - $130K",
        type: "Hybrid",
        location: "Berlin",
        featured: true,
    },
    {
        title: "AI Engineer",
        description:
            "Develop AI-powered applications, machine learning systems and intelligent workflows.",
        salary: "$150K - $220K",
        type: "Remote",
        location: "Singapore",
        featured: true,
    },
];

export default function FeaturedJobsSection() {
    return (
        <section className="bg-black py-28">

            <div className="max-w-7xl mx-auto px-6">

                {/* Badge */}
                <div className="flex justify-center">
                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 text-xs text-gray-300">
                        <Star width={14} height={14} />
                        SMART JOB DISCOVERY
                    </div>
                </div>

                {/* Heading */}
                <div className="text-center mt-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        The roles you'd never
                        <br />
                        find by searching
                    </h2>
                </div>

                {/* Jobs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">

                    {jobs.map((job, index) => (
                        <div
                            key={index}
                            className="
                                rounded-3xl
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
                            <h3 className="text-lg font-semibold text-white">
                                {job.title}
                            </h3>

                            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                                {job.description}
                            </p>

                            {/* Meta */}
                            <div className="flex flex-wrap gap-2 mt-5">

                                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-gray-300">
                                    <Pin width={12} height={12} className="inline mr-1" />
                                    {job.location}
                                </span>

                                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-gray-300">
                                    <Clock width={12} height={12} className="inline mr-1" />
                                    {job.type}
                                </span>

                            </div>

                            {/* Salary */}
                            <div className="mt-5 flex items-center gap-2 text-sm text-fuchsia-400">
                                <Briefcase width={14} height={14} />
                                {job.salary}
                            </div>

                            {/* Footer */}
                            <button className="mt-6 text-sm text-gray-300 hover:text-white transition">
                                Apply Now →
                            </button>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="flex justify-center mt-12">
                    <button
                        className="
                            px-6
                            py-3
                            rounded-xl
                            bg-white
                            text-black
                            font-medium
                            hover:bg-fuchsia-500
                            hover:text-white
                            transition
                        "
                    >
                        View All Job Openings
                    </button>
                </div>

            </div>

        </section>
    );
}