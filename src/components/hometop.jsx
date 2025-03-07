import React from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Audífonos Pabloksy 7.1', rating: '4.8/5', price: '9,000,000$' },
  { id: 2, name: 'Audífonos BossHugo 7.1', rating: '4.7/5', price: '8,500,000$' },
  { id: 3, name: 'Audífonos Gamer X99', rating: '4.6/5', price: '7,200,000$' },
  { id: 4, name: 'Mouse Estilo Brrmtion', rating: '4.9/5', price: '6,500,000$' },
  { id: 5, name: 'Mouse Andrew', rating: '4.8/5', price: '6,200,000$' },
  { id: 6, name: 'Mouse Gamer X-Pro', rating: '4.7/5', price: '5,800,000$' },
  { id: 7, name: 'Teclado Mecánico RGB', rating: '4.9/5', price: '10,000,000$' },
  { id: 8, name: 'Teclado Wireless Pro', rating: '4.8/5', price: '9,500,000$' },
  { id: 9, name: 'Teclado Compacto K-75', rating: '4.6/5', price: '8,000,000$' },
  { id: 10, name: 'Monitor 4K Ultra HD', rating: '4.9/5', price: '12,000,000$' },
  { id: 11, name: 'Monitor Curvo 27”', rating: '4.7/5', price: '11,500,000$' },
  { id: 12, name: 'Monitor Gamer 240Hz', rating: '4.8/5', price: '14,000,000$' },
  { id: 13, name: 'Gabinete RGB Gaming', rating: '4.7/5', price: '7,500,000$' },
  { id: 14, name: 'Gabinete ATX Pro', rating: '4.6/5', price: '6,800,000$' },
  { id: 15, name: 'Gabinete Compacto ITX', rating: '4.8/5', price: '7,900,000$' },
  { id: 16, name: 'Tarjeta Gráfica RTX 4080', rating: '4.9/5', price: '45,000,000$' },
  { id: 17, name: 'Tarjeta Gráfica RX 7900 XTX', rating: '4.7/5', price: '43,500,000$' },
  { id: 18, name: 'Tarjeta Gráfica RTX 4070 Ti', rating: '4.8/5', price: '36,000,000$' },
  { id: 19, name: 'Silla Gamer Pro X', rating: '4.9/5', price: '15,000,000$' },
  { id: 20, name: 'Silla Ergonómica Elite', rating: '4.8/5', price: '14,500,000$' },
  { id: 21, name: 'Silla Gamer RGB', rating: '4.7/5', price: '13,000,000$' },
  { id: 22, name: 'Fuente de Poder 850W', rating: '4.8/5', price: '6,500,000$' },
  { id: 23, name: 'Fuente de Poder 750W', rating: '4.7/5', price: '5,800,000$' },
  { id: 24, name: 'Fuente de Poder 650W', rating: '4.6/5', price: '5,200,000$' },
  { id: 25, name: 'Memoria RAM 32GB DDR5', rating: '4.9/5', price: '10,500,000$' },
  { id: 26, name: 'Memoria RAM 16GB DDR5', rating: '4.8/5', price: '7,500,000$' },
  { id: 27, name: 'Memoria RAM 8GB DDR4', rating: '4.7/5', price: '4,200,000$' },
  { id: 28, name: 'Disco SSD 2TB NVMe', rating: '4.9/5', price: '12,500,000$' },
  { id: 29, name: 'Disco SSD 1TB NVMe', rating: '4.8/5', price: '9,000,000$' },
  { id: 30, name: 'Disco SSD 512GB NVMe', rating: '4.7/5', price: '6,500,000$' },
  { id: 31, name: 'Procesador Intel i9 13900K', rating: '4.9/5', price: '30,000,000$' },
  { id: 32, name: 'Procesador Ryzen 9 7950X', rating: '4.8/5', price: '28,500,000$' },
  { id: 33, name: 'Procesador Intel i7 13700K', rating: '4.7/5', price: '22,000,000$' },
  { id: 34, name: 'Placa Madre Z790 AORUS', rating: '4.9/5', price: '18,000,000$' },
  { id: 35, name: 'Placa Madre B650 Tomahawk', rating: '4.8/5', price: '15,500,000$' },
  { id: 36, name: 'Placa Madre X670E Hero', rating: '4.7/5', price: '20,000,000$' },
  { id: 37, name: 'Refrigeración Líquida Corsair', rating: '4.9/5', price: '8,500,000$' },
  { id: 38, name: 'Refrigeración Líquida NZXT', rating: '4.8/5', price: '7,500,000$' },
  { id: 39, name: 'Ventilador RGB 120mm', rating: '4.7/5', price: '2,500,000$' },
  { id: 40, name: 'Mousepad XXL RGB', rating: '4.8/5', price: '3,000,000$' },
  { id: 41, name: 'Auriculares Inalámbricos Pro', rating: '4.7/5', price: '5,500,000$' },
  { id: 42, name: 'Cámara Web 4K', rating: '4.9/5', price: '6,000,000$' },
  { id: 43, name: 'Micrófono Profesional USB', rating: '4.8/5', price: '7,500,000$' },
];

const Hometop = () => {
  return (
    <div className="relative bg-gray-100 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Productos Destacados</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {products.map(product => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <ProductCard {...product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hometop;
