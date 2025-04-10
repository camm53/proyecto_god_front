import ShipmentsList from "./ShipmentsList";
import WeeklySummary from "./WeeklySummary";

// Datos de prueba (luego puedes reemplazarlos con datos reales o de API)
const todayShipments = [
  { productName: "Teclado", orderId: "1234", status: "Recolectado", time: "12:00 PM", company: "FedEx" },
  { productName: "Mouse", orderId: "5678", status: "Pendiente", time: "9:69 PM", company: "DHL" },
  { productName: "Britton", orderId: "9101", status: "Cancelado", time: "23 min", company: "" },
];

const upcomingShipments = [
  { date: "Mañana", shipments: [{ productName: "Teclado", orderId: "1234", status: "Pendiente", time: "", company: "" }] },
  { date: "22/02/2025", shipments: [{ productName: "Britton", orderId: "9101", status: "Cancelado", time: "", company: "" }] },
];

const weeklySummaryData = {
  delivered: 250,
  canceled: 30,
  rescheduled: 50,
};

const SummarySection = () => {
  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {/* Envíos de Hoy */}
      <ShipmentsList title="Envíos de Hoy" shipments={todayShipments} />

      {/* Envíos Próximos */}
      <ShipmentsList title="Envíos Próximos" shipments={upcomingShipments} isUpcoming={true} />

      {/* Resumen Semanal */}
      <WeeklySummary {...weeklySummaryData} />
    </div>
  );
};

export default SummarySection;