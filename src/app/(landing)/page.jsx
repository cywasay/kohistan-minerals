import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Categories from "./_components/Categories";
import Wellness from "./_components/Wellness";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";

export const metadata = {
  title: "Kohistan Minerals | Premium Himalayan Salt & Minerals",
  description:
    "Pure Himalayan mineral solutions. From industrial salt and gourmet culinary products to wellness lamps and architectural salt bricks.",
};

export default function LandingPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <Hero />
      <div id="products">
        <Categories />
      </div>
      <div id="wellness">
        <Wellness />
      </div>
      <Contact />
      <Footer />
    </main>
  );
}
