import React, { useEffect, useState } from "react";
import Header from "../components/header";
import api from "/api";

const Pedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [detalles, setDetalles] = useState({});
  const [pagos, setPagos] = useState({});
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.id) {
      setUserId(null);
      setLoading(false);
      return;
    }

    setUserId(user.id);

    const fetchPedidos = async () => {
      try {
        const res = await api.get(`/pedidos/usuario/${user.id}`);
        setPedidos(res.data);

        for (const pedido of res.data) {
          const detalleRes = await api.get(`/detalles-pedido/pedido/${pedido.id}`);
          setDetalles((prev) => ({ ...prev, [pedido.id]: detalleRes.data }));
        }

        // Obtener pagos y relacionarlos por ID de pedido
        const pagosRes = await api.get("/pagos");
        const pagosMap = {};
        pagosRes.data.forEach((pago) => {
          if (pago.pedido?.id) {
            pagosMap[pago.pedido.id] = pago.estado; // "PENDIENTE" o "COMPLETADO"
          }
        });
        setPagos(pagosMap);

      } catch (err) {
        console.error("Error al obtener pedidos o pagos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPedidos();
  }, []);

  const cancelarPedido = async (id) => {
    const confirmar = window.confirm("¿Estás seguro de que quieres cancelar este pedido?");
    if (!confirmar) return;

    try {
      const pedido = pedidos.find((p) => p.id === id);
      await api.put(`/pedidos/${id}`, { ...pedido, estado: "cancelado" });

      setPedidos((prev) =>
        prev.map((p) =>
          p.id === id ? { ...p, estado: "cancelado" } : p
        )
      );
    } catch (err) {
      console.error("Error al cancelar el pedido:", err);
      alert("No se pudo cancelar el pedido.");
    }
  };

  return (
    <div>
      <Header />
      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Mis Pedidos</h2>

        {!userId && !loading && (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded mb-6">
            <p className="font-semibold mb-1">¡Atención!</p>
            <p>Por favor, inicia sesión o crea una cuenta para ver tus pedidos.</p>
          </div>
        )}

        {userId && loading && <p className="text-gray-600">Cargando pedidos...</p>}

        {userId && !loading && pedidos.length === 0 && (
          <p className="text-gray-500">No tienes pedidos registrados aún.</p>
        )}

        {userId && pedidos.length > 0 && [...pedidos].reverse().map((pedido) => (
          <div
            key={pedido.id}
            className="mb-6 border border-gray-300 rounded-lg shadow-sm bg-white"
          >
            <div className="bg-gray-100 px-4 py-3 rounded-t-md flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-700">
                  <strong>ID Pedido:</strong> {pedido.id}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Fecha:</strong>{" "}
                  {new Date(pedido.fechaCreacion).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right space-y-1">
                {/* Estado del pedido */}
                <span
                  className={`block px-3 py-1 rounded-full text-sm font-medium ${
                    pedido.estado === "pendiente"
                      ? "bg-yellow-200 text-yellow-800"
                      : pedido.estado === "cancelado"
                      ? "bg-red-200 text-red-800"
                      : "bg-green-200 text-green-800"
                  }`}
                >
                  {pedido.estado}
                </span>

                {/* Estado del pago */}
                {pagos[pedido.id] ? (
                  <span
                    className={`block px-3 py-1 rounded-full text-sm font-medium ${
                      pagos[pedido.id] === "PENDIENTE"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-emerald-100 text-emerald-700"
                    }`}
                  >
                    {pagos[pedido.id] === "PENDIENTE"
                      ? "Pago pendiente"
                      : "Pago completado"}
                  </span>
                ) : (
                  <span className="block px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-700">
                    Sin información de pago
                  </span>
                )}
              </div>
            </div>

            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Productos:</h4>
              {detalles[pedido.id]?.length > 0 ? (
                <ul className="space-y-3">
                  {detalles[pedido.id].map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between items-start border p-3 rounded-md"
                    >
                      <div>
                        <p className="font-medium text-gray-800">
                          {item.producto.nombre}
                        </p>
                        <p className="text-sm text-gray-600">
                          Cantidad: {item.cantidad}
                        </p>
                      </div>
                      <p className="font-semibold text-green-700">
                        ${item.precio.toFixed(2)}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500">No hay productos.</p>
              )}

              <hr className="my-4" />

              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-900 text-lg">Total:</span>
                <span className="font-bold text-green-700 text-lg">
                  ${pedido.total.toFixed(2)}
                </span>
              </div>

              {pedido.estado === "pendiente" && (
                <button
                  onClick={() => cancelarPedido(pedido.id)}
                  className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded"
                >
                  Cancelar pedido
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pedidos;
