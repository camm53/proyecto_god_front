import React, { useState, useEffect } from "react";

const ads = [
  {
    id: 1,
    title: "Oferta Especial 1",
    image: "https://via.placeholder.com/600x300?text=Oferta+1",
    description: "Descuento del 30% en audífonos premium.",
  },
  {
    id: 2,
    title: "Promoción Flash",
    image: "src/myassets/International_Pokémon_logo.svg.png",
    description: "Compra 2 teclados y llévate el tercero gratis.",
  },
  {
    id: 3,
    title: "Nuevo Producto",
    image: "https://via.placeholder.com/600x300?text=Oferta+3",
    description: "Descubre el nuevo mouse gamer ultra ligero.",
  },
];

function AdSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 5000); // Cambia de anuncio cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const prevIndex = (currentIndex - 1 + ads.length) % ads.length;
  const nextIndex = (currentIndex + 1) % ads.length;

  return (
    <div className="relative w-full max-w-4xl mx-auto p-4">
      <div className="flex items-center justify-between space-x-4">
        {/* Anuncio anterior */}
        <div className="w-1/3 opacity-50 transition-opacity">
          <img src={ads[prevIndex].image} alt={ads[prevIndex].title} className="rounded-lg" />
          <p className="text-sm text-gray-600">{ads[prevIndex].title}</p>
        </div>

        {/* Anuncio actual */}
        <div className="w-1/3 transform scale-110 shadow-lg transition-transform">
          <img src={ads[currentIndex].image} alt={ads[currentIndex].title} className="rounded-lg" />
          <p className="text-lg font-bold">{ads[currentIndex].title}</p>
          <p className="text-sm text-gray-700">{ads[currentIndex].description}</p>
        </div>

        {/* Anuncio siguiente */}
        <div className="w-1/3 opacity-50 transition-opacity">
          <img src={ads[nextIndex].image} alt={ads[nextIndex].title} className="rounded-lg" />
          <p className="text-sm text-gray-600">{ads[nextIndex].title}</p>
        </div>
      </div>
    </div>
  );
}

export default AdSection;
