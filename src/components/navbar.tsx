"use client";

import { Github, MoonStar, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTheme } from "@/contexts/theme-context";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showLogo, setshowLogo] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
      setshowLogo(window.scrollY > 156)
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: 1, title: "Portfolio", href: "/" },
    { id: 2, title: "Blog", href: "/" },
    { id: 3, title: "Projects", href: "/" },
  ];

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <nav
      className={`w-full inset-0 sticky top-0 z-50 bg-background flex justify-center border-y border-border transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="border-t mt-2 border-border w-full flex justify-center h-12">
      <div className="max-w-3xl w-full border-x  border-border flex items-center justify-between px-2 font-mono text-foreground font-medium overflow-y-hidden">
        {/* logo */}
        <div
          className={`transition-all duration-300 transform ${
            showLogo
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <Image 
            src={theme === 'dark' ? "/dk-pixelated-white.svg" : "/dk-pixelated.svg"} 
            height={32} 
            width={32} 
            alt="Logo" 
            className="h-6 w-auto" 
          />
        </div>

        {/* menu items */}
        <div className="flex items-center gap-4">
          {menuItems.map((item) => (
            <Link
              href={item.href}
              key={item.id}
              className="hover:text-foreground/80 transition-colors"
            >
              {item.title}
            </Link>
          ))}

          {/* github and theme mode icon */}
          <div className="border border-border rounded-full p-2 hover:bg-muted transition-colors cursor-pointer">
            <Github size={16} />
          </div>
          <button
            onClick={handleThemeToggle}
            className="border border-border rounded-full p-2 hover:bg-muted transition-colors cursor-pointer"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            type="button"
          >
            {theme === 'dark' ? <MoonStar size={16} /> : <Sun size={16} />}
          </button>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
