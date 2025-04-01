import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BuyTogether from "./BuyTogether";
import RelatedProducts from "./RelatedProducts";
import TechnicalInfoBox from "./TecnicalInfoBox";
import Header from "./header";
import api from "/api";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [relatedItems, setRelatedItems] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/productos/${id}`);
        const productData = response.data;
        setProduct(productData);

        // Guardar en historial si hay sesión
        const user = JSON.parse(localStorage.getItem("user"));
        if (user && user.id) {
          const key = `historial_${user.id}`;
          let historial = JSON.parse(localStorage.getItem(key)) || [];
          historial = historial.filter((p) => p.id !== productData.id);
          historial.unshift(productData);
          if (historial.length > 10) historial = historial.slice(0, 10);
          localStorage.setItem(key, JSON.stringify(historial));
          
          // Verificar si el producto está en favoritos
          checkIfFavorite(user.id, productData.id);
        }

        // Productos relacionados
        const relatedResponse = await api.get("/productos");
        const filtered = relatedResponse.data.filter((p) => p.id !== Number(id));
        setRelatedItems(filtered.slice(0, 4));
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const checkIfFavorite = async (userId, productId) => {
    try {
      const response = await api.get(`/favoritos/usuario/${userId}`);
      const favorites = response.data;
      const isInFavorites = favorites.some(fav => fav.producto.id === productId);
      setIsFavorite(isInFavorites);
    } catch (error) {
      // Si hay un error, puede ser porque no hay favoritos (404)
      console.log("No se encontraron favoritos o hubo un error:", error);
      setIsFavorite(false);
    }
  };

  const handleAddToCart = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.id) {
      alert("Debes iniciar sesión para agregar productos al carrito.");
      return navigate("/login");
    }

    const payload = {
      usuario: { id: user.id },
      producto: { id: product.id },
      cantidad: 1,
    };

    try {
      await api.post("/carrito", payload);
      alert("Producto agregado al carrito 🎉");
    } catch (error) {
      console.error("Error al agregar al carrito:", error);
      alert("Hubo un problema al agregar el producto. Intenta de nuevo.");
    }
  };

  const handleToggleFavorite = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.id) {
      alert("Debes iniciar sesión para agregar productos a favoritos.");
      return navigate("/login");
    }

    if (isFavorite) {
      // Buscar el ID del favorito para eliminarlo
      try {
        const response = await api.get(`/favoritos/usuario/${user.id}`);
        const favorites = response.data;
        const favoriteToDelete = favorites.find(fav => fav.producto.id === product.id);
        
        if (favoriteToDelete) {
          await api.delete(`/favoritos/${favoriteToDelete.id}`);
          setIsFavorite(false);
          alert("Producto eliminado de favoritos");
        }
      } catch (error) {
        console.error("Error al eliminar de favoritos:", error);
        alert("Hubo un problema al eliminar el producto de favoritos. Intenta de nuevo.");
      }
    } else {
      // Agregar a favoritos
      const payload = {
        usuarioId: user.id,
        productoId: product.id
      };

      try {
        await api.post("/favoritos", payload);
        setIsFavorite(true);
        alert("Producto agregado a favoritos ❤️");
      } catch (error) {
        console.error("Error al agregar a favoritos:", error);
        alert("Hubo un problema al agregar el producto a favoritos. Intenta de nuevo.");
      }
    }
  };

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto p-6">
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-md w-full">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 p-4 flex items-center justify-center bg-gray-50">
              <img
                src={product.imagenUrl}
                alt={product.nombre}
                className="max-h-64 object-contain"
              />
            </div>
            <div className="md:w-3/5 p-6">
              <h2 className="text-2xl font-bold text-gray-900">{product.nombre}</h2>
              <div className="mt-2 mb-4">
                <span className="text-2xl font-bold text-green-600">${product.precio}</span>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold text-gray-700">Características principales:</h3>
                <div className="mt-2 flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">{product.descripcion}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 mt-4">
                <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded font-medium">
                  Comprar ahora
                </button>
                <button
                  onClick={handleAddToCart}
                  className="border border-green-600 text-green-600 hover:bg-green-50 py-2 px-4 rounded font-medium"
                >
                  Agregar al carrito
                </button>
                <button
                  onClick={handleToggleFavorite}
                  className={`flex items-center justify-center py-2 px-4 rounded font-medium ${
                    isFavorite 
                      ? "bg-red-100 text-red-600 border border-red-600" 
                      : "border border-gray-400 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {isFavorite ? (
                    <>
                      <span className="mr-1">❤️</span>
                      <span>En favoritos</span>
                    </>
                  ) : (
                    <>
                      <span className="mr-1">♡</span>
                      <span>Agregar a favoritos</span>
                    </>
                  )}
                </button>
              </div>
              <div className="mt-4 space-y-1 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="mr-2">🚚</span>
                  <span>Envío gratis a todo el país.</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">🔄</span>
                  <span>Devolución sin costo en 30 días.</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">💳</span>
                  <span>Pago seguro con tarjeta o PayPal.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <BuyTogether relatedItems={relatedItems} />
        </div>
        <div className="mt-6">
          <RelatedProducts relatedItems={relatedItems} />
        </div>
        <div className="mt-6">
          <TechnicalInfoBox product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;