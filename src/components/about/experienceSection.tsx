"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Code, Palette } from 'lucide-react';

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
  }[];
}

const experiences: Experience[] = [
  {
    id: 'simplamo',
    company: 'Simplamo Enterprise JSC',
    logo: '🏢',
    roles: [
      {
        id: 'senior-frontend',
        title: 'Senior Frontend Developer',
        icon: <Code className="h-4 w-4" />,
        type: 'Full-time',
        duration: '10.2022-∞',
        responsibilities: [
          'Develop AI Chat and AI Assistant features.',
          'Develop Whiteboards with real-time collaboration.',
          'Build and maintain the Zalo Mini App for Simplamo with seamless integration.',
          'Develop interactive chart and analytics widgets for the Dashboard to enhance data visualization.',
          'Develop and maintain core features to enhance functionality and user experience.',
          'Ensure UI/UX consistency and adherence to standards.',
          'Implement robust frontend solutions for web and mobile platforms.',
          'Analyze technical capabilities and provide optimal solutions.'
        ],
        technologies: ['TypeScript', 'Next.js', 'React Native', 'MobX', 'MobX-State-Tree', 'Tailwind CSS', 'Dify', 'Zalo Mini App'],
        isExpanded: true
      },
      {
        id: 'ui-design-lead',
        title: 'UI Design Lead',
        icon: <Palette className="h-4 w-4" />,
        type: 'Full-time',
        duration: '10.2022-∞',
        responsibilities: [
          'Lead UI/UX design initiatives and establish design systems.',
          'Create wireframes, prototypes, and high-fidelity designs.',
          'Collaborate with cross-functional teams to ensure design consistency.',
          'Conduct user research and usability testing.',
          'Mentor junior designers and provide design guidance.'
        ],
        technologies: ['Figma', 'Adobe Creative Suite', 'Design Systems', 'User Research', 'Prototyping'],
        isExpanded: false
      }
    ]
  },
  {
    id: 'quaric',
    company: 'Quaric Co., Ltd.',
    logo: '💼',
    roles: [
      {
        id: 'design-engineer',
        title: 'Design Engineer',
        icon: <Code className="h-4 w-4" />,
        type: 'Part-time',
        duration: '03.2024-∞',
        responsibilities: [
          'Design and implement scalable software solutions.',
          'Collaborate with product teams to define technical requirements.',
          'Optimize application performance and user experience.',
          'Participate in code reviews and technical discussions.'
        ],
        technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker'],
        isExpanded: false
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
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
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
