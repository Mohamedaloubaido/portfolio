import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./v2.css";
import "./media.css";
import "./dev.css";

export const metadata: Metadata = {
  title: "Mohammed Al-Obaido | Full-Stack Developer",
  description:
    "Portfolio of Mohammed Al-Obaido — full-stack developer building modern web applications, SaaS products and AI-powered systems with Next.js, React, TypeScript and PostgreSQL.",
  keywords: [
    "Mohammed Al-Obaido",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Supabase",
    "SaaS",
    "Web Development",
  ],
  authors: [{ name: "Mohammed Al-Obaido" }],
  openGraph: {
    title: "Mohammed Al-Obaido | Full-Stack Developer",
    description:
      "Full-stack developer building web products from interface to infrastructure.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src="https://tawadud.vercel.app/widget.js"
          data-tawadud-key="26b058a670d07a90d41d74f3e879d53dda90"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
