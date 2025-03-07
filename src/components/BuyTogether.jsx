import React from "react";

const BuyTogether = ({ relatedItems }) => {
  return (
    <div className="p-6 border rounded-lg shadow-md bg-white mt-6">
      <h3 className="text-xl font-semibold mb-4">Comprados juntos</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {relatedItems.map((item) => (
          <div key={item.id} className="border p-4 rounded-md">
            <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded" />
            <p className="text-gray-700 mt-2">{item.name}</p>
            <p className="text-blue-600 font-bold">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyTogether;
