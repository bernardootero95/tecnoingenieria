"use client";

import { useState } from "react";

export default function ProjectCard({ proyecto, variant = "compact", headingTag = "h3" }) {
  const [open, setOpen] = useState(false);
  const isFull = variant === "full";
  const Heading = headingTag;

  const hasDetails =
    (proyecto.tecnologias && proyecto.tecnologias.length > 0) || proyecto.resultado;

  return (
    <article
      id={`proyecto-${proyecto.id}`}
      className={`group relative border transition-all duration-300 overflow-hidden hover:border-verde-200 hover:shadow-xl hover:shadow-verde-600/10 scroll-mt-24 ${
        isFull
          ? "bg-gray-50 border-gray-100 rounded-3xl p-8 sm:p-10"
          : "bg-white border-gray-100 rounded-2xl p-8"
      }`}
    >
      {isFull && (
        <span className="absolute top-6 right-8 font-display text-8xl font-black text-gray-100 group-hover:text-verde-50 transition-colors select-none">
          {String(proyecto.id).padStart(2, "0")}
        </span>
      )}

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-bold text-verde-600 bg-verde-50 border border-verde-100 px-3 py-1 rounded-full">
            {proyecto.categoria}
          </span>
          <span className="text-xs text-gray-400 font-medium">{proyecto.año}</span>
        </div>

        <Heading
          className={`font-display font-extrabold text-gray-950 tracking-tighter mb-2 ${
            isFull ? "text-2xl" : "text-xl"
          }`}
        >
          {proyecto.titulo}
        </Heading>
        <p className="text-verde-600 text-xs font-bold uppercase tracking-widest mb-4">
          {proyecto.cliente}
        </p>
        <p className="text-gray-500 text-sm leading-relaxed">{proyecto.descripcion}</p>

        {hasDetails && (
          <>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                open ? "grid-rows-[1fr] opacity-100 mt-5" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                {proyecto.tecnologias?.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">
                      Tecnologías
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {proyecto.tecnologias.map((t) => (
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

                {proyecto.resultado && (
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">
                      Alcance y resultados
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {proyecto.resultado}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-verde-600 hover:text-verde-700 transition-colors"
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
          </>
        )}
      </div>
    </article>
  );
}
