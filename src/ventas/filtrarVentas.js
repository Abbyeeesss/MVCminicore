import {
  COL_FECHA_VENTAS,
  TABLA_VENTAS,
  TIPO_FECHA_VENTAS,
} from '../config/tablaNombres';
import { supabase } from '../supabaseClient';

function diaSiguienteUtc(ymd) {
  const [y, m, d] = ymd.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  dt.setUTCDate(dt.getUTCDate() + 1);
  const yy = dt.getUTCFullYear();
  const mm = String(dt.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(dt.getUTCDate()).padStart(2, '0');
  return `${yy}-${mm}-${dd}`;
}

export async function filtrarVentas({ fechaInicio, fechaFin }) {
  const inicio = (fechaInicio || '').trim();
  const fin = (fechaFin || '').trim();

  if (!inicio || !fin) {
    return {
      data: null,
      error: Object.assign(new Error(), { code: 'VALIDATION' }),
    };
  }

  const col = COL_FECHA_VENTAS;
  const hastaExclusivo = diaSiguienteUtc(fin);

  let q = supabase.from(TABLA_VENTAS).select('*');

  if (TIPO_FECHA_VENTAS === 'timestamptz') {
    q = q
      .gte(col, `${inicio}T00:00:00.000Z`)
      .lt(col, `${hastaExclusivo}T00:00:00.000Z`);
  } else {
    q = q.gte(col, inicio).lt(col, hastaExclusivo);
  }

  return await q.order(col, { ascending: true });
}
