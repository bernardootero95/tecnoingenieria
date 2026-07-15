import Link from "next/link";
import { servicios } from "@/lib/data";

const iconMap = {
  software: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="w-7 h-7"
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
      className="w-7 h-7"
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
      className="w-7 h-7"
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
      className="w-7 h-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
      />
    </svg>
  ),
};

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-verde-600 font-bold text-xs uppercase tracking-[0.3em] mb-3">
            Lo que hacemos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tighter">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Soluciones tecnológicas integrales diseñadas para cada etapa del
            crecimiento de tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicios.map((s, i) => (
            <article
              key={s.id}
              className="group bg-white border border-gray-100 rounded-2xl p-7 hover:border-verde-200 hover:shadow-xl hover:shadow-verde-600/10 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-verde-50 text-verde-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-verde-600 group-hover:text-white transition-all duration-300">
                {iconMap[s.id]}
              </div>
              <h3 className="font-display font-bold text-gray-900 text-lg mb-3 tracking-tight">
                {s.titulo}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                {s.descripcion}
              </p>
              <Link
                href={`/servicios#${s.slug}`}
                className="mt-5 inline-flex items-center gap-1 text-verde-600 font-semibold text-xs uppercase tracking-widest hover:gap-2 transition-all"
              >
                Saber más
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
