import Link from "next/link";
import { getProyectos } from "@/lib/repositories";
import ProjectCard from "@/components/ProjectCard";

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
            <ProjectCard key={p.id} proyecto={p} variant="compact" headingTag="h3" />
          ))}
        </div>
      </div>
    </section>
  );
}
