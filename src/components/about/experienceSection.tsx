"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Briefcase, GraduationCap } from "lucide-react";

interface Role {
  id: string;
  title: string;
  type: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
  isCurrent?: boolean;
}

interface Experience {
  id: string;
  company: string;
  logo: string;
  roles: Role[];
}

const experiences: Experience[] = [
  {
    id: "handypanda",
    company: "HandyPanda",
    logo: "🐼",
    roles: [
      {
        id: "founding-engineer-hp",
        title: "Founding Engineer",
        type: "Full-time",
        duration: "Sep 2025 – Present",
        isCurrent: true,
        responsibilities: [
          "Joined as a founding engineer, driving core technical decisions and architecture from the ground up.",
        ],
        technologies: [],
      },
    ],
  },
  {
    id: "cura-care",
    company: "CURA Care",
    logo: "🏥",
    roles: [
      {
        id: "sde1-fulltime",
        title: "Software Development Engineer 1 (Founding Team Member)",
        type: "Full-time",
        duration: "Jan 2025 – Dec 2025",
        responsibilities: [
          "First hire and founding team member, continuing technical leadership after internship.",
          "Led frontend and backend iterations to improve user journey flow, boosting engagement, retention, and booking rates.",
          "Maintained and scaled AWS-based infrastructure (EC2, S3, ElastiCache, SES, SNS) and Coolify deployments.",
          "Executed A/B testing and funnel analysis to guide UX improvements and feature adoption.",
          "Aligned technical efforts with business KPIs including revenue and user retention.",
        ],
        technologies: [
          "TypeScript",
          "Next.js",
          "tRPC",
          "Prisma",
          "PostgreSQL",
          "Tailwind CSS",
          "Zustand",
          "NextAuth",
          "AWS",
          "Docker",
        ],
      },
      {
        id: "full-stack-engg-intern",
        title: "Full Stack Developer Intern (First Hire)",
        type: "Internship",
        duration: "Aug 2024 – Dec 2024",
        responsibilities: [
          "Joined as the first technical hire, writing the first line of code for the company.",
          "Set up complete development environment, workflows, and technical foundation.",
          "Designed and implemented database schema and system architecture.",
          "Built the Customer App for booking and managing home dental services.",
          "Developed the Licensed Professional App for dentists to collect data, images, and videos for oral health reports.",
          "Created Internal Operations Management Dashboard for end-to-end service operations.",
          "Developed and deployed MVP that secured VC funding.",
        ],
        technologies: [
          "TypeScript",
          "Next.js",
          "tRPC",
          "Prisma",
          "PostgreSQL",
          "Tailwind CSS",
          "AWS",
          "Coolify",
          "Docker",
          "GitHub Actions",
        ],
      },
    ],
  },
  {
    id: "adizen",
    company: "Adizen",
    logo: "💼",
    roles: [
      {
        id: "full-stack-intern",
        title: "Full Stack Developer Intern",
        type: "Internship",
        duration: "May 2024 – Jul 2024",
        responsibilities: [
          "Developed modules for user management and appointment booking for a major physiotherapy chain.",
          "Integrated Razorpay payments and implemented Cypress tests to reduce production bugs.",
          "Deployed a scalable and cost-effective solution on DigitalOcean.",
        ],
        technologies: [
          "Next.js",
          "Express",
          "MongoDB",
          "Razorpay API",
          "Cypress",
          "DigitalOcean",
        ],
      },
    ],
  },
  {
    id: "gradeperfect",
    company: "Gradeperfect",
    logo: "🎓",
    roles: [
      {
        id: "founding-team-member",
        title: "Founding Team Member & Web Developer",
        type: "Part-time",
        duration: "Dec 2023 – Present",
        isCurrent: true,
        responsibilities: [
          "Developed and maintained core web applications for the organization.",
          "Automated workflows for attendance tracking, lead management, and invoicing.",
          "Deployed MERN stack applications on DigitalOcean.",
          "Integrated marketing tools via WordPress to improve engagement and conversions.",
        ],
        technologies: [
          "MongoDB",
          "Express",
          "React",
          "Node.js",
          "DigitalOcean",
          "WordPress",
        ],
      },
      {
        id: "computer-science-tutor",
        title: "Computer Science Tutor",
        type: "Part-time",
        duration: "Mar 2024 – Nov 2024",
        responsibilities: [
          "Taught programming fundamentals, data structures, and algorithms to students.",
          "Prepared lesson plans and exercises for Python and Computer Science concepts.",
          "Mentored students in problem-solving and project development.",
        ],
        technologies: ["Python", "Computer Science Fundamentals"],
      },
    ],
  },
];

const ExperienceSection = () => {
  const [expandedRoles, setExpandedRoles] = useState<Set<string>>(
    new Set(["founding-engineer-hp"])
  );

  const toggleRole = (roleId: string) => {
    setExpandedRoles((prev) => {
      const next = new Set(prev);
      if (next.has(roleId)) next.delete(roleId);
      else next.add(roleId);
      return next;
    });
  };

  const hasCurrent = (roles: Role[]) => roles.some((r) => r.isCurrent);

  return (
    <div className="max-w-3xl w-full border-x border-border">
      <h2 className="border-b border-border text-3xl font-semibold px-4 text-foreground">
        Experience
      </h2>

      <div className="relative px-4 sm:px-6 py-8">
        {/* Timeline spine */}
        <div className="absolute left-[27px] sm:left-[33px] top-8 bottom-8 w-px bg-border" />

        <div className="space-y-10">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-10 sm:pl-12">
              {/* Timeline node */}
              <div className="absolute left-0 sm:left-[6px] top-1 z-10 flex items-center justify-center w-6 h-6 rounded-full bg-background border-2 border-border text-sm">
                {exp.logo}
              </div>

              {/* Company header */}
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-lg font-semibold text-foreground">
                  {exp.company}
                </h3>
                {hasCurrent(exp.roles) && (
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>
                )}
              </div>

              {/* Roles */}
              <div className="space-y-3">
                {exp.roles.map((role) => {
                  const isOpen = expandedRoles.has(role.id);
                  return (
                    <div
                      key={role.id}
                      className="rounded-xl border border-border bg-muted/20 overflow-hidden transition-colors hover:border-muted-foreground/25"
                    >
                      <button
                        onClick={() => toggleRole(role.id)}
                        className="flex items-start justify-between gap-3 w-full p-3.5 text-left cursor-pointer"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-medium text-foreground text-[15px] leading-snug">
                              {role.title}
                            </span>
                            {role.isCurrent && (
                              <span className="shrink-0 text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mt-0.5 font-mono">
                            {role.type} &middot; {role.duration}
                          </p>
                        </div>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="shrink-0 mt-1 text-muted-foreground"
                        >
                          <ChevronDown className="h-4 w-4" />
                        </motion.div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-3.5 pb-4 space-y-3 border-t border-border pt-3">
                              {role.responsibilities.length > 0 && (
                                <ul className="space-y-1.5">
                                  {role.responsibilities.map((item, i) => (
                                    <li
                                      key={i}
                                      className="text-sm text-muted-foreground flex gap-2 leading-relaxed"
                                    >
                                      <span className="shrink-0 text-muted-foreground/60 select-none">
                                        ›
                                      </span>
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}

                              {role.technologies.length > 0 && (
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                  {role.technologies.map((tech, i) => (
                                    <span
                                      key={i}
                                      className="px-2 py-0.5 text-xs font-mono rounded-md bg-secondary text-secondary-foreground border border-border"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
