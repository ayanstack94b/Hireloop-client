import Link from "next/link";
import {
    LogoFacebook,
    LogoLinkedin,
    LogoGithub,
} from "@gravity-ui/icons";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16">

                {/* Main Footer */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">

                    {/* Left Section */}
                    <div className="lg:col-span-1">
                        <Link
                            href="/"
                            className="text-white text-2xl font-bold tracking-tight"
                        >
                            Hire<span className="text-fuchsia-500">Verse</span>
                        </Link>

                        <p className="mt-6 text-gray-400 leading-8 max-w-xs">
                            The AI-native hiring platform. Built for
                            people who take their careers seriously.
                        </p>

                        <div className="flex items-center gap-3 mt-12">
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-fuchsia-600 transition flex items-center justify-center text-white"
                            >
                                <LogoFacebook className="w-5 h-5" />
                            </Link>

                            <Link
                                href="#"
                                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-fuchsia-500 transition flex items-center justify-center text-white"
                            >
                                <LogoGithub />
                            </Link>

                            <Link
                                href="#"
                                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-fuchsia-600 transition flex items-center justify-center text-white"
                            >
                                <LogoLinkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="text-fuchsia-500 font-medium mb-6">
                            Product
                        </h3>

                        <div className="flex flex-col gap-4 text-gray-400">
                            <Link href="/jobs" className="hover:text-white transition">
                                Browse Jobs
                            </Link>

                            <Link href="/ai-matching" className="hover:text-white transition">
                                AI Matching
                            </Link>

                            <Link href="/companies" className="hover:text-white transition">
                                Companies
                            </Link>

                            <Link href="/salary" className="hover:text-white transition">
                                Salary Insights
                            </Link>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-fuchsia-500 font-medium mb-6">
                            Navigation
                        </h3>

                        <div className="flex flex-col gap-4 text-gray-400">
                            <Link href="/help-center" className="hover:text-white transition">
                                Help Center
                            </Link>

                            <Link href="/career-library" className="hover:text-white transition">
                                Career Library
                            </Link>

                            <Link href="/contact" className="hover:text-white transition">
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-fuchsia-500 font-medium mb-6">
                            Resources
                        </h3>

                        <div className="flex flex-col gap-4 text-gray-400">
                            <Link href="/brand-guidelines" className="hover:text-white transition">
                                Brand Guideline
                            </Link>

                            <Link href="/newsroom" className="hover:text-white transition">
                                Newsroom
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-white/10 mt-16 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">

                        <p>
                            Copyright {new Date().getFullYear()} — HireVerse
                        </p>

                        <div className="flex flex-wrap items-center gap-6">
                            <Link
                                href="/terms"
                                className="hover:text-white transition"
                            >
                                Terms & Policy
                            </Link>

                            <Link
                                href="/privacy"
                                className="hover:text-white transition"
                            >
                                Privacy Guideline
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}