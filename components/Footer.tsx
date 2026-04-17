"use client";

import { Sparkle } from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="bg-[#FAFAFC] py-16 border-t border-black/[0.04]">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-black/[0.04]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#111] rounded-full flex items-center justify-center">
              <Sparkle weight="fill" className="text-white w-4 h-4" />
            </div>
            <span className="font-black text-[17px] tracking-tight text-[#111]">HNPVN &copy;</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-[13px] font-bold text-[#888] uppercase tracking-widest">
            <a href="#" className="hover:text-[#111] transition-colors">Giải Pháp</a>
            <a href="#" className="hover:text-[#111] transition-colors">Bảng Giá</a>
            <a href="#" className="hover:text-[#111] transition-colors">An Toàn</a>
            <a href="#" className="hover:text-[#111] transition-colors">API</a>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[#888] text-[12px] font-medium tracking-wide">
          <div>&copy; {new Date().getFullYear()} HNPVN Inc. Engineered for scale.</div>
          <div className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-[#111] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#111] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
