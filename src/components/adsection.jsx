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

  const prevIndex = (currentIndex - 1 + ads.length) % ads.length;
  const nextIndex = (currentIndex + 1) % ads.length;

  return (
    <div className="relative w-full  mx-auto px-4 py-10 bg-gradient-to-b from-n-2/30 to-transparent bg-tertiary">
      <div className="flex items-center justify-center gap-4">
        {/* Previous Ad */}
        <div 
          onClick={handlePrev}
          className="w-52 h-72 rounded-2xl bg-white shadow-lg p-4 cursor-pointer opacity-60 hover:opacity-80 transition-all duration-300 border border-n-3 hover:border-primary/30 group"
        >
          <div className="h-full flex flex-col">
            <div className="relative overflow-hidden rounded-xl h-36 w-full">
              <img
                src={ads[prevIndex].image}
                alt={ads[prevIndex].title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-n-8/20 to-transparent" />
            </div>
            <p className="text-center font-grotesk font-medium text-base mt-3 mb-1 text-n-7 group-hover:text-primary">
              {ads[prevIndex].title}
            </p>
          </div>
        </div>

        {/* Current Ad - Centerpiece */}
        <div className="w-[24rem] h-[26rem] rounded-3xl bg-white shadow-xl p-6 border border-n-3 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-primary/10 blur-xl" />
          <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-secondary/10 blur-xl" />
          
          <div className="h-full flex flex-col relative z-10">
            <div className="relative overflow-hidden rounded-2xl h-48 w-full mb-4">
              <img
                src={ads[currentIndex].image}
                alt={ads[currentIndex].title}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-n-8/30 to-transparent" />
              <div className="absolute top-3 right-3 bg-primary/90 text-white text-xs font-code font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                Destacado
              </div>
            </div>
            
            <div className="text-center px-2">
              <h3 className="font-sora font-semibold text-xl text-n-8 mb-2">
                {ads[currentIndex].title}
              </h3>
              <p className="text-n-5 text-sm leading-relaxed max-w-xs mx-auto">
                {ads[currentIndex].description}
              </p>
            </div>
            
            {/* Progress bar */}
            <div className="mt-auto w-full h-1.5 bg-n-3 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-3 gap-1.5">
              {ads.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    stopAutoSlide();
                    setCurrentIndex(index);
                    startAutoSlide();
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-4' : 'bg-n-4'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Next Ad */}
        <div 
          onClick={handleNext}
          className="w-52 h-72 rounded-2xl bg-white shadow-lg p-4 cursor-pointer opacity-60 hover:opacity-80 transition-all duration-300 border border-n-3 hover:border-primary/30 group"
        >
          <div className="h-full flex flex-col">
            <div className="relative overflow-hidden rounded-xl h-36 w-full">
              <img
                src={ads[nextIndex].image}
                alt={ads[nextIndex].title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-n-8/20 to-transparent" />
            </div>
            <p className="text-center font-grotesk font-medium text-base mt-3 mb-1 text-n-7 group-hover:text-primary">
              {ads[nextIndex].title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdSection;
