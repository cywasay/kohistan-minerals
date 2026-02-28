"use client";

import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";

export default function AboutCTA() {
  return (
    <section
      className="py-24 bg-white text-black overflow-hidden relative"
      id="cta"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#CA7A7B] rounded-[3rem] p-12 lg:p-24 text-white overflow-hidden relative shadow-2xl"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/10 -skew-x-12 z-0" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 blur-[120px] rounded-full z-0" />

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <Send size={18} className="text-white" />
              <span className="text-white font-bold tracking-widest uppercase text-xs">
                Partner with Excellence
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">
              Build a Reliable Himalayan <br />
              <span className="text-white/80 italic">
                Salt Supply Partnership
              </span>
            </h2>

            <p className="text-white/80 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
              Partner with Kohistan Minerals for high-quality Himalayan salt
              products backed by structured export support and global logistics.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-[#CA7A7B] border-2 border-white rounded-full font-extrabold flex items-center justify-center gap-2 hover:bg-transparent hover:text-white transition-all shadow-xl shadow-black/10 group"
              >
                Request a Quote
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-full font-extrabold flex items-center justify-center gap-2 hover:bg-white/10 transition-all group"
              >
                Contact Our Sales Team
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
