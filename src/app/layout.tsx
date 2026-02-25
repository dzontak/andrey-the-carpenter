import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Andrey the Carpenter | Custom Woodwork & Home Repairs in Connecticut",
  description:
    "Skilled carpenter and handyman in Fairfield County, CT. Custom shelving, cabinetry, trim work, and reliable home repairs for colonial, Cape Cod, and historic homes.",
  keywords: [
    "carpenter",
    "handyman",
    "Connecticut",
    "Fairfield County",
    "home repairs",
    "woodwork",
    "custom shelving",
    "CT carpenter",
    "historic home repair",
  ],
  openGraph: {
    title: "Andrey the Carpenter | Custom Woodwork & Home Repairs in Connecticut",
    description:
      "Skilled carpenter and handyman in Fairfield County, CT. Custom shelving, cabinetry, trim work, and reliable home repairs for colonial, Cape Cod, and historic homes.",
    url: "https://andrey-the-carpenter.pages.dev",
    siteName: "Andrey the Carpenter",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}