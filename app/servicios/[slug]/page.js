import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getServicios,
  getProcesoTrabajo,
  getProductos,
  getProyectos,
} from "@/lib/repositories";
import ProductCard from "@/components/ProductCard";
import ProjectCard from "@/components/ProjectCard";

const iconMap = {
  software: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="w-10 h-10"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
      />
    </svg>
  ),
  redes: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="w-10 h-10"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253"
      />
    </svg>
  ),
  datos: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="w-10 h-10"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
      />
    </svg>
  ),
  consultoria: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="w-10 h-10"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
      />
    </svg>
  ),
};

// No todos los servicios tienen todavía un producto o proyecto de ejemplo publicado.
const categoriaPorServicio = {
  software: "Software",
  datos: "Datos",
};

export async function generateStaticParams() {
  const servicios = await getServicios();
  return servicios.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const servicios = await getServicios();
  const servicio = servicios.find((s) => s.slug === params.slug);
  if (!servicio) return {};

  return {
    title: `${servicio.titulo} | Servicios`,
    description: servicio.descripcion,
    keywords: servicio.keywords,
    alternates: {
      canonical: `https://tecnoingenieriabo.com/servicios/${servicio.slug}`,
    },
    openGraph: {
      title: `${servicio.titulo} | TecnoIngeniería B.O.`,
      description: servicio.descripcion,
      url: `https://tecnoingenieriabo.com/servicios/${servicio.slug}`,
    },
  };
}

export default async function ServicioDetallePage({ params }) {
  const [servicios, proceso, productos, proyectos] = await Promise.all([
    getServicios(),
    getProcesoTrabajo(),
    getProductos(),
    getProyectos(),
  ]);

  const servicio = servicios.find((s) => s.slug === params.slug);
  if (!servicio) notFound();

  const categoria = categoriaPorServicio[servicio.id];
  const productosRelacionados = categoria
    ? productos.filter((p) => p.categoria === categoria)
    : [];
  // Si ningún producto coincide por categoría (redes, consultoría), igual
  // mostramos todos: son prueba de lo que construimos, aunque no sea 1 a 1.
  const productosAMostrar =
    productosRelacionados.length > 0 ? productosRelacionados : productos;
  const proyectosRelacionados = categoria
    ? proyectos.filter((p) => p.categoria === categoria)
    : [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: servicio.titulo,
    description: servicio.descripcion,
    serviceType: servicio.titulo,
    areaServed: "Colombia",
    provider: {
      "@id": "https://tecnoingenieriabo.com/#business",
    },
    url: `https://tecnoingenieriabo.com/servicios/${servicio.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-1.5 text-verde-400 font-bold text-xs uppercase tracking-[0.3em] mb-4 hover:text-verde-300 transition-colors"
          >
            ← Todos los servicios
          </Link>
          <div className="w-16 h-16 bg-white/10 text-verde-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
            {iconMap[servicio.id]}
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-white tracking-tighter mb-6">
            {servicio.titulo}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {servicio.descripcion}
          </p>
        </div>
      </section>

      {/* Qué incluye */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-verde-600 font-bold text-xs uppercase tracking-[0.3em] mb-3">
            Qué incluye
          </p>
          <h2 className="font-display text-3xl font-extrabold text-gray-950 tracking-tighter mb-8">
            Alcance del servicio
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {servicio.bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4"
              >
                <svg
                  className="w-5 h-5 mt-0.5 shrink-0 text-verde-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm text-gray-600">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-14">
            <p className="text-verde-600 font-bold text-xs uppercase tracking-[0.3em] mb-3">
              Proceso
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tighter">
              Cómo trabajamos
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {proceso.map((p) => (
              <div
                key={p.paso}
                className="bg-white border border-gray-100 rounded-2xl p-7"
              >
                <span className="font-display text-3xl font-black text-verde-100">
                  {String(p.paso).padStart(2, "0")}
                </span>
                <h3 className="font-display font-bold text-gray-900 mt-2 mb-2">
                  {p.titulo}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {p.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestros productos */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-verde-600 font-bold text-xs uppercase tracking-[0.3em] mb-3">
              Prueba de trabajo
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tighter">
              Nuestros productos
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              Software propio que construimos y mantenemos con la misma
              tecnología que aplicamos en este servicio.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {productosAMostrar.map((p) => (
              <ProductCard key={`producto-${p.id}`} producto={p} variant="full" headingTag="h3" />
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos relacionados */}
      {proyectosRelacionados.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-verde-600 font-bold text-xs uppercase tracking-[0.3em] mb-3">
                Trabajo con clientes
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tighter">
                Proyectos entregados en esta línea
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {proyectosRelacionados.map((p) => (
                <ProjectCard key={`proyecto-${p.id}`} proyecto={p} variant="full" headingTag="h3" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section
        className={`py-16 text-center ${
          proyectosRelacionados.length > 0 ? "bg-white" : "bg-gray-50"
        }`}
      >
        <div className="mx-auto max-w-xl px-6">
          <h2 className="font-display text-3xl font-extrabold text-gray-950 tracking-tighter mb-4">
            ¿Necesitas {servicio.titulo.toLowerCase()}?
          </h2>
          <p className="text-gray-500 mb-8">
            Escríbenos y te respondemos en menos de 24 horas con un
            diagnóstico inicial gratuito.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-verde-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-verde-700 transition-all text-sm uppercase tracking-wide"
            >
              Solicitar cotización gratuita
            </Link>
            <Link
              href="/preguntas-frecuentes"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-xl hover:border-verde-300 hover:text-verde-600 hover:bg-verde-50 transition-all text-sm"
            >
              Ver preguntas frecuentes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
