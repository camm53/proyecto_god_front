import React, { useEffect, useState } from "react";
import Section from "./section";
import ProductCard from "./ProductCard";

const Homeservicios = () => {
  const [productosVistos, setProductosVistos] = useState([]);
  const [user, setUser] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const ITEMS_PER_PAGE = 5;

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
    setStartIndex((prev) => Math.max(0, prev - ITEMS_PER_PAGE));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(productosVistos.length - ITEMS_PER_PAGE, prev + ITEMS_PER_PAGE)
    );
  };

  return (
    <div className="flex flex-col justify-center text-s-8 bg-s-1">
      {/* Historial si hay usuario */}
      {user && productosVistos.length > 0 && (
        <Section
          className="w-full mt-10"
          custonPaddings="px-[1.2rem] md:px-0 md:mx-14"
        >
          <div className="mb-6 font-serif text-2xl text-s-9/70">
            Historial de productos vistos
          </div>

          <div className="flex items-center justify-between space-x-4">
            {/* Botón atrás */}
            <button
              onClick={handlePrev}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              disabled={startIndex === 0}
            >
              ◀
            </button>

            {/* Productos */}
            <div className="flex flex-1 justify-evenly gap-4">
              {productosVistos
                .slice(startIndex, startIndex + ITEMS_PER_PAGE)
                .map((producto, index) => (
                  <ProductCard
                    key={index}
                    image={producto.imagenUrl}
                    name={producto.nombre}
                    price={producto.precio}
                  />
                ))}
            </div>

            {/* Botón siguiente */}
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              disabled={startIndex + ITEMS_PER_PAGE >= productosVistos.length}
            >
              ▶
            </button>
          </div>
        </Section>
      )}
    </div>
  );
};

export default Homeservicios;
