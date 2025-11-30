// app/layout.jsx
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sora, Inter } from "next/font/google";

/* -------------------- Fonts Setup -------------------- */
const sora = Sora({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800"],
  variable: "--font-sora"
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  variable: "--font-inter"
});

/* -------------------- Page Metadata -------------------- */
export const metadata = {
  title: "Meghrajsinh J Solanki | Developer Portfolio",
  description: "Full-Stack Developer skilled in Next.js, Python, MySQL & Automation",
  keywords: ["Meghraj", "Portfolio", "Full Stack", "Next.js", "Python"],
  openGraph: {
    title: "Meghraj — Full-Stack Developer",
    description: "Smart Projects, Clean UI, Performance",
    url: "https://meghrajpf.vercel.app",
    siteName: "Meghraj Portfolio",
    images: [{ url: "/og-image.png" }],
  }
};


/* -------------------- Layout Wrapper -------------------- */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${inter.variable} font-sans bg-main text-white`}>

        {/* 🔥 Background Glow */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#020617] via-black to-[#020617]"></div>
        <div className="fixed -top-40 left-1/2 -translate-x-1/2 -z-10 h-[500px] w-[800px] rounded-full bg-primary/30 blur-[150px] opacity-70"></div>

        {/* 🔗 Navigation */}
        <Navbar />

        {/* 📄 Page Content */}
        <main className="max-w-6xl mx-auto px-4 pt-28 pb-20">
          {children}
        </main>

        {/* 🔻 Footer */}
        <Footer />

      </body>
    </html>
  );
}
