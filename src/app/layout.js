
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Geist, Geist_Mono, Outfit } from "next/font/google";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),

  title: {
    default: "HireLoop | AI-Powered Hiring Platform",
    template: "%s | HireLoop",
  },

  description:
    "Connect recruiters with top talent through AI-powered job matching, applicant tracking, and streamlined hiring workflows.",

  keywords: [
    "jobs",
    "hiring",
    "recruitment",
    "job board",
    "career platform",
    "ATS",
    "talent acquisition",
    "recruiters",
    "job seekers",
    "hireloop",
  ],

  authors: [
    {
      name: "HireLoop Team",
    },
  ],

  creator: "HireLoop",

  openGraph: {
    title: "HireLoop | AI-Powered Hiring Platform",
    description:
      "Find jobs, hire talent, and manage recruitment workflows in one platform.",
    url: "https://hireloop.com",
    siteName: "HireLoop",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "HireLoop | AI-Powered Hiring Platform",
    description:
      "Connect recruiters and job seekers through intelligent hiring solutions.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${outfit.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
