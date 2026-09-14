import Link from "next/link";
import { getProductos } from "@/lib/repositories";
import ProductCard from "@/components/ProductCard";

export default async function ProductsSection() {
  const productos = await getProductos();

  return (
    <section id="productos" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-verde-600 font-bold text-xs uppercase tracking-[0.3em] mb-3">
              Productos propios
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tighter">
              Lo que construimos
            </h2>
          </div>
          <Link
            href="/productos"
            className="text-sm font-semibold text-verde-600 hover:text-verde-700 underline underline-offset-4 shrink-0"
          >
            Ver todos →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {productos.slice(0, 4).map((p) => (
            <ProductCard key={p.id} producto={p} variant="compact" headingTag="h3" />
          ))}
        </div>
      </div>
    </section>
  );
}
