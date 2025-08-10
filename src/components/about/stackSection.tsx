import React from "react";

interface TechCategory {
  name: string;
  technologies: string[];
  color: string;
}

const techStack: TechCategory[] = [
  {
    name: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    name: "Backend",
    technologies: ["Node.js", "Python", "FastAPI", "Express.js", "PostgreSQL", "MongoDB", "Redis"],
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    name: "Mobile",
    technologies: ["React Native", "Expo", "Mobile App Development", "Responsive Design"],
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    name: "Cloud & DevOps",
    technologies: ["AWS", "Vercel", "Docker", "Git", "CI/CD", "Serverless", "Microservices"],
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    name: "Design & Tools",
    technologies: ["Figma", "Adobe Creative Suite", "UI/UX Design", "Design Systems", "Prototyping"],
    color: "from-indigo-500/20 to-blue-500/20"
  },
  {
    name: "AI & ML",
    technologies: ["OpenAI API", "Machine Learning", "AI Integration", "Data Analysis", "TensorFlow"],
    color: "from-teal-500/20 to-green-500/20"
  }
];

const StackSection = () => {
  return (
    <div className="max-w-3xl w-full border-x border-border">
      <h2 className="border-b border-border text-3xl font-semibold px-4 text-foreground">
        Stack
      </h2>
      <div className="p-3 sm:p-4 space-y-6">
        {techStack.map((category, index) => (
          <div key={index} className="space-y-3">
            <h3 className="text-lg font-medium text-foreground">{category.name}</h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {category.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm bg-gradient-to-r ${category.color} text-foreground rounded-lg border border-border hover:scale-105 transition-transform cursor-default`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
        
        {/* Additional Skills */}
        <div className="space-y-3 pt-4 border-t border-border">
          <h3 className="text-lg font-medium text-foreground">Additional Skills</h3>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {[
              "Agile Development",
              "Team Leadership",
              "Problem Solving",
              "User Research",
              "Performance Optimization",
              "Security Best Practices",
              "API Design",
              "Database Design"
            ].map((skill, index) => (
              <span
                key={index}
                className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm bg-muted text-muted-foreground rounded-lg border border-border"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackSection;
