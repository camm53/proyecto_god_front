import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleBox from "./ArticleBox";
import BuyTogether from "./BuyTogether";
import RelatedProducts from "./RelatedProducts";
import TechnicalInfoBox from './TecnicalInfoBox'; // Fixed typo in import
import { fetchProductById, getRelatedProducts } from '../constants/productData';
import Header from "./header";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedItems, setRelatedItems] = useState([]);

  useEffect(() => {
    // Load product data from the external data file
    const foundProduct = fetchProductById(id);
    
    if (foundProduct) {
      setProduct(foundProduct);
      // Get related products from the data file
      setRelatedItems(getRelatedProducts(foundProduct.id));
    }
  }, [id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    
    <div>
      <Header/>
      <div className="container mx-auto p-6">
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-md w-full">
  {/* Product container */}
  <div className="flex flex-col md:flex-row">
    {/* Product image */}
    <div className="md:w-2/5 p-4 flex items-center justify-center bg-gray-50">
      <img 
        src={product.image} 
        alt={product.name} 
        className="max-h-64 object-contain"
      />
    </div>
    
    {/* Product details */}
    <div className="md:w-3/5 p-6">
      <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
      
      {/* Price section */}
      <div className="mt-2 mb-4">
        <span className="text-2xl font-bold text-green-600">{product.price}</span>
        <span className="ml-2 text-lg text-gray-500 line-through">10,000,000$</span>
        <span className="ml-2 text-xs font-semibold text-red-500 bg-red-100 px-2 py-0.5 rounded">¡Oferta!</span>
      </div>
      
      {/* Characteristics */}
      <div className="mb-4">
        <h3 className="font-semibold text-gray-700">Características principales:</h3>
        <div className="mt-2">
          <div className="flex items-start">
            <span className="text-green-600 mr-2">✓</span>
            <span className="text-gray-700">{product.description}</span>
          </div>
        </div>
      </div>
      
      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-2 mt-4">
        <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded font-medium text-center transition-colors">
          Comprar ahora
        </button>
        <button className="border border-green-600 text-green-600 hover:bg-green-50 py-2 px-4 rounded font-medium text-center transition-colors">
          Agregar al carrito
        </button>
      </div>
      
      {/* Additional info */}
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
  <div className="">
    <h1>hosdklajsda</h1>
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
</div></div>
  );
};

export default ProductPage;