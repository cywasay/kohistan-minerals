"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Kohistan Minerals Salt Mine"
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="h-[2px] w-12 bg-[#CA7A7B]" />
            <span className="text-[#CA7A7B] font-medium tracking-[0.2em] uppercase text-sm">
              Global Export & Distribution
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1]">
            Premium Himalayan Salt from Pakistan <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#CA7A7B]">
              Export & Bulk Supply
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-3xl leading-relaxed">
            We provide high-quality Himalayan salt products directly from source
            serving industries, food brands, wellness markets, and global
            distributors with consistent quality and reliable export services.
          </p>

          <div className="flex items-center gap-x-6 gap-y-2 mb-10 flex-wrap text-[#CA7A7B] font-bold text-sm sm:text-base uppercase tracking-wider">
            <span>Custom Grades</span>
            <span className="text-white/30">•</span>
            <span>Mine-Direct Supply</span>
            <span className="text-white/30">•</span>
            <span>Global Delivery</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#CA7A7B] text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#b8696a] transition-colors shadow-lg shadow-[#CA7A7B]/20"
            >
              Request a Quote
              <ArrowRight size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all"
            >
              View Products
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Gradient - Transition to White */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
