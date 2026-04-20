function reglaPrincipal(reglas) {
  if (!Array.isArray(reglas) || reglas.length === 0) return null;
  return [...reglas].sort((a, b) => String(a.id).localeCompare(String(b.id)))[0];
}

export function comisionPorVenta(montoVenta, reglas) {
  const m = Number(montoVenta);
  if (!Number.isFinite(m)) return 0;
  const r = reglaPrincipal(reglas);
  if (!r) return 0;
  const amt = Number(r.amount);
  if (!Number.isFinite(amt)) return 0;
  const tipo = String(r.rule ?? '')
    .trim()
    .toLowerCase();
  if (tipo === 'fijo' || tipo === 'fixed') return amt;
  return m * (amt / 100);
}

export function totalComisionVentas(ventas, reglas) {
  if (!Array.isArray(ventas)) return 0;
  return ventas.reduce((s, v) => s + comisionPorVenta(v?.monto, reglas), 0);
}
