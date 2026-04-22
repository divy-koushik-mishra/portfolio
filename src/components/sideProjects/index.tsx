import React from "react";
import { CalendarClock } from "lucide-react";
import DiagonalLineGradientBgFull from "../hero/diagonalLineGradientBgFull";

type Status = "Work in Progress" | "Shipped" | "Paused";

type SideProject = {
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
  status: Status;
  href?: string;
};

const sideProjects: SideProject[] = [
  {
    title: "Smart Calendar",
    description:
      "An opinionated calendar that auto-schedules deep work, batches meetings, and protects focus blocks. Built in public to stress-test the AI-assisted scheduling loop.",
    icon: <CalendarClock size={20} />,
    accent: "text-indigo-500",
    status: "Work in Progress",
  },
];

const SideProjectsSection = () => {
  return (
    <section className="w-full flex items-center flex-col">
      <div className="max-w-3xl w-full border-x border-border">
        <h2 className="border-b border-border text-3xl font-semibold px-4 text-foreground">
          Side Projects
        </h2>
        <div className="p-4 sm:p-6">
          <p className="font-mono text-sm text-muted-foreground mb-6">
            Projects I build in the margins — some for fun, some in anger, some
            might grow up to be real products.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sideProjects.map((project) => (
              <div
                key={project.title}
                className="relative rounded-xl border border-border p-4 space-y-2 bg-muted/20 hover:border-muted-foreground/25 transition-colors"
              >
                <span className="absolute top-3 right-3 text-[10px] font-mono px-1.5 py-0.5 rounded-full border border-border bg-muted/40 text-muted-foreground uppercase tracking-wide">
                  {project.status}
                </span>
                <div className="flex items-center gap-2.5 pr-24">
                  <span className={project.accent}>{project.icon}</span>
                  <h3 className="font-semibold text-foreground text-[15px]">
                    {project.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed font-mono">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <DiagonalLineGradientBgFull />
    </section>
  );
};

export default SideProjectsSection;
