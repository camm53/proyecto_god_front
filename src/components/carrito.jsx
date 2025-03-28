import React, { useEffect, useState } from "react";
import Header from "../components/header";
import api from "/api";

const Carrito = () => {
  const [items, setItems] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.id) {
      setUserId(user.id);
      fetchCarrito(user.id);
    }
  }, []);

  const fetchCarrito = async (id) => {
    try {
      const res = await api.get(`/carrito/usuario/${id}`);
      setItems(res.data);
    } catch (error) {
      console.error("Error cargando el carrito:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/carrito/${id}`);
      setItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error eliminando producto:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Mi Carrito</h2>
        {items.length === 0 ? (
          <p>No hay productos en tu carrito.</p>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 border rounded-md shadow-sm">
                <div>
                  <h3 className="text-lg font-semibold">{item.producto?.nombre}</h3>
                  <p className="text-gray-600">Cantidad: {item.cantidad}</p>
                  <p className="text-gray-600">Precio: ${item.producto?.precio}</p>
                </div>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Carrito;
