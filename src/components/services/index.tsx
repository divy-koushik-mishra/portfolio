import React from "react";
import {
  Rocket,
  Globe,
  Smartphone,
  Server,
  RefreshCw,
  BarChart3,
} from "lucide-react";
import DiagonalLineGradientBgFull from "../hero/diagonalLineGradientBgFull";

const services = [
  {
    icon: <Rocket size={20} />,
    title: "MVP Development",
    description:
      "Go from idea to a working product fast. I've built MVPs that secured VC funding — I know what matters at the early stage and what can wait.",
    accent: "text-orange-500",
  },
  {
    icon: <Globe size={20} />,
    title: "Full-Stack Web Apps",
    description:
      "Production-grade web applications with Next.js, React, and modern backend stacks. Auth, payments, dashboards, admin panels — the works.",
    accent: "text-blue-500",
  },
  {
    icon: <Smartphone size={20} />,
    title: "Mobile Apps",
    description:
      "Cross-platform mobile apps with React Native and Expo. One codebase, both stores, native performance.",
    accent: "text-violet-500",
  },
  {
    icon: <Server size={20} />,
    title: "Backend & API Development",
    description:
      "Scalable APIs with Node.js, Python, or tRPC. Database design with PostgreSQL or MongoDB. Cloud deployment on AWS.",
    accent: "text-emerald-500",
  },
  {
    icon: <RefreshCw size={20} />,
    title: "Rebuild & Modernize",
    description:
      "Migrate legacy codebases to modern stacks. Improve performance, developer experience, and maintainability.",
    accent: "text-pink-500",
  },
  {
    icon: <BarChart3 size={20} />,
    title: "Technical Consulting",
    description:
      "Architecture reviews, tech stack decisions, and scaling strategy. I help non-technical founders make smart technical choices.",
    accent: "text-teal-500",
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full flex items-center flex-col">
      <div className="max-w-3xl w-full border-x border-border">
        <h2 className="border-b border-border text-3xl font-semibold px-4 text-foreground">
          Services
        </h2>
        <div className="p-4 sm:p-6">
          <p className="font-mono text-sm text-muted-foreground mb-6">
            I work with startups and businesses as a freelance developer.
            Here&apos;s what I can help you build.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-border p-4 space-y-2 bg-muted/20 hover:border-muted-foreground/25 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <span className={service.accent}>{service.icon}</span>
                  <h3 className="font-semibold text-foreground text-[15px]">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed font-mono">
                  {service.description}
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

export default ServicesSection;
