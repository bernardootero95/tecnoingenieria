"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-sm border-b border-verde-100"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <nav
        className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-16"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 relative shrink-0">
            <Image
              src="/simbolo.png"
              alt="Símbolo TecnoIngeniería B.O."
              fill
              sizes="36px"
              className="object-contain"
              priority
            />
          </div>
          <span className="font-display font-800 text-gray-900 text-sm leading-tight hidden sm:block">
            TECNO <span className="text-verde-600">INGENIERÍA</span> B.O.
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-600 hover:text-verde-600 transition-colors tracking-wide"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="text-sm font-semibold bg-verde-600 text-white px-5 py-2 rounded-lg hover:bg-verde-700 transition-all hover:shadow-lg hover:shadow-verde-600/20 active:scale-95"
          >
            Contacto
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-verde-50"
          aria-label="Abrir menú"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-verde-100 px-6 py-4 space-y-3 shadow-lg">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-base font-medium text-gray-700 hover:text-verde-600"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={() => setOpen(false)}
            className="block w-full text-center bg-verde-600 text-white font-semibold py-3 rounded-lg hover:bg-verde-700 transition-colors"
          >
            Contacto directo
          </Link>
        </div>
      )}
    </header>
  );
}
