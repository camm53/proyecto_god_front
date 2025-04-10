const RecentProductCard = ({ name, price, createdAt, status }) => {
    return (
      <div className="flex justify-between items-start p-4 bg-white rounded-xl shadow-sm border mb-4">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-[#66558A] font-medium">${price}</p>
          <p className="text-sm text-gray-500">Estatus: <span className="font-medium text-gray-700">{status}</span></p>
          <p className="text-sm text-gray-500">Envío en</p>
          <p className="text-xs text-gray-400">{createdAt}</p>
        </div>
        <div className="text-right text-[#66558A] font-semibold">${price}</div>
      </div>
    );
  };
  
  export default RecentProductCard;
  