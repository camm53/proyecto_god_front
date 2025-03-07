import React from "react";

const ArticleBox = ({ product }) => {
  return (
    <div className="p-6 border rounded-lg shadow-md bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded-md"
      />
      <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="text-xl font-semibold text-blue-600 mt-3">${product.price}</p>
      <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Añadir al carrito
      </button>
    </div>
  );
};

export default ArticleBox;
