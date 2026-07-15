import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-24 bg-verde-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tighter mb-6">
          ¿Listo para transformar
          <br />
          tu empresa con tecnología?
        </h2>
        <p className="text-verde-100 text-lg mb-10 max-w-xl mx-auto">
          Cuéntanos tu proyecto. Sin compromiso, te damos un diagnóstico inicial
          gratuito.
        </p>
        <Link
          href="/contacto"
          className="inline-flex items-center gap-2 bg-white text-verde-700 font-extrabold px-10 py-4 rounded-xl hover:bg-verde-50 transition-all hover:shadow-2xl active:scale-95 text-sm uppercase tracking-wider"
        >
          Iniciar proyecto
          <svg
            className="w-4 h-4"
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
      </div>
    </section>
  );
}
