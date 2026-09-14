export const empresa = {
  nombre: "TecnoIngeniería B.O.",
  slogan: "Impulsamos tu mundo digital",
  descripcion:
    "Empresa de tecnología en Ciénaga, Magdalena, especializada en desarrollo de software a la medida, redes e infraestructura IT, análisis de datos y consultoría tecnológica.",
  ciudad: "Ciénaga",
  departamento: "Magdalena",
  pais: "Colombia",
  telefono: "+57 304 640 2211",
  email: "contacto@tecnoingenieriabo.com",
  direccion: "Ciénaga, Magdalena, Colombia",
};

export const servicios = [
  {
    id: "software",
    titulo: "Desarrollo de Software",
    descripcion:
      "Construimos aplicaciones web y de escritorio a la medida de tu negocio. Desde sistemas contables y administrativos hasta plataformas digitales complejas, diseñadas para escalar.",
    icono: "⚙️",
    keywords: [
      "desarrollo de software",
      "aplicaciones web",
      "sistemas a la medida",
    ],
    slug: "desarrollo-software",
  },
  {
    id: "redes",
    titulo: "Redes e Infraestructura",
    descripcion:
      "Instalación, configuración y mantenimiento de redes LAN/WAN, cableado estructurado, Wi-Fi corporativo y soporte técnico continuo para mantener tu infraestructura operando.",
    icono: "🌐",
    keywords: [
      "redes empresariales",
      "infraestructura IT",
      "cableado estructurado",
    ],
    slug: "redes-infraestructura",
  },
  {
    id: "datos",
    titulo: "Análisis de Datos",
    descripcion:
      "Convertimos tus datos en decisiones. Dashboards interactivos, reportes automatizados e inteligencia de negocio para que veas tu empresa con claridad.",
    icono: "📊",
    keywords: ["análisis de datos", "business intelligence", "dashboards"],
    slug: "analisis-datos",
  },
  {
    id: "consultoria",
    titulo: "Consultoría Tecnológica",
    descripcion:
      "Asesoramos a empresas y establecimientos en la adopción de tecnología adecuada para sus procesos. Diagnóstico, planificación e implementación de soluciones digitales.",
    icono: "💡",
    keywords: [
      "consultoría tecnológica",
      "transformación digital",
      "asesoría IT",
    ],
    slug: "consultoria-tecnologica",
  },
];

export const productos = [
  {
    id: 1,
    titulo: "IngeFact — Facturación Electrónica",
    descripcion:
      "Plataforma SaaS de facturación electrónica para Colombia, con panel de administración, panel de usuario y landing propia, pensada para operar en modalidad multi-cliente.",
    categoria: "Software",
    año: "2025",
    tecnologias: [
      "Next.js",
      "React",
      "Vite",
      "Supabase (PostgreSQL)",
      "Monorepo (npm workspaces)",
    ],
    resultado:
      "Monorepo con aplicaciones independientes (landing, panel admin y panel de usuario) que comparten librerías internas de UI y lógica de negocio, con autenticación y base de datos gestionadas en Supabase.",
  },
  {
    id: 2,
    titulo: "Sistema de Pedidos y Despacho",
    usadoPor: "En uso por empresas del sector logístico",
    descripcion:
      "Aplicación web para gestionar el ciclo completo de pedidos, despacho y entrega: asignación a vehículos y repartidores, y control de estados en tiempo real.",
    categoria: "Software",
    año: "2025",
    tecnologias: [
      "React",
      "Vite",
      "Supabase (PostgreSQL)",
      "Tailwind CSS",
      "React Router",
    ],
    resultado:
      "Diseñado como SaaS multi-tenant / white-label: cada despliegue se personaliza (marca, logo, colores) por variables de entorno, con roles diferenciados para vendedores, despachadores, repartidores y gerencia, y catálogos de clientes, productos y vehículos.",
  },
  {
    id: 3,
    titulo: "Contaflow — Gestión Contable y Vencimientos",
    usadoPor: "En uso por firmas de contabilidad",
    descripcion:
      "Sistema interno para firmas contables: gestión del equipo de trabajo, directorio de clientes y calendario automatizado de vencimientos y obligaciones tributarias.",
    categoria: "Software",
    año: "2025",
    tecnologias: [
      "React",
      "TypeScript",
      "Vite",
      "Supabase",
      "React Hook Form + Zod",
    ],
    resultado:
      "Nació como solución a la medida para la firma Villarreal-Romero y hoy opera como plataforma compartida entre firmas contables, con roles jerárquicos, borrado lógico para auditoría y cálculo automático de obligaciones por cliente.",
  },
];

