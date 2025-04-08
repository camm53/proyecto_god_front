const WeeklySummary = ({ delivered, canceled, rescheduled }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md border border-gray-300">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Resumen Semanal</h2>
  
        {/* Resumen de estadísticas */}
        <div className="space-y-3">
          <div>
            <h3 className="text-lg font-medium">Entregados</h3>
            <p className="text-xl font-bold">{delivered}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-red-500">Cancelados</h3>
            <p className="text-xl font-bold">{canceled}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-yellow-500">Reprogramados</h3>
            <p className="text-xl font-bold">{rescheduled}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default WeeklySummary;