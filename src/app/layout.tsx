import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/contexts/theme-context";
import FooterSection from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://divykoushik.com'),
  title: {
    default: "Divy Koushik Mishra - Full-Stack Developer & Product Builder",
    template: "%s | Divy Koushik Mishra"
  },
  description: "Full-stack developer and product builder with experience in scalable applications, startup building, and technical leadership. Building the future of web applications.",
  keywords: [
    "full-stack developer",
    "product builder",
    "startup",
    "Next.js",
    "React",
    "TypeScript",
    "scalable applications",
    "technical leadership",
    "software architecture",
    "product development"
  ],
  authors: [{ name: "Divy Koushik Mishra" }],
  creator: "Divy Koushik Mishra",
  publisher: "Divy Koushik Mishra",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://divykoushik.com",
    siteName: "Divy Koushik Mishra",
    title: "Divy Koushik Mishra - Full-Stack Developer & Product Builder",
    description: "Full-stack developer and product builder with experience in scalable applications, startup building, and technical leadership.",
    images: [
      {
        url: "/divy-koushik.webp",
        width: 1200,
        height: 630,
        alt: "Divy Koushik Mishra - Full-Stack Developer & Product Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Divy Koushik Mishra - Full-Stack Developer & Product Builder",
    description: "Full-stack developer and product builder with experience in scalable applications, startup building, and technical leadership.",
    images: ["/divy-koushik.webp"],
    creator: "@divy-koushik",
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
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
  alternates: {
    canonical: "https://divykoushik.com",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/dk-pixelated.svg" />
        <link rel="apple-touch-icon" href="/dk-pixelated.svg" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Structured Data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Divy Koushik Mishra",
              "jobTitle": "Full-Stack Developer & Product Builder",
              "description": "Full-stack developer and product builder with experience in scalable applications, startup building, and technical leadership.",
              "url": "https://divykoushik.com",
              "image": "https://divykoushik.com/divy-koushik.webp",
              "sameAs": [
                "https://github.com/divykoushik",
                "https://linkedin.com/in/divykoushik",
                "https://x.com/divykoushik"
              ],
              "knowsAbout": [
                "Full-Stack Development",
                "Product Development",
                "Startup Building",
                "Technical Leadership",
                "Software Architecture",
                "React",
                "Next.js",
                "TypeScript",
                "Scalable Applications"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance/Consulting"
              }
            })
          }}
        />
        
        {/* Structured Data for Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Divy Koushik Mishra Portfolio",
              "url": "https://divykoushik.com",
              "description": "Portfolio and blog of Divy Koushik Mishra, a full-stack developer and product builder.",
              "author": {
                "@type": "Person",
                "name": "Divy Koushik Mishra"
              },
              "publisher": {
                "@type": "Person",
                "name": "Divy Koushik Mishra"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://divykoushik.com/blogs?search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body
        className={` antialiased selection:bg-foreground selection:text-background`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
