
"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { BrainCircuit, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

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
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group flex-shrink-0">
          <div className="p-1.5 rounded-lg bg-primary group-hover:bg-accent transition-colors">
            <BrainCircuit className="w-5 h-5 text-white group-hover:text-black transition-colors" />
          </div>
          <span className="font-headline font-bold text-lg tracking-tight">Mr Verma</span>
        </a>

        {/* Desktop Navigation */}
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

        {/* Desktop Spacer */}
        <div className="hidden md:block flex-shrink-0 w-32"></div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-white/10 text-white w-[250px]">
              <SheetTitle className="text-white font-headline font-bold mb-8 flex items-center gap-2">
                <div className="p-1 rounded-lg bg-primary">
                  <BrainCircuit className="w-4 h-4 text-white" />
                </div>
                <span>Mr Verma</span>
              </SheetTitle>
              <div className="flex flex-col gap-6 pt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
