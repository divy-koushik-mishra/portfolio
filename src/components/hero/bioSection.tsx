"use client";
import React from "react";
import {
  CodeXml,
  GraduationCap,
  MapPin,
  Mail,
  Globe,
} from "lucide-react";

const BioSection = () => {
  const bioLineItems = [
    {
      id: 0,
      icon: <CodeXml className="size-4 text-muted-foreground" />,
      text: "Founding Engineer, <a href='https://www.handypanda.in' target='_blank' rel='noopener noreferrer' class='text-foreground hover:underline'>HandyPanda</a>",
    },
    {
      id: 1,
      icon: <CodeXml className="size-4 text-muted-foreground" />,
      text: "Ex-SDE-1, Founding team, <a href='https://www.curacare.in' target='_blank' rel='noopener noreferrer' class='text-foreground hover:underline'>Cura Care</a>",
    },
    {
      id: 2,
      icon: <GraduationCap className="size-4 text-muted-foreground" />,
      text: "IIT Madras — Data Science",
    },
    {
      id: 3,
      icon: <MapPin className="size-4 text-muted-foreground" />,
      text: "Gurgaon, India · Open to remote",
    },
    {
      id: 4,
      icon: <Mail className="size-4 text-muted-foreground" />,
      text: "<a href='mailto:divykoushikmishra@gmail.com' class='text-foreground hover:underline'>divykoushikmishra@gmail.com</a>",
    },
    {
      id: 5,
      icon: <Globe className="size-4 text-muted-foreground" />,
      text: "divykoushik.in",
    },
  ];

  return (
    <section className="px-3 py-3 sm:p-4 max-w-3xl w-full border-x border-border">
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
        {bioLineItems.map((item) => (
          <li key={item.id} className="flex items-start gap-2">
            <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-mute dark:inset-shadow-[1px_1px_1px,0px_0px_2px] dark:inset-shadow-white/15 mt-0.5">
              {item.icon}
            </div>
            <span className="text-sm font-mono text-foreground leading-relaxed"><span dangerouslySetInnerHTML={{ __html: item.text }} /></span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BioSection;
