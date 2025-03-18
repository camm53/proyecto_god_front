import React from "react";

const TechnicalInfoBox = ({ product }) => {
  // Verificamos si 'product' tiene 'technicalDetails' y si es un objeto válido
  if (!product || !product.technicalDetails || typeof product.technicalDetails !== "object") {
    return <div>No hay detalles técnicos disponibles.</div>;
  }

  return (
    <div className=" bg-gray-50 border border-gray-200 rounded-lg p-6">
      <h2 className="text-xl font-semibold text-green-800 mb-6 border-b border-green-200 pb-2">Ficha Técnica</h2>

      <div className="bg-white rounded-md shadow-sm max-w-[50%]">
        {Object.entries(product.technicalDetails).map(([key, value], index) => (
          <div 
            key={index} 
            className={`flex py-2 px-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
          >
            <div className="w-1/3 text-sm font-medium text-gray-700 capitalize">
              {key.replace(/([A-Z])/g, " $1")}
            </div>
            <div className="w-2/3 text-sm text-gray-800">{value}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center text-sm text-gray-500">
        <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <p>Las especificaciones pueden variar según la región y están sujetas a cambios sin previo aviso.</p>
      </div>
    </div>
  );
};

export default TechnicalInfoBox;
