import Link from "next/link";
import { getProductos } from "@/lib/repositories";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Productos Propios | Software Desarrollado por TecnoIngeniería B.O.",
  description:
    "Conoce los productos propios de TecnoIngeniería B.O.: IngeFact, Sistema de Pedidos y Despacho y Contaflow. Software desarrollado y mantenido por nuestro equipo.",
  alternates: {
    canonical: "https://tecnoingenieriabo.com/productos",
  },
  openGraph: {
    title: "Productos Propios | TecnoIngeniería B.O.",
    description:
      "Software propio desarrollado por TecnoIngeniería B.O., aplicado en distintos sectores.",
    url: "https://tecnoingenieriabo.com/productos",
  },
};

export default async function ProductosPage() {
  const productos = await getProductos();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="text-verde-400 font-bold text-xs uppercase tracking-[0.3em] mb-4">
            Productos propios
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white tracking-tighter mb-6">
            Nuestros productos
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Plataformas y sistemas que diseñamos, desarrollamos y evolucionamos
            nosotros mismos, aplicando la misma tecnología que usamos con
            nuestros clientes.
          </p>
        </div>
      </section>

      {/* Productos grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {productos.map((p) => (
              <ProductCard key={p.id} producto={p} variant="full" headingTag="h2" />
            ))}
          </div>

          <div className="mt-10 bg-verde-600 rounded-3xl p-10 text-center text-white">
            <h2 className="font-display text-2xl font-extrabold mb-3">
              ¿Quieres conocer más sobre estos productos?
            </h2>
            <p className="text-verde-100 mb-6">
              Contáctanos y te contamos cómo funcionan y cómo podrían adaptarse
              a tu empresa.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-white text-verde-700 font-extrabold px-8 py-3.5 rounded-xl hover:bg-verde-50 transition-all text-sm uppercase tracking-wide"
            >
              Hablar con nosotros
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="mx-auto max-w-xl px-6">
          <h2 className="font-display text-3xl font-extrabold text-gray-950 tracking-tighter mb-4">
            ¿Buscas una solución a la medida para tu empresa?
          </h2>
          <p className="text-gray-500 mb-8">Hablemos de tu proyecto hoy.</p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-verde-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-verde-700 transition-all text-sm"
          >
            Iniciar proyecto →
          </Link>
        </div>
      </section>
    </>
  );
}
