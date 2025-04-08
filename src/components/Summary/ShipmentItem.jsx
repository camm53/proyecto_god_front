const ShipmentItem = ({ productName, orderId, status, time, company }) => {
    return (
      <div className="flex items-center space-x-4 p-3 border-b border-gray-200 last:border-0">
        {/* Imagen de Producto (Placeholder) */}
        <div className="w-12 h-12 bg-gray-300 rounded-lg"></div>
  
        {/* Información del Pedido */}
        <div className="flex-1">
          <h3 className="text-lg font-medium">{productName}</h3>
          <p className="text-sm text-gray-500">ID: {orderId}</p>
          <p className="text-sm text-gray-700">{status} {company && `por ${company}`}</p>
        </div>
  
        {/* Hora/Estado */}
        <div className="text-sm text-gray-500">{time}</div>
      </div>
    );
  };
  
  export default ShipmentItem;