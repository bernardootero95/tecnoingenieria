import Link from "next/link";
import { getServicios } from "@/lib/repositories";

export const metadata = {
  title: "Servicios de Tecnología | Desarrollo de Software, Redes y Datos",
  description:
    "Desarrollo de software a la medida, redes, análisis de datos y consultoría tecnológica en Ciénaga, Magdalena. Soluciones integrales para tu empresa.",
  keywords: [
    "desarrollo de software Colombia",
    "redes empresariales Magdalena",
    "análisis de datos empresas",
    "consultoría IT Colombia",
    "infraestructura tecnológica Ciénaga",
  ],
  alternates: {
    canonical: "https://tecnoingenieriabo.com/servicios",
  },
  openGraph: {
    title: "Servicios Tecnológicos | TecnoIngeniería B.O.",
    description:
      "Software a la medida, redes, datos y consultoría para empresas en Colombia.",
    url: "https://tecnoingenieriabo.com/servicios",
  },
};

const detalles = {
  software: {
    bullets: [
      "Sistemas contables y de facturación electrónica",
      "Plataformas web y aplicaciones empresariales",
      "Integraciones con DIAN y otras entidades",
      "Automatización de procesos internos",
      "Mantenimiento y evolución de sistemas existentes",
    ],
  },
  redes: {
    bullets: [
      "Diseño de arquitectura de red LAN/WAN",
      "Cableado estructurado Cat5e / Cat6 / Fibra óptica",
      "Configuración de switches, routers y firewalls",
      "Redes Wi-Fi corporativas con cobertura total",
      "Mantenimiento preventivo y correctivo",
      "Monitoreo de red en tiempo real",
    ],
  },
  datos: {
    bullets: [
      "Dashboards interactivos con KPIs clave",
      "Reportes automatizados programados",
      "Integración con sistemas existentes (ERP, CRM)",
      "Limpieza y normalización de bases de datos",
      "Visualización de datos para toma de decisiones",
    ],
  },
  consultoria: {
    bullets: [
      "Diagnóstico tecnológico del negocio",
      "Planificación de transformación digital",
      "Selección e implementación de herramientas",
      "Capacitación al equipo de trabajo",
      "Acompañamiento postventa y soporte",
    ],
  },
};

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

export default async function ServiciosPage() {
  // Obtenemos los datos de forma asíncrona desde el repositorio
  const servicios = await getServicios();

  return (
    <>
      {/* JSON-LD Servicios */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            provider: {
              "@type": "LocalBusiness",
              name: "TecnoIngeniería B.O.",
              url: "https://tecnoingenieriabo.com",
            },
            serviceType: servicios.map((s) => s.titulo),
            areaServed: "Colombia",
          }),
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="text-verde-400 font-bold text-xs uppercase tracking-[0.3em] mb-4">
            Lo que hacemos
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white tracking-tighter mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cuatro áreas de especialización que cubren todo el ciclo tecnológico
            de tu empresa, desde la infraestructura hasta la inteligencia de
            negocio.
          </p>
        </div>
      </section>

      {/* Servicios detallados */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-6">
          {servicios.map((s, i) => (
            <article
              key={s.id}
              id={s.slug}
              className={`rounded-3xl p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${
                i % 2 === 0 ? "bg-gray-50" : "bg-verde-600 text-white"
              }`}
            >
              <div>
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    i % 2 === 0
                      ? "bg-verde-100 text-verde-600"
                      : "bg-white/20 text-white"
                  }`}
                >
                  {iconMap[s.id]}
                </div>
                <h2
                  className={`font-display text-3xl font-extrabold tracking-tighter mb-4 ${
                    i % 2 === 0 ? "text-gray-950" : "text-white"
                  }`}
                >
                  {s.titulo}
                </h2>
                <p
                  className={`text-lg leading-relaxed ${i % 2 === 0 ? "text-gray-500" : "text-verde-100"}`}
                >
                  {s.descripcion}
                </p>
              </div>
              <div>
                <h3
                  className={`font-semibold text-xs uppercase tracking-widest mb-5 ${
                    i % 2 === 0 ? "text-verde-600" : "text-verde-200"
                  }`}
                >
                  Incluye
                </h3>
                <ul className="space-y-3">
                  {detalles[s.id].bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <svg
                        className={`w-5 h-5 mt-0.5 shrink-0 ${i % 2 === 0 ? "text-verde-500" : "text-verde-200"}`}
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
                      <span
                        className={`text-sm ${i % 2 === 0 ? "text-gray-600" : "text-verde-50"}`}
                      >
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="mx-auto max-w-xl px-6">
          <h2 className="font-display text-3xl font-extrabold text-gray-950 tracking-tighter mb-4">
            ¿Necesitas alguno de estos servicios?
          </h2>
          <p className="text-gray-500 mb-8">
            Escríbenos y te respondemos en menos de 24 horas.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-verde-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-verde-700 transition-all text-sm uppercase tracking-wide"
          >
            Solicitar cotización gratuita
          </Link>
        </div>
      </section>
    </>
  );
}
