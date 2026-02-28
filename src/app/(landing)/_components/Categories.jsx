"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
  {
    id: 1,
    title: "Raw Mining",
    description:
      "Mine-direct lumps in Pink, White, and Black varieties for industrial solutions.",
    image: "/hero-bg.png", // Reusing for now or could generate more
    accent: "#CA7A7B",
  },
  {
    id: 2,
    title: "Edible Salts",
    description:
      "Professional grade gourmet salts including Pink, Red, White, and Black varieties.",
    image: "/edible.png",
    accent: "#CA7A7B",
  },
  {
    id: 3,
    title: "Lifestyle & Wellness",
    description:
      "Artisanal salt lamps, bath & spa products, and detoxifying massage stones.",
    image: "/lamps.png",
    accent: "#CA7A7B",
  },
  {
    id: 4,
    title: "Architectural",
    description:
      "Premium salt bricks, tiles, and panels for high-end spa and home design.",
    image: "/hero-bg.png", // Placeholder
    accent: "#CA7A7B",
  },
  {
    id: 5,
    title: "Animal Nutrition",
    description:
      "Essential mineral lick salts for livestock and agricultural excellence.",
    image: "/hero-bg.png", // Placeholder
    accent: "#CA7A7B",
  },
];

export default function Categories() {
  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {" "}
              Our Specialized <span className="text-[#CA7A7B]">Categories</span>
            </h2>
            <p className="text-white/60 text-lg">
              Explore our diverse range of Himalayan salt-based products, each
              crafted and refined to meet the highest industrial and culinary
              standards.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-sm font-medium">
              5 Product Sectors
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl bg-[#F8F8F8] border border-black/5 hover:border-[#CA7A7B]/30 transition-all cursor-pointer"
            >
              <div className="relative h-[300px] w-full overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
              </div>

              <div className="p-8 relative">
                <div className="absolute top-0 right-8 transform -translate-y-1/2 w-12 h-12 bg-[#CA7A7B] rounded-2xl flex items-center justify-center text-white shadow-xl">
                  {cat.id.toString().padStart(2, "0")}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#CA7A7B] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-black/60 leading-relaxed mb-6">
                  {cat.description}
                </p>
                <div className="flex items-center gap-2 text-[#CA7A7B] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More
                  <span className="text-xl">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
