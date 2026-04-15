import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  metadataBase: new URL('https://tecnoingenieriabo.com'),
  title: {
    default: 'TecnoIngeniería B.O. | Desarrollo de Software y Redes en Ciénaga, Colombia',
    template: '%s | TecnoIngeniería B.O.',
  },
  description:
    'Empresa de tecnología en Ciénaga, Magdalena. Desarrollo de software a la medida, instalación y mantenimiento de redes, análisis de datos y consultoría tecnológica para empresas.',
  keywords: [
    'desarrollo de software Ciénaga',
    'redes informáticas Magdalena',
    'consultoría tecnológica Colombia',
    'análisis de datos Ciénaga',
    'software a la medida Colombia',
    'TecnoIngeniería B.O.',
    'infraestructura IT Magdalena',
  ],
  authors: [{ name: 'TecnoIngeniería B.O.', url: 'https://tecnoingenieriabo.com' }],
  creator: 'TecnoIngeniería B.O.',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://tecnoingenieriabo.com',
    siteName: 'TecnoIngeniería B.O.',
    title: 'TecnoIngeniería B.O. | Impulsamos tu mundo digital',
    description:
      'Desarrollo de software, redes, análisis de datos y consultoría tecnológica en Ciénaga, Magdalena, Colombia.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TecnoIngeniería B.O. — Impulsamos tu mundo digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TecnoIngeniería B.O. | Desarrollo de Software en Colombia',
    description: 'Software a la medida, redes e infraestructura IT en Ciénaga, Magdalena.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://tecnoingenieriabo.com',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es-CO">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
