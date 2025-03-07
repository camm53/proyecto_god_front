import React from 'react';

const ProductCard = ({ image, name, rating, price }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-60">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-md" />
      <h3 className="text-lg font-semibold mt-2 text-black">{name}</h3> {/* Cambié a text-black */}
      <p className="text-sm text-black">⭐ {rating}</p> {/* Cambié a text-black */}
      <p className="text-xl font-bold mt-1 text-black">${price}</p> {/* Cambié a text-black */}
    </div>
  );
};

export default ProductCard;
