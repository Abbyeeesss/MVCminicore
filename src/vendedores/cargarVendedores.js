import { TABLA_VENDEDOR } from '../config/tablaNombres';
import { supabase } from '../supabaseClient';

export async function cargarVendedores() {
  return supabase
    .from(TABLA_VENDEDOR)
    .select('id, nombre')
    .order('nombre', { ascending: true });
}

export function mapaNombrePorVendedorId(rows) {
  const map = {};
  if (!Array.isArray(rows)) return map;
  for (const r of rows) {
    if (r?.id != null) map[r.id] = r.nombre ?? '';
  }
  return map;
}
