"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Cloud,
  Smartphone,
  Palette,
  Brain,
} from "lucide-react";

interface TechCategory {
  name: string;
  icon: React.ReactNode;
  technologies: string[];
  accent: string;
}

const techStack: TechCategory[] = [
  {
    name: "Frontend",
    icon: <Code2 size={18} />,
    accent: "text-blue-500",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
      "React Query",
    ],
  },
  {
    name: "Backend & APIs",
    icon: <Database size={18} />,
    accent: "text-emerald-500",
    technologies: [
      "Node.js",
      "Python",
      "FastAPI",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "tRPC",
      "Redis",
    ],
  },
  {
    name: "Mobile",
    icon: <Smartphone size={18} />,
    accent: "text-violet-500",
    technologies: [
      "React Native",
      "Expo",
      "PWA",
      "App Store & Play Store Deployment",
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: <Cloud size={18} />,
    accent: "text-orange-500",
    technologies: [
      "AWS",
      "Vercel",
      "Docker",
      "GitHub Actions",
      "Coolify",
      "CI/CD",
      "Serverless",
    ],
  },
  {
    name: "Design & UX",
    icon: <Palette size={18} />,
    accent: "text-pink-500",
    technologies: [
      "Figma",
      "UI/UX Design",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Accessibility",
    ],
  },
  {
    name: "AI & Data",
    icon: <Brain size={18} />,
    accent: "text-teal-500",
    technologies: [
      "OpenAI API",
      "Machine Learning",
      "Data Analysis",
      "Python ML Libraries",
      "NLP",
    ],
  },
];

const otherSkills = [
  "Agile Development",
  "System Architecture",
  "API Design",
  "Database Design",
  "Performance Optimization",
  "Security Best Practices",
  "Team Leadership",
  "End-to-End Project Ownership",
  "Startup Agility",
  "Product Collaboration",
];

const learning = [
  "Rust",
  "WebAssembly",
  "Three.js",
  "Blockchain Development",
  "Advanced ML/AI",
];

const StackSection = () => {
  return (
    <div className="max-w-3xl w-full border-x border-border">
      <h2 className="border-b border-border text-3xl font-semibold px-4 text-foreground">
        Tech Stack & Skills
      </h2>

      <div className="p-4 sm:p-6 space-y-8">
        {/* Tech categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {techStack.map((cat) => (
            <div
              key={cat.name}
              className="rounded-xl border border-border p-4 space-y-3 bg-muted/20 hover:border-muted-foreground/25 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <span className={cat.accent}>{cat.icon}</span>
                <h3 className="font-semibold text-foreground text-[15px]">
                  {cat.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="px-2 py-0.5 text-xs font-mono rounded-md bg-secondary text-secondary-foreground border border-border cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other skills */}
        <div className="space-y-3 pt-2 border-t border-border">
          <h3 className="font-semibold text-foreground">Other Skills</h3>
          <div className="flex flex-wrap gap-2">
            {otherSkills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="px-2.5 py-1 text-sm rounded-lg bg-muted text-muted-foreground border border-border cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Currently learning */}
        <div className="space-y-3 pt-2 border-t border-border">
          <h3 className="font-semibold text-foreground">Currently Learning</h3>
          <div className="flex flex-wrap gap-2">
            {learning.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="px-2.5 py-1 text-sm font-mono rounded-lg bg-muted text-muted-foreground border border-dashed border-muted-foreground/30 flex items-center gap-2 cursor-default"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-500" />
                </span>
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackSection;
