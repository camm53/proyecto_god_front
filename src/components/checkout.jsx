import React, { useEffect, useState } from "react";
import Header from "../components/header";
import api from "/api";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [user, setUser] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [direccion, setDireccion] = useState("");
  const [metodoPago, setMetodoPago] = useState("TARJETA_CREDITO");
  const [numeroTarjeta, setNumeroTarjeta] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const subtotal = carrito.reduce(
    (acc, item) => acc + item.cantidad * item.producto.precio,
    0
  );

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    if (!localUser) return;

    setUser(localUser);

    const fetchCarritoYUsuario = async () => {
      try {
        const [carritoRes, usuarioRes] = await Promise.all([
          api.get(`/carrito/usuario/${localUser.id}`),
          api.get(`/usuarios/${localUser.id}`)
        ]);
        setCarrito(carritoRes.data);
        setDireccion(usuarioRes.data.direccion || "");
      } catch (err) {
        console.error("Error cargando datos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCarritoYUsuario();
  }, []);

  const handlePagar = async () => {
    if (!direccion || !numeroTarjeta) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    try {
      // 1. Crear pedido
      const pedidoRes = await api.post("/pedidos", {
        usuario: { id: user.id },
        total: subtotal,
        estado: "pendiente",
      });

      const pedido = pedidoRes.data;

      // 2. Crear detalles del pedido
      for (const item of carrito) {
        await api.post("/detalles-pedido", {
          pedido: { id: pedido.id },
          producto: { id: item.producto.id },
          cantidad: item.cantidad,
          precio: item.producto.precio,
        });
      }

      // 3. Registrar método de pago
      const metodoRes = await api.post("/metodos-pago", {
        usuario: { id: user.id },
        tipo: metodoPago,
        detalles: numeroTarjeta,
        activo: true,
      });

      // 4. Crear pago
      await api.post("/pagos", {
        pedido: { id: pedido.id },
        metodoPago: { id: metodoRes.data.id },
        estado: "PENDIENTE",
        fechaPago: new Date().toISOString(),
      });

      // 5. Limpiar carrito
      await api.delete(`/carrito/usuario/${user.id}`);

      alert("¡Compra realizada con éxito!");
      navigate("/orders");
    } catch (err) {
      console.error("Error al procesar el pago:", err);
      alert("Hubo un error al procesar tu pedido.");
    }
  };

  return (
    <div>
      <Header />
      <div className="max-w-5xl mx-auto p-6 bg-blue-50 min-h-screen">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Finalizar compra</h2>

        {loading ? (
          <p className="text-gray-600">Cargando...</p>
        ) : !user ? (
          <p className="text-red-500">Debes iniciar sesión para continuar.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Sección del usuario */}
            <div className="bg-white p-6 rounded shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-gray-800">Información de envío</h3>
              <p className="text-gray-700"><strong>Nombre:</strong> {user.nombre}</p>
              <p className="text-gray-700"><strong>Email:</strong> {user.email}</p>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Dirección:</label>
                <input
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Calle, ciudad, código postal"
                />
              </div>
            </div>

            {/* Sección de pago */}
            <div className="bg-white p-6 rounded shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-gray-800">Método de pago</h3>
              <label className="block text-sm text-gray-700 mb-1">Tipo:</label>
              <select
                value={metodoPago}
                onChange={(e) => setMetodoPago(e.target.value)}
                className="w-full mb-4 border border-gray-300 px-3 py-2 rounded"
              >
                <option value="TARJETA_CREDITO">Tarjeta de crédito</option>
                <option value="TARJETA_DEBITO">Tarjeta de débito</option>
                <option value="PAYPAL">PayPal</option>
              </select>

              <label className="block text-sm text-gray-700 mb-1">Número o email:</label>
              <input
                value={numeroTarjeta}
                onChange={(e) => setNumeroTarjeta(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded"
                placeholder="Número de tarjeta o cuenta"
              />
            </div>

            {/* Resumen del pedido */}
            <div className="md:col-span-2 bg-white p-6 border rounded shadow-sm mt-2">
              <h3 className="font-semibold text-lg mb-3 text-gray-800">Resumen del pedido</h3>
              {carrito.map((item) => (
                <div key={item.id} className="flex justify-between py-1 text-sm text-gray-700">
                  <span>{item.cantidad} x {item.producto.nombre}</span>
                  <span>${(item.producto.precio * item.cantidad).toFixed(2)}</span>
                </div>
              ))}
              <hr className="my-2 border-gray-300" />
              <div className="flex justify-between font-bold text-lg text-gray-900">
                <span>Total:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <button
                onClick={handlePagar}
                className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded"
              >
                Confirmar y pagar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
