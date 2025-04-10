import { useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/outline";

const MyProductsPage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Mouse", price: 0 },
    { id: 2, name: "Glider", price: 0 },
    { id: 3, name: "Alfombrilla", price: 0 },
    { id: 4, name: "Britton", price: 0 }
  ]);

  return (
    <div className="max-w-4xl mx-auto p-6 mt-6">
      <h1 className="text-2xl font-bold mb-6">Mis productos</h1>
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="flex items-center p-4 border rounded-lg shadow-sm">
            <div className="h-16 w-16 flex items-center justify-center bg-gray-200 rounded-lg mr-4">
              <PhotoIcon className="h-10 w-10 text-gray-500" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-blue-600">${product.price}</p>
            </div>
            <div className="flex space-x-2">
              <button className="bg-gray-200 text-black px-4 py-2 rounded-full">Pausar publicación</button>
              <button className="bg-red-300 text-black px-4 py-2 rounded-full">Cancelar</button>
              <button className="bg-white border px-4 py-2 rounded-full">Cambiar datos</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProductsPage;

