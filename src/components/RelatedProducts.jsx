import React from "react";
import ProductCard from "./ProductCard";

const RelatedProducts = ({ relatedItems }) => {
  return (
    <div className="p-6 border rounded-lg shadow-md bg-white mt-6">
      <h3 className="text-xl font-semibold mb-4">Productos Relacionados</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {relatedItems.map((item) => (
          <div key={item.id} className="border p-4 rounded-md">
            <ProductCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
