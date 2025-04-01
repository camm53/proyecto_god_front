import React, { useEffect, useState } from "react";
import Header from "../components/header";
import api from "/api";
import { useNavigate } from "react-router-dom";
import { getStripe } from "../stripe";

const Checkout = () => {
  const [user, setUser] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [direccion, setDireccion] = useState("");
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

    const fetchData = async () => {
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

    fetchData();
  }, []);

  const handlePagar = async () => {
    if (!direccion) {
      alert("Por favor, completa tu dirección.");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:8080/api/payment/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });

      const data = await res.json();

      if (data.sessionId) {
        const stripe = await getStripe();
        await stripe.redirectToCheckout({ sessionId: data.sessionId });
      } else {
        alert("No se pudo iniciar el proceso de pago.");
      }
    } catch (err) {
      console.error("Error al procesar el pago con Stripe:", err);
      alert("Hubo un error con Stripe.");
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

            <div className="bg-white p-6 rounded shadow-sm border">
              <h3 className="font-semibold text-lg mb-4 text-gray-800">Método de pago</h3>
              <p>El pago se realizará de forma segura a través de Stripe al hacer clic en el botón.</p>
            </div>

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
                Pagar con Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
