export function totalMontoVentas(ventas) {
  if (!Array.isArray(ventas)) return 0;
  return ventas.reduce((sum, v) => {
    const n = Number(v?.monto);
    return sum + (Number.isFinite(n) ? n : 0);
  }, 0);
}
