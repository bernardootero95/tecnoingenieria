import Link from "next/link";
import { getProyectos } from "@/lib/repositories";

export default async function ProjectsSection() {
  const proyectos = await getProyectos();

  return (
    <section id="proyectos" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-verde-600 font-bold text-xs uppercase tracking-[0.3em] mb-3">
              Nuestro trabajo
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tighter">
              Proyectos realizados
            </h2>
          </div>
          <Link
            href="/proyectos"
            className="text-sm font-semibold text-verde-600 hover:text-verde-700 underline underline-offset-4 shrink-0"
          >
            Ver todos →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {proyectos.slice(0, 4).map((p) => (
            <article
              key={p.id}
              className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-verde-200 hover:shadow-xl hover:shadow-verde-600/10 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-bold text-verde-600 bg-verde-50 px-3 py-1 rounded-full border border-verde-100">
                  {p.categoria}
                </span>
                <span className="text-xs text-gray-400">{p.año}</span>
              </div>
              <h3 className="font-display font-bold text-gray-900 text-xl mb-2 tracking-tight">
                {p.titulo}
              </h3>
              <p className="text-xs text-gray-400 mb-3 font-medium">
                {p.cliente}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {p.descripcion}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
