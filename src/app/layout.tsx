import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ClearFlow AI — AI Automations for Accounting Firms",
  description: "We audit, automate, and systemise accounting firms — done for you. Custom AI automations that save your practice 10–20 hours per week. Serving UK and US accountancy firms.",
  keywords: "AI automation accounting, accounting firm automation, workflow automation accountancy, Xero automation, QuickBooks automation, UK US accounting AI",
  openGraph: {
    title: "ClearFlow AI — AI Automations for Accounting Firms",
    description: "Custom AI automations built inside your accounting firm. Done for you, not DIY.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClearFlow AI — AI Automations for Accounting Firms",
    description: "Custom AI automations built inside your accounting firm. Done for you, not DIY.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.fontshare.com" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
