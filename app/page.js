import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import ProductsSection from "@/components/sections/ProductsSection";
import CtaSection from "@/components/sections/CtaSection";

export const metadata = {
  title:
    "TecnoIngeniería B.O. | Desarrollo de Software y Redes en Ciénaga, Colombia",
  description:
    "Empresa de tecnología en Ciénaga, Magdalena: software a la medida, redes e infraestructura IT, análisis de datos y consultoría tecnológica.",
  alternates: {
    canonical: "https://tecnoingenieriabo.com",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProductsSection />
      <CtaSection />
    </>
  );
}
