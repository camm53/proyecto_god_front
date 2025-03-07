import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleBox from "./ArticleBox";
import BuyTogether from "./BuyTogether";
import RelatedProducts from "./RelatedProducts";
import TechnicalInfoBox from './TecnicalInfoBox';

// El producto se obtiene dinámicamente, no necesitamos la lista completa de productos aquí
const ProductPage = () => {
  const { id } = useParams(); // Obtenemos el id del producto desde la URL
  const [product, setProduct] = useState(null);
  const [relatedItems, setRelatedItems] = useState([]);

  // Este useEffect simula la búsqueda de un producto en una base de datos o API
  useEffect(() => {
    // Aquí reemplaza la lógica con tu API o base de datos real
    const foundProduct = {
      id: 1,
      name: 'Audífonos Pabloksy 7.1',
      price: '9,000,000$',
      description: 'Descripción de audífonos de alta calidad con sonido 7.1.',
      image: 'https://via.placeholder.com/500',  // Imagen de ejemplo
      technicalDetails: ['Conexión Bluetooth', 'Sonido envolvente 7.1', 'Batería de larga duración']
    };

    if (foundProduct) {
      setProduct(foundProduct);
      // La lógica de productos relacionados es opcional, puedes personalizarla o eliminarla
      setRelatedItems([
        {
          id: 2,
          name: 'Audífonos BossHugo 7.1',
          price: '8,500,000$',
          image: 'https://via.placeholder.com/500',
        },
        // Otros productos relacionados
      ]);
    }
  }, [id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Columna de la izquierda: Imagen del producto y detalles principales */}
        <div className="md:col-span-1">
          <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-lg" />
        </div>

        {/* Columna de la derecha: Información del producto */}
        <div className="md:col-span-1 flex flex-col justify-between">
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-semibold text-blue-600 mb-4">{product.price}</p>
          
          {/* Botones de acción */}
          <div className="flex gap-4">
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition-all">Añadir al carrito</button>
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition-all">Comprar ahora</button>
          </div>
        </div>
      </div>

      {/* Sección para otros productos que se compran juntos */}
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
  );
};

export default ProductPage;
