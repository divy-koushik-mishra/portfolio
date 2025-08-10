"use client";
import React from "react";
import {
  CodeXml,
  GraduationCap,
  MapPin,
  Mail,
  Globe,
  User
} from "lucide-react";

const BioSection = () => {
  const bioLineItems = [
    {
      id: 1,
      icon: <CodeXml className="size-4 text-muted-foreground" />,
      text: "SDE-1, Founding team, Cura Care",
    },
    {
      id: 2,
      icon: <GraduationCap className="size-4 text-muted-foreground" />,
      text: "Indian Institute of Technology, Madras - Data Science",
    },
    {
      id: 3,
      icon: <MapPin className="size-4 text-muted-foreground" />,
      text: "Bengaluru, India",
    },
    {
      id: 4,
      icon: <Mail className="size-4 text-muted-foreground" />,
      text: "divy@divykoushik.in",
    },
    {
      id: 5,
      icon: <Globe className="size-4 text-muted-foreground" />,
      text: "divykoushik.in",
    },
    {
      id: 6,
      icon: <User className="size-4 text-muted-foreground" />,
      text: "he/him",
    },
  ];

  return (
    <section className="p-4 max-w-3xl w-full border-x border-border">
      <ul className="space-y-2">
        {bioLineItems.map((item) => (
          <li key={item.id} className="flex items-center gap-2">
            <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-mute dark:inset-shadow-[1px_1px_1px,0px_0px_2px] dark:inset-shadow-white/15">
              {item.icon}
            </div>
            <span className="text-sm font-mono text-foreground">{item.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BioSection;
