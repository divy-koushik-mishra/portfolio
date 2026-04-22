import React from "react";
import { Crown, ExternalLink } from "lucide-react";

// TODO: replace with real values
const chess = {
  platform: "chess.com",
  username: "divykoushik",
  profileUrl: "https://www.chess.com/member/divykoushik",
  ratings: [
    { format: "Rapid", rating: 1200 },
    { format: "Blitz", rating: 1050 },
    { format: "Bullet", rating: 900 },
  ],
  preferredFormat: "Rapid",
  milestone: "Climbed out of 900s after a month of only playing after losses.",
};

const ChessStatus = () => {
  return (
    <section className="w-full flex items-center flex-col">
      <div className="max-w-3xl w-full border-x border-border">
        <div className="border-b border-border px-4 py-3 flex items-baseline justify-between">
          <h2 className="text-3xl font-semibold text-foreground flex items-center gap-3">
            <Crown size={22} className="text-muted-foreground" />
            Chess
          </h2>
          <a
            href={chess.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            {chess.platform}/@{chess.username}
            <ExternalLink size={11} />
          </a>
        </div>
        <div className="px-4 py-5 sm:px-6 space-y-4">
          <div className="grid grid-cols-3 gap-2">
            {chess.ratings.map((r) => {
              const isPreferred = r.format === chess.preferredFormat;
              return (
                <div
                  key={r.format}
                  className={`rounded-lg border p-3 ${
                    isPreferred
                      ? "border-foreground/40 bg-muted/30"
                      : "border-border bg-muted/10"
                  }`}
                >
                  <div className="text-[10px] font-mono uppercase tracking-wide text-muted-foreground flex items-center gap-1">
                    {r.format}
                    {isPreferred && (
                      <span className="text-emerald-500">●</span>
                    )}
                  </div>
                  <div className="text-2xl font-semibold text-foreground font-mono leading-tight">
                    {r.rating}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-sm text-foreground/80 leading-relaxed font-mono">
            {chess.milestone}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChessStatus;
