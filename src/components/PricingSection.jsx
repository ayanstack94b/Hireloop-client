"use client";

import Image from "next/image";
import { Star } from "@gravity-ui/icons";

const plans = [
    {
        name: "Starter",
        price: "$0",
        description: "Start building your hiring profile.",
        features: [
            "Basic Job Matching",
            "Saved Jobs",
            "Company Insights",
            "Application Tracking",
        ],
        button: "Create Free Plan",
        popular: false,
    },
    {
        name: "Growth",
        price: "$17",
        description: "Best plan for active job seekers.",
        features: [
            "Priority Applications",
            "AI Resume Review",
            "Advanced Filters",
            "Unlimited Saved Jobs",
        ],
        button: "Choose Growth",
        popular: true,
    },
    {
        name: "Premium",
        price: "$99",
        description: "Everything needed for recruiters.",
        features: [
            "Unlimited Job Posts",
            "Advanced Analytics",
            "Featured Listings",
            "Recruiter Dashboard",
        ],
        button: "Create Pro Plan",
        popular: false,
    },
];

export default function PricingSection() {
    return (
        <section className="bg-black pt-28">

            <div className="max-w-7xl mx-auto px-6">

                {/* Badge */}
                <div className="flex justify-center">
                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-gray-300">
                        <Star width={12} height={12} />
                        PRICING
                    </div>
                </div>

                {/* Heading */}
                <div className="text-center mt-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Pay for the leverage,
                        <br />
                        not the listings
                    </h2>
                </div>

                {/* Billing Toggle */}
                <div className="flex justify-center mt-8">
                    <div className="rounded-full border border-white/10 bg-white/[0.03] p-1 flex">
                        <button className="px-4 py-2 text-sm rounded-full bg-white text-black font-medium">
                            Monthly
                        </button>

                        <button className="px-4 py-2 text-sm text-gray-400">
                            Yearly
                        </button>

                        <span className="ml-2 bg-fuchsia-600 text-white text-xs px-2 py-1 rounded-full self-center">
                            40%
                        </span>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">

                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`
                                relative
                                rounded-3xl
                                border
                                p-8
                                backdrop-blur-xl
                                transition-all
                                duration-300
                                ${plan.popular
                                    ? "border-fuchsia-500 bg-fuchsia-500/10"
                                    : "border-white/10 bg-white/[0.03]"
                                }
                            `}
                        >
                            {plan.popular && (
                                <div className="absolute top-4 right-4 text-xs bg-fuchsia-600 text-white px-2 py-1 rounded-full">
                                    Popular
                                </div>
                            )}

                            <h3 className="text-xl font-semibold text-white">
                                {plan.name}
                            </h3>

                            <div className="mt-4 flex items-end gap-1">
                                <span className="text-5xl font-bold text-white">
                                    {plan.price}
                                </span>

                                <span className="text-gray-400 mb-2">
                                    /month
                                </span>
                            </div>

                            <p className="mt-4 text-gray-400">
                                {plan.description}
                            </p>

                            <div className="mt-8 space-y-4">
                                {plan.features.map((feature) => (
                                    <div
                                        key={feature}
                                        className="flex items-center gap-3 text-sm text-gray-300"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-fuchsia-500" />
                                        {feature}
                                    </div>
                                ))}
                            </div>

                            <button
                                className={`
                                    w-full
                                    mt-8
                                    py-3
                                    rounded-xl
                                    font-medium
                                    transition
                                    ${plan.popular
                                        ? "bg-white text-black hover:bg-gray-200"
                                        : "bg-white/5 text-white hover:bg-white/10"
                                    }
                                `}
                            >
                                {plan.button}
                            </button>
                        </div>
                    ))}
                </div>

                {/* CTA Banner */}
                <div className="relative mt-32 overflow-hidden rounded-[40px]">

                    <Image
                        src="/cta-bg.png"
                        alt="CTA Background"
                        width={1600}
                        height={600}
                        className="w-full"
                    />

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

                        <h2 className="text-4xl md:text-6xl font-bold text-white">
                            Your next role is
                            <br />
                            already looking for you
                        </h2>

                        <p className="mt-4 text-gray-300 max-w-xl">
                            Build a profile that attracts recruiters and
                            discover opportunities before everyone else.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-8">

                            <button className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition">
                                Create an Account
                            </button>

                            <button className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition">
                                View Pricing
                            </button>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}