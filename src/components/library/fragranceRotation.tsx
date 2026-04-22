import React from "react";
import { Droplets, Sparkles } from "lucide-react";

type FragranceStatus =
  | "HIGH-STAKES"
  | "DAILY / LOUD"
  | "THE CLASSIC"
  | "DEEP WORK"
  | "HIGH MOMENTUM"
  | "OFF-HOURS";

type Fragrance = {
  house: string;
  name: string;
  status: FragranceStatus;
  note: string;
};

const fragrances: Fragrance[] = [
  {
    house: "Chanel",
    name: "Bleu de Chanel",
    status: "HIGH-STAKES",
    note: "The production-ready monolith. Heavy, reliable, and commands the room. Wear this when the code works and the meeting matters.",
  },
  {
    house: "Versace",
    name: "Dylan Blue",
    status: "DAILY / LOUD",
    note: "Fresh, loud, and universally liked. The highly-available, reliable API of the fragrance rotation.",
  },
  {
    house: "Davidoff",
    name: "Cool Water",
    status: "THE CLASSIC",
    note: "The legacy codebase of perfumes. It's old school, everyone knows it, but it still executes perfectly on a hot summer day.",
  },
  {
    house: "Skinn by Titan",
    name: "Raw",
    status: "DEEP WORK",
    note: "Crisp, clean, and unproblematic. A lightweight daily driver perfect for long, focused coding sessions.",
  },
  {
    house: "Skinn by Titan",
    name: "Verge",
    status: "HIGH MOMENTUM",
    note: "Sharp and energetic. The scent for days when you need to ship fast and break things.",
  },
  {
    house: "The Soul Store",
    name: "Akatsuki",
    status: "OFF-HOURS",
    note: "An experimental, bold choice. Darker undertones reserved for when the laptop finally closes.",
  },
];

const statusColor: Record<FragranceStatus, string> = {
  "HIGH-STAKES": "text-rose-500",
  "DAILY / LOUD": "text-blue-500",
  "THE CLASSIC": "text-amber-500",
  "DEEP WORK": "text-emerald-500",
  "HIGH MOMENTUM": "text-orange-500",
  "OFF-HOURS": "text-violet-500",
};

const signatureBlend = {
  tag: "SIGNATURE BLEND · WINTER",
  components: [
    { house: "The Soul Store", name: "Whiskey Smoke" },
    { house: "The Soul Store", name: "Akatsuki" },
  ],
  note: "Layering these two is the ultimate Gurugram winter hack. Deep, smoky, and delivers pure main-character energy.",
};

const FragranceRotation = () => {
  return (
    <section className="w-full flex items-center flex-col">
      <div className="max-w-3xl w-full border-x border-border">
        <div className="border-b border-border px-4 py-3 flex items-baseline justify-between">
          <h2 className="text-3xl font-semibold text-foreground flex items-center gap-3">
            <Droplets size={22} className="text-muted-foreground" />
            Fragrances
          </h2>
          <span className="font-mono text-xs text-muted-foreground">
            {(fragrances.length + 1).toString().padStart(2, "0")} in rotation
          </span>
        </div>

        {/* Signature Blend — my own discovery, gets the spotlight */}
        <div className="px-4 py-5 sm:px-6 border-b border-border bg-[repeating-linear-gradient(315deg,var(--color-muted)_0,var(--color-muted)_1px,transparent_0,transparent_50%)] bg-[length:10px_10px]">
          <div className="rounded-xl border-2 border-dashed border-foreground/30 bg-background/80 backdrop-blur p-5 sm:p-6 space-y-4 relative overflow-hidden">
            <span className="absolute top-0 right-0 flex items-center gap-1.5 font-mono text-[10px] tracking-[0.2em] bg-foreground text-background px-2.5 py-1 rounded-bl-lg">
              <Sparkles size={11} />
              {signatureBlend.tag}
            </span>

            <div className="flex items-center gap-3 sm:gap-5 flex-wrap pt-3 sm:pt-2">
              {signatureBlend.components.map((c, i) => (
                <React.Fragment key={c.name}>
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                      {c.house}
                    </div>
                    <div className="text-lg sm:text-xl font-semibold text-foreground leading-tight">
                      {c.name}
                    </div>
                  </div>
                  {i === 0 && (
                    <div
                      aria-hidden="true"
                      className="text-2xl sm:text-3xl font-semibold text-foreground/40 font-mono select-none"
                    >
                      +
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <p className="text-sm sm:text-[15px] text-foreground/85 leading-relaxed font-mono">
              {signatureBlend.note}
            </p>
          </div>
        </div>

        {/* Regular rotation */}
        <ul className="divide-y divide-border">
          {fragrances.map((fragrance) => (
            <li
              key={`${fragrance.house}-${fragrance.name}`}
              className="px-4 py-4 sm:px-6 hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-center gap-2 font-mono text-[11px] tracking-wide mb-1.5">
                <span
                  className={`inline-block size-1.5 rounded-full ${statusColor[fragrance.status].replace("text-", "bg-")}`}
                  aria-hidden="true"
                />
                <span className={statusColor[fragrance.status]}>
                  {fragrance.status}
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-3 flex-wrap">
                <h3 className="font-semibold text-foreground text-[15px] leading-snug">
                  {fragrance.name}
                </h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {fragrance.house}
                </span>
              </div>
              <p className="mt-1.5 text-sm text-foreground/80 leading-relaxed font-mono">
                {fragrance.note}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FragranceRotation;
