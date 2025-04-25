import React from "react";

const ProductPreviewPage = ({ product, onClose }) => {
  if (!product) return <div>No hay datos para vista previa.</div>;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto px-4 py-8">
      <div className="bg-white rounded-lg max-w-3xl w-full shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Imagen del producto */}
          <div className="md:w-2/5 bg-gray-100 flex items-center justify-center p-4">
            <img
              src={product.images?.[0] ? URL.createObjectURL(product.images[0]) : "https://via.placeholder.com/150"}
              alt="Vista previa"
              className="max-h-60 object-contain"
            />
          </div>

          {/* Detalles del producto */}
          <div className="md:w-3/5 p-6 text-gray-800">
            <h2 className="text-2xl font-bold">{product.title}</h2>
            <p className="text-green-600 text-xl font-semibold mt-2">${product.price}</p>

            <div className="mt-4">
              <h3 className="font-semibold text-gray-700">Características:</h3>
              <p className="text-gray-600">{product.features}</p>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold text-gray-700">Detalles Técnicos:</h3>
              <p className="text-gray-600">{product.details}</p>
            </div>

            <div className="mt-6">
              <button
                onClick={onClose}
                className="bg-[#66558A] text-white px-5 py-2 rounded-full"
              >
                Cerrar Vista Previa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPreviewPage;
