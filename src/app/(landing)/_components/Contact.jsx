"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      className="py-16 md:py-24 bg-[#0a0a0a] text-white overflow-hidden relative"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto bg-[#141414] rounded-3xl md:rounded-[3rem] border border-white/5 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="p-8 md:p-12 lg:p-16 bg-[#CA7A7B] text-white">
              <h2 className="text-4xl font-bold mb-8">
                Ready to Partner with Us?
              </h2>
              <p className="text-white/80 text-lg mb-12">
                Whether you need industrial-scale mineral supply or bespoke
                wellness products, our team is ready to assist you.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm uppercase tracking-widest font-bold">
                      Email Us
                    </p>
                    <p className="text-xl font-medium">
                      info@kohistangroup.com.pk
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm uppercase tracking-widest font-bold">
                      Call Us
                    </p>
                    <p className="text-xl font-medium">+92 3XX XXXXXXX</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm uppercase tracking-widest font-bold">
                      Visit Us
                    </p>
                    <p className="text-xl font-medium">
                      Abbottabad, Khyber Pakhtunkhwa
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-16 border-t border-white/20">
                <p className="text-white/60 italic font-light text-lg">
                  "Sourcing the earth's purity for a sustainable future."
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 md:p-12 lg:p-16">
              <h3 className="text-2xl md:text-3xl font-bold mb-8">
                Send a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/40 text-sm mb-2 px-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-[#CA7A7B] transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-white/40 text-sm mb-2 px-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-[#CA7A7B] transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/40 text-sm mb-2 px-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-[#CA7A7B] transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-white/40 text-sm mb-2 px-2">
                    Subject
                  </label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-[#CA7A7B] transition-all">
                    <option>Industrial Supply</option>
                    <option>Wellness Products</option>
                    <option>Culinary Salts</option>
                    <option>Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/40 text-sm mb-2 px-2">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-[#CA7A7B] transition-all"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-[#CA7A7B] text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#b8696a] transition-all shadow-xl shadow-[#CA7A7B]/20"
                >
                  Send Inquiry
                  <Send size={18} />
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Background Blobs */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#CA7A7B]/10 blur-[150px] rounded-full z-0" />
    </section>
  );
}
