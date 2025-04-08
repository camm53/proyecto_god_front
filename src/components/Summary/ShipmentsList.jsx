import ShipmentItem from "./ShipmentItem";

const ShipmentsList = ({ title, shipments, isUpcoming = false }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-300">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      
      {/* Si es la sección de Envíos Próximos, agrupamos por fecha */}
      {isUpcoming
        ? shipments.map((group, index) => (
            <div key={index}>
              <h3 className="text-md font-medium mt-3">{group.date}</h3>
              {group.shipments.map((shipment, idx) => (
                <ShipmentItem key={idx} {...shipment} />
              ))}
            </div>
          ))
        : shipments.map((shipment, index) => <ShipmentItem key={index} {...shipment} />)}
    </div>
  );
};

export default ShipmentsList;