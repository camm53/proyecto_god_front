import SummarySection from "./Summary/SummarySection";
import OrderSearchBar from "./HomeSeller/OrderSearchBar";
import OrderStatusBanner from "./HomeSeller/OrderStatusBanner";
import RecentProductCard from "./HomeSeller/RecentProductCard";

const Temporal = () => {
  const handleOrderSearch = (query) => {
    console.log("Buscando pedido:", query);
    // Aquí puedes aplicar lógica de filtrado o navegación
  };

  const orderStatusData = {
    inTransit: 12,
    completed: 38,
    notDelivered: 4,
  };

  const recentProducts = [
    { name: "Teclado Mecánico", price: 499.99, createdAt: "2025-03-26", status: "En tránsito" },
    { name: "Mouse Pro", price: 89.99, createdAt: "2025-03-25", status: "Concluido" },
    { name: "Monitor UltraWide", price: 1275.00, createdAt: "2025-03-22", status: "No entregado" },
  ];

  const sortedProducts = [...recentProducts].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <div className="p-6 space-y-10 bg-gray-100 min-h-screen">
      {/* Sección de resumen de envíos */}
      <SummarySection />

      {/* Sección de búsqueda y estado de pedidos */}
      <section className="space-y-4">
        <OrderSearchBar onSearch={handleOrderSearch} />
        <OrderStatusBanner statusData={orderStatusData} />
      </section>

      {/* Sección de productos recientes */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Productos recientes</h2>
        {sortedProducts.map((product, index) => (
          <RecentProductCard key={index} {...product} />
        ))}
      </section>
    </div>
  );
};

export default Temporal;