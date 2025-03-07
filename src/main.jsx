import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import ProductPage from './components/productpage';  // Si está dentro de "pages"



// Configuración de rutas
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/product/:id",  // Ruta dinámica para los productos
    element: <ProductPage />
  },
  {
    path: "*",
    element: <Navigate to="/" />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
