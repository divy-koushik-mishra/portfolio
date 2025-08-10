"use client";

import { Github, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showLogo, setshowLogo] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
      setshowLogo(window.scrollY > 50)
      console.log(window.scrollY)
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: 1, title: "Portfolio", href: "/" },
    { id: 2, title: "Blog", href: "/" },
    { id: 3, title: "Projects", href: "/" },
  ];

  return (
    <nav
      className={`w-full inset-0 sticky top-0 z-50 bg-white flex justify-center border-y border-neutral-200 h-12 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-3xl w-full border-x border-neutral-200 flex items-center justify-between  px-2 font-mono text-neutral-600 font-medium overflow-y-hidden">
        {/* logo */}
        <div
          className={`transition-all duration-300 transform ${
            showLogo
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <Image src="/dk-pixelated.svg" height={32} width={32} alt="Logo" className="h-6 w-auto" />
        </div>

        {/* menu items */}
        <div className="flex items-center gap-4">
          {menuItems.map((item) => (
            <Link
              href={item.href}
              key={item.id}
              className="hover:text-neutral-900 transition-colors"
            >
              {item.title}
            </Link>
          ))}

          {/* github and theme mode icon */}
          <div className="border border-neutral-200 rounded-full p-2">
            <Github size={16} />
          </div>
          <div className="border border-neutral-200 rounded-full p-2">
            <Sun size={16} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
