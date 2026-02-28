"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[2px] w-12 bg-[#CA7A7B]" />
              <span className="text-[#CA7A7B] font-bold tracking-widest uppercase text-sm">
                About Kohistan Minerals
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-black mb-8 leading-tight">
              A Trusted Partner in <br />
              <span className="text-[#CA7A7B]">Himalayan Excellence</span>
            </h1>

            <p className="text-lg text-black/70 mb-8 leading-relaxed">
              Kohistan Minerals is a trusted supplier and exporter of Himalayan
              salt products, sourced from mineral-rich deposits in Pakistan. Our
              mission is simple:
            </p>

            <div className="bg-[#F8F8F8] border-l-4 border-[#CA7A7B] p-8 rounded-r-3xl mb-12">
              <p className="text-xl italic font-medium text-black/80 leading-relaxed">
                "To deliver authentic, high-purity Himalayan salt that meets
                international quality standards from industrial use to food
                production and lifestyle products."
              </p>
            </div>

            <p className="text-black/60 leading-relaxed">
              We combine traditional mining expertise with structured
              processing, competitive pricing, and dependable export logistics.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden border border-black/5 shadow-2xl"
          >
            <Image
              src="/hero-bg.png"
              alt="Himalayan Salt Mine"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#ca7a7b]/10 mix-blend-multiply" />
          </motion.div>
        </div>
      </div>

      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F8F8F8]/50 -skew-x-12 z-0" />
    </section>
  );
}
