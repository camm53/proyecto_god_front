import React from "react";

const TechnicalInfoBox = ({ product }) => {
  // Verificamos si 'product' tiene 'technicalDetails' y si es un arreglo
  if (!product || !product.technicalDetails || !Array.isArray(product.technicalDetails)) {
    return <div>No hay detalles técnicos disponibles.</div>;
  }

  return (
    <div className="p-6 border rounded-lg shadow-md bg-white mt-6">
      <h3 className="text-xl font-semibold mb-4">Detalles Técnicos</h3>
      <ul className="list-disc pl-5">
        {product.technicalDetails.map((detail, index) => (
          <li key={index} className="text-black">{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default TechnicalInfoBox;
