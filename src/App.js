import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { filtrarVentas } from './ventas/filtrarVentas';

function formatDateInput(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function App() {
  const today = new Date();
  const y = today.getFullYear();
  const inicioAno = new Date(y, 0, 1);
  const finAno = new Date(y, 11, 31);

  const [fechaInicio, setFechaInicio] = useState(formatDateInput(inicioAno));
  const [fechaFin, setFechaFin] = useState(formatDateInput(finAno));
  const [ventas, setVentas] = useState([]);
  const [loading, setLoading] = useState(false);

  const aplicarFiltro = useCallback(async () => {
    setLoading(true);
    const { data, error: err } = await filtrarVentas({
      fechaInicio,
      fechaFin,
    });
    setLoading(false);
    if (err) {
      setVentas([]);
      return;
    }
    setVentas(data || []);
  }, [fechaInicio, fechaFin]);

  useEffect(() => {
    aplicarFiltro();
  }, [aplicarFiltro]);

  return (
    <div>
      <h1>Mini-core</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          aplicarFiltro();
        }}
      >
        <label>
          Fecha inicio{' '}
          <input
            type="date"
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
            required
          />
        </label>
        <label>
          Fecha fin{' '}
          <input
            type="date"
            value={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
            required
          />
        </label>
        <button type="submit" disabled={loading}>
          Filtrar
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>fecha</th>
            <th>vendedor_id</th>
            <th>monto</th>
          </tr>
        </thead>
        <tbody>
          {ventas.map((v) => (
            <tr key={v.id}>
              <td>{String(v.fecha)}</td>
              <td>{String(v.vendedor_id)}</td>
              <td>{String(v.monto)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
