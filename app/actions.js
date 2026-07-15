"use server";

import { Resend } from "resend";
import { contactSchema } from "@/lib/validations";

const resend = new Resend(process.env.RESEND_API_KEY);

const CORREO_DESTINO =
  process.env.CORREO_DESTINO || "contacto@tecnoingenieriabo.com";
const CORREO_ORIGEN = process.env.CORREO_ORIGEN || "onboarding@resend.dev";

// ==========================================
// PLANTILLAS DE CORREO (Extraídas por SRP)
// ==========================================
const generarHtmlNotificacion = ({
  nombre,
  email,
  empresa,
  servicio,
  mensaje,
}) => `
  <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9fafb; border-radius: 12px;">
    <div style="background: #008445; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 20px; font-weight: 700;">Nuevo mensaje desde la web</h1>
    </div>
    <div style="background: white; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px 0; color: #6b7280; font-size: 13px; width: 130px; font-weight: 600; text-transform: uppercase;">Nombre</td>
          <td style="padding: 10px 0; color: #111827; font-size: 15px; font-weight: 500;">${nombre}</td>
        </tr>
        <tr style="border-top: 1px solid #f3f4f6;">
          <td style="padding: 10px 0; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase;">Correo</td>
          <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #008445; font-size: 15px;">${email}</a></td>
        </tr>
        <tr style="border-top: 1px solid #f3f4f6;">
          <td style="padding: 10px 0; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase;">Empresa</td>
          <td style="padding: 10px 0; color: #111827; font-size: 15px;">${empresa || "No especificada"}</td>
        </tr>
        <tr style="border-top: 1px solid #f3f4f6;">
          <td style="padding: 10px 0; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase;">Servicio</td>
          <td style="padding: 10px 0;"><span style="background: #d9f2e3; color: #008445; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 600;">${servicio}</span></td>
        </tr>
      </table>
      <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
        <p style="color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; margin: 0 0 10px;">Mensaje</p>
        <p style="color: #111827; font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${mensaje}</p>
      </div>
      <div style="margin-top: 28px; text-align: center;">
        <a href="mailto:${email}?subject=Re: ${servicio}" style="display: inline-block; background: #008445; color: white; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px;">
          Responder a ${nombre}
        </a>
      </div>
    </div>
  </div>
`;

const generarHtmlConfirmacion = ({ nombre, servicio, mensaje }) => `
  <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9fafb; border-radius: 12px;">
    <div style="background: #008445; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 20px; font-weight: 700;">TecnoIngeniería B.O.</h1>
      <p style="color: #d9f2e3; margin: 6px 0 0; font-size: 13px;">Impulsamos tu mundo digital</p>
    </div>
    <div style="background: white; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
      <h2 style="color: #111827; font-size: 20px; margin: 0 0 12px;">¡Hola, ${nombre}!</h2>
      <p style="color: #6b7280; font-size: 15px; line-height: 1.7; margin: 0 0 16px;">
        Recibimos tu mensaje sobre <strong style="color: #008445;">${servicio}</strong>.
        Te responderemos en menos de <strong>24 horas</strong>.
      </p>
      <div style="background: #f9fafb; border-left: 3px solid #008445; padding: 16px 20px; border-radius: 0 8px 8px 0; margin-top: 28px;">
        <p style="color: #9ca3af; font-size: 12px; font-weight: 600; text-transform: uppercase; margin: 0 0 6px;">Tu mensaje</p>
        <p style="color: #374151; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${mensaje}</p>
      </div>
    </div>
  </div>
`;

// ==========================================
// CONTROLADOR PRINCIPAL
// ==========================================
export async function enviarContacto(prevState, formData) {
  // 1. Extraer datos del formData
  const rawData = {
    nombre: formData.get("nombre")?.toString().trim(),
    email: formData.get("email")?.toString().trim(),
    empresa: formData.get("empresa")?.toString().trim(),
    servicio: formData.get("servicio")?.toString().trim(),
    mensaje: formData.get("mensaje")?.toString().trim(),
  };

  // 2. Validar con Zod
  const validatedFields = contactSchema.safeParse(rawData);

  if (!validatedFields.success) {
    // Si falla, devolvemos los errores específicos por cada campo
    return {
      ok: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Por favor, corrige los errores en el formulario.",
    };
  }

  const data = validatedFields.data;

  try {
    // 3. Enviar correos en paralelo para mayor velocidad
    await Promise.all([
      resend.emails.send({
        from: CORREO_ORIGEN,
        to: CORREO_DESTINO,
        replyTo: data.email,
        subject: `[Nuevo contacto] ${data.servicio} — ${data.nombre}`,
        html: generarHtmlNotificacion(data),
      }),
      resend.emails.send({
        from: CORREO_ORIGEN,
        to: data.email,
        subject: "Recibimos tu mensaje — TecnoIngeniería B.O.",
        html: generarHtmlConfirmacion(data),
      }),
    ]);

    return { ok: true, errors: null, message: "Mensaje enviado con éxito." };
  } catch (err) {
    console.error("Error al enviar con Resend:", err);
    return {
      ok: false,
      errors: null,
      message: "Error de servidor. Intenta de nuevo o escríbenos directamente.",
    };
  }
}
