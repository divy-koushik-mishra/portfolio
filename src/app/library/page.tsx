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
          <div className="border-b border-border px-4 py-3 flex items-baseline justify-between">
            <h1 className="text-3xl font-semibold text-foreground">Library</h1>
            <span className="font-mono text-xs text-muted-foreground">
              books · fragrances · chess
            </span>
          </div>
          <div className="p-4 sm:p-6 font-mono space-y-3 text-[15px] leading-relaxed text-foreground">
            <p>
              A curated, ever-evolving log of what I&apos;m reading, wearing,
              and playing outside of code.
            </p>
            <p className="text-sm text-muted-foreground">
              Updated when the rotation changes. Opinions are my own and
              enthusiastic.
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
