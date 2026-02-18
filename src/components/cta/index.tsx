import React from "react";
import { Mail, ArrowUpRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="w-full flex items-center flex-col">
      <div className="max-w-3xl w-full border-x border-border">
        <div className="px-4 sm:px-6 py-10 sm:py-14 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
            Have a project in mind?
          </h2>
          <p className="font-mono text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            I&apos;m currently taking on freelance projects. Whether you need an
            MVP, a full product build, or technical consulting — let&apos;s
            talk.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="mailto:divykoushikmishra@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-mono font-medium bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity"
            >
              <Mail size={16} />
              divykoushikmishra@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/divy-koushik-mishra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-mono font-medium border border-border rounded-lg hover:bg-muted transition-colors text-foreground"
            >
              Connect on LinkedIn
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
