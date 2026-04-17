"use client";

import { motion } from "framer-motion";
import { Sparkle, List, X } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import { SPRING_TRANSITION } from "@/lib/animations";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={SPRING_TRANSITION}
      className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <motion.div 
        initial={{
          width: "100%",
          maxWidth: "1000px",
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.02)"
        }}
        animate={{
          width: isScrolled ? "100%" : "100%",
          maxWidth: isScrolled ? "800px" : "1000px",
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0.6)",
          boxShadow: isScrolled ? "0 10px 40px -10px rgba(0,0,0,0.08)" : "0 4px 20px rgba(0,0,0,0.02)"
        }}
        transition={SPRING_TRANSITION}
        className="backdrop-blur-xl border border-black/[0.04] rounded-full h-14 flex items-center justify-between px-2.5 pointer-events-auto"
      >
        {/* Logo */}
        <div className="flex items-center gap-2 pl-3 cursor-pointer group">
          <div className="w-8 h-8 bg-[#111] rounded-full flex items-center justify-center transition-transform group-hover:scale-95">
            <Sparkle weight="fill" className="text-white w-4 h-4" />
          </div>
          <span className="font-bold text-[15px] tracking-tight text-[#111]">HNPVN</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {['Tính năng', 'Giải pháp', 'Bảo mật', 'Bảng giá'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="px-4 py-2 text-[14px] font-bold text-[#666] hover:text-[#111] rounded-full hover:bg-black/5 transition-all"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <a href="#" className="hidden sm:inline-flex items-center justify-center h-10 px-4 text-[14px] font-bold text-[#111] hover:bg-black/5 rounded-full transition-colors">
            Đăng nhập
          </a>
          <motion.a 
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="#download"
            className="hidden sm:inline-flex items-center justify-center h-10 px-5 text-[14px] font-bold text-white bg-[#111] rounded-full shadow-[0_2px_15px_rgba(0,0,0,0.1)] transition-colors"
          >
            Cài đặt App
          </motion.a>
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center text-[#111] bg-black/5 rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X weight="bold" /> : <List weight="bold" />}
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
}
