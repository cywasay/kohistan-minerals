"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Utensils,
  Droplets,
  ShoppingBag,
  Sparkles,
  Home,
  TreePine,
} from "lucide-react";

export default function Applications() {
  const apps = [
    { title: "Food & Beverage Manufacturers", icon: <Utensils size={24} /> },
    {
      title: "Chemical & Processing Industries",
      icon: <Building2 size={24} />,
    },
    { title: "Water Treatment Facilities", icon: <Droplets size={24} /> },
    { title: "Retail & Private Label Brands", icon: <ShoppingBag size={24} /> },
    { title: "Spa & Wellness Centers", icon: <Sparkles size={24} /> },
    { title: "Construction & Interior Projects", icon: <Home size={24} /> },
    { title: "Agriculture & Livestock", icon: <TreePine size={24} /> },
  ];

  return (
    <section className="py-24 bg-white text-black" id="applications">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-shrink-0 lg:w-1/3"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[2px] w-12 bg-[#CA7A7B]" />
              <span className="text-[#CA7A7B] font-bold tracking-widest uppercase text-sm">
                Applications We Serve
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Powering Multiple <br />
              <span className="text-[#CA7A7B]">Industries</span>
            </h2>

            <p className="text-black/60 leading-relaxed text-lg">
              Our high-purity minerals provide essential solutions across a
              diverse range of sectors, from heavy manufacturing to premium
              gourmet experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
            {apps.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#F8F8F8] p-8 rounded-[2rem] border border-black/5 hover:border-[#CA7A7B]/30 hover:shadow-xl hover:shadow-black/[0.02] transition-all group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#CA7A7B] group-hover:text-white transition-all shadow-sm border border-black/5">
                  <div className="text-[#CA7A7B] group-hover:text-white">
                    {app.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black leading-tight">
                  {app.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
