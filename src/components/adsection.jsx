import React, { useState, useEffect, useRef } from "react";

const ads = [
  {
    id: 1,
    title: "Oferta Especial 1",
    image: "src/assets/oferta1.jpeg",
    description: "Descuento del 30% en audífonos premium.",
  },
  {
    id: 2,
    title: "Promoción Flash",
    image: "src/assets/oferta2.webp",
    description: "Compra 2 teclados y llévate el tercero gratis.",
  },
  {
    id: 3,
    title: "Nuevo Producto",
    image: "src/assets/oferta3.jpeg",
    description: "Descubre el nuevo mouse gamer ultra ligero.",
  },
  {
    id: 4,
    title: "Edición Limitada",
    image: "src/assets/oferta4.jpeg",
    description: "Laptop edición limitada solo por hoy.",
  },
  {
    id: 5,
    title: "Accesorios 2x1",
    image: "src/assets/oferta5.jpeg",
    description: "Llévate 2 fundas por el precio de 1.",
  },
];

const AdSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const slideInterval = useRef(null);
  const progressInterval = useRef(null);

  const startAutoSlide = () => {
    slideInterval.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ads.length);
    }, 5000);

    progressInterval.current = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 100);
  };

  const stopAutoSlide = () => {
    clearInterval(slideInterval.current);
    clearInterval(progressInterval.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  useEffect(() => {
    setProgress(0);
  }, [currentIndex]);

  const handlePrev = () => {
    stopAutoSlide();
    setCurrentIndex((prev) => (prev - 1 + ads.length) % ads.length);
    startAutoSlide();
  };

  const handleNext = () => {
    stopAutoSlide();
    setCurrentIndex((prev) => (prev + 1) % ads.length);
    startAutoSlide();
  };

  const getVisibleAds = () => {
    const prev = (currentIndex - 1 + ads.length) % ads.length;
    const next = (currentIndex + 1) % ads.length;
    return [ads[prev], ads[currentIndex], ads[next]];
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between space-x-6 overflow-hidden">
        {getVisibleAds().map((ad, index) => {
          const isCurrent = index === 1;
          const isPrev = index === 0;
          const isNext = index === 2;

          const handleClick = () => {
            if (isPrev) handlePrev();
            else if (isNext) handleNext();
          };

          return (
            <div
              key={ad.id}
              onClick={handleClick}
              className={`transition-transform duration-500 rounded-lg flex flex-col items-center cursor-pointer ${
                isCurrent
                  ? "w-3/5 scale-105 bg-white shadow-lg p-4"
                  : "w-1/5 opacity-50 bg-white p-2 translate-y-2 hover:opacity-70"
              }`}
            >
              <img
                src={ad.image}
                alt={ad.title}
                className={`w-full ${isCurrent ? "h-48" : "h-32"} object-contain rounded-lg mb-2`}
              />
              <p className={`text-center font-bold ${isCurrent ? "text-lg" : "text-sm"}`}>
                {ad.title}
              </p>
              {isCurrent && (
                <>
                  <p className="text-sm text-center text-gray-600">{ad.description}</p>
                  <div className="w-full h-1 bg-gray-300 mt-2 rounded">
                    <div
                      className="h-full bg-blue-500 transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>


  );
};

export default AdSection;
