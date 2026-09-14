import Link from "next/link";
import { getProyectos } from "@/lib/repositories";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Proyectos Entregados | Trabajos para Clientes",
  description:
    "Proyectos de software a la medida que TecnoIngeniería B.O. ha desarrollado para sus clientes: gestión documental, ETL de datos y automatización de reportes.",
  alternates: {
    canonical: "https://tecnoingenieriabo.com/proyectos",
  },
  openGraph: {
    title: "Proyectos Entregados | TecnoIngeniería B.O.",
    description:
      "Trabajos a la medida entregados a clientes en distintos sectores.",
    url: "https://tecnoingenieriabo.com/proyectos",
  },
};

export default async function ProyectosPage() {
  const proyectos = await getProyectos();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="text-verde-400 font-bold text-xs uppercase tracking-[0.3em] mb-4">
            Trabajo con clientes
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white tracking-tighter mb-6">
            Proyectos entregados
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Soluciones a la medida que desarrollamos para resolver un problema
            puntual de un cliente, en distintos sectores.
          </p>
        </div>
      </section>

      {/* Proyectos grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {proyectos.map((p) => (
              <ProjectCard key={p.id} proyecto={p} variant="full" headingTag="h2" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="mx-auto max-w-xl px-6">
          <h2 className="font-display text-3xl font-extrabold text-gray-950 tracking-tighter mb-4">
            ¿Tienes un problema parecido?
          </h2>
          <p className="text-gray-500 mb-8">
            Cuéntanos qué necesitas y evaluamos si podemos construir algo a tu
            medida.
          </p>
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
