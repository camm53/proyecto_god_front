const WeeklySummary = ({ delivered, canceled, rescheduled }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-300">
      <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-gray-800">
        Resumen Semanal
      </h2>

      {/* Resumen de estadísticas */}
      <div className="space-y-3">
        <div>
          <h3 className="text-lg font-medium text-gray-700">Entregados</h3>
          <p className="text-xl font-bold text-gray-800">{delivered}</p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-red-600">Cancelados</h3>
          <p className="text-xl font-bold text-gray-800">{canceled}</p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-yellow-600">Reprogramados</h3>
          <p className="text-xl font-bold text-gray-800">{rescheduled}</p>
        </div>
      </div>
    </div>
  );
};

export default WeeklySummary;
