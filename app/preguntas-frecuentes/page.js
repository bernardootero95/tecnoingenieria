import Link from "next/link";
import { getPreguntasFrecuentes } from "@/lib/repositories";

export const metadata = {
  title: "Preguntas Frecuentes | Servicios, Precios y Tiempos de Respuesta",
  description:
    "Resolvemos las dudas más comunes sobre nuestros servicios, cobertura, tiempos de respuesta y cómo iniciar un proyecto con TecnoIngeniería B.O.",
  alternates: {
    canonical: "https://tecnoingenieriabo.com/preguntas-frecuentes",
  },
  openGraph: {
    title: "Preguntas Frecuentes | TecnoIngeniería B.O.",
    description:
      "Dudas comunes sobre nuestros servicios, cobertura y cómo empezar un proyecto.",
    url: "https://tecnoingenieriabo.com/preguntas-frecuentes",
  },
};

export default async function PreguntasFrecuentesPage() {
  const preguntas = await getPreguntasFrecuentes();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: preguntas.map((p) => ({
      "@type": "Question",
      name: p.pregunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: p.respuesta,
      },
    })),
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
          <p className="text-verde-400 font-bold text-xs uppercase tracking-[0.3em] mb-4">
            Resolvemos tus dudas
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white tracking-tighter mb-6">
            Preguntas frecuentes
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Lo que más nos preguntan antes de empezar un proyecto.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-4">
            {preguntas.map((p) => (
              <details
                key={p.id}
                className="group bg-gray-50 border border-gray-100 rounded-2xl p-6 open:border-verde-200 open:bg-verde-50/30 transition-colors"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-display font-bold text-gray-900">
                  {p.pregunta}
                  <svg
                    className="w-5 h-5 shrink-0 text-verde-600 transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="text-gray-500 text-sm leading-relaxed mt-4">
                  {p.respuesta}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="mx-auto max-w-xl px-6">
          <h2 className="font-display text-3xl font-extrabold text-gray-950 tracking-tighter mb-4">
            ¿Tienes otra pregunta?
          </h2>
          <p className="text-gray-500 mb-8">
            Escríbenos y te respondemos en menos de 24 horas.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-verde-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-verde-700 transition-all text-sm"
          >
            Contáctanos →
          </Link>
        </div>
      </section>
    </>
  );
}
