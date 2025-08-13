"use client";
import React, { useState } from "react";
import { Code2, Database, Cloud, Smartphone, Palette, Brain, Zap, Users, Shield, Globe } from "lucide-react";

interface TechCategory {
  name: string;
  description: string;
  technologies: string[];
  color: string;
  icon: React.ReactNode;
  proficiency: number; // 1-5 scale
}

const techStack: TechCategory[] = [
  {
    name: "Frontend Development",
    description: "Building responsive and interactive user interfaces",
    technologies: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "Redux", "React Query"],
    color: "from-blue-500/20 via-cyan-500/20 to-blue-600/20",
    icon: <Code2 size={20} />,
    proficiency: 5
  },
  {
    name: "Backend & APIs",
    description: "Server-side development and API design",
    technologies: ["Node.js", "Python", "FastAPI", "Express.js", "PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST APIs", "JWT"],
    color: "from-green-500/20 via-emerald-500/20 to-green-600/20",
    icon: <Database size={20} />,
    proficiency: 4
  },
  {
    name: "Mobile Development",
    description: "Cross-platform mobile applications",
    technologies: ["React Native", "Expo", "Mobile App Development", "Responsive Design", "PWA", "App Store Deployment"],
    color: "from-purple-500/20 via-pink-500/20 to-purple-600/20",
    icon: <Smartphone size={20} />,
    proficiency: 4
  },
  {
    name: "Cloud & DevOps",
    description: "Infrastructure and deployment automation",
    technologies: ["AWS", "Vercel", "Docker", "Git", "CI/CD", "Serverless", "Microservices", "Kubernetes", "Terraform"],
    color: "from-orange-500/20 via-red-500/20 to-orange-600/20",
    icon: <Cloud size={20} />,
    proficiency: 4
  },
  {
    name: "Design & UX",
    description: "User experience and visual design",
    technologies: ["Figma", "Adobe Creative Suite", "UI/UX Design", "Design Systems", "Prototyping", "User Research", "Accessibility"],
    color: "from-indigo-500/20 via-blue-500/20 to-indigo-600/20",
    icon: <Palette size={20} />,
    proficiency: 3
  },
  {
    name: "AI & Machine Learning",
    description: "Intelligent systems and data analysis",
    technologies: ["OpenAI API", "Machine Learning", "AI Integration", "Data Analysis", "TensorFlow", "Python ML", "NLP"],
    color: "from-teal-500/20 via-green-500/20 to-teal-600/20",
    icon: <Brain size={20} />,
    proficiency: 3
  }
];

const additionalSkills = [
  { name: "Agile Development", icon: <Users size={16} />, category: "Methodology" },
  { name: "Team Leadership", icon: <Zap size={16} />, category: "Leadership" },
  { name: "Problem Solving", icon: <Brain size={16} />, category: "Skills" },
  { name: "Performance Optimization", icon: <Zap size={16} />, category: "Technical" },
  { name: "Security Best Practices", icon: <Shield size={16} />, category: "Security" },
  { name: "API Design", icon: <Globe size={16} />, category: "Technical" },
  { name: "Database Design", icon: <Database size={16} />, category: "Technical" },
  { name: "System Architecture", icon: <Cloud size={16} />, category: "Technical" }
];

const StackSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getProficiencyBars = (level: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <div
        key={i}
        className={`h-2 w-2 rounded-full ${
          i < level ? "bg-foreground" : "bg-muted"
        }`}
      />
    ));
  };

  return (
    <div className="max-w-3xl w-full border-x border-border">
      <h2 className="border-b border-border text-3xl font-semibold px-4 text-foreground">
        Tech Stack & Skills
      </h2>
      
      <div className="p-4 space-y-8">
        {/* Main Tech Categories */}
        <div className="space-y-6">
          {techStack.map((category, index) => (
            <div 
              key={index} 
              className={`p-4 rounded-lg border border-border hover:border-foreground/30 transition-all duration-300 cursor-pointer ${
                selectedCategory === category.name ? "ring-2 ring-foreground/20" : ""
              }`}
              onClick={() => setSelectedCategory(selectedCategory === category.name ? null : category.name)}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {getProficiencyBars(category.proficiency)}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-3 py-1.5 text-sm bg-gradient-to-r ${category.color} text-foreground rounded-lg border border-border hover:scale-105 transition-transform cursor-default font-mono`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Skills */}
        <div className="pt-6 border-t border-border">
          <h3 className="text-xl font-semibold text-foreground mb-4">Additional Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {additionalSkills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-foreground/30 transition-colors bg-muted/30"
              >
                <span className="text-muted-foreground">{skill.icon}</span>
                <div>
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  <span className="text-xs text-muted-foreground ml-2">({skill.category})</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Section */}
        <div className="pt-6 border-t border-border">
          <h3 className="text-xl font-semibold text-foreground mb-4">Currently Learning</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Rust",
              "WebAssembly",
              "Three.js",
              "Blockchain Development",
              "Advanced ML/AI"
            ].map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1.5 text-sm bg-muted text-muted-foreground rounded-lg border border-border font-mono flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackSection;
