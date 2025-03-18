import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import ProductPage from './components/productpage';
import Login from './components/Login';  // Asegúrate de que la ruta del archivo sea correcta
import AuthView from './components/AuthView';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/product/:id",
    element: <ProductPage />
  },
  {
    path: "/auth",
    element: <AuthView />
  },
  {
    path: "*",
    element: <Navigate to="/" />
  }
]);

// Renderizado de la aplicación
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
