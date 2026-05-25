import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: "%s | Meghraj Solanki",
    default: "Meghraj Solanki | Systems-Focused Full Stack Developer",
  },
  description: "Systems-focused full stack developer portfolio. Building reliable software systems for real-world operations, civic infrastructure, and scalable digital products.",
  authors: [{ name: "Meghraj Solanki" }],
  creator: "Meghraj Solanki",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://meghraj.dev", // Placeholder domain
    title: "Meghraj Solanki | Systems Engineer",
    description: "Building reliable software systems for real-world operations.",
    siteName: "Meghraj Solanki Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meghraj Solanki | Systems Engineer",
    description: "Building reliable software systems for real-world operations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-primary selection:bg-accent/30 selection:text-primary relative animate-fade-in-page">
        {/* Soft noise texture overlay */}
        <div 
          className="fixed inset-0 z-50 pointer-events-none opacity-[0.015] mix-blend-screen"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        ></div>
        
        {children}
      </body>
    </html>
  );
}
