import React, { useEffect, useState } from "react";
import Header from "../components/header";
import api from "/api";
import { useNavigate } from "react-router-dom"; // ✅ Importar

const Carrito = () => {
  const [items, setItems] = useState([]);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // ✅ Instancia

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.id) {
      setUserId(user.id);
      fetchCarrito(user.id);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchCarrito = async (id) => {
    try {
      const res = await api.get(`/carrito/usuario/${id}`);
      setItems(res.data);
    } catch (error) {
      console.error("Error cargando el carrito:", error);
    } finally {
      setLoading(false);
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

  const subtotal = items.reduce(
    (acc, item) => acc + item.cantidad * item.producto.precio,
    0
  );

  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">Mi Carrito</h2>

        {!userId && !loading && (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded mb-6">
            <p className="font-semibold mb-1">¡Atención!</p>
            <p>Por favor, inicia sesión o crea una cuenta para ver tu carrito.</p>
          </div>
        )}

        {userId && loading && <p>Cargando productos del carrito...</p>}

        {userId && !loading && items.length === 0 && (
          <p className="text-gray-600">Tu carrito está vacío.</p>
        )}

        {userId && items.length > 0 && (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Lista de productos */}
            <div className="flex-1 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 border rounded-lg p-4 bg-white shadow-sm"
                >
                  <img
                    src={item.producto.imagenUrl}
                    alt={item.producto.nombre}
                    className="w-28 h-28 object-contain border rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{item.producto.nombre}</h3>
                    <p className="text-sm text-gray-600 mb-2">{item.producto.descripcion}</p>
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="text-green-700 font-bold">
                        ${item.producto.precio.toFixed(2)} c/u
                      </span>
                      <span className="text-gray-600">
                        Cantidad: {item.cantidad}
                      </span>
                      <span className="font-semibold text-gray-700">
                        Subtotal: ${(item.producto.precio * item.cantidad).toFixed(2)}
                      </span>
                    </div>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-500 text-sm mt-2 hover:underline"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Resumen de compra */}
            <div className="w-full lg:w-1/3 bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm h-fit">
              <h4 className="text-xl font-semibold mb-4">Resumen del pedido</h4>
              <div className="flex justify-between text-gray-700 mb-2">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700 mb-2">
                <span>Envío</span>
                <span>Gratis</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-bold text-lg text-gray-900">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              {/* ✅ Botón ir a pagar */}
              <button
                onClick={() => navigate("/checkout")}
                className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium"
              >
                Ir a pagar
              </button>

              <button
                onClick={() => window.location.href = "/"}
                className="mt-2 w-full text-blue-600 hover:underline text-sm"
              >
                Seguir comprando
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carrito;
