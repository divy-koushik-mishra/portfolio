import React, { FC } from "react";
import SocialCard from "./socialCard";

export interface socialCard {
  id: number;
  platform: string;
  url: string;
  userId: string;
  icon: string;
}

interface SocialCardsContainerProps {
  socialItems: socialCard[];
}

const SocialCardsContainer: FC<SocialCardsContainerProps> = ({ socialItems }) => {
  const rows = [];
  for (let i = 0; i < socialItems.length; i += 2) {
    rows.push(socialItems.slice(i, i + 2));
  }

  return (
    <div className="w-full max-w-3xl border-x border-neutral-200">
      {rows.map((row, rowIdx) => (
        <div
          key={rowIdx}
          className="grid grid-cols-2 gap-4 border-y my-4 border-neutral-200 mx-[-9999px] px-[9999px]"
        >
          {row.map((item) => (
            <div key={item.id} className="border-x border-neutral-200">
              <SocialCard
                userId={item.userId}
                icon={item.icon}
                id={item.id}
                platform={item.platform}
                url={item.url}
              />
            </div>
          ))}
          {row.length < 2 && <div className="border-x border-neutral-200" />} {/* empty cell if odd count */}
        </div>
      ))}
    </div>
  );
};

export default SocialCardsContainer;
