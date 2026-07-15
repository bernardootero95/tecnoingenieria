"use client";

import { useFormState, useFormStatus } from "react-dom";
import { enviarContacto } from "@/app/actions";

const initialState = { ok: false, errors: null, message: null };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-verde-600 text-white font-bold py-4 rounded-xl hover:bg-verde-700 transition-all hover:shadow-lg hover:shadow-verde-600/25 active:scale-95 text-sm uppercase tracking-wide disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
    >
      {pending ? (
        <>
          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            />
          </svg>
          Enviando...
        </>
      ) : (
        "Enviar mensaje"
      )}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useFormState(enviarContacto, initialState);

  if (state?.ok) {
    return (
      <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col items-center justify-center min-h-[400px] text-center animate-fade-in">
        <div className="w-16 h-16 bg-verde-100 text-verde-600 rounded-full flex items-center justify-center mb-6">
          <svg
            className="w-8 h-8"
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
        </div>
        <h3 className="font-display text-2xl font-extrabold text-gray-950 tracking-tighter mb-3">
          ¡Mensaje enviado!
        </h3>
        <p className="text-gray-500 max-w-sm">
          Recibimos tu mensaje. Te respondemos en menos de 24 horas al correo
          que nos dejaste.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
      <h2 className="font-display text-2xl font-extrabold text-gray-950 tracking-tighter mb-2">
        Envíanos un mensaje
      </h2>
      <p className="text-gray-500 text-sm mb-8">
        Todos los campos marcados con * son requeridos.
      </p>

      <form action={formAction} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="nombre"
              className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide"
            >
              Nombre completo *
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Juan García"
              className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-verde-500 transition-all ${
                state?.errors?.nombre
                  ? "border-red-500"
                  : "border-gray-200 focus:border-transparent"
              }`}
            />
            {state?.errors?.nombre && (
              <p className="mt-1.5 text-xs text-red-500 font-medium">
                {state.errors.nombre[0]}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide"
            >
              Correo electrónico *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="tu@empresa.com"
              className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-verde-500 transition-all ${
                state?.errors?.email
                  ? "border-red-500"
                  : "border-gray-200 focus:border-transparent"
              }`}
            />
            {state?.errors?.email && (
              <p className="mt-1.5 text-xs text-red-500 font-medium">
                {state.errors.email[0]}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="empresa"
            className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide"
          >
            Empresa / Organización
          </label>
          <input
            id="empresa"
            name="empresa"
            type="text"
            placeholder="Nombre de tu empresa (opcional)"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-verde-500 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="servicio"
            className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide"
          >
            Servicio de interés *
          </label>
          <select
            id="servicio"
            name="servicio"
            className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-verde-500 transition-all text-gray-700 ${
              state?.errors?.servicio
                ? "border-red-500"
                : "border-gray-200 focus:border-transparent"
            }`}
          >
            <option value="">Selecciona un servicio...</option>
            <option>Desarrollo de Software</option>
            <option>Redes e Infraestructura</option>
            <option>Análisis de Datos</option>
            <option>Consultoría Tecnológica</option>
            <option>Otro</option>
          </select>
          {state?.errors?.servicio && (
            <p className="mt-1.5 text-xs text-red-500 font-medium">
              {state.errors.servicio[0]}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="mensaje"
            className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide"
          >
            Cuéntanos tu proyecto *
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={5}
            placeholder="Describe brevemente qué necesitas, el tamaño de tu empresa y cualquier detalle relevante..."
            className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-verde-500 transition-all resize-none ${
              state?.errors?.mensaje
                ? "border-red-500"
                : "border-gray-200 focus:border-transparent"
            }`}
          />
          {state?.errors?.mensaje && (
            <p className="mt-1.5 text-xs text-red-500 font-medium">
              {state.errors.mensaje[0]}
            </p>
          )}
        </div>

        {/* HONEYPOT (Trampa para Bots) */}
        <div
          className="absolute opacity-0 -z-10 w-0 h-0 overflow-hidden"
          aria-hidden="true"
        >
          <label htmlFor="botcheck">No llenes este campo si eres humano</label>
          <input
            id="botcheck"
            name="botcheck"
            type="text"
            tabIndex="-1"
            autoComplete="off"
          />
        </div>

        {/* Mensaje de error general de servidor */}
        {!state?.ok && state?.message && !state?.errors && (
          <div className="bg-red-50 border border-red-100 text-red-600 text-sm px-4 py-3 rounded-xl font-medium">
            {state.message}
          </div>
        )}

        <SubmitButton />

        <p className="text-xs text-gray-400 text-center">
          Al enviar aceptas que te contactemos sobre tu proyecto. No compartimos
          tu información con terceros.
        </p>
      </form>
    </div>
  );
}
