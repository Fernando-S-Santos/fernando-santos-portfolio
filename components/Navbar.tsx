"use client";

import { useEffect, useState } from "react";
import { LayoutDashboard } from "lucide-react";
import { Cormorant_Garamond } from "next/font/google";

const signatureFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600"],
  style: ["italic"],
});

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-slate-950/70 border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <a href="#home" className="flex items-center gap-2 group">
          <span className="text-2xl font-medium tracking-wider text-white">
            FSS
          </span>
          <svg
            className="w-6 h-6 text-blue-400 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="2" />
            <circle cx="5" cy="5" r="2" />
            <circle cx="19" cy="5" r="2" />
            <circle cx="5" cy="19" r="2" />
            <circle cx="19" cy="19" r="2" />
            <line x1="12" y1="12" x2="5" y2="5" />
            <line x1="12" y1="12" x2="19" y2="5" />
            <line x1="12" y1="12" x2="5" y2="19" />
            <line x1="12" y1="12" x2="19" y2="19" />
          </svg>
        </a>

        <div className="hidden md:flex gap-8 text-slate-300">
          <a
            href="#home"
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900/50 border border-slate-800 hover:border-blue-500 hover:bg-blue-500/10 transition"
          >
            <LayoutDashboard size={18} strokeWidth={1.5} />
            <span className="hidden lg:inline">Início</span>
          </a>
          <a href="#sobre" className="relative text-slate-300 hover:text-blue-400 transition-all duration-300 ease-in-out after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
            Sobre
          </a>
          <a href="#projetos" className="relative text-slate-300 hover:text-blue-400 transition-all duration-300 ease-in-out after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
            Projetos
          </a>
          <a href="#jornada" className="relative text-slate-300 hover:text-blue-400 transition-all duration-300 ease-in-out after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
            Formação
          </a>
          <a href="#contato" className="relative text-slate-300 hover:text-blue-400 transition-all duration-300 ease-in-out after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
}