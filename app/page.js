import Link from 'next/link'
import Image from 'next/image'
import { servicios, proyectos, empresa } from '@/lib/data'

export const metadata = {
  title: 'TecnoIngeniería B.O. | Desarrollo de Software y Redes en Ciénaga, Colombia',
  description:
    'Empresa de tecnología en Ciénaga, Magdalena. Desarrollo de software a la medida, redes e infraestructura IT, análisis de datos y consultoría tecnológica para empresas.',
  alternates: {
    canonical: 'https://tecnoingenieriabo.com',
  },
}

const iconMap = {
  software: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"/>
    </svg>
  ),
  redes: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253"/>
    </svg>
  ),
  datos: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/>
    </svg>
  ),
  consultoria: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"/>
    </svg>
  ),
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-16">
        {/* Grid decorativo */}
        <div className="absolute inset-0 bg-grid opacity-60" />

        {/* Blob verde */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-2xl max-h-2xl bg-verde-50 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl opacity-70" />
        <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] max-w-lg max-h-lg bg-verde-100 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl opacity-50" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 py-24 text-center">
          {/* Chip */}
          <div className="inline-flex items-center gap-2 bg-verde-50 border border-verde-200 text-verde-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 bg-verde-600 rounded-full animate-pulse" />
            Ciénaga, Magdalena · Colombia
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-950 leading-[1.0] tracking-tighter mb-6 animate-fade-up">
            Impulsamos<br />
            <span className="text-verde-600">tu mundo</span><br />
            digital
          </h1>

          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-up delay-200">
            Desarrollo de software a la medida, redes e infraestructura IT, análisis de datos
            y consultoría tecnológica para empresas en Colombia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-verde-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-verde-700 transition-all hover:shadow-xl hover:shadow-verde-600/25 active:scale-95 text-sm uppercase tracking-wide"
            >
              Hablemos de tu proyecto
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-xl hover:border-verde-300 hover:text-verde-600 hover:bg-verde-50 transition-all text-sm"
            >
              Ver nuestros servicios
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-up delay-400">
            {[
              { num: '+5', label: 'Años de experiencia' },
              { num: '100%', label: 'Compromiso técnico' },
              { num: '24/7', label: 'Soporte continuo' },
              { num: '+20', label: 'Proyectos entregados' },
            ].map((s) => (
              <div key={s.label} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <p className="font-display text-3xl font-extrabold text-verde-600">{s.num}</p>
                <p className="text-xs text-gray-500 mt-1 font-medium uppercase tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section id="servicios" className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-verde-600 font-bold text-xs uppercase tracking-[0.3em] mb-3">Lo que hacemos</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tighter">
              Nuestros Servicios
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              Soluciones tecnológicas integrales diseñadas para cada etapa del crecimiento de tu empresa.
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
                <p className="text-gray-500 text-sm leading-relaxed flex-grow">{s.descripcion}</p>
                <Link
                  href={`/servicios#${s.slug}`}
                  className="mt-5 inline-flex items-center gap-1 text-verde-600 font-semibold text-xs uppercase tracking-widest hover:gap-2 transition-all"
                >
                  Saber más
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOSOTROS (resumen) ── */}
      <section id="nosotros" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-verde-600 font-bold text-xs uppercase tracking-[0.3em] mb-3">Quiénes somos</p>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tighter mb-6">
                Ingeniería con<br />
                <span className="text-verde-600">propósito</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                TecnoIngeniería B.O. nace con la visión de transformar la forma en que las empresas
                de la región Caribe adoptan y usan la tecnología. Desde Ciénaga, Magdalena,
                desarrollamos soluciones robustas para sectores contables, administrativos y comerciales.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Creemos que la tecnología bien aplicada no es un lujo — es la diferencia entre
                competir y liderar. Por eso acompañamos a cada cliente desde el diagnóstico
                hasta la implementación y el soporte continuo.
              </p>
              <Link
                href="/nosotros"
                className="inline-flex items-center gap-2 bg-gray-950 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-verde-700 transition-all text-sm"
              >
                Conoce nuestro equipo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '100%', label: 'Compromiso técnico', bg: 'bg-verde-600', text: 'text-white' },
                { num: 'IT', label: 'Especialistas certificados', bg: 'bg-gray-950', text: 'text-white' },
                { num: '24/7', label: 'Soporte continuo', bg: 'bg-verde-50', text: 'text-verde-700' },
                { num: '+5', label: 'Años de experiencia', bg: 'bg-gray-50', text: 'text-gray-900' },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`${item.bg} ${item.text} rounded-2xl p-8 flex flex-col items-center justify-center text-center ${i === 1 ? 'lg:translate-y-6' : ''} ${i === 2 ? 'lg:-translate-y-6' : ''}`}
                >
                  <span className="font-display text-4xl font-black mb-2">{item.num}</span>
                  <span className="text-xs font-semibold uppercase tracking-widest opacity-75">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROYECTOS (preview) ── */}
      <section id="proyectos" className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <p className="text-verde-600 font-bold text-xs uppercase tracking-[0.3em] mb-3">Nuestro trabajo</p>
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
                <h3 className="font-display font-bold text-gray-900 text-xl mb-2 tracking-tight">{p.titulo}</h3>
                <p className="text-xs text-gray-400 mb-3 font-medium">{p.cliente}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{p.descripcion}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="py-24 bg-verde-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tighter mb-6">
            ¿Listo para transformar<br />tu empresa con tecnología?
          </h2>
          <p className="text-verde-100 text-lg mb-10 max-w-xl mx-auto">
            Cuéntanos tu proyecto. Sin compromiso, te damos un diagnóstico inicial gratuito.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-white text-verde-700 font-extrabold px-10 py-4 rounded-xl hover:bg-verde-50 transition-all hover:shadow-2xl active:scale-95 text-sm uppercase tracking-wider"
          >
            Iniciar proyecto
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
