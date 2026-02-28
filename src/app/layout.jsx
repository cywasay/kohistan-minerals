import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kohistan Minerals",
  description: "Excellence in Himalayan Mineral Extraction & Supply",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased bg-black overflow-x-hidden`}
      >
        <div className="max-w-7xl mx-auto shadow-2xl relative bg-[#0a0a0a]">
          {children}
        </div>
      </body>
    </html>
  );
}
