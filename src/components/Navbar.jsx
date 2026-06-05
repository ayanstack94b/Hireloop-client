"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { signOut, useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
    { name: "Browse Jobs", href: "/jobs" },
    { name: "Company", href: "/company" },
    { name: "Pricing", href: "/pricing" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { data: session, isPending } = useSession()
    const router = useRouter()
    const user = session?.user
    // console.log(isPending, session, user);

    const handleSignout = async () => {
        const result = await Swal.fire({
            title: "Sign Out?",
            text: "You will be logged out of your account.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, Sign Out",
            cancelButtonText: "Cancel",
            background: "#111827",
            color: "#fff",
            confirmButtonColor: "#c026d3",
            cancelButtonColor: "#374151",
        });

        if (!result.isConfirmed) return;

        try {
            await signOut();

            await Swal.fire({
                icon: "success",
                title: "Signed Out",
                text: "You have been logged out successfully.",
                background: "#111827",
                color: "#fff",
                confirmButtonColor: "#c026d3",
            });

            router.push("/");
            router.refresh();

        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Logout Failed",
                text: error?.message || "Please try again.",
                background: "#111827",
                color: "#fff",
                confirmButtonColor: "#c026d3",
            });
        }
        router.push("/auth/signin");
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full fixed top-0 left-0 z-50 px-4 md:px-8 lg:px-12 py-4"
        >
            <div className="min-w-full mx-auto">
                <div className="backdrop-blur-xl bg-black/70 border border-white/10 rounded-2xl px-5 md:px-8 py-4 flex items-center justify-between shadow-[0_0_40px_rgba(255,0,255,0.15)]">

                    <motion.div
                        className="relative overflow-hidden inline-block"
                    >
                        <Link
                            href="/"
                            className="relative z-10 text-white text-xl md:text-2xl font-bold tracking-tight"
                        >
                            Hire<span className="text-fuchsia-500">Verse</span>
                        </Link>

                        <motion.div
                            className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-white/50 to-transparent blur-sm"
                            initial={{ x: -100 }}
                            animate={{ x: 220 }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 3,
                                ease: "linear",
                            }}
                        />
                    </motion.div>

                    {/* Desktop Right Side */}
                    <div className="hidden lg:flex items-center ml-auto">
                        {/* Navigation Links */}
                        <div className="flex items-center gap-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-gray-300 hover:text-fuchsia-400 transition duration-300"
                                >
                                    <motion.span
                                        className="inline-block"
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {link.name}
                                    </motion.span>
                                </Link>
                            ))}
                        </div>

                        {/* Vertical Divider */}
                        <div className="mx-8 h-6 w-px bg-white/15" />

                        {/* Auth Buttons */}
                        <div className="flex items-center gap-4">
                            {user ? (
                                <>
                                    <span className="text-white">
                                        Hi, {user.name}
                                    </span>

                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Button
                                            onClick={handleSignout}
                                            variant="solid"
                                            className="bg-red-600/90 hover:bg-red-600 text-white rounded-xl"
                                        >
                                            Sign Out
                                        </Button>
                                    </motion.div>
                                </>
                            ) : (
                                <>
                                    <Link
                                        href="/auth/signin"
                                        className="text-fuchsia-400 hover:text-fuchsia-300 transition"
                                    >
                                        <motion.span
                                            className="inline-block"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Sign In
                                        </motion.span>
                                    </Link>

                                    <Link
                                        href="/auth/signup"
                                        className="text-fuchsia-400 hover:text-fuchsia-300 transition"
                                    >
                                        <motion.span
                                            className="inline-block"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Sign Up
                                        </motion.span>
                                    </Link>

                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                    >
                                        <Link
                                            href="/auth/signup"
                                            className="bg-white text-black px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-fuchsia-500 hover:text-white transition-all duration-300 block"
                                        >
                                            Get Started
                                        </Link>
                                    </motion.div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden w-10 h-10 rounded-xl bg-fuchsia-600 text-white flex items-center justify-center hover:bg-fuchsia-500 transition"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="lg:hidden overflow-hidden mt-3"
                        >
                            <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-5">

                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-gray-300 hover:text-fuchsia-400 transition"
                                    >
                                        {link.name}
                                    </Link>
                                ))}

                                <div className="flex flex-col gap-3 pt-4 border-t border-white/10">

                                    {user ? (
                                        <>
                                            <div className="text-white">
                                                Hi, {user.name}
                                            </div>

                                            <Button
                                                onClick={handleSignout}
                                                className="bg-red-600 hover:bg-red-700 text-white"
                                            >
                                                Sign Out
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                            <Link
                                                href="/auth/signin"
                                                onClick={() => setIsOpen(false)}
                                                className="text-fuchsia-400"
                                            >
                                                Sign In
                                            </Link>

                                            <Link
                                                href="/auth/signup"
                                                onClick={() => setIsOpen(false)}
                                                className="bg-white text-center text-black px-5 py-3 rounded-xl font-semibold hover:bg-fuchsia-500 hover:text-white transition"
                                            >
                                                Get Started
                                            </Link>
                                        </>
                                    )}

                                </div>

                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}