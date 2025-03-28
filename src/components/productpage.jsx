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

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/productos/${id}`);
        setProduct(response.data);

        const relatedResponse = await api.get("/productos");
        const filtered = relatedResponse.data.filter((p) => p.id !== Number(id));
        setRelatedItems(filtered.slice(0, 4));
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    fetchProduct();
  }, [id]);

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
