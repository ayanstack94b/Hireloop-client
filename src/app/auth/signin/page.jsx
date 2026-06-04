"use client";

import { signIn } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export default function SignInPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setLoading(true);

        try {
            const { error } = await signIn.email({
                email: formData.email,
                password: formData.password,
            });

            if (error) {
                await Swal.fire({
                    icon: "error",
                    title: "Login Failed",
                    text: error.message,
                    background: "#111827",
                    color: "#fff",
                    confirmButtonColor: "#c026d3",
                });

                return;
            }

            await Swal.fire({
                icon: "success",
                title: "Welcome Back",
                text: "Login successful.",
                background: "#111827",
                color: "#fff",
                confirmButtonColor: "#c026d3",
            });

            router.push("/");
            router.refresh();

        } catch (err) {
            await Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: err.message || "Invalid credentials",
                background: "#111827",
                color: "#fff",
                confirmButtonColor: "#c026d3",
            });
        }
    };
    return (
        <div className="min-h-screen bg-black">

            <div className="flex min-h-screen">

                {/* Left Panel */}
                <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">

                    <Image
                        src="/cta-bg.png"
                        width={500}
                        height={500}
                        alt="HireVerse"
                        className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/60" />

                    <div className="relative z-10 flex flex-col justify-center px-16">

                        <Link
                            href="/"
                            className="text-4xl font-bold text-white"
                        >
                            Hire<span className="text-fuchsia-500">Verse</span>
                        </Link>

                        <h1 className="mt-10 text-6xl font-bold text-white leading-tight">
                            Welcome
                            <br />
                            back to your
                            <br />
                            career journey.
                        </h1>

                        <p className="mt-6 text-lg text-gray-300 max-w-xl">
                            Sign in to access opportunities, track applications,
                            and connect with top companies.
                        </p>

                        <div className="grid grid-cols-3 gap-8 mt-12">

                            <div>
                                <h3 className="text-3xl font-bold text-white">
                                    120K+
                                </h3>
                                <p className="text-gray-400">
                                    Active Jobs
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-white">
                                    8.5K+
                                </h3>
                                <p className="text-gray-400">
                                    Companies
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-white">
                                    1.2M+
                                </h3>
                                <p className="text-gray-400">
                                    Candidates
                                </p>
                            </div>

                        </div>

                    </div>
                </div>

                {/* Right Panel */}
                <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-16">

                    <div className="w-full max-w-md">

                        <div className="lg:hidden text-center mb-8">
                            <Link
                                href="/"
                                className="text-3xl font-bold text-white"
                            >
                                Hire<span className="text-fuchsia-500">Verse</span>
                            </Link>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl p-8">

                            <h2 className="text-3xl font-bold text-white">
                                Sign In
                            </h2>

                            <p className="mt-2 text-gray-400">
                                Welcome back. Continue your journey.
                            </p>

                            <form
                                onSubmit={handleSubmit}
                                className="space-y-4 mt-8"
                            >
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white outline-none"
                                />

                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 pr-20 text-white outline-none"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-fuchsia-400"
                                    >
                                        {showPassword ? "Hide" : "Show"}
                                    </button>
                                </div>

                                <div className="flex justify-end">
                                    <Link
                                        href="/auth/forgot-password"
                                        className="text-sm text-fuchsia-400 hover:text-fuchsia-300"
                                    >
                                        Forgot Password?
                                    </Link>
                                </div>

                                {error && (
                                    <div className="text-sm text-red-400">
                                        {error}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 py-3 text-white font-medium transition disabled:opacity-50"
                                >
                                    {loading ? "Signing In..." : "Sign In"}
                                </button>

                            </form>

                            <div className="my-6 flex items-center">
                                <div className="flex-1 h-px bg-white/10" />
                                <span className="px-4 text-sm text-gray-500">
                                    OR
                                </span>
                                <div className="flex-1 h-px bg-white/10" />
                            </div>

                            <button
                                className="w-full rounded-xl border border-white/10 bg-white/3 py-3 text-white hover:bg-white/5 transition"
                            >
                                Continue with Google
                            </button>

                            <p className="text-center text-gray-400 mt-6">
                                Don't have an account?{" "}
                                <Link
                                    href="/auth/signup"
                                    className="text-fuchsia-400 hover:text-fuchsia-300"
                                >
                                    Create Account
                                </Link>
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}