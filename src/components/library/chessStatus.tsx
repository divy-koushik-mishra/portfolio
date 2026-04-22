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
        <h2 className="border-b border-border text-3xl font-semibold px-4 text-foreground flex items-center gap-3">
          <Crown size={22} className="text-muted-foreground" />
          Chess
        </h2>
        <div className="p-4 sm:p-6 space-y-4">
          <div className="rounded-xl border border-border p-4 space-y-3 bg-muted/20">
            <div className="flex items-baseline justify-between gap-3 flex-wrap">
              <h3 className="font-semibold text-foreground text-[15px]">
                {chess.platform} · @{chess.username}
              </h3>
              <a
                href={chess.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-mono uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                Profile
                <ExternalLink size={11} />
              </a>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {chess.ratings.map((r) => (
                <div
                  key={r.format}
                  className="rounded-lg border border-border p-3 bg-background"
                >
                  <div className="text-[10px] font-mono uppercase tracking-wide text-muted-foreground">
                    {r.format}
                    {r.format === chess.preferredFormat ? " ·" : ""}
                  </div>
                  <div className="text-xl font-semibold text-foreground font-mono">
                    {r.rating}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed font-mono">
              {chess.milestone}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChessStatus;
