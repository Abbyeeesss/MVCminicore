import { TABLA_REGLAS } from '../config/tablaNombres';
import { supabase } from '../supabaseClient';

export async function cargarReglas() {
  return supabase.from(TABLA_REGLAS).select('*').order('id', { ascending: true });
}
