import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PhotoIcon } from "@heroicons/react/24/outline";

const NewProductPage = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: "",
    price: "",
    category: "",
    features: "",
    details: "",
    images: [],
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setProduct({ ...product, images: files });
  };

  const handleClear = () => {
    setProduct({
      title: "",
      price: "",
      category: "",
      features: "",
      details: "",
      images: [],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.id) {
      alert("Debes iniciar sesión para publicar un producto.");
      return;
    }

    if (!product.title || !product.price || !product.category) {
      alert("Completa todos los campos requeridos.");
      return;
    }

    const nuevoProducto = {
      nombre: product.title,
      descripcion: product.features,
      precio: parseFloat(product.price),
      stock: 100, // valor fijo
      categoria: product.category,
      imagenUrl: "https://via.placeholder.com/150", // URL temporal
      fichaTecnica: product.details,
      vendedorId: user.id,
    };

    try {
        const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:8080/productos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // << AÑADIDO
        },
        body: JSON.stringify(nuevoProducto),
      });

      if (res.ok) {
        alert("✅ Producto publicado con éxito.");
        handleClear();
      } else {
        alert("❌ Error al publicar el producto.");
      }
    } catch (err) {
      console.error("Error al publicar producto:", err);
      alert("Ocurrió un error al publicar.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg border border-gray-300 mt-6">
      <h1 className="text-2xl font-bold mb-6">Publicar Nuevo Producto</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-8">
          {/* Sección de imágenes */}
          <div className="border p-4 rounded-lg flex flex-col items-center justify-center">
            <p className="font-semibold text-center mb-4">Ingresa foto(s) de producto</p>
            <div className="w-60 h-60 bg-gray-200 flex items-center justify-center rounded-lg">
              {product.images.length > 0 ? (
                <img
                  src={URL.createObjectURL(product.images[0])}
                  alt="Vista previa"
                  className="h-full w-full object-cover rounded-lg"
                />
              ) : (
                <PhotoIcon className="h-12 w-12 text-gray-500" />
              )}
            </div>
            <input type="file" multiple onChange={handleImageUpload} className="mt-4" />
          </div>

          {/* Sección de detalles */}
          <div className="space-y-4">
            <div>
              <label className="block font-semibold">Título del Producto</label>
              <input
                type="text"
                name="title"
                value={product.title}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block font-semibold">Precio (Ganancia neta)</label>
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block font-semibold">Categoría</label>
              <input
                type="text"
                name="category"
                value={product.category}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block font-semibold">Características</label>
              <textarea
                name="features"
                value={product.features}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block font-semibold">Detalles Técnicos</label>
              <textarea
                name="details"
                value={product.details}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex justify-between mt-6">
          <button
            type="button"
            className="bg-[#66558A] text-white px-6 py-2 rounded-full"
            onClick={handleClear}
          >
            Limpiar Texto
          </button>
          <button type="button" className="bg-[#66558A] text-white px-6 py-2 rounded-full">
            Vista Previa
          </button>
          <button type="button" className="bg-[#66558A] text-white px-6 py-2 rounded-full">
            Guardar
          </button>
          <button
            type="button"
            className="bg-red-500 text-white px-6 py-2 rounded-full"
            onClick={() => navigate("/")}
          >
            Cancelar
          </button>
        </div>

        {/* Botón Publicar */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-[#66558A] text-white py-3 rounded-full text-lg font-semibold shadow-md hover:bg-[#574774] transition"
          >
            Publicar
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewProductPage;
