import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-verde-600 font-bold text-xs uppercase tracking-[0.3em] mb-3">
              Quiénes somos
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tighter mb-6">
              Ingeniería con
              <br />
              <span className="text-verde-600">propósito</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              TecnoIngeniería B.O. nace con la visión de transformar la forma en
              que las empresas de la región Caribe adoptan y usan la tecnología.
              Desde Ciénaga, Magdalena, desarrollamos soluciones robustas para
              sectores contables, administrativos y comerciales.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Creemos que la tecnología bien aplicada no es un lujo — es la
              diferencia entre competir y liderar. Por eso acompañamos a cada
              cliente desde el diagnóstico hasta la implementación y el soporte
              continuo.
            </p>
            <Link
              href="/nosotros"
              className="inline-flex items-center gap-2 bg-gray-950 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-verde-700 transition-all text-sm"
            >
              Conoce nuestro equipo
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
          </div>

          {/* Grid de Estadísticas */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                num: "100%",
                label: "Compromiso técnico",
                bg: "bg-verde-600",
                text: "text-white",
              },
              {
                num: "IT",
                label: "Especialistas certificados",
                bg: "bg-gray-950",
                text: "text-white",
              },
              {
                num: "24/7",
                label: "Soporte continuo",
                bg: "bg-verde-50",
                text: "text-verde-700",
              },
              {
                num: "+5",
                label: "Años de experiencia",
                bg: "bg-gray-50",
                text: "text-gray-900",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`${item.bg} ${item.text} rounded-2xl p-8 flex flex-col items-center justify-center text-center ${i === 1 ? "lg:translate-y-6" : ""} ${i === 2 ? "lg:-translate-y-6" : ""}`}
              >
                <span className="font-display text-4xl font-black mb-2">
                  {item.num}
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest opacity-75">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
