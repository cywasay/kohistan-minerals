"use client";

import Navbar from "../(landing)/_components/Navbar";
import Footer from "../(landing)/_components/Footer";
import AboutHero from "./_components/AboutHero";
import AboutProducts from "./_components/AboutProducts";
import WhyChoose from "./_components/WhyChoose";
import Applications from "./_components/Applications";
import GlobalOperations from "./_components/GlobalOperations";
import AboutCTA from "./_components/AboutCTA";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      <Navbar />
      <AboutHero />
      <AboutProducts />
      <WhyChoose />
      <Applications />
      <GlobalOperations />
      <AboutCTA />
      <Footer />
    </main>
  );
}
