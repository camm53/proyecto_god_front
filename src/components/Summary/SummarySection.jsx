import { useEffect, useState } from "react";
import ShipmentsList from "./ShipmentsList";
import WeeklySummary from "./WeeklySummary";
import api from "/api";

const SummarySection = () => {
  const [todayShipments, setTodayShipments] = useState([]);
  const [upcomingShipments, setUpcomingShipments] = useState([]);
  const [weeklySummary, setWeeklySummary] = useState({
    delivered: 0,
    canceled: 0,
    rescheduled: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user || user.rol !== "VENDEDOR") return;

      try {
        const detallesRes = await api.get("/detalles-pedido");
        const detalles = detallesRes.data;

        const hoyISO = new Date().toISOString().split("T")[0];

        const detallesDelVendedor = detalles.filter(
          d => d.producto.vendedorId === user.id
        );

        // Envíos de hoy
        const hoy = detallesDelVendedor.filter((d) =>
          d.pedido.fechaCreacion.startsWith(hoyISO)
        );

        // Próximos (que no sean de hoy)
        const upcoming = detallesDelVendedor.filter(
          (d) => !d.pedido.fechaCreacion.startsWith(hoyISO)
        );

        // Agrupar por fecha
        const grouped = upcoming.reduce((acc, d) => {
          const fecha = new Date(d.pedido.fechaCreacion).toLocaleDateString();
          if (!acc[fecha]) acc[fecha] = [];
          acc[fecha].push({
            productName: d.producto.nombre,
            orderId: d.pedido.id,
            status: d.pedido.estado,
            time: new Date(d.pedido.fechaCreacion).toLocaleTimeString(),
            company: "N/A",
          });
          return acc;
        }, {});

        // Resumen semanal (solo de pedidos del vendedor)
        const resumen = {
          delivered: detallesDelVendedor.filter(d => d.pedido.estado === "concluido").length,
          canceled: detallesDelVendedor.filter(d => d.pedido.estado === "cancelado").length,
          rescheduled: detallesDelVendedor.filter(d => d.pedido.estado === "reprogramado").length,
        };

        setTodayShipments(
          hoy.map((d) => ({
            productName: d.producto.nombre,
            orderId: d.pedido.id,
            status: d.pedido.estado,
            time: new Date(d.pedido.fechaCreacion).toLocaleTimeString(),
            company: "N/A",
          }))
        );

        setUpcomingShipments(
          Object.entries(grouped).map(([date, shipments]) => ({
            date,
            shipments,
          }))
        );

        setWeeklySummary(resumen);
      } catch (err) {
        console.error("Error cargando datos de resumen:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      <ShipmentsList title="Envíos de Hoy" shipments={todayShipments} />
      <ShipmentsList title="Envíos Próximos" shipments={upcomingShipments} isUpcoming />
      <WeeklySummary {...weeklySummary} />
    </div>
  );
};

export default SummarySection;
