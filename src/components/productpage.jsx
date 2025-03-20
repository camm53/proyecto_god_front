import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BuyTogether from "./BuyTogether";
import RelatedProducts from "./RelatedProducts";
import TechnicalInfoBox from "./TecnicalInfoBox";
import Header from "./header";
import api from "/api";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedItems, setRelatedItems] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Se obtiene el producto por ID (asegúrate de que el backend retorne los campos correctos)
        const response = await api.get(`/productos/${id}`);
        setProduct(response.data);

        // Obtener productos relacionados (excluyendo el producto actual)
        const relatedResponse = await api.get("/productos");
        const filtered = relatedResponse.data.filter(
          (p) => p.id !== Number(id)
        );
        setRelatedItems(filtered.slice(0, 4)); // Mostrar 4 productos relacionados
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto p-6">
        {/* Contenedor principal del producto */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-md w-full">
          <div className="flex flex-col md:flex-row">
            {/* Imagen del producto */}
            <div className="md:w-2/5 p-4 flex items-center justify-center bg-gray-50">
              <img
                src={product.imagenUrl}
                alt={product.nombre}
                className="max-h-64 object-contain"
              />
            </div>
            {/* Detalles del producto */}
            <div className="md:w-3/5 p-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {product.nombre}
              </h2>

              {/* Sección de precio */}
              <div className="mt-2 mb-4">
                <span className="text-2xl font-bold text-green-600">
                  ${product.precio}
                </span>
                {/* Puedes descomentar las siguientes líneas si manejas ofertas */}
                {/*
                <span className="ml-2 text-lg text-gray-500 line-through">
                  10,000,000$
                </span>
                <span className="ml-2 text-xs font-semibold text-red-500 bg-red-100 px-2 py-0.5 rounded">
                  ¡Oferta!
                </span>
                */}
              </div>

              {/* Características principales */}
              <div className="mb-4">
                <h3 className="font-semibold text-gray-700">
                  Características principales:
                </h3>
                <div className="mt-2">
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-700">{product.descripcion}</span>
                  </div>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-2 mt-4">
                <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded font-medium text-center transition-colors">
                  Comprar ahora
                </button>
                <button className="border border-green-600 text-green-600 hover:bg-green-50 py-2 px-4 rounded font-medium text-center transition-colors">
                  Agregar al carrito
                </button>
              </div>

              {/* Información adicional */}
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

        {/* Sección extra (puedes personalizar o quitar este div) */}
        <div className="">
          <h1>Información adicional</h1>
        </div>

        {/* Sección para productos comprados juntos */}
        <div className="mt-6">
          <BuyTogether relatedItems={relatedItems} />
        </div>

        {/* Sección de productos relacionados */}
        <div className="mt-6">
          <RelatedProducts relatedItems={relatedItems} />
        </div>

        {/* Detalles técnicos del producto */}
        <div className="mt-6">
          <TechnicalInfoBox product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
