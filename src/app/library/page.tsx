import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/breadcrumbs";
import DiagonalLineGradientBgFull from "@/components/hero/diagonalLineGradientBgFull";
import CurrentReads from "@/components/library/currentReads";
import FragranceRotation from "@/components/library/fragranceRotation";
import ChessStatus from "@/components/library/chessStatus";

export const metadata: Metadata = {
  title: "Library",
  description:
    "What Divy Koushik Mishra is currently reading, wearing, and playing outside of code — books, fragrances, and chess.",
  alternates: {
    canonical: "/library",
  },
  openGraph: {
    type: "website",
    title: "Library | Divy Koushik Mishra",
    description:
      "A running log of what I'm reading, wearing, and playing outside of code.",
    url: "/library",
  },
  twitter: {
    card: "summary_large_image",
    title: "Library | Divy Koushik Mishra",
    description:
      "A running log of what I'm reading, wearing, and playing outside of code.",
  },
};

export default function LibraryPage() {
  return (
    <div>
      <Breadcrumbs
        items={[
          { name: "Home", url: "/" },
          { name: "Library", url: "/library" },
        ]}
      />
      <section className="w-full flex items-center flex-col">
        <div className="max-w-3xl w-full border-x border-border">
          <h1 className="border-b border-border text-3xl font-semibold px-4 text-foreground">
            Library
          </h1>
          <div className="p-4 sm:p-6 font-mono space-y-4 text-[15px] leading-relaxed text-foreground">
            <p>
              A running log of what I&apos;m reading, wearing, and playing
              outside of code. Updated when the rotation changes.
            </p>
          </div>
        </div>
      </section>

      <DiagonalLineGradientBgFull />
      <CurrentReads />
      <DiagonalLineGradientBgFull />
      <FragranceRotation />
      <DiagonalLineGradientBgFull />
      <ChessStatus />
      <DiagonalLineGradientBgFull />
    </div>
  );
}
