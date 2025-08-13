"use client";
import React, { useState } from 'react';
import { Book, ChevronDown, ChevronRight, Code } from 'lucide-react';

interface Experience {
  id: string;
  company: string;
  logo: string;
  roles: {
    id: string;
    title: string;
    icon: React.ReactNode;
    type: string;
    duration: string;
    responsibilities: string[];
    technologies: string[];
    isExpanded: boolean;
    isCurrentJob?: boolean;
  }[];
}

const experiences: Experience[] = [
  {
    id: 'cura-care',
    company: 'CURA Care',
    logo: '🏥',
    roles: [
      {
        id: 'sde1-fulltime',
        title: 'Software Development Engineer 1 (Founding Team Member)',
        icon: <Code className="h-4 w-4" />,
        type: 'Full-time',
        duration: '01.2025–Present',
        responsibilities: [
          'First hire and founding team member, continuing technical leadership after internship.',
          'Led frontend and backend iterations to improve user journey flow, boosting engagement, retention, and booking rates.',
          'Maintained and scaled AWS-based infrastructure (EC2, S3, ElastiCache, SES, SNS) and Coolify deployments.',
          'Executed A/B testing and funnel analysis to guide UX improvements and feature adoption.',
          'Aligned technical efforts with business KPIs including revenue and user retention.'
        ],
        technologies: [
          'TypeScript', 'Next.js App Router', 'tRPC', 'Prisma', 'PostgreSQL',
          'Tailwind CSS', 'Zustand', 'NextAuth', 'AWS', 'Coolify', 'Docker', 'GitHub Actions'
        ],
        isExpanded: true,
        isCurrentJob: true
      },
      {
        id: 'full-stack-engg-intern',
        title: 'Full Stack Developer Intern (Founding Team Member, First Hire)',
        icon: <Code className="h-4 w-4" />,
        type: 'Internship',
        duration: '08.2024–12.2024',
        responsibilities: [
          'Joined as the first technical hire and founding team member, writing the first line of code for the company.',
          'Set up complete development environment, workflows, and technical foundation.',
          'Designed and implemented database schema and system architecture.',
          'Built the Customer App for booking and managing home dental services.',
          'Developed the Licensed Professional (LP) App for dentists to collect data, images, and videos for oral health reports.',
          'Created Internal Operations Management Dashboard for end-to-end service operations.',
          'Developed and deployed MVP that secured VC funding.'
        ],
        technologies: [
          'TypeScript', 'Next.js App Router', 'tRPC', 'Prisma', 'PostgreSQL',
          'Tailwind CSS', 'Zustand', 'NextAuth', 'AWS', 'Coolify', 'Docker', 'GitHub Actions'
        ],
        isExpanded: false
      }
    ]
  },
  {
    id: 'adizen',
    company: 'Adizen',
    logo: '💼',
    roles: [
      {
        id: 'full-stack-intern',
        title: 'Full Stack Developer Intern',
        icon: <Code className="h-4 w-4" />,
        type: 'Internship',
        duration: '05.2024–07.2024',
        responsibilities: [
          'Developed modules for user management and appointment booking for a major physiotherapy chain.',
          'Integrated Razorpay payments and implemented Cypress tests to reduce production bugs.',
          'Deployed a scalable and cost-effective solution on DigitalOcean.'
        ],
        technologies: [
          'Next.js', 'Express', 'MongoDB', 'Razorpay API', 'Cypress', 'DigitalOcean'
        ],
        isExpanded: false
      }
    ]
  },
  {
    id: 'gradeperfect',
    company: 'Gradeperfect',
    logo: '🎓',
    roles: [
      {
        id: 'founding-team-member',
        title: 'Founding Team Member & Web Developer',
        icon: <Code className="h-4 w-4" />,
        type: 'Part-time',
        duration: '12.2023–Present',
        responsibilities: [
          'Developed and maintained core web applications for the organization.',
          'Automated workflows for attendance tracking, lead management, and invoicing.',
          'Deployed MERN stack applications on DigitalOcean.',
          'Integrated marketing tools via WordPress to improve engagement and conversions.'
        ],
        technologies: [
          'MongoDB', 'Express', 'React', 'Node.js', 'DigitalOcean', 'WordPress'
        ],
        isExpanded: true
      },
      {
        id: 'computer-science-tutor',
        title: 'Computer Science Tutor',
        icon: <Book className="h-4 w-4" />,
        type: 'Part-time',
        duration: '03.2024–11.2024',
        responsibilities: [
          'Taught programming fundamentals, data structures, and algorithms to students.',
          'Prepared lesson plans and exercises for Python and Computer Science concepts.',
          'Mentored students in problem-solving and project development.'
        ],
        technologies: [
          'Python', 'Computer Science Fundamentals', 'Teaching'
        ],
        isExpanded: false,
        isCurrentJob: true
      }
    ]
  }
];


