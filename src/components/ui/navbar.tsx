
"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { BrainCircuit } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto flex items-center">
        <a href="#" className="flex items-center gap-2 group flex-shrink-0">
          <div className="p-1.5 rounded-lg bg-primary group-hover:bg-accent transition-colors">
            <BrainCircuit className="w-5 h-5 text-white group-hover:text-black transition-colors" />
          </div>
          <span className="font-headline font-bold text-lg tracking-tight">Mr Verma</span>
        </a>
        <div className="hidden md:flex flex-1 items-center justify-center gap-8 translate-x-32">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* Spacer to maintain layout balance */}
        <div className="hidden md:block flex-shrink-0 w-32"></div>
      </div>
    </nav>
  );
}
