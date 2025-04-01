import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Link, useNavigate } from 'react-router-dom';
import api from '/api';
import Header from '../components/header';

const Favoritos = () => {
  const [favorites, setFavorites] = useState([]);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.id) {
      setUserId(user.id);
      fetchFavorites(user.id);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchFavorites = async (id) => {
    try {
      const res = await api.get(`/favoritos/usuario/${id}`);
      setFavorites(res.data);
    } catch (error) {
      console.error("Error cargando favoritos:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveFavorite = async (id) => {
    try {
      await api.delete(`/favoritos/${id}`);
      setFavorites((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error eliminando producto de favoritos:", error);
    }
  };

  return (
    <div>
     
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">Mis Favoritos</h2>

        {!userId && !loading && (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded mb-6">
            <p className="font-semibold mb-1">¡Atención!</p>
            <p>Por favor, inicia sesión o crea una cuenta para ver tus productos favoritos.</p>
          </div>
        )}

        {userId && loading && (
          <div className="text-center py-10">
            <p className="text-gray-600">Cargando tus productos favoritos...</p>
          </div>
        )}

        {userId && !loading && favorites.length === 0 && (
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <p className="text-gray-600 mb-4">No tienes productos favoritos guardados.</p>
            <button
              onClick={() => navigate("/")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
            >
              Explorar productos
            </button>
          </div>
        )}

        {userId && !loading && favorites.length > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {favorites.map((favorito) => (
                <div key={favorito.id} className="relative">
                  <Link to={`/product/${favorito.producto.id}`}>
                    <ProductCard
                      image={favorito.producto.imagenUrl}
                      name={favorito.producto.nombre}
                      price={favorito.producto.precio}
                    />
                  </Link>
                  <button
                    onClick={() => handleRemoveFavorite(favorito.id)}
                    className="absolute top-2 right-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-full p-2"
                    title="Eliminar de favoritos"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <button
                onClick={() => navigate("/")}
                className="text-blue-600 hover:underline"
              >
                Explorar más productos
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Favoritos;