import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
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
        className={`${nunitoSans.className} antialiased bg-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
