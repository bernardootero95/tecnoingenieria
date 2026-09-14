import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-16">
      {/* Grid decorativo */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Blobs verdes de fondo */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-2xl max-h-2xl bg-verde-50 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl opacity-70" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] max-w-lg max-h-lg bg-verde-100 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl opacity-50" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 py-24 text-center">
        {/* Chip de Ubicación */}
        <div className="inline-flex items-center gap-2 bg-verde-50 border border-verde-200 text-verde-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 bg-verde-600 rounded-full animate-pulse" />
          Ciénaga, Magdalena · Colombia
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-950 leading-[1.0] tracking-tighter mb-6 animate-fade-up">
          Impulsamos
          <br />
          <span className="text-verde-600">tu mundo</span>
          <br />
          digital
        </h1>

        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-up delay-200">
          Desarrollo de software a la medida, redes e infraestructura IT,
          análisis de datos y consultoría tecnológica para empresas en Colombia.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 bg-verde-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-verde-700 transition-all hover:shadow-xl hover:shadow-verde-600/25 active:scale-95 text-sm uppercase tracking-wide"
          >
            Hablemos de tu proyecto
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <Link
            href="/servicios"
            className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-xl hover:border-verde-300 hover:text-verde-600 hover:bg-verde-50 transition-all text-sm"
          >
            Ver nuestros servicios
          </Link>
        </div>

        {/* Estadísticas rápidas */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-up delay-400">
          {[
            { num: "+5", label: "Años de experiencia" },
            { num: "100%", label: "Compromiso técnico" },
            { num: "24/7", label: "Soporte continuo" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm"
            >
              <p className="font-display text-3xl font-extrabold text-verde-600">
                {s.num}
              </p>
              <p className="text-xs text-gray-500 mt-1 font-medium uppercase tracking-wide">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
