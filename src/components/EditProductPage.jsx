import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "/api";
import HeaderSeller from "./HeaderSeller";

const EditProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/productos/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error("Error al cargar producto:", err);
      }
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      await api.patch(`/productos/${id}/nombre`, product.nombre, {
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
      });
      await api.patch(`/productos/${id}/descripcion`, product.descripcion, {
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
      });
      await api.patch(`/productos/${id}/precio`, product.precio, {
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
      });
      alert("✅ Producto actualizado correctamente.");
      navigate("/my-products");
    } catch (err) {
      console.error("Error al actualizar producto:", err);
      alert("❌ Error al actualizar producto.");
    }
  };

  const handleCancel = () => {
    navigate("/my-products");
  };

  if (!product) return <div className="p-4">Cargando producto...</div>;

  return (
    <div className="bg-gray-100 min-h-screen">
      <HeaderSeller />
      <div className="max-w-3xl mx-auto p-6 bg-white mt-6 shadow rounded">
        <h1 className="text-2xl font-bold mb-4">Editar Producto</h1>

        <label className="block font-medium mb-1">Nombre</label>
        <input
          name="nombre"
          value={product.nombre}
          onChange={handleChange}
          className="w-full p-2 border mb-4 rounded text-white bg-gray-800"
        />

        <label className="block font-medium mb-1">Descripción</label>
        <textarea
          name="descripcion"
          value={product.descripcion}
          onChange={handleChange}
          className="w-full p-2 border mb-4 rounded text-white bg-gray-800"
        />

        <label className="block font-medium mb-1">Precio</label>
        <input
          name="precio"
          type="number"
          value={product.precio}
          onChange={handleChange}
          className="w-full p-2 border mb-4 rounded text-white bg-gray-800"
        />

        <div className="flex justify-between gap-4 mt-6">
          <button
            onClick={handleUpdate}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full"
          >
            Guardar Cambios
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-full"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProductPage;
