export const TABLA_VENTAS =
  process.env.REACT_APP_SUPABASE_TABLE_VENTAS?.trim() || 'Ventas';

export const TABLA_VENDEDOR =
  process.env.REACT_APP_SUPABASE_TABLE_VENDEDOR?.trim() || 'Vendedor';

export const TABLA_REGLAS =
  process.env.REACT_APP_SUPABASE_TABLE_REGLAS?.trim() || 'Reglas';

export const COL_FECHA_VENTAS =
  process.env.REACT_APP_VENTAS_COL_FECHA?.trim() || 'fecha';

export const TIPO_FECHA_VENTAS =
  process.env.REACT_APP_VENTAS_TIPO_FECHA?.trim() || 'date';
