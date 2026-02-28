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
        className={`${outfit.variable} antialiased bg-[#0a0a0a] overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
