"use client";

import React, { FC } from "react";
import { socialCard } from "./socialCardsContainer";
import { ArrowUpRight } from "lucide-react";

const SocialCard: FC<socialCard> = ({ icon, platform, url, userId }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-4 py-3.5 group transition-colors hover:bg-muted/50"
    >
      <div className="flex items-center justify-center size-9 rounded-lg bg-muted text-foreground shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-foreground group-hover:underline underline-offset-2">
          {platform}
        </p>
        <p className="text-xs text-muted-foreground truncate">{userId}</p>
      </div>
      <ArrowUpRight
        size={14}
        className="shrink-0 text-muted-foreground group-hover:text-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  );
};

export default SocialCard;
