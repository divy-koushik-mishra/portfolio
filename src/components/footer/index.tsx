import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Portfolio", href: "/" },
    { name: "Blog", href: "/blogs" },
    { name: "Resume", href: "/" },
  ];

  const contactInfo = [
    {
      icon: <Mail size={16} />,
      text: "divykoushikmishra@gmail.com",
      href: "mailto:divykoushikmishra@gmail.com",
    },
    {
      icon: <MapPin size={16} />,
      text: "Gurgaon, India · Open to remote",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={16} />,
      href: "https://github.com/divy-koushik-mishra/",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={16} />,
      href: "https://www.linkedin.com/in/divy-koushik-mishra",
      label: "LinkedIn",
    },
    {
      icon: <ExternalLink size={16} />,
      href: "https://x.com/divy_koushik",
      label: "X (Twitter)",
    },
  ];

  return (
    <footer className="w-full bottom-0 border-border border-t flex flex-col items-center bg-background">
      <div className="w-full max-w-3xl border-x border-border">
        {/* Quick Links */}
        <div className="border-b border-border px-4 py-6">
          <h3 className="text-lg font-semibold text-foreground mb-4 font-mono">
            Quick Links
          </h3>
          <div className="flex flex-wrap gap-4">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono hover:underline"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="border-b border-border px-4 py-6">
          <h3 className="text-lg font-semibold text-foreground mb-4 font-mono">
            Get in Touch
          </h3>
          <div className="space-y-3">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-muted-foreground">{info.icon}</span>
                <a
                  href={info.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono hover:underline"
                >
                  {info.text}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Social */}
        <div className="border-b border-border px-4 py-6">
          <h3 className="text-lg font-semibold text-foreground mb-4 font-mono">
            Connect
          </h3>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-mono border border-border rounded-lg hover:bg-muted/50"
                aria-label={social.label}
              >
                {social.icon}
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Credits */}
        <div className="px-4 py-6">
          <div className="space-y-3 text-center">
            <p className="text-sm text-muted-foreground font-mono">
              Inspired by{" "}
              <a
                href="https://chanhdai.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:underline"
              >
                chanhdai.com
              </a>
            </p>
            <p className="text-sm text-muted-foreground font-mono">
              Built by{" "}
              <a
                href="https://www.linkedin.com/in/divy-koushik-mishra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:underline"
              >
                Divy Koushik Mishra
              </a>
              . The source code is available on{" "}
              <a
                href="https://github.com/divy-koushik-mishra/divy-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:underline"
              >
                GitHub
              </a>
            </p>
            <p className="text-xs text-muted-foreground font-mono">
              &copy; {currentYear} Divy Koushik Mishra. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative bottom */}
      <div className="w-full mb-2 border-y flex justify-center">
        <div className="max-w-3xl w-full flex justify-center border-border border-x h-12 bg-[repeating-linear-gradient(315deg,var(--color-muted)_0,var(--color-muted)_1px,transparent_0,transparent_50%)] bg-[length:10px_10px]">
          <div className="bg-background px-4 items-center flex gap-3 font-mono text-xs text-muted-foreground">
            <a href="/llms.txt" className="hover:text-foreground transition-colors hover:underline">llms.txt</a>
            <span aria-hidden="true">·</span>
            <a href="/llms-full.txt" className="hover:text-foreground transition-colors hover:underline">llms-full.txt</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
