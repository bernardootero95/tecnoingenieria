# TecnoIngeniería B.O. — Sitio Web

Sitio web empresarial construido con **Next.js 14 + Tailwind CSS**, optimizado para SEO desde el día uno.

---

## 🚀 Instalación

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

---

## 📁 Estructura del proyecto

```
tecnoingenieria/
├── app/
│   ├── layout.js          → Layout global + metadatos SEO globales
│   ├── page.js            → Página de inicio (Hero, Servicios, Nosotros, Proyectos, CTA)
│   ├── globals.css        → Estilos globales + fuentes
│   ├── sitemap.js         → Sitemap automático → /sitemap.xml
│   ├── robots.js          → robots.txt automático → /robots.txt
│   ├── nosotros/
│   │   └── page.js        → Página Nosotros
│   ├── servicios/
│   │   └── page.js        → Página Servicios
│   ├── proyectos/
│   │   └── page.js        → Página Proyectos
│   └── contacto/
│       └── page.js        → Página Contacto + formulario
├── components/
│   ├── Navbar.js          → Navegación (fija, con scroll effect)
│   └── Footer.js          → Footer + JSON-LD Schema.org
├── lib/
│   └── data.js            → ⭐ TODA la info de la empresa aquí
└── public/
    ├── simbolo.png        → Logo símbolo (para navbar/footer)
    ├── logo.png           → Logo completo
    └── og-image.png       → Imagen para redes sociales (crear: 1200x630px)
```

---

## ✏️ Cómo actualizar el contenido

**Todo el contenido editable está en `lib/data.js`**:

- Información de la empresa (teléfono, email, dirección)
- Lista de servicios con descripciones
- Proyectos del portafolio
- Equipo

---

## 🖼️ Imágenes requeridas

Coloca estas imágenes en la carpeta `/public/`:

| Archivo | Descripción | Tamaño recomendado |
|---------|-------------|-------------------|
| `simbolo.png` | Ícono/símbolo del logo | 200×200px |
| `logo.png` | Logo completo | 400×150px |
| `og-image.png` | Vista previa redes sociales | 1200×630px |

---

## 🔍 SEO implementado

| Feature | Implementación |
|---------|---------------|
| Metadatos por página | `export const metadata` en cada `page.js` |
| Sitemap automático | `app/sitemap.js` → genera `/sitemap.xml` |
| robots.txt | `app/robots.js` → genera `/robots.txt` |
| Open Graph (Facebook/LinkedIn) | En cada página |
| Twitter Cards | En layout global |
| JSON-LD Schema.org | En Footer (LocalBusiness) y Servicios |
| URL canónica | `alternates.canonical` en cada página |
| `lang="es-CO"` | En el `<html>` del layout |
| Fuentes optimizadas | Google Fonts con `display=swap` |
| Imágenes optimizadas | Componente `<Image>` de Next.js |

---

## 🌐 Deploy en Vercel (recomendado — GRATIS)

1. Sube el proyecto a GitHub
2. Ve a [vercel.com](https://vercel.com) → "New Project"
3. Conecta tu repo
4. Click en "Deploy"

¡Listo! Vercel detecta Next.js automáticamente.

---

## 📬 Conectar el formulario de contacto

El formulario está en `app/contacto/page.js`. Para activarlo tienes 3 opciones:

### Opción A — Firebase (como en tu proyecto anterior)
```js
// Instalar: npm install firebase
import { addDoc, collection } from 'firebase/firestore'
// Conectar en el submit del form
```

### Opción B — Resend (email directo, más simple)
```bash
npm install resend
```
Crea una Server Action en `app/actions.js` y conecta con tu cuenta en resend.com

### Opción C — Formspree (sin backend, gratis)
Cambia el `action="#"` del form por tu URL de Formspree: `action="https://formspree.io/f/XXXXXX"`

---

## 🎨 Paleta de colores

| Variable Tailwind | Hex | Uso |
|---|---|---|
| `verde-600` | `#008445` | Color principal |
| `verde-700` | `#006b38` | Hover |
| `verde-50` | `#f0faf4` | Fondos suaves |
| `verde-100` | `#d9f2e3` | Backgrounds |
| `gray-950` | `#030712` | Dark sections |
