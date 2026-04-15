import Link from 'next/link'
import { empresa, equipo } from '@/lib/data'

export const metadata = {
  title: 'Nosotros | Empresa de Tecnología en Ciénaga, Magdalena',
  description:
    'Conoce a TecnoIngeniería B.O., empresa tecnológica en Ciénaga, Magdalena. Misión, visión, valores y equipo especializado en software, redes y análisis de datos.',
  alternates: {
    canonical: 'https://tecnoingenieriabo.com/nosotros',
  },
  openGraph: {
    title: 'Nosotros | TecnoIngeniería B.O.',
    description: 'Empresa de tecnología en Ciénaga, Magdalena — misión, visión y equipo.',
    url: 'https://tecnoingenieriabo.com/nosotros',
  },
}

const valores = [
  { titulo: 'Precisión', descripcion: 'Cada línea de código y cada cable importa. Trabajamos con detalle técnico riguroso.' },
  { titulo: 'Compromiso', descripcion: 'Tu proyecto es nuestro proyecto. Estamos desde el inicio hasta que funciona perfecto.' },
  { titulo: 'Innovación', descripcion: 'Adoptamos las mejores tecnologías del mercado para que siempre estés un paso adelante.' },
  { titulo: 'Transparencia', descripcion: 'Comunicación clara en cada etapa: avances, costos y decisiones siempre contigo.' },
]

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <p className="text-verde-400 font-bold text-xs uppercase tracking-[0.3em] mb-4">Quiénes somos</p>
          <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white tracking-tighter mb-6">
            Tecno<span className="text-verde-400">Ingeniería</span> B.O.
          </h1>
          <p className="text-gray-400 text-xl font-light italic max-w-2xl mx-auto">
            "{empresa.slogan}"
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-verde-600 font-bold text-xs uppercase tracking-[0.3em] mb-3">Nuestra trayectoria</p>
              <h2 className="font-display text-4xl font-extrabold text-gray-950 tracking-tighter mb-6">
                Nacimos para impulsar<br />la tecnología en la región
              </h2>
              <div className="w-16 h-1 bg-verde-600 mb-8 rounded-full" />
              <p className="text-gray-500 leading-relaxed text-lg mb-4">
                TecnoIngeniería B.O. nació con la visión de cerrar la brecha tecnológica que existe
                entre las grandes ciudades y los municipios del Caribe colombiano. Desde Ciénaga,
                Magdalena, llevamos soluciones de clase mundial a empresas locales.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Hoy somos referentes regionales en desarrollo de software, infraestructura de redes
                y análisis de datos, con más de 5 años de experiencia y proyectos entregados a
                empresas privadas, instituciones educativas y entidades públicas.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '+5', label: 'Años de experiencia', bg: 'bg-verde-600 text-white' },
                { num: '+20', label: 'Proyectos entregados', bg: 'bg-gray-950 text-white' },
                { num: '100%', label: 'Clientes satisfechos', bg: 'bg-verde-50 text-verde-700' },
                { num: '4', label: 'Áreas de especialización', bg: 'bg-gray-50 text-gray-900' },
              ].map((s, i) => (
                <div key={i} className={`${s.bg} rounded-2xl p-8 text-center ${i === 1 ? 'lg:translate-y-5' : ''} ${i === 2 ? 'lg:-translate-y-5' : ''}`}>
                  <p className="font-display text-4xl font-black mb-2">{s.num}</p>
                  <p className="text-xs font-semibold uppercase tracking-widest opacity-75">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-100 rounded-3xl p-10 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-verde-100 text-verde-600 rounded-2xl flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"/>
                </svg>
              </div>
              <h2 className="font-display text-2xl font-extrabold text-gray-950 tracking-tighter mb-4 uppercase">Misión</h2>
              <p className="text-gray-500 leading-relaxed">
                Proveer soluciones tecnológicas innovadoras y escalables que optimicen la
                operatividad y competitividad de nuestros clientes, con un equipo comprometido
                con la excelencia técnica y el servicio al cliente.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl p-10 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-verde-100 text-verde-600 rounded-2xl flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h2 className="font-display text-2xl font-extrabold text-gray-950 tracking-tighter mb-4 uppercase">Visión</h2>
              <p className="text-gray-500 leading-relaxed">
                Ser la empresa de tecnología de referencia en la región Caribe colombiana para 2030,
                reconocida por la calidad de nuestras soluciones, la solidez de nuestro equipo
                y el impacto positivo en la digitalización empresarial regional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-verde-600 font-bold text-xs uppercase tracking-[0.3em] mb-3">Principios</p>
            <h2 className="font-display text-4xl font-extrabold text-gray-950 tracking-tighter">
              Nuestros valores
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {valores.map((v, i) => (
              <div key={i} className="group p-7 border border-gray-100 rounded-2xl hover:border-verde-200 hover:bg-verde-50 transition-all">
                <div className="w-10 h-10 bg-verde-100 text-verde-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-verde-600 group-hover:text-white transition-all">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-gray-900 mb-2">{v.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20 bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-verde-400 font-bold text-xs uppercase tracking-[0.3em] mb-3">El equipo</p>
            <h2 className="font-display text-4xl font-extrabold text-white tracking-tighter">
              Especialistas detrás de cada proyecto
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {equipo.map((m, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center hover:border-verde-700 transition-all">
                <div className="w-16 h-16 bg-verde-600/20 text-verde-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <h3 className="font-display font-bold text-white mb-1">{m.nombre}</h3>
                <p className="text-verde-400 text-xs font-semibold uppercase tracking-widest mb-3">{m.rol}</p>
                <p className="text-gray-400 text-sm">{m.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-white">
        <div className="mx-auto max-w-xl px-6">
          <h2 className="font-display text-3xl font-extrabold text-gray-950 tracking-tighter mb-4">
            ¿Trabajamos juntos?
          </h2>
          <p className="text-gray-500 mb-8">Estamos listos para escuchar tu proyecto y proponerte la mejor solución.</p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-verde-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-verde-700 transition-all text-sm uppercase tracking-wide"
          >
            Contáctanos
          </Link>
        </div>
      </section>
    </>
  )
}
