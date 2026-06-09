"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { signOut, useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";



const navLinks = [
    { name: "Browse Jobs", href: "/jobs" },
    { name: "Company", href: "/company" },
    { name: "Pricing", href: "/pricing" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const [hidden, setHidden] = useState(false);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();

        if (!previous) return;

        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });
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
            initial={{ y: -60 }}
            animate={{
                y: hidden ? -140 : 0,
            }}
            transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="sticky top-0 z-50 px-4 md:px-8 py-4"
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
                                    onClick={() => {
                                        console.log("LINK CLICKED:", link.name);
                                        setIsOpen(false);
                                    }}
                                    className="px-4 py-3 rounded-2xl text-gray-300"
                                >
                                    {link.name}
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
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.25 }}
                            className="fixed top-24 left-4 right-4 z-[999] lg:hidden"
                        >
                            <div className="rounded-3xl border border-white/10 bg-zinc-950/98 backdrop-blur-xl p-6 shadow-[0_30px_80px_rgba(0,0,0,0.9)]">

                                {/* Navigation */}
                                <div className="flex flex-col gap-2">

                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="px-4 py-3 rounded-2xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}

                                </div>

                                <div className="h-px bg-white/10 my-5" />

                                {/* User Section */}
                                {user ? (
                                    <div className="flex flex-col gap-4">

                                        <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                                            <p className="text-xs text-gray-500">
                                                Logged in as
                                            </p>

                                            <p className="text-white font-medium mt-1 truncate">
                                                {user.name}
                                            </p>
                                        </div>

                                        <button
                                            onClick={handleSignout}
                                            className="w-full py-3 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-medium transition-all duration-300"
                                        >
                                            Sign Out
                                        </button>

                                    </div>
                                ) : (
                                    <div className="flex flex-col gap-3">

                                        <Link
                                            href="/auth/signin"
                                            onClick={() => setIsOpen(false)}
                                            className="w-full text-center py-3 rounded-2xl bg-white/5 hover:bg-white/10 text-white transition-all duration-300"
                                        >
                                            Sign In
                                        </Link>

                                        <Link
                                            href="/auth/signup"
                                            onClick={() => setIsOpen(false)}
                                            className="w-full text-center py-3 rounded-2xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-medium transition-all duration-300"
                                        >
                                            Get Started
                                        </Link>

                                    </div>
                                )}

                            </div>
                         </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}