export const proyectos = [
  {
    id: 1,
    titulo: "Sistema de Emisión de Certificados",
    cliente: "Firma contable",
    descripcion:
      "Plataforma web para la gestión y emisión masiva de certificados de retención en la fuente e ICA, acorde a la normativa DIAN, con generación de PDFs validables por código QR.",
    categoria: "Software",
    año: "2025",
    tecnologias: [
      "React",
      "Tailwind CSS",
      "Firebase (Firestore + Auth)",
      "jsPDF",
      "Recharts",
    ],
    resultado:
      "Gestión multicliente (varias empresas emisoras desde una sola plataforma), carga masiva de retenciones vía Excel, cálculo automático de totales y descarga empaquetada (ZIP) de certificados históricos, con roles y permisos por usuario.",
  },
  {
    id: 2,
    titulo: "ETL de Reportes para Gestantes",
    cliente: "Entidad del sector salud",
    descripcion:
      "Aplicación de escritorio que transforma el listado prenatal extendido al formato de cohorte gestante exigido, para que la entidad pueda rendir sus informes ante las EPS a las que presta servicio.",
    categoria: "Datos",
    año: "2025",
    tecnologias: ["Python", "PySimpleGUI", "openpyxl", "PyInstaller (.exe)"],
    resultado:
      "Mapea los campos por nombre de columna (no por posición), omite registros incompletos y agrega la información del mes como una hoja nueva sin modificar el histórico existente. Tiene una variante adaptada al formato de la EPS Coosalud.",
  },
  {
    id: 3,
    titulo: "ETL de Facturación Electrónica DIAN",
    cliente: "Empresa contable",
    descripcion:
      "Herramienta que procesa de forma masiva archivos XML de factura electrónica y nómina electrónica de la DIAN, y los consolida en un reporte Excel listo para el sistema contable.",
    categoria: "Datos",
    año: "2025",
    tecnologias: ["Python", "FastAPI", "pandas", "openpyxl"],
    resultado:
      "Evita la digitación manual de facturas: sube múltiples XML a la vez y obtiene un Excel con bases, IVA, retenciones e ICA ya organizados por documento, separando facturación de nómina en hojas distintas.",
  },
];

export const preguntasFrecuentes = [
  {
    id: 1,
    pregunta: "¿Qué servicios ofrece TecnoIngeniería B.O.?",
    respuesta:
      "Cuatro líneas principales: desarrollo de software a la medida, redes e infraestructura IT, análisis de datos y consultoría tecnológica. Puedes ver el detalle de cada una en la página de Servicios.",
  },
  {
    id: 2,
    pregunta: "¿Solo trabajan en Ciénaga o también fuera de la ciudad?",
    respuesta:
      "Tenemos sede en Ciénaga, Magdalena, pero atendemos proyectos en todo Colombia. Varios de nuestros trabajos entregados han sido para clientes de otras regiones.",
  },
  {
    id: 3,
    pregunta: "¿Cuánto cuesta un proyecto de software a la medida?",
    respuesta:
      "Depende del alcance: no es lo mismo un sistema completo que una automatización puntual. Por eso ofrecemos un diagnóstico inicial gratuito y sin compromiso antes de darte una cotización.",
  },
  {
    id: 4,
    pregunta: "¿En cuánto tiempo responden si los contacto?",
    respuesta:
      "Respondemos en menos de 24 horas a los mensajes que llegan por el formulario de contacto, con un diagnóstico inicial de tu proyecto.",
  },
  {
    id: 5,
    pregunta: "¿Desarrollan software propio o solo proyectos a la medida para clientes?",
    respuesta:
      "Ambas cosas. Tenemos productos propios como IngeFact, nuestro sistema de facturación electrónica, y además desarrollamos proyectos a la medida para clientes de distintos sectores — puedes verlos en Productos y en Proyectos entregados.",
  },
  {
    id: 6,
    pregunta: "¿Qué pasa después de entregar el proyecto? ¿Dan soporte?",
    respuesta:
      "Acompañamos cada proyecto desde el diagnóstico inicial hasta la implementación, con soporte continuo una vez el sistema está en funcionamiento.",
  },
  {
    id: 7,
    pregunta: "¿Cómo inicio un proyecto con ustedes?",
    respuesta:
      "Escríbenos por el formulario de contacto, WhatsApp o correo contándonos qué necesitas. Te respondemos en menos de 24 horas con un diagnóstico inicial gratuito.",
  },
];
