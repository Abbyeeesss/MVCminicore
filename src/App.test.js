import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./ventas/filtrarVentas', () => ({
  filtrarVentas: () =>
    Promise.resolve({
      data: [{ id: '1', fecha: '2026-01-01', vendedor_id: 'x', monto: 0 }],
      error: null,
    }),
}));

test('muestra el título Mini-core', async () => {
  render(<App />);
  expect(await screen.findByRole('heading', { name: /mini-core/i })).toBeInTheDocument();
  expect(await screen.findByRole('button', { name: /filtrar/i })).toBeInTheDocument();
});
