import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-[#CA7A7B] rounded-xl flex items-center justify-center font-bold text-white text-xl">
                K
              </div>
              <span className="text-2xl font-bold text-white tracking-tighter uppercase whitespace-nowrap">
                Kohistan<span className="text-[#CA7A7B]">Minerals</span>
              </span>
            </Link>
            <p className="text-white/40 leading-relaxed mb-8">
              Leading exporters and suppliers of high-purity Himalayan minerals,
              serving industrial, culinary, and wellness markets worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-[#CA7A7B]">
              Product Sectors
            </h4>
            <ul className="space-y-4 text-white/50">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Industrial Salt
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Culinary Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Lifestyle & Wellness
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Architectural Bricks
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Animal Feed Salt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-[#CA7A7B]">
              Quick Links
            </h4>
            <ul className="space-y-4 text-white/50">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About Our Mining
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Our Certificates
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Quality Assurance
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Download Catalog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-[#CA7A7B]">
              Newsletter
            </h4>
            <p className="text-white/40 mb-6 font-light">
              Stay updated with our latest products and mineral industry
              insights.
            </p>
            <div className="flex bg-white/5 border border-white/10 rounded-2xl overflow-hidden focus-within:border-[#CA7A7B]/50 transition-all">
              <input
                type="email"
                placeholder="email@example.com"
                className="bg-transparent border-none p-4 w-full focus:outline-none text-sm"
              />
              <button className="bg-[#CA7A7B] px-6 text-white font-bold text-xs uppercase tracking-widest">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-10 border-t border-white/5 text-white/30 text-sm gap-6">
          <p>© 2026 Kohistan Minerals. All rights reserved.</p>
          <div className="flex gap-10">
            <Link href="#" className="hover:text-[#CA7A7B] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#CA7A7B] transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-[#CA7A7B] transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
