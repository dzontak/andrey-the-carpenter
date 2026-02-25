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
  title: "Andrey the Carpenter | Custom Woodwork & Home Repairs in Delray Beach",
  description:
    "Skilled carpenter and handyman in Delray Beach, FL. Custom shelving, cabinetry, trim work, and reliable home repairs for 55+ communities.",
  keywords: [
    "carpenter",
    "handyman",
    "Delray Beach",
    "home repairs",
    "woodwork",
    "custom shelving",
    "Florida handyman",
  ],
  openGraph: {
    title: "Andrey the Carpenter | Custom Woodwork & Home Repairs in Delray Beach",
    description:
      "Skilled carpenter and handyman in Delray Beach, FL. Custom shelving, cabinetry, trim work, and reliable home repairs for 55+ communities.",
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