const ExperienceSection = () => {
  const [expandedRoles, setExpandedRoles] = useState<Set<string>>(
    new Set(['senior-frontend'])
  );

  const toggleRole = (roleId: string) => {
    const newExpanded = new Set(expandedRoles);
    if (newExpanded.has(roleId)) {
      newExpanded.delete(roleId);
    } else {
      newExpanded.add(roleId);
    }
    setExpandedRoles(newExpanded);
  };

  // Check if any role in the company is current job
  const hasCurrentJob = (roles: Experience['roles']) => {
    return roles.some(role => role.isCurrentJob);
  };

  return (
    <div className="max-w-3xl w-full border-x border-border">
      <h2 className="border-b border-border text-3xl font-semibold px-4 text-foreground">
        Experience
      </h2>
      <div className="space-y-6 p-3 sm:p-4">
        {experiences.map((experience) => (
          <div key={experience.id} className="space-y-4">
            {/* Company Header */}
            <div className="flex items-center gap-3">
              <span className="text-2xl">{experience.logo}</span>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {experience.company}
                </h3>
                {hasCurrentJob(experience.roles) && (
                  <div className="relative">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-wavy-flow"></div>
                    <div className="absolute inset-0 w-2 h-2 bg-blue-400 rounded-full animate-ripple-wave opacity-75"></div>
                    <div className="absolute inset-0 w-2 h-2 bg-blue-300 rounded-full animate-gentle-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                )}
              </div>
            </div>

            {/* Roles */}
            <div className="space-y-3 ml-4 sm:ml-8">
              {experience.roles.map((role) => (
                <div key={role.id} className="border border-border rounded-lg overflow-hidden">
                  {/* Role Header */}
                  <button 
                    className="flex items-center justify-between p-3 bg-muted/30 cursor-pointer hover:bg-muted/50 transition-colors w-full text-left focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 focus:ring-offset-background"
                    onClick={() => toggleRole(role.id)}
                    aria-expanded={expandedRoles.has(role.id)}
                    aria-controls={`role-${role.id}-details`}
                    aria-label={`Toggle ${role.title} details`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-muted-foreground">
                        {role.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{role.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {role.type} | {role.duration}
                        </p>
                      </div>
                    </div>
                    <div className="text-muted-foreground">
                      {expandedRoles.has(role.id) ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </div>
                  </button>

                  {/* Role Details */}
                  {expandedRoles.has(role.id) && (
                    <div id={`role-${role.id}-details`} className="p-3 space-y-4">
                      {/* Responsibilities */}
                      <div>
                        <h5 className="text-sm font-medium text-foreground mb-2">Responsibilities:</h5>
                        <ul className="space-y-1">
                          {role.responsibilities.map((responsibility, index) => (
                            <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-foreground mt-1">•</span>
                              <span>
                                {responsibility.split(' ').map((word, wordIndex) => {
                                  if (['AI', 'Chat', 'Assistant', 'Whiteboards', 'Zalo', 'Mini', 'App', 'Dashboard'].includes(word)) {
                                    return (
                                      <span key={wordIndex} className="underline decoration-primary/50 underline-offset-2">
                                        {word}{' '}
                                      </span>
                                    );
                                  }
                                  return word + ' ';
                                })}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h5 className="text-sm font-medium text-foreground mb-2">Technologies:</h5>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {role.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs bg-secondary text-secondary-foreground rounded-full border border-border"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
