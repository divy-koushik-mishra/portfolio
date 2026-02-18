import React, { FC } from "react";
import SocialCard from "./socialCard";

export interface socialCard {
  id: number;
  platform: string;
  url: string;
  userId: string;
  icon: React.ReactNode;
}

interface SocialCardsContainerProps {
  socialItems: socialCard[];
}

const SocialCardsContainer: FC<SocialCardsContainerProps> = ({
  socialItems,
}) => {
  return (
    <div className="w-full max-w-3xl border-x border-border">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {socialItems.map((item, i) => (
          <div
            key={item.id}
            className={`border-b border-border ${i % 2 === 0 ? "sm:border-r" : ""}`}
          >
            <SocialCard
              userId={item.userId}
              icon={item.icon}
              id={item.id}
              platform={item.platform}
              url={item.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialCardsContainer;
