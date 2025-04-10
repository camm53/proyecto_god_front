import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthView from './components/AuthView';
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import ProtectedRoute from './components/ProtectedRoute';
import Pedidos from './components/pedidos';
import Carrito from './components/carrito';
import Checkout from './components/checkout';
import VFav from './components/vistaFav';
import HomeSellerDashboard from './components/HomeSellerDashboard'; // ✅ IMPORTACIÓN
import NewProductPage from './components/NewProductPage';
const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<AuthView />} />
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/orders" element={<Pedidos />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/Favorites" element={<VFav />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/newProductPage" element={<NewProductPage />} />

      {/* ✅ RUTA PARA VENDEDORES */}
      <Route path="/HomeSellerDashboard" element={<HomeSellerDashboard />} />

      {/* Puedes usar ProtectedRoute si deseas proteger algunas rutas */}
      <Route element={<ProtectedRoute />}>
        {/* rutas protegidas aquí */}
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
