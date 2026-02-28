"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Globe2 } from "lucide-react";

export default function GlobalOperations() {
  const regions = [
    { title: "North America", flag: "🇺🇸" },
    { title: "Europe", flag: "🇪🇺" },
    { title: "Middle East", flag: "🇦🇪" },
    { title: "Asia", flag: "🇨🇳" },
  ];

  return (
    <section
      className="py-24 bg-[#F8F8F8] text-black overflow-hidden relative"
      id="global"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[2px] w-12 bg-[#CA7A7B]" />
              <span className="text-[#CA7A7B] font-bold tracking-widest uppercase text-sm">
                Global Operations
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
              Facilitating Global <br />
              <span className="text-[#CA7A7B]">Supply Chains</span>
            </h2>

            <p className="text-black/60 text-lg mb-12 leading-relaxed">
              Kohistan Minerals operates with a global export focus,
              facilitating supply chains to major international markets with
              precision and reliability.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {regions.map((region, index) => (
                <motion.div
                  key={region.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-3xl border border-black/5 flex items-center gap-4 hover:border-[#CA7A7B]/30 hover:shadow-lg hover:shadow-black/[0.1] transition-all"
                >
                  <span className="text-2xl">{region.flag}</span>
                  <span className="font-bold text-lg">{region.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#141414] rounded-[3rem] p-12 lg:p-16 text-white relative shadow-2xl"
          >
            <div className="absolute top-0 right-10 w-40 h-40 bg-[#CA7A7B]/10 blur-[100px] z-0" />

            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#CA7A7B] rounded-2xl flex items-center justify-center mb-10 shadow-lg shadow-[#CA7A7B]/20">
                <Globe2 className="text-white" size={32} />
              </div>

              <h3 className="text-3xl font-bold mb-8">Head Office (USA)</h3>

              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-[#CA7A7B]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white/40 text-sm font-bold uppercase tracking-wider mb-2">
                      Address
                    </h4>
                    <p className="text-lg font-medium">
                      1100 Louisiana Street, <br />
                      Houston, TX 77002
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center shrink-0">
                    <Mail className="text-[#CA7A7B]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white/40 text-sm font-bold uppercase tracking-wider mb-2">
                      Contact Emails
                    </h4>
                    <p className="text-lg font-bold hover:text-[#CA7A7B] transition-colors cursor-pointer block mb-1">
                      sales@kohistanminerals.com
                    </p>
                    <p className="text-lg font-bold hover:text-[#CA7A7B] transition-colors cursor-pointer block">
                      support@kohistanminerals.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
