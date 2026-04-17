"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { AppleLogo, GooglePlayLogo, CheckCircle, MapPinLine } from "@phosphor-icons/react";
import { FADE_UP, STAGGER } from "@/lib/animations";

export function Hero() {
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 500], [0, -60]);

  return (
    <main className="relative mt-32 flex flex-col items-center text-center overflow-hidden">
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/30 via-white/0 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={STAGGER}
        className="max-w-[48rem] mx-auto flex flex-col items-center z-10"
      >
        <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full border border-black/[0.04] bg-white text-[#111] text-[12px] font-bold tracking-tight shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          Trải nghiệm cùng HNPVN
        </motion.div>

        <motion.h1
          variants={FADE_UP}
          className="text-6xl font-black tracking-tighter text-[#111] leading-[0.95] mb-8"
        >
          Thao tác tinh giản, <br className="hidden sm:block" />
          hiệu năng mượt mà.
        </motion.h1>

        <motion.p variants={FADE_UP} className="text-sm text-[#666] max-w-2xl font-medium leading-relaxed mb-10">
          Ứng dụng sức mạnh của nguyên lý thị giác. HNPVN cung cấp một hệ sinh thái gọn gàng để kiểm soát quỹ lương, duyệt phép và tính toán hiệu suất 60FPS.
        </motion.p>

        <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full z-20 relative">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://testflight.apple.com/join/ewjNrHAC"
            target="_blank"
            rel="noopener noreferrer"
            className="w-40 h-12 rounded-xl bg-[#111] text-white flex items-center justify-center gap-2.5 shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_25px_rgba(0,0,0,0.2)] transition-shadow ring-1 ring-[#333] ring-inset"
          >
            <AppleLogo weight="fill" className="w-5 h-5" />
            <span className="text-[14px] font-bold tracking-wide">Tải iOS</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Vinh364676/hnp-install/releases/download/1.0.0/hnp.apk"
            target="_blank"
            rel="noopener noreferrer"
            className="w-40 h-12 rounded-xl bg-white text-[#111] flex items-center justify-center gap-2.5 shadow-[0_4px_15px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:bg-black/[0.02] transition-colors"
          >
            <GooglePlayLogo weight="fill" className="w-5 h-5 text-[#111]" />
            <span className="text-[14px] font-bold tracking-wide">Tải Android</span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Clean Parallax Mockup Image */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 25, delay: 0.2 }}
        className="mt-16 relative w-full flex justify-center perspective-[2000px] z-10"
      >
        <motion.div
          style={{ y: yImage }}
        >
          <div className="relative w-[340px] sm:w-[400px] aspect-[9/19.5] rounded-[3.5rem] bg-white border-[6px] border-[#E5E5EA] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] overflow-hidden">
            <Image
              src="/hr.jpeg"
              alt="HNPVN Dashboard Interface"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Soft Glass Shine */}
          <div className="absolute top-0 right-0 w-[150%] h-[100%] bg-gradient-to-bl from-white/40 via-white/5 to-transparent rotate-[30deg] pointer-events-none" />
        </motion.div>

        {/* Framer Subtle Floating Elements */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 lg:top-40 left-[5%] lg:left-[20%] hidden md:flex items-center gap-3 p-3 pr-5 bg-white/95 backdrop-blur-xl border border-black/[0.04] rounded-full shadow-[0_15px_40px_-5px_rgba(0,0,0,0.08)] z-20"
        >
          <div className="w-9 h-9 rounded-full bg-[#111] flex items-center justify-center">
            <CheckCircle weight="fill" className="text-white w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-[13px] text-[#111]">Thêm nhân viên</div>
            <div className="text-[11px] text-[#888] font-bold uppercase tracking-wider mt-0.5">5 bước đơn giản</div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 lg:bottom-48 right-[5%] lg:right-[20%] hidden md:flex items-center gap-3 p-3 pr-5 bg-white/95 backdrop-blur-xl border border-black/[0.04] rounded-full shadow-[0_15px_40px_-5px_rgba(0,0,0,0.08)] z-20"
        >
          <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
            <MapPinLine weight="fill" className="w-5 h-5" />
          </div>
          <div className="text-left">
            <div className="font-bold text-[13px] text-[#111] mb-0.5">Vào ca tự động</div>
            <div className="text-[11px] text-blue-600 font-bold uppercase tracking-wider mt-0.5">08:00 AM &bull; GPS</div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
