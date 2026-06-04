
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { Description, Label, Radio, RadioGroup } from "@heroui/react";


export default function SignupPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [role, setRole] = useState("seeker")
    const router = useRouter();


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        image: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.password) {
            Swal.fire({
                icon: "error",
                title: "Missing Fields",
                text: "All required fields must be filled.",
                background: "#111827",
                color: "#fff",
                confirmButtonColor: "#c026d3",
            });
            return;
        }

        if (formData.password.length < 8) {
            Swal.fire({
                icon: "error",
                title: "Weak Password",
                text: "Password must be at least 8 characters long.",
                background: "#111827",
                color: "#fff",
                confirmButtonColor: "#c026d3",
            });
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            Swal.fire({
                icon: "error",
                title: "Password Mismatch",
                text: "Passwords do not match.",
                background: "#111827",
                color: "#fff",
                confirmButtonColor: "#c026d3",
            });
            return;
        }

        try {
            const { error } = await authClient.signUp.email({
                name: formData.name,
                email: formData.email,
                password: formData.password,
                role,
                image: formData.image,
            });

            if (error) {
                await Swal.fire({
                    icon: "error",
                    title: "Registration Failed",
                    text: error.message,
                    background: "#111827",
                    color: "#fff",
                    confirmButtonColor: "#c026d3",
                });

                return;
            }

            await Swal.fire({
                icon: "success",
                title: "Account Created",
                text: "Your account has been created successfully.",
                background: "#111827",
                color: "#fff",
                confirmButtonColor: "#c026d3",
            });

            router.push("/auth/signin");

        } catch (err) {
            await Swal.fire({
                icon: "error",
                title: "Something Went Wrong",
                text: err.message || "Please try again later.",
                background: "#111827",
                color: "#fff",
                confirmButtonColor: "#c026d3",
            });
        }
    };


    return (
        <div className="min-h-screen bg-black p-20">

            <div className="flex min-h-screen">

                {/* Left Side */}
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
                            Find the role
                            <br />
                            that's looking
                            <br />
                            for you.
                        </h1>

                        <p className="mt-6 text-lg text-gray-300 max-w-xl">
                            Join thousands of professionals and recruiters
                            building meaningful connections through HireVerse.
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

                {/* Right Side */}
                <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-16">

                    <div className="w-full max-w-md">

                        {/* Mobile Logo */}
                        <div className="lg:hidden text-center mb-8">
                            <Link
                                href="/"
                                className="text-3xl font-bold text-white"
                            >
                                Hire<span className="text-fuchsia-500">Verse</span>
                            </Link>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8">

                            <h2 className="text-3xl font-bold text-white">
                                Create Account
                            </h2>

                            <p className="mt-2 text-gray-400">
                                Start your hiring journey today.
                            </p>

                            <form
                                onSubmit={handleSubmit}
                                className="space-y-4 mt-8"
                            >
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white outline-none"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white outline-none"
                                />

                                <input
                                    type="url"
                                    name="image"
                                    placeholder="Profile Image URL"
                                    value={formData.image}
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
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-fuchsia-400"
                                    >
                                        {showPassword ? "Hide" : "Show"}
                                    </button>
                                </div>

                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 pr-20 text-white outline-none"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowConfirmPassword(!showConfirmPassword)
                                        }
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-fuchsia-400"
                                    >
                                        {showConfirmPassword ? "Hide" : "Show"}
                                    </button>
                                </div>

                                {/* Role selection tab */}

                                <div className="flex flex-col gap-4">
                                    <Label>Subscription plan</Label>
                                    <RadioGroup defaultValue="seeker" onChange={value => setRole(value)} name="plan-orientation" orientation="horizontal">

                                        <Radio selected value="seeker">
                                            <Radio.Control>
                                                <Radio.Indicator />
                                            </Radio.Control>
                                            <Radio.Content>
                                                <Label>Job seeker</Label>
                                            </Radio.Content>
                                        </Radio>
                                        <Radio value="recruiter">
                                            <Radio.Control>
                                                <Radio.Indicator />
                                            </Radio.Control>
                                            <Radio.Content>
                                                <Label>Recruiter</Label>
                                            </Radio.Content>
                                        </Radio>

                                    </RadioGroup>
                                </div>

                                {error && (
                                    <div className="text-sm text-red-400">
                                        {error}
                                    </div>
                                )}

                                {success && (
                                    <div className="text-sm text-green-400">
                                        {success}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="w-full rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 py-3 text-white font-medium transition"
                                >
                                    Create Account
                                </button>
                            </form>

                            <p className="text-center text-gray-400 mt-6">
                                Already have an account?{" "}
                                <Link
                                    href="/auth/signin"
                                    className="text-fuchsia-400 hover:text-fuchsia-300"
                                >
                                    Sign In
                                </Link>
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}