import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sai Krishna Keerti — Senior Frontend Engineer",
  description: "7 years building production-grade React applications. Senior Frontend Engineer specialising in React, Next.js, TypeScript and CSS Animation.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Sai Krishna Keerti — Senior Frontend Engineer",
    description: "React · Next.js · TypeScript · CSS Animation",
    url: "https://saikrishnakeerti.dev",
    siteName: "Sai Krishna Keerti",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
