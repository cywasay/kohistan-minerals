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
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="h-[2px] w-12 bg-[#CA7A7B]" />
            <span className="text-[#CA7A7B] font-medium tracking-[0.2em] uppercase text-sm">
              Premium Himalayan Minerals
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Pure From The <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#CA7A7B]">
              Himalayan Depths
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl leading-relaxed">
            Extracting and refining the world's most pristine minerals. From
            gourmet culinary salts to architectural salt bricks, we bring the
            essence of nature to your doorstep.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#CA7A7B] text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#b8696a] transition-colors shadow-lg shadow-[#CA7A7B]/20"
            >
              Explore Products
              <ArrowRight size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition-all"
            >
              Download Catalog
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
    </section>
  );
}
