import { useEffect, useState } from "react";
import {
  PhotoIcon,
  PencilIcon,
  TrashIcon,
  PauseIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import api from "/api";
import HeaderSeller from "./HeaderSeller";

const MyProductsPage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || user.rol !== "VENDEDOR") return;

    try {
      const res = await api.get("/productos");
      const misProductos = res.data.filter((p) => p.vendedorId === user.id);
      setProducts(misProductos);
    } catch (err) {
      console.error("Error al cargar productos:", err);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("¿Seguro que quieres eliminar este producto?");
    if (!confirm) return;

    try {
      const token = localStorage.getItem("token");
      await api.delete(`/productos/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts((prev) => prev.filter((p) => p.id !== id));
      alert("✅ Producto eliminado.");
    } catch (err) {
      if (err.response?.status === 403) {
        alert("❌ No tienes permisos para eliminar este producto.");
      } else {
        console.error("Error al eliminar producto:", err);
        alert("❌ Ocurrió un error al intentar eliminar el producto.");
      }
    }
  };

  const handlePause = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await api.patch(`/productos/${id}/activo`, false, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("✅ Producto pausado.");
      fetchProducts();
    } catch (err) {
      console.error("Error al pausar producto:", err);
      alert("❌ Error al pausar el producto.");
    }
  };

  const handleEdit = (id) => {
    navigate(`/editar-producto/${id}`);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <HeaderSeller />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-[#333]">
          Mis Productos Publicados
        </h1>

        {products.length === 0 ? (
          <div className="text-center text-gray-600">Aún no has publicado productos.</div>
        ) : (
          <div className="grid gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-sm border border-gray-200 rounded-lg p-6 flex items-center justify-between hover:shadow-md transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={product.imagenUrl || "https://via.placeholder.com/100"}
                      alt={product.nombre}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {product.nombre}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      {product.descripcion || "Sin descripción"}
                    </p>
                    <p className="text-indigo-600 font-bold mt-1">
                      ${product.precio} MXN
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => handlePause(product.id)}
                    className="flex items-center gap-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-sm rounded-full text-gray-700 transition"
                  >
                    <PauseIcon className="h-5 w-5" /> Pausar
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="flex items-center gap-1 px-4 py-2 bg-red-100 hover:bg-red-200 text-sm rounded-full text-red-600 transition"
                  >
                    <TrashIcon className="h-5 w-5" /> Eliminar
                  </button>
                  <button
                    onClick={() => handleEdit(product.id)}
                    className="flex items-center gap-1 px-4 py-2 border hover:bg-gray-50 text-sm rounded-full text-gray-700 transition"
                  >
                    <PencilIcon className="h-5 w-5" /> Editar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProductsPage;
