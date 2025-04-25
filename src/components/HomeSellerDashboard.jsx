import React, { useEffect, useState } from "react";
import HeaderSeller from "../components/HeaderSeller";
import SummarySection from "../components/Summary/SummarySection";
import OrderSearchBar from "../components/HomeSeller/OrderSearchBar";
import OrderStatusBanner from "../components/HomeSeller/OrderStatusBanner";
import api from "/api";

const HomeSellerDashboard = () => {
  const [productos, setProductos] = useState([]);
  const [orderStatusData, setOrderStatusData] = useState({
    inTransit: 0,
    completed: 0,
    notDelivered: 0,
  });

  const handleOrderSearch = (query) => {
    console.log("Buscando pedido:", query);
  };

  useEffect(() => {
    const fetchSellerProducts = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user || user.rol !== "VENDEDOR") return;

      try {
        const res = await api.get("/productos");
        const sellerProducts = res.data.filter(p => p.vendedorId === user.id);

        const detailed = await Promise.all(
          sellerProducts.map(async (prod) => {
            const detRes = await api.get(`/detalles-pedido/producto/${prod.id}`);
            return { ...prod, ventas: detRes.data };
          })
        );

        setProductos(
          detailed.sort((a, b) => new Date(b.fechaCreacion) - new Date(a.fechaCreacion))
        );

        const status = { inTransit: 0, completed: 0, notDelivered: 0 };
        detailed.forEach((prod) => {
          prod.ventas.forEach((venta) => {
            const estado = venta.pedido.estado.toLowerCase();
            if (estado.includes("tránsito")) status.inTransit++;
            else if (estado.includes("concluido")) status.completed++;
            else status.notDelivered++;
          });
        });

        setOrderStatusData(status);
      } catch (err) {
        console.error("Error al cargar productos del vendedor:", err);
      }
    };

    fetchSellerProducts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <HeaderSeller />
      <div className="p-6 space-y-10">
        <SummarySection />
        <section className="space-y-4">
          <OrderSearchBar onSearch={handleOrderSearch} />
          <OrderStatusBanner statusData={orderStatusData} />
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-4 text-black">Productos recientes</h2>
          {productos.length === 0 ? (
            <p>No has publicado productos aún.</p>
          ) : (
            productos.map((producto) => (
              <div key={producto.id} className="mb-4 bg-white p-4 rounded shadow">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-black">{producto.nombre}</h3>
                  <span className="text-gray-600">
                    ${producto.precio} | Stock: {producto.stock}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{producto.descripcion}</p>
                {producto.ventas?.length > 0 ? (
                  <div className="text-sm mt-2 space-y-1">
                    <strong>Comprado por:</strong>
                    {producto.ventas.map((venta, i) => (
                      <div key={i}>
                        • {venta.pedido.usuario.nombre} ({venta.cantidad} unidades) -{" "}
                        {new Date(venta.pedido.fechaCreacion).toLocaleDateString()}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">Este producto aún no ha sido comprado.</p>
                )}
              </div>
            ))
          )}
        </section>
      </div>
    </div>
  );
};

export default HomeSellerDashboard;
