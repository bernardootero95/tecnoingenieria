import Link from "next/link";
import { getProyectos } from "@/lib/repositories";

export const metadata = {
  title: "Proyectos Realizados | Portafolio de Soluciones Tecnológicas",
  description:
    "Portafolio de proyectos de TecnoIngeniería B.O.: sistemas de software, infraestructura de redes, dashboards de datos y consultoría tecnológica para empresas en Colombia.",
  alternates: {
    canonical: "https://tecnoingenieriabo.com/proyectos",
  },
  openGraph: {
    title: "Proyectos | TecnoIngeniería B.O.",
    description:
      "Portafolio de soluciones tecnológicas entregadas a empresas en Colombia.",
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
            Nuestro trabajo
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white tracking-tighter mb-6">
            Proyectos realizados
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Casos de éxito reales. Soluciones tecnológicas que transformaron la
            operación de empresas e instituciones en Colombia.
          </p>
        </div>
      </section>

      {/* Proyectos grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {proyectos.map((p) => (
              <article
                key={p.id}
                className="group relative bg-gray-50 border border-gray-100 rounded-3xl p-10 hover:border-verde-200 hover:shadow-xl hover:shadow-verde-600/10 transition-all duration-300 overflow-hidden"
              >
                {/* Número decorativo */}
                <span className="absolute top-6 right-8 font-display text-8xl font-black text-gray-100 group-hover:text-verde-50 transition-colors select-none">
                  {String(p.id).padStart(2, "0")}
                </span>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-bold text-verde-600 bg-verde-50 border border-verde-100 px-3 py-1 rounded-full">
                      {p.categoria}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">
                      {p.año}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl font-extrabold text-gray-950 tracking-tighter mb-2">
                    {p.titulo}
                  </h2>
                  <p className="text-verde-600 text-xs font-bold uppercase tracking-widest mb-4">
                    {p.cliente}
                  </p>
                  <p className="text-gray-500 leading-relaxed">
                    {p.descripcion}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Placeholder más proyectos */}
          <div className="mt-10 bg-verde-600 rounded-3xl p-10 text-center text-white">
            <h2 className="font-display text-2xl font-extrabold mb-3">
              ¿Quieres ver más proyectos?
            </h2>
            <p className="text-verde-100 mb-6">
              Contáctanos y te compartimos nuestro portafolio completo con
              fichas técnicas detalladas.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-white text-verde-700 font-extrabold px-8 py-3.5 rounded-xl hover:bg-verde-50 transition-all text-sm uppercase tracking-wide"
            >
              Solicitar portafolio completo
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="mx-auto max-w-xl px-6">
          <h2 className="font-display text-3xl font-extrabold text-gray-950 tracking-tighter mb-4">
            Tu empresa puede ser el próximo caso de éxito
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
