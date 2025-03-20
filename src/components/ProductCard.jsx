// ProductCard.jsx
import React from 'react';

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-60">
      {/* Si 'image' es null, puedes poner una imagen de respaldo */}
      <img
        src={image || 'https://via.placeholder.com/150'}
        alt={name}
        className="w-full h-40 object-cover rounded-md"
      />

      <h3 className="text-lg font-semibold mt-2 text-black">{name}</h3>
      <p className="text-xl font-bold mt-1 text-black">
        ${price}
      </p>
    </div>
  );
};

export default ProductCard;
