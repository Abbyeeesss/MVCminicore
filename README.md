# Mini-core

Aplicación web para filtrar ventas por rango de fechas, calcular el total vendido, **aplicar reglas de comisión** y mostrar el **nombre del vendedor**, usando React en el frontend y Supabase como backend.

---

## Requisitos

- [Node.js](https://nodejs.org/) (LTS recomendado)
- Cuenta y proyecto en [Supabase](https://supabase.com/)
- Tablas y políticas configuradas como se indica más abajo

---

### 1. Clonar e instalar dependencias

```bash
cd minicore
npm install
```
### 2. Base de datos en Supabase

El proyecto asume tablas en el esquema `public` con nombres exactos:

| Tabla | Uso |
|-------|-----|
| **Vendedor** | `id`, `nombre` |
| **Ventas** | `id`, `created_at`, `vendedor_id`, `fecha` (tipo `date`), `monto` |
| **Reglas** | `id`, `created_at`, `amount`, `rule` |

### 3. Arrancar en desarrollo

```bash
npm start
```

Se abre [http://localhost:3000](http://localhost:3000).

### 3. Compilar para producción

```bash
npm run build
```

Genera la carpeta `build/` lista para servir en cualquier hosting estático o en [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), etc.

---

## Uso de la aplicación

1. Elige fecha inicio y **fecha fin
2. Pulsa Filtrar
3. Verás total de ventas (suma de `monto`), **total de comisión** y una tabla con fecha, nombre del vendedor, monto y comisión por fila.

---

## Estructura del código 

```
src/
  App.js                 # Pantalla: filtros, totales, tabla
  App.css
  supabaseClient.js      # Cliente Supabase
  config/tablaNombres.js # Nombres de tablas y opciones
  ventas/
    filtrarVentas.js     # Consulta filtrada por fechas
    totalVentas.js       # Suma de montos
  vendedores/
    cargarVendedores.js  # Lista vendedores y mapa id → nombre
  reglas/
    cargarReglas.js      # Lista reglas
    comision.js          # Cálculo de comisión por venta y total
sql/
  politica_lectura_*.sql # Ejemplos de políticas RLS para anon
```

---

## Créditos

- Repositorio: [github.com/Anahi606/Minicore](https://github.com/Anahi606/Minicore.git)
- Video: [YouTube](https://www.youtube.com/watch?v=oqVrl95alBQ)

## Documentación

- [React](https://react.dev/)
- [Create React App](https://create-react-app.dev/)
- [Supabase](https://supabase.com/docs)