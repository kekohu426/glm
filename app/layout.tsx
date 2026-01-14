import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://glmmaker.com"),
  title: {
    default: "GLMmaker - Free GLM-Image Generator",
    template: "%s | GLMmaker",
  },
  description:
    "Generate images with the open-source GLM-Image model. Free text-to-image studio with prompt presets, multi-resolution output, and direct BigModel API access.",
  keywords: [
    "GLM-Image",
    "GLM image",
    "text to image",
    "free AI image generator",
    "BigModel",
    "open source",
    "poster generation",
    "diagram generator",
  ],
  authors: [{ name: "GLMmaker" }],
  openGraph: {
    title: "GLMmaker - Free GLM-Image Generator",
    description:
      "Generate images with the open-source GLM-Image model. Free text-to-image studio with prompt presets and multi-resolution output.",
    url: "https://glmmaker.com",
    siteName: "GLMmaker",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GLMmaker - Free GLM-Image Generator",
    description:
      "Generate images with the open-source GLM-Image model. Free text-to-image studio with prompt presets and multi-resolution output.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
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
        className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
