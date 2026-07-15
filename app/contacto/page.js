import { getEmpresa } from "@/lib/repositories";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contacto | Solicita tu Cotización Gratuita",
  description:
    "Contacta a TecnoIngeniería B.O. en Ciénaga, Magdalena. Solicita una cotización gratuita para tu proyecto de software, redes o consultoría tecnológica.",
  alternates: {
    canonical: "https://tecnoingenieriabo.com/contacto",
  },
  openGraph: {
    title: "Contacto | TecnoIngeniería B.O.",
    description:
      "Solicita cotización gratuita — respondemos en menos de 24 horas.",
    url: "https://tecnoingenieriabo.com/contacto",
  },
};

export default async function ContactoPage() {
  const empresa = await getEmpresa();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="text-verde-400 font-bold text-xs uppercase tracking-[0.3em] mb-4">
            Hablemos
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white tracking-tighter mb-6">
            Cuéntanos tu proyecto
          </h1>
          <p className="text-gray-400 text-lg">
            Sin compromiso. Te respondemos en menos de 24 horas con un
            diagnóstico inicial gratuito.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Info lateral */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-verde-600 rounded-3xl p-8 text-white">
                <h2 className="font-display text-2xl font-extrabold mb-3 tracking-tighter">
                  Información de contacto
                </h2>
                <p className="text-verde-100 text-sm mb-8">
                  Estamos en Ciénaga, Magdalena, pero atendemos proyectos en
                  todo Colombia.
                </p>

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-verde-200 text-xs font-semibold mb-1">
                        Teléfono / WhatsApp
                      </p>
                      <a
                        href={`tel:${empresa.telefono}`}
                        className="text-white font-semibold hover:text-verde-200 transition-colors"
                      >
                        {empresa.telefono}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-verde-200 text-xs font-semibold mb-1">
                        Correo electrónico
                      </p>
                      <a
                        href={`mailto:${empresa.email}`}
                        className="text-white font-semibold hover:text-verde-200 transition-colors"
                      >
                        {empresa.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-verde-200 text-xs font-semibold mb-1">
                        Ubicación
                      </p>
                      <p className="text-white font-semibold">
                        {empresa.direccion}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Servicios disponibles */}
              <div className="bg-gray-50 rounded-3xl p-7 border border-gray-100">
                <h3 className="font-display font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">
                  Podemos ayudarte con
                </h3>
                <ul className="space-y-2">
                  {[
                    "Desarrollo de Software",
                    "Redes e Infraestructura",
                    "Análisis de Datos",
                    "Consultoría Tecnológica",
                  ].map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <svg
                        className="w-4 h-4 text-verde-500 shrink-0"
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
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Formulario — Client Component */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
