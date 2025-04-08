const OrderStatusBanner = ({ statusData }) => {
    const { inTransit, completed, notDelivered } = statusData;
  
    return (
      <div className="bg-gray-200 rounded-lg px-6 py-6 shadow-md flex justify-between items-center text-center gap-6">
        <div className="flex-1 flex flex-col items-center justify-center">
          <p className="text-base font-semibold text-gray-800 mb-1">En tránsito</p>
          <p className="text-2xl font-bold text-[#66558A]">{inTransit}</p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <p className="text-base font-semibold text-gray-800 mb-1">Concluidos</p>
          <p className="text-2xl font-bold text-[#66558A]">{completed}</p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <p className="text-base font-semibold text-gray-800 mb-1">No entregados</p>
          <p className="text-2xl font-bold text-[#66558A]">{notDelivered}</p>
        </div>
      </div>
    );
  };
  
  export default OrderStatusBanner;
  