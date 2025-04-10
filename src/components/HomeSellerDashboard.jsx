import React from "react";
import HeaderSeller from "../components/HeaderSeller";
import SummarySection from "../components/Summary/SummarySection";
import OrderSearchBar from "../components/HomeSeller/OrderSearchBar";
import OrderStatusBanner from "../components/HomeSeller/OrderStatusBanner";
import RecentProductCard from "../components/HomeSeller/RecentProductCard";

const HomeSellerDashboard = () => {
  const handleOrderSearch = (query) => {
    console.log("Buscando pedido:", query);
  };

  const orderStatusData = {
    inTransit: 12,
    completed: 38,
    notDelivered: 4,
  };

  const recentProducts = [
    {
      name: "Teclado Mecánico",
      price: 499.99,
      createdAt: "2025-03-26",
      status: "En tránsito",
    },
    {
      name: "Mouse Pro",
      price: 89.99,
      createdAt: "2025-03-25",
      status: "Concluido",
    },
    {
      name: "Monitor UltraWide",
      price: 1275.0,
      createdAt: "2025-03-22",
      status: "No entregado",
    },
  ];

  const sortedProducts = [...recentProducts].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

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
          <h2 className="text-xl font-semibold mb-4">Productos recientes</h2>
          {sortedProducts.map((product, index) => (
            <RecentProductCard key={index} {...product} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default HomeSellerDashboard;
