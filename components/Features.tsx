"use client";

import { motion } from "framer-motion";
import { MapPinLine, Wallet, CalendarCheck, ChartBar } from "@phosphor-icons/react";
import { FADE_UP, STAGGER, SPRING_TRANSITION } from "@/lib/animations";

export function Features() {
  return (
    <section id="tinh-nang" className="py-24 bg-white relative border-t border-black/[0.04] shadow-[0_-20px_40px_rgba(0,0,0,0.01)]">
      <div className="max-w-[1000px] mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={STAGGER}
          className="text-center mb-16 max-w-[500px] mx-auto"
        >
          <motion.h2 variants={FADE_UP} className="text-4xl md:text-5xl font-black tracking-tighter text-[#111] mb-5 leading-[1.05]">
            Thông minh. <br/>
            <span className="text-[#888]">Giải thuật tối ưu.</span>
          </motion.h2>
          <motion.p variants={FADE_UP} className="text-[16px] text-[#666] font-medium leading-relaxed">
            Mọi tính năng được bó gọn trong những khuôn mẫu tinh giản. Triệt tiêu 80% thao tác thừa.
          </motion.p>
        </motion.div>

        {/* Compressed Framer Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[300px]">
          
          {/* Box 1: Geofencing */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.99 }}
            transition={SPRING_TRANSITION}
            className="lg:col-span-2 bg-[#F9F9FB] rounded-[2rem] p-8 md:p-10 border border-black/[0.04] shadow-[0_2px_20px_rgba(0,0,0,0.02)] relative overflow-hidden group"
          >
            <div className="relative z-10 max-w-[300px]">
              <div className="w-12 h-12 bg-white rounded-[1rem] flex items-center justify-center mb-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)] text-[#111] border border-black/[0.03]">
                <MapPinLine weight="fill" className="w-5 h-5" />
              </div>
              <h3 className="text-[22px] font-black tracking-tight mb-3 text-[#111]">Tự động GPS & Wi-Fi</h3>
              <p className="text-[#666] text-[15px] font-medium leading-relaxed">
                Thiết lập bản đồ công ty. Khi nhân sự bước vào khu vực, HNPVN tự động quét qua Back-end và giục Check-in trên màn hình khóa.
              </p>
            </div>
            
            {/* Minimal Graphic UI */}
            <div className="absolute right-[-5%] bottom-[-15%] w-[50%] h-[85%] bg-white rounded-tl-[1.5rem] border border-black/[0.04] shadow-2xl flex flex-col p-5 opacity-60 group-hover:opacity-100 group-hover:bottom-[-10%] transition-all duration-700">
              <div className="w-full flex items-center justify-between mb-4">
                <div className="w-1/2 h-2.5 bg-[#f0f0f0] rounded-full" />
                <div className="w-8 h-8 rounded-full bg-[#111] flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white/50 animate-ping" />
                </div>
              </div>
              <div className="flex-1 rounded-xl bg-[#f8f8f8] flex items-center justify-center">
                <div className="w-14 h-14 rounded-full border-[3px] border-[#ebebeb] border-t-black animate-spin" />
              </div>
            </div>
          </motion.div>

          {/* Box 2: Payroll */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true}}
            whileHover={{ scale: 0.99 }}
            transition={SPRING_TRANSITION}
            className="bg-[#F9F9FB] rounded-[2rem] p-8 md:p-10 border border-black/[0.04] shadow-[0_2px_20px_rgba(0,0,0,0.02)] flex flex-col relative overflow-hidden group"
          >
            <div className="relative z-10 flex-1">
              <div className="w-12 h-12 bg-white rounded-[1rem] flex items-center justify-center mb-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)] text-[#111] border border-black/[0.03]">
                <Wallet weight="fill" className="w-5 h-5" />
              </div>
              <h3 className="text-[22px] font-black tracking-tight mb-3 text-[#111]">Lương Phụ cấp</h3>
              <p className="text-[#666] text-[15px] font-medium leading-relaxed">
                e-Payslip minh bạch, cấu trúc siêu chuẩn và bảo đảm bằng FaceID.
              </p>
            </div>
          </motion.div>

          {/* Box 3: Time Off */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.99 }}
            transition={SPRING_TRANSITION}
            className="bg-[#111] text-white rounded-[2rem] p-8 md:p-10 shadow-xl relative overflow-hidden group border border-[#222]"
          >
            <div className="relative z-10 flex-1 h-full flex flex-col">
              <div className="w-12 h-12 bg-white/10 rounded-[1rem] flex items-center justify-center mb-6 backdrop-blur-md border border-white/5 text-white">
                <CalendarCheck weight="fill" className="w-5 h-5" />
              </div>
              <h3 className="text-[22px] font-black tracking-tight mb-3">Xin phép 1-chạm</h3>
              <p className="text-[#888] text-[15px] font-medium leading-relaxed mb-6">
                Quản lý duyệt đơn nghỉ trực tiếp qua thông báo đẩy (Push Actions).
              </p>
              
              {/* Fake UI component */}
              <div className="mt-auto flex items-center gap-1.5 w-full h-[48px] bg-white/5 rounded-xl p-1.5 border border-white/10 backdrop-blur-md">
                <div className="w-1/2 h-full bg-white rounded-lg shadow-sm flex items-center justify-center">
                  <span className="text-[12px] font-black text-[#111] uppercase tracking-wider">Đồng ý</span>
                </div>
                <div className="w-1/2 h-full flex items-center justify-center">
                  <span className="text-[12px] font-black text-white/50 uppercase tracking-wider">Từ chối</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Box 4: Analytics Large */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true}}
            whileHover={{ scale: 0.99 }}
            transition={SPRING_TRANSITION}
            className="lg:col-span-2 bg-[#F9F9FB] rounded-[2rem] p-8 md:p-10 border border-black/[0.04] shadow-[0_2px_20px_rgba(0,0,0,0.02)] relative overflow-hidden group"
          >
            <div className="relative z-10 max-w-[300px]">
              <div className="w-12 h-12 bg-white rounded-[1rem] flex items-center justify-center mb-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)] text-[#111] border border-black/[0.03]">
                <ChartBar weight="fill" className="w-5 h-5" />
              </div>
              <h3 className="text-[22px] font-black tracking-tight mb-3 text-[#111]">Phân tích 60FPS</h3>
              <p className="text-[#666] text-[15px] font-medium leading-relaxed">
                Lướt xem báo cáo mượt mà. Theo dõi dòng KPI, tăng trưởng hiệu suất công việc hiển thị tức thì.
              </p>
            </div>
            
            {/* Minimal Black Chart */}
            <div className="absolute right-[-2%] bottom-[-5%] w-[45%] h-[60%] bg-white rounded-tl-[1.5rem] border border-black/[0.04] shadow-xl p-5 flex items-end gap-3 opacity-80 group-hover:opacity-100 transition-all duration-700">
              {[60, 40, 90, 70, 100].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 60, damping: 20, delay: i * 0.1 }}
                  className="flex-1 bg-[#111] rounded-t-md"
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
