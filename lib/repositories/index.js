import { empresa, servicios, productos, equipo } from "@/lib/data";

/**
 * REPOSITORY PATTERN
 * Esta capa abstrae el origen de los datos. Actualmente vienen de un archivo local (lib/data.js),
 * pero si mañana se conectan a una Base de Datos o un CMS (Sanity, Strapi, Supabase),
 * solo modificamos estas funciones. Los componentes de React no sufrirán ningún cambio.
 */

export async function getEmpresa() {
  // Promise.resolve simula el comportamiento asíncrono de una petición a BD real.
  return Promise.resolve(empresa);
}

export async function getServicios() {
  return Promise.resolve(servicios);
}

export async function getProductos() {
  return Promise.resolve(productos);
}

export async function getEquipo() {
  return Promise.resolve(equipo);
}
