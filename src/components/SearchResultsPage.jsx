import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import api from "/api";
import Header from "./Header";

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) return;
      try {
        const res = await api.get(`/productos/buscar?nombre=${query}`);
        setResults(res.data);
      } catch (err) {
        console.error("Error al buscar productos:", err);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto py-6 px-4">
        <h1 className="text-2xl font-bold mb-4">
          Resultados para: <span className="text-blue-600">{query}</span>
        </h1>

        {results.length === 0 ? (
          <p>No se encontraron productos.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {results.map((product) => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="border p-4 rounded shadow-sm bg-white hover:shadow-md transition duration-200"
              >
                <img
                  src={product.imagenUrl || "https://via.placeholder.com/150"}
                  alt={product.nombre}
                  className="h-40 w-full object-cover rounded mb-2"
                />
                <h3 className="text-lg font-semibold text-gray-800">{product.nombre}</h3>
                <p className="text-gray-500">{product.descripcion}</p>
                <p className="text-green-600 font-bold mt-2">${product.precio}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchResultsPage;
