"use client";

import { Github, MoonStar, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTheme } from "@/contexts/theme-context";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showLogo, setshowLogo] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
      setshowLogo(window.scrollY > 156);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: 1, title: "Portfolio", href: "/", active: pathname === "/" },
    // { id: 2, title: "Blog", href: "/blogs", active: pathname === "/blogs" },
    // { id: 3, title: "Projects", href: "/", active: false },
  ];

  const playClickSound = () => {
    const ctx = new AudioContext();

    const buffer = ctx.createBuffer(1, ctx.sampleRate * 0.03, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      const t = i / ctx.sampleRate;
      data[i] =
        (Math.random() * 2 - 1) * Math.exp(-t * 300) * 0.15 +
        Math.sin(2 * Math.PI * 2400 * t) * Math.exp(-t * 400) * 0.1;
    }

    const src = ctx.createBufferSource();
    src.buffer = buffer;

    const gain = ctx.createGain();
    gain.gain.value = 0.25;

    const hp = ctx.createBiquadFilter();
    hp.type = "highpass";
    hp.frequency.value = 1200;

    src.connect(hp).connect(gain).connect(ctx.destination);
    src.start();
    src.onended = () => ctx.close();
  };

  const handleThemeToggle = () => {
    playClickSound();
    toggleTheme();
  };

  return (
    <nav
      className={`w-full inset-0 sticky top-0 z-50 bg-background flex justify-center border-y border-border transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="border-t mt-2 border-border w-full flex justify-center h-12">
        <div className="max-w-3xl w-full border-x border-border flex items-center justify-between px-2 font-mono text-foreground font-medium overflow-y-hidden">
          {/* logo */}
          <div
            className={`transition-all duration-300 transform ${
              showLogo
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            <Image
              src={
                theme === "dark"
                  ? "/dk-pixelated-white.svg"
                  : "/dk-pixelated.svg"
              }
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
                className={`transition-colors ${
                  item.active
                    ? "text-foreground font-semibold border-foreground pb-1"
                    : "text-foreground/70 hover:text-foreground/90"
                }`}
              >
                {item.title}
              </Link>
            ))}

            {/* github */}
            <div className="border border-border rounded-full p-2 hover:bg-muted transition-colors cursor-pointer">
              <Github size={16} />
            </div>

            {/* theme toggle with icon morph */}
            <button
              onClick={handleThemeToggle}
              className="border border-border rounded-full p-2 hover:bg-muted transition-colors cursor-pointer relative h-9 w-9 flex items-center justify-center"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              type="button"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                  <motion.span
                    key="moon"
                    initial={{ rotate: -90, scale: 0, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: 90, scale: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="absolute"
                  >
                    <MoonStar size={16} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="sun"
                    initial={{ rotate: 90, scale: 0, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: -90, scale: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="absolute"
                  >
                    <Sun size={16} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
