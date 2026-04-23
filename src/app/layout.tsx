import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/contexts/theme-context";
import FooterSection from "@/components/footer";
import GoogleAnalytics from "@/components/google-analytics";
import { websiteJsonLd, SITE_URL } from "@/lib/jsonld";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Divy Koushik Mishra — Founding Engineer in Gurugram",
    template: "%s | Divy Koushik Mishra",
  },
  description:
    "Founding Engineer. Full-stack product builder in Gurugram, India. Building systems and curating taste — MVPs that ship, React, Next.js, TypeScript.",
  keywords: [
    "Divy Koushik Mishra",
    "Founding Engineer",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Freelance Developer India",
    "Technical Consultant",
    "Startup Engineer",
    "MVP Development",
    "Software Engineer",
    "Web Developer",
    "Node.js",
    "Python",
    "FastAPI",
    "React Native",
    "AWS",
    "T3 Stack",
    "tRPC",
    "Prisma",
    "PostgreSQL",
  ],
  authors: [{ name: "Divy Koushik Mishra", url: SITE_URL }],
  creator: "Divy Koushik Mishra",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Divy Koushik Mishra",
    title: "Divy Koushik Mishra — Founding Engineer in Gurugram",
    description:
      "Founding Engineer. Full-stack product builder in Gurugram, India. Building systems and curating taste — MVPs that ship, React, Next.js, TypeScript.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divy Koushik Mishra — Founding Engineer in Gurugram",
    description:
      "Founding Engineer. Full-stack product builder in Gurugram. Building systems and curating taste.",
    creator: "@divy_koushik",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "ai-content-declaration":
      "This site contains human-authored content about Divy Koushik Mishra, a Founding Engineer based in Gurugram, India.",
  },
};

function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`light ${geistMono.variable}`}>
      <head>
        <JsonLd />
        <GoogleAnalytics />
      </head>
      <body
        className={`antialiased selection:bg-foreground selection:text-background`}
      >
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
