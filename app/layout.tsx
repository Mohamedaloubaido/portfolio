import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohammed Al-Obaido | Operations, Data & Digital Projects",
  description:
    "Professional portfolio of Mohammed Al-Obaido — Data Entry, CRM, Operations, Administration and digital project work.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
