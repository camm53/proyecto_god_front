import ShipmentItem from "./ShipmentItem";

const ShipmentsList = ({ title, shipments, isUpcoming = false }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-300">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>

      <div className="max-h-[400px] overflow-y-scroll space-y-2 pr-1">
        {isUpcoming
          ? shipments.map((group, index) => (
              <div key={index}>
                <h3 className="text-md font-medium mt-3 text-gray-700">{group.date}</h3>
                {group.shipments.map((shipment, idx) => (
                  <ShipmentItem key={idx} {...shipment} />
                ))}
              </div>
            ))
          : shipments.map((shipment, index) => (
              <ShipmentItem key={index} {...shipment} />
            ))}
      </div>
    </div>
  );
};

export default ShipmentsList;
