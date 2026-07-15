import { z } from "zod";

export const contactSchema = z.object({
  nombre: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "El correo electrónico no es válido." }),
  empresa: z.string().optional(),
  servicio: z.string().min(1, { message: "Por favor selecciona un servicio." }),
  mensaje: z
    .string()
    .min(10, {
      message:
        "El mensaje debe tener al menos 10 caracteres para entender tu proyecto.",
    }),
});
