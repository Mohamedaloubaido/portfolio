import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./v2.css";
import "./media.css";

export const metadata: Metadata = {
  title: "Mohammed Al-Obaido | Data, CRM & Operations",
  description:
    "Portfolio of Mohammed Al-Obaido — data entry, CRM operations, administration, reporting, workflow design and selected digital product work.",
  keywords: [
    "Mohammed Al-Obaido",
    "Data Entry",
    "CRM Operations",
    "Operations",
    "Administration",
    "Excel",
    "Google Sheets",
    "Product QA",
  ],
  authors: [{ name: "Mohammed Al-Obaido" }],
  openGraph: {
    title: "Mohammed Al-Obaido | Data, CRM & Operations",
    description:
      "Data and operations professional focused on accuracy, structured workflows and practical systems.",
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
