import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthView from './components/AuthView';       // Vista de login/register
import Home from './components/Home';               // Página pública (Home)
import ProductPage from './components/ProductPage'; // Detalle del producto
import ProtectedRoute from './components/ProtectedRoute'; // Rutas protegidas
import Pedidos from './components/pedidos';

const App = () => {
  return (
    <Routes>
      {/* Ruta pública para autenticación */}
      <Route path="/login" element={<AuthView />} />

      {/* Rutas públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/orders" element={<Pedidos />} />

      {/* Ejemplo de rutas protegidas (no afecta a ProductPage) */}
      <Route element={<ProtectedRoute />}>
        {/* Otras rutas que requieran autenticación */}
      </Route>

      {/* Ruta comodín */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
