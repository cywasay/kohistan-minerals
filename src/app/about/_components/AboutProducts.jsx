"use client";

import { motion } from "framer-motion";
import { Package, ChefHat, Heart, Box, Wheat } from "lucide-react";

export default function AboutProducts() {
  const products = [
    {
      title: "Industrial & Bulk Salt",
      icon: <Box className="text-[#CA7A7B]" size={32} />,
      content: "Our industrial salt grades are used for:",
      points: [
        "Chemical manufacturing",
        "Water treatment",
        "De-icing",
        "Textile, dyeing & tanning industries",
      ],
      formats: "Raw salt lumps, crushed salt, custom sizes.",
      extra:
        "Our bulk supply system ensures steady and scalable delivery for large industrial operations.",
    },
    {
      title: "Edible Himalayan Salt",
      icon: <Wheat className="text-[#CA7A7B]" size={32} />,
      content:
        "Produced for food and seasoning applications, our edible salts are known for natural mineral content and consistent quality.",
      variants: "Pink Himalayan Salt, White Crystal Salt, Black Salt",
      sizes: "Fine, Medium, Coarse",
      usage:
        "Table salt brands, Salt blends & seasonings, Private-label packaging",
    },
    {
      title: "Culinary Salt Products",
      icon: <ChefHat className="text-[#CA7A7B]" size={32} />,
      content: "Designed for kitchen use and gourmet experiences:",
      points: [
        "Salt cooking blocks",
        "Grilling slabs",
        "Steak shelving salt",
        "Mortar & pestle",
        "Salt serving bowls",
      ],
      target:
        "Perfect for chefs, restaurants, culinary brands, and premium kitchen retailers.",
    },
    {
      title: "Wellness & Lifestyle Salt",
      icon: <Heart className="text-[#CA7A7B]" size={32} />,
      content: "Products that enhance spaces and well-being:",
      points: [
        "Himalayan salt lamps",
        "Bath salts",
        "Salt massage stones",
        "Salt soap",
        "Salt bricks & tiles",
      ],
      target:
        "Ideal for wellness stores, spas, interior designers, and lifestyle retailers.",
    },
    {
      title: "Animal Nutrition Salt Blocks",
      icon: <Package className="text-[#CA7A7B]" size={32} />,
      content: "Mineral salt blocks for livestock health and nutrition:",
      points: [
        "Natural salt rocks",
        "Pressed salt blocks",
        "Salt lick stones (rope-attached)",
      ],
      target:
        "Perfect for farms, dairy operations, and livestock distributors.",
    },
  ];

  return (
    <section className="py-24 bg-[#F8F8F8] text-black" id="products">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-[2px] w-12 bg-[#CA7A7B]" />
            <span className="text-[#CA7A7B] font-bold tracking-widest uppercase text-sm">
              Our Products
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Extensive Range of Himalayan Salt Solutions
          </h2>
          <p className="text-black/60 max-w-2xl mx-auto text-lg leading-relaxed">
            We offer a wide range of Himalayan salt solutions designed to meet
            the needs of multiple industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2rem] border border-black/5 hover:border-[#CA7A7B]/20 shadow-xl shadow-black/[0.02] flex flex-col h-full group transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#CA7A7B]/5 rounded-2xl flex items-center justify-center group-hover:bg-[#CA7A7B]/10 transition-colors">
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold text-black group-hover:text-[#CA7A7B] transition-colors leading-tight">
                  {product.title}
                </h3>
              </div>

              <div className="space-y-4 flex-grow">
                <p className="text-black/70 font-medium text-sm md:text-base">
                  {product.content}
                </p>

                {product.points && (
                  <ul className="space-y-2">
                    {product.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-black/60 text-sm"
                      >
                        <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#CA7A7B]/40 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {product.variants && (
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-[#CA7A7B] mb-2">
                      Variants
                    </span>
                    <p className="text-black/60 leading-relaxed">
                      {product.variants}
                    </p>
                  </div>
                )}

                {product.sizes && (
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-[#CA7A7B] mb-2">
                      Sizes
                    </span>
                    <p className="text-black/60 leading-relaxed">
                      {product.sizes}
                    </p>
                  </div>
                )}

                {product.formats && (
                  <div className="bg-[#F8F8F8] p-3 rounded-xl border border-black/5">
                    <p className="text-black/60 text-xs leading-relaxed italic">
                      {product.formats}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-black/5">
                <p className="text-black/50 text-xs leading-relaxed">
                  {product.extra || product.usage || product.target}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
