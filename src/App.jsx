import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthView from './components/AuthView';
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import ProtectedRoute from './components/ProtectedRoute';
import Pedidos from './components/pedidos';
import Carrito from './components/carrito';
import Checkout from './components/checkout'; // ✅ Agregado
import VFav from './components/vistaFav';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<AuthView />} />
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/orders" element={<Pedidos />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/Favorites" element={<VFav />} />
      <Route path="/checkout" element={<Checkout />} /> {/* ✅ Nueva ruta */}

      <Route element={<ProtectedRoute />}>
        {/* Aquí van tus rutas protegidas */}
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
