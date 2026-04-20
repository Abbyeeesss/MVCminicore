import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./vendedores/cargarVendedores', () => ({
  cargarVendedores: () =>
    Promise.resolve({ data: [{ id: 'x', nombre: 'Test' }], error: null }),
  mapaNombrePorVendedorId: (rows) => {
    const map = {};
    (rows || []).forEach((r) => {
      if (r?.id != null) map[r.id] = r.nombre ?? '';
    });
    return map;
  },
}));

jest.mock('./reglas/cargarReglas', () => ({
  cargarReglas: () =>
    Promise.resolve({
      data: [{ id: '1', amount: 10, rule: 'porcentaje' }],
      error: null,
    }),
}));

jest.mock('./ventas/filtrarVentas', () => ({
  filtrarVentas: () =>
    Promise.resolve({
      data: [{ id: '1', fecha: '2026-01-01', vendedor_id: 'x', monto: 100 }],
      error: null,
    }),
}));

test('muestra el título Mini-core', async () => {
  render(<App />);
  expect(await screen.findByRole('heading', { name: /mini-core/i })).toBeInTheDocument();
  expect(await screen.findByRole('button', { name: /filtrar/i })).toBeInTheDocument();
});
