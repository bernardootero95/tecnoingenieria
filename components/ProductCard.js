"use client";

import { useState } from "react";

export default function ProductCard({ producto, variant = "compact", headingTag = "h3" }) {
  const [open, setOpen] = useState(false);
  const isFull = variant === "full";
  const Heading = headingTag;

  const hasDetails =
    (producto.tecnologias && producto.tecnologias.length > 0) || producto.resultado;

  return (
    <article
      id={`producto-${producto.id}`}
      className={`group relative border transition-all duration-300 overflow-hidden hover:border-verde-200 hover:shadow-xl hover:shadow-verde-600/10 scroll-mt-24 ${
        isFull
          ? "bg-gray-50 border-gray-100 rounded-3xl p-8 sm:p-10"
          : "bg-white border-gray-100 rounded-2xl p-8"
      }`}
    >
      {isFull && (
        <span className="absolute top-6 right-8 font-display text-8xl font-black text-gray-100 group-hover:text-verde-50 transition-colors select-none">
          {String(producto.id).padStart(2, "0")}
        </span>
      )}

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-bold text-verde-600 bg-verde-50 border border-verde-100 px-3 py-1 rounded-full">
            {producto.categoria}
          </span>
          <span className="text-xs text-gray-400 font-medium">{producto.año}</span>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <Heading
            className={`font-display font-extrabold text-gray-950 tracking-tighter ${
              isFull ? "text-2xl" : "text-xl"
            }`}
          >
            {producto.titulo}
          </Heading>
          {producto.url && (
            <a
              href={producto.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-verde-600 hover:text-verde-700 text-xs font-semibold shrink-0"
              aria-label={`Visitar el sitio de ${producto.titulo}`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 3L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          )}
        </div>
        {producto.usadoPor && (
          <p className="text-verde-600 text-xs font-bold uppercase tracking-widest mb-4">
            {producto.usadoPor}
          </p>
        )}
        <p
          className={`text-gray-500 text-sm leading-relaxed ${
            producto.usadoPor ? "" : "mt-1"
          }`}
        >
          {producto.descripcion}
        </p>

        {(hasDetails || producto.url) && (
          <>
            {hasDetails && (
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  open ? "grid-rows-[1fr] opacity-100 mt-5" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  {producto.tecnologias?.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">
                        Tecnologías
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {producto.tecnologias.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {producto.resultado && (
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">
                        Alcance y resultados
                      </p>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {producto.resultado}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
              {hasDetails && (
                <button
                  type="button"
                  onClick={() => setOpen((v) => !v)}
                  aria-expanded={open}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-verde-600 hover:text-verde-700 transition-colors"
                >
                  {open ? "Ver menos" : "Ver detalles"}
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
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
                </button>
              )}
              {producto.url && (
                <a
                  href={producto.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-verde-600 transition-colors"
                >
                  Visitar sitio
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 3L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              )}
            </div>
          </>
        )}
      </div>
    </article>
  );
}
