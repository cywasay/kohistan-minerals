"use client";

import { motion } from "framer-motion";
import { Sparkles, Shield, Leaf } from "lucide-react";
import Image from "next/image";

export default function Wellness() {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 aspect-[4/5] md:aspect-square lg:aspect-auto h-[600px]">
              <Image
                src="/lamps.png"
                alt="Wellness & Relaxation"
                fill
                className="object-cover"
              />
            </div>

            {/* Abstract Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#CA7A7B]/20 blur-[100px] rounded-full z-0" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#CA7A7B]/10 blur-[120px] rounded-full z-0" />

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#CA7A7B] rounded-full flex items-center justify-center">
                  <Sparkles className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-3xl font-bold">100%</p>
                  <p className="text-white/60 text-sm">Natural Minerals</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#CA7A7B] font-bold tracking-widest uppercase text-sm">
                Lifestyle & Wellness
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Elevate Your Space with <br />
              <span className="text-[#CA7A7B]">Natural Serenity</span>
            </h2>

            <p className="text-white/60 text-lg mb-12 leading-relaxed">
              Our lifestyle products aren't just decor; they are wellness tools.
              From ion-releasing salt lamps that purify the air to mineral-rich
              spa salts that restore your skin's vitality.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1a1a1a] rounded-2xl flex items-center justify-center border border-white/5">
                  <Shield className="text-[#CA7A7B]" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Authentic Source</h4>
                  <p className="text-white/50">
                    Directly extracted from the deep veins of the Himalayan
                    ranges, ensuring 100% purity and mineral content.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1a1a1a] rounded-2xl flex items-center justify-center border border-white/5">
                  <Leaf className="text-[#CA7A7B]" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">
                    Eco-Friendly Crafting
                  </h4>
                  <p className="text-white/50">
                    We prioritize sustainable mining practices and artisanal
                    hand-crafting for all our lifestyle products.
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-12 px-10 py-4 border-2 border-[#CA7A7B] text-[#CA7A7B] rounded-full font-bold hover:bg-[#CA7A7B] hover:text-white transition-all duration-300">
              Discover Wellness Range
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
