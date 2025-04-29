import React, { useEffect, useState, useRef } from "react";
import Section from "./section";
import ProductCard from "./ProductCard";

const Homeservicios = () => {
  const [productosVistos, setProductosVistos] = useState([]);
  const [user, setUser] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const containerRef = useRef(null);

  // Update items per page based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 768) {
        setItemsPerPage(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth < 1280) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(5);
      }
    };

    // Initial calculation
    updateItemsPerPage();

    // Add resize listener
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser?.id) {
      setUser(storedUser);

      const key = `historial_${storedUser.id}`;
      const historial = JSON.parse(localStorage.getItem(key)) || [];
      const ultimos10 = historial.slice(-10).reverse(); // del más reciente al más antiguo
      setProductosVistos(ultimos10);
    }
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(productosVistos.length - itemsPerPage, prev + 1)
    );
  };

  return (
    <div className="flex flex-col justify-center text-s-8 bg-s-1">
      {/* Historial si hay usuario */}
      {user && productosVistos.length > 0 && (
        <Section
          className="w-full my-4 md:my-6 lg:my-10"
          custonPaddings="px-4 sm:px-6 md:px-8 lg:px-12"
        >
          <div className="mb-3 md:mb-6 font-serif text-xl md:text-2xl text-s-9/70">
            Historial de productos vistos
          </div>

          <div className="flex items-center justify-between space-x-2 md:space-x-4">
            {/* Botón atrás */}
            <button
              onClick={handlePrev}
              className="px-2 py-1 md:px-4 md:py-2 bg-gray-200 rounded hover:bg-gray-300 flex-shrink-0"
              disabled={startIndex === 0}
            >
              ◀
            </button>

            {/* Productos - Contenedor con scroll horizontal en móviles */}
            <div 
              ref={containerRef}
              className="flex flex-1 overflow-hidden"
            >
              <div className="flex gap-2 md:gap-4 w-full justify-between">
                {productosVistos
                  .slice(startIndex, startIndex + itemsPerPage)
                  .map((producto, index) => (
                    <div key={index} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-1">
                      <ProductCard
                        image={producto.imagenUrl}
                        name={producto.nombre}
                        price={producto.precio}
                      />
                    </div>
                  ))}
              </div>
            </div>

            {/* Botón siguiente */}
            <button
              onClick={handleNext}
              className="px-2 py-1 md:px-4 md:py-2 bg-gray-200 rounded hover:bg-gray-300 flex-shrink-0"
              disabled={startIndex + itemsPerPage >= productosVistos.length}
            >
              ▶
            </button>
          </div>
          
          {/* Indicador de página */}
          <div className="flex justify-center mt-4">
            {Array.from({ length: Math.ceil(productosVistos.length / itemsPerPage) }).map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full mx-1 ${
                  i === Math.floor(startIndex / itemsPerPage) ? "bg-primary" : "bg-gray-300"
                }`}
                onClick={() => setStartIndex(i * itemsPerPage)}
              />
            ))}
          </div>
        </Section>
      )}
    </div>
  );
};

export default Homeservicios;