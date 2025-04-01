import React from 'react';
import placeholderImage from '../assets/placeholder.jpg';

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="bg-white shadow-md rounded-lg w-60 min-h-[280px] flex flex-col justify-between p-4 transition-transform hover:scale-105">
      <div>
        <img
          src={image || placeholderImage}
          alt={name}
          className="w-full h-40 object-cover rounded-md"
          onError={(e) => {
            e.target.onerror = null; // Previene bucle infinito
            e.target.src = placeholderImage;
          }}
        />
        <h3 className="text-md font-semibold mt-2 text-black truncate">{name}</h3>
      </div>
      <p className="text-lg font-bold text-black mt-2">${price}</p>
    </div>
  );
};

export default ProductCard;
