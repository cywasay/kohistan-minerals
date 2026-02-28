"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const navStyles = isScrolled
    ? "bg-white/90 backdrop-blur-xl border-b border-black/5 py-4 shadow-sm"
    : "bg-transparent py-6";

  const linkStyles = isScrolled
    ? "text-black/70 hover:text-[#ca7a7b]"
    : "text-white/80 hover:text-white";

  const logoStyles = isScrolled ? "text-black" : "text-white";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${navStyles}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#ca7a7b] rounded-xl flex items-center justify-center font-bold text-white text-xl">
            K
          </div>
          <span
            className={`text-2xl font-bold tracking-tighter transition-colors ${logoStyles}`}
          >
            KOHISTAN<span className="text-[#ca7a7b]">MINERALS</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Products", href: "/#products" },
            { name: "Wellness", href: "/#wellness" },
            { name: "Contact", href: "/#contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium tracking-wide transition-colors ${linkStyles}`}
            >
              {item.name}
            </Link>
          ))}
          <button className="px-6 py-2.5 bg-[#ca7a7b] text-white rounded-full text-sm font-bold hover:bg-[#b8696a] transition-all shadow-lg shadow-[#ca7a7b]/10">
            Get Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden ${logoStyles}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white border-b border-black/5 p-6 flex flex-col gap-6 shadow-2xl"
        >
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Products", href: "/#products" },
            { name: "Wellness", href: "/#wellness" },
            { name: "Contact", href: "/#contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-black/80 text-lg font-bold hover:text-[#ca7a7b] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <button className="w-full py-4 bg-[#ca7a7b] text-white rounded-2xl font-bold">
            Get Quote
          </button>
        </motion.div>
      )}
    </nav>
  );
}
