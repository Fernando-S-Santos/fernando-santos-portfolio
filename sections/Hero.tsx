"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
    const fullText = "Fernando S. Santos";
    const [displayedText, setDisplayedText] = useState("");
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
      let index = 0;

      const typing = setInterval(() => {
        if (index < fullText.length) {
          setDisplayedText(fullText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typing);
        }
      }, 140); // velocidade da digitação

      return () => clearInterval(typing);
    }, []);

    useEffect(() => {
      const cursorBlink = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 750);

      return () => clearInterval(cursorBlink);
    }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden bg-slate-950">

      {/* Glow principal */}
      <div className="absolute top-[40%] left-1/2 
                      w-[900px] h-[900px] 
                      -translate-x-1/2 -translate-y-1/2 
                      bg-blue-500/30 
                      rounded-full 
                      blur-[140px] 
                      animate-glow" />

      {/* Glow secundário */}
      <div className="absolute top-1/3 left-1/2 
                      w-[500px] h-[500px] 
                      bg-blue-600/20 
                      rounded-full 
                      blur-[120px] 
                      -translate-x-1/2 -translate-y-1/2" />

      {/*Ícone da Esquerda */}
      <div className="absolute left-24 top-1/2 
                -translate-y-1/2 translate-y-15 
                opacity-9 hidden xl:block 
                animate-float-slow">

        <svg width="160" height="160" viewBox="0 0 24 24" 
            fill="none" stroke="#3b82f6" strokeWidth="1.5">

          <path d="M3 3v18h18" />
          <polyline points="6,14 10,10 14,12 18,6" />
          <circle cx="6" cy="14" r="1.5" />
          <circle cx="10" cy="10" r="1.5" />
          <circle cx="14" cy="12" r="1.5" />
          <circle cx="18" cy="6" r="1.5" />
        </svg>

      </div>
      
      {/*Ícone da Direita */}
      <div className="absolute right-24 top-1/2 
                -translate-y-1/2 
                opacity-9 hidden xl:block 
                animate-float-slow">

        <svg width="160" height="160" viewBox="0 0 24 24" 
            fill="none" stroke="#3b82f6" strokeWidth="1.5">

          <circle cx="12" cy="12" r="2.5" />
          <circle cx="4" cy="12" r="1.5" />
          <circle cx="20" cy="12" r="1.5" />
          <circle cx="12" cy="4" r="1.5" />
          <circle cx="12" cy="20" r="1.5" />
          <line x1="12" y1="12" x2="4" y2="12" />
          <line x1="12" y1="12" x2="20" y2="12" />
          <line x1="12" y1="12" x2="12" y2="4" />
          <line x1="12" y1="12" x2="12" y2="20" />

        </svg>

      </div>

      <div className="relative z-10 max-w-4xl text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent"
        >
          {displayedText}
          <span className="ml-1 text-blue-400 font-light">
            {showCursor ? "|" : ""}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xl md:text-2xl text-slate-200 mb-6"
        >
          Profissional de tecnologia com foco em análise e soluções orientadas a dados.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-slate-200 max-w-2xl mx-auto mb-10"
        >
          Big Data & Business Analytics, desenvolvendo projetos
          que unem organização, raciocínio lógico e inteligência analítica.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex justify-center gap-4"
        >

          <a 
            href="#projetos" 
            className="relative px-6 py-3 rounded-lg bg-blue-600 transition duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_35px_rgba(59,130,246,0.5)]"
          >
            Ver Projetos
          </a>

          <a
            href="#contato"
            className="px-6 py-3 border border-slate-600 rounded-lg hover:border-blue-500 hover:text-blue-400 transition duration-300"
          >
            Entrar em contato
          </a>
        </motion.div>

      </div>
      {/* Transição para próxima seção */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-slate-900 pointer-events-none" />
    </section>
  );
}