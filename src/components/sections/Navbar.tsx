"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { List, X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<"es" | "en">("es");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#soluciones", label: "Soluciones" },
    { href: "#plataformas", label: "Plataformas" },
    { href: "#ia", label: "IA Aplicada" },
    { href: "#casos-uso", label: "Casos de Uso" },
    { href: "#metodologia", label: "Metodología" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full h-[80px] z-[1000] transition-all duration-300",
        isScrolled
          ? "bg-white/70 backdrop-blur-md border-b border-white/20 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container h-full flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-primary font-extrabold text-2xl">
          <Image
            src="/Img/Logo_Softtek.png"
            alt="Softtek Logo"
            width={150}
            height={40}
            className="h-10 w-auto object-contain transition-transform hover:scale-105"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-main font-medium text-[0.95rem] hover:text-secondary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <button
              onClick={() => setLang("en")}
              className={cn("transition-colors", lang === "en" ? "text-secondary" : "text-muted hover:text-main")}
            >
              EN
            </button>
            <span className="text-muted">|</span>
            <button
              onClick={() => setLang("es")}
              className={cn("transition-colors", lang === "es" ? "text-secondary" : "text-muted hover:text-main")}
            >
              ES
            </button>
          </div>
          <a href="#contacto">
            <Button variant="outline">Solicitar Demo</Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white border-b border-gray-100 shadow-lg md:hidden flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-main font-medium text-lg hover:text-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-4 mt-4 border-t border-gray-100 pt-6">
            <div className="flex items-center justify-center gap-4 text-sm font-semibold mb-2">
              <button
                onClick={() => setLang("en")}
                className={cn("transition-colors", lang === "en" ? "text-secondary" : "text-muted")}
              >
                EN
              </button>
              <span className="text-muted">|</span>
              <button
                onClick={() => setLang("es")}
                className={cn("transition-colors", lang === "es" ? "text-secondary" : "text-muted")}
              >
                ES
              </button>
            </div>
            <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="primary" className="w-full">
                Solicitar Demo
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
