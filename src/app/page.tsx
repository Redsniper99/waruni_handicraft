import HeroSection from "@/components/sections/HeroSection";
import ProductHighlights from "@/components/sections/ProductHighlights";
import AboutSection from "@/components/sections/AboutSection";
import GallerySection from "@/components/sections/GallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import OrderProcessSection from "@/components/sections/OrderProcessSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <ProductHighlights />
        <AboutSection />
        <GallerySection />
        <TestimonialsSection />
        <OrderProcessSection />
      </main>
      <Footer />
    </>
  );
}
