"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Zap,
  Globe,
  Cog,
  DollarSign,
  Briefcase,
} from "lucide-react";

export default function WhyChoose() {
  const points = [
    {
      title: "Direct Sourcing from Pakistan",
      icon: <CheckCircle className="text-white" size={24} />,
      content:
        "Our products come straight from verified Himalayan salt reserves ensuring purity and consistency.",
    },
    {
      title: "Customized Products",
      icon: <Cog className="text-white" size={24} />,
      content:
        "We offer tailored salt grades, sizes, and packaging to fit buyer specifications.",
    },
    {
      title: "Export-Ready Service",
      icon: <Globe className="text-white" size={24} />,
      content:
        "Complete export documentation, quality reports, and freight support make international trade seamless.",
    },
    {
      title: "Multi-Industry Applications",
      icon: <Briefcase className="text-white" size={24} />,
      content:
        "Our products serve food industries, manufacturing plants, wellness brands, agricultural sectors, and more.",
    },
    {
      title: "Competitive Global Pricing",
      icon: <DollarSign className="text-white" size={24} />,
      content:
        "With mine-direct supply, we offer competitive pricing without compromising on quality.",
    },
  ];

  return (
    <section
      className="py-24 bg-white text-black overflow-hidden relative"
      id="why-choose"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#141414] rounded-[3rem] p-12 lg:p-20 text-white overflow-hidden relative"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-2/3 h-full bg-[#CA7A7B]/10 -skew-x-12 z-0" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#CA7A7B]/5 blur-[120px] rounded-full z-0" />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-8">
              <div className="h-[2px] w-12 bg-[#CA7A7B]" />
              <span className="text-[#CA7A7B] font-bold tracking-widest uppercase text-sm">
                Why Kohistan Minerals
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-16 leading-tight max-w-2xl">
              We deliver quality and{" "}
              <span className="text-[#CA7A7B]">reliability</span> that global
              partners depend on.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12">
              {points.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col h-full"
                >
                  <div className="w-12 h-12 bg-[#CA7A7B] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#CA7A7B]/20">
                    {point.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{point.title}</h3>
                  <p className="text-white/60 leading-relaxed flex-grow">
                    {point.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
