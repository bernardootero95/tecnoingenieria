import Link from 'next/link'
import Image from 'next/image'
import { empresa } from '@/lib/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-gray-800">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 relative">
                <Image src="/simbolo.png" alt="Logo TecnoIngeniería B.O." fill className="object-contain brightness-0 invert" />
              </div>
              <span className="font-display font-bold text-white text-sm">
                TECNO <span className="text-verde-400">INGENIERÍA</span> B.O.
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
              {empresa.descripcion}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">Navegación</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: '/', label: 'Inicio' },
                { href: '/nosotros', label: 'Nosotros' },
                { href: '/servicios', label: 'Servicios' },
                { href: '/proyectos', label: 'Proyectos' },
                { href: '/contacto', label: 'Contacto' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-verde-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">Contacto</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={`tel:${empresa.telefono}`} className="hover:text-verde-400 transition-colors">
                  {empresa.telefono}
                </a>
              </li>
              <li>
                <a href={`mailto:${empresa.email}`} className="hover:text-verde-400 transition-colors">
                  {empresa.email}
                </a>
              </li>
              <li className="text-gray-500">{empresa.direccion}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© {year} {empresa.nombre}. Todos los derechos reservados.</p>
          <p>{empresa.ciudad}, {empresa.departamento} — Colombia</p>
        </div>
      </div>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: empresa.nombre,
            description: empresa.descripcion,
            url: 'https://tecnoingenieriabo.com',
            telephone: empresa.telefono,
            email: empresa.email,
            address: {
              '@type': 'PostalAddress',
              addressLocality: empresa.ciudad,
              addressRegion: empresa.departamento,
              addressCountry: 'CO',
            },
            areaServed: {
              '@type': 'GeoCircle',
              geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: 11.0041,
                longitude: -74.2486,
              },
              geoRadius: '200000',
            },
            serviceType: [
              'Desarrollo de Software',
              'Redes e Infraestructura',
              'Análisis de Datos',
              'Consultoría Tecnológica',
            ],
            sameAs: [],
          }),
        }}
      />
    </footer>
  )
}
