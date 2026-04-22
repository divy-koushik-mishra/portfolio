import React from "react";
import { Droplets } from "lucide-react";

type Fragrance = {
  house: string;
  name: string;
  mood: string;
  note: string;
};

// TODO: replace with real entries
const fragrances: Fragrance[] = [
  {
    house: "Dior",
    name: "Sauvage EDP",
    mood: "Evening · Winter",
    note: "Safe, loud, still gets compliments. The everyone-knows-this-one pick.",
  },
  {
    house: "Parfums de Marly",
    name: "Layton",
    mood: "Date night",
    note: "Sweet-spicy, warm, unmistakably formal. Pulls more weight than it should.",
  },
  {
    house: "Tom Ford",
    name: "Ombré Leather",
    mood: "Office · Cold weather",
    note: "Smoky leather with a plum top. The quiet one in the rotation.",
  },
];

const FragranceRotation = () => {
  return (
    <section className="w-full flex items-center flex-col">
      <div className="max-w-3xl w-full border-x border-border">
        <h2 className="border-b border-border text-3xl font-semibold px-4 text-foreground flex items-center gap-3">
          <Droplets size={22} className="text-muted-foreground" />
          Fragrance Rotation
        </h2>
        <div className="p-4 sm:p-6 space-y-4">
          {fragrances.map((fragrance) => (
            <div
              key={`${fragrance.house}-${fragrance.name}`}
              className="rounded-xl border border-border p-4 space-y-1.5 bg-muted/20"
            >
              <div className="flex items-baseline justify-between gap-3 flex-wrap">
                <h3 className="font-semibold text-foreground text-[15px]">
                  {fragrance.house} — {fragrance.name}
                </h3>
                <span className="text-[11px] font-mono uppercase tracking-wide text-muted-foreground">
                  {fragrance.mood}
                </span>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed font-mono">
                {fragrance.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FragranceRotation;
