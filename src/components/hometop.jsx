import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import api from '/api'; // Asegúrate de que este path sea correcto

const Hometop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/productos");
        // Se espera que response.data sea un arreglo de productos
        setProducts(response.data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="relative bg-gray-100 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Productos Destacados</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {products.map(product => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <ProductCard
              image={product.imagenUrl}   // Asegúrate que este campo coincide con el de la BD
              name={product.nombre}        // Campo para el nombre del producto
              price={product.precio}       // Campo para el precio
              // rating={product.rating}    // Si dispones de rating, de lo contrario puedes omitirlo o usar un valor por defecto
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hometop;
