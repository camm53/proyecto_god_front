import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PhotoIcon } from "@heroicons/react/24/outline";
import HeaderSeller from "./HeaderSeller";

const NewProductPage = () => {
  const navigate = useNavigate();
  const [showPreview, setShowPreview] = useState(false);
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
    setShowPreview(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

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
      stock: 100,
      categoria: product.category,
      imagenUrl: "https://via.placeholder.com/150",
      fichaTecnica: product.details,
      vendedorId: user.id,
      vendedor: {
        id: user.id,
        nombre: user.nombre,
        email: user.email,
        contrasena: user.contrasena || "",
        telefono: user.telefono || "",
        direccion: user.direccion || "",
        rol: user.rol,
        fechaCreacion: user.fechaCreacion,
      },
    };

    try {
      const res = await fetch("http://localhost:8080/productos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
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
    <>
      <HeaderSeller />

      <div className="max-w-4xl mx-auto p-8 bg-white text-black shadow-lg rounded-lg border border-gray-300 mt-6">
        <h1 className="text-2xl font-bold mb-6">Publicar Nuevo Producto</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Imágenes */}
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
              <input
                type="file"
                multiple
                onChange={handleImageUpload}
                className="mt-4 text-gray-700"
              />
            </div>

            {/* Detalles */}
            <div className="space-y-4">
              <label className="block font-semibold">Título del Producto</label>
              <input type="text" name="title" value={product.title} onChange={handleChange}
                className="w-full p-2 border rounded bg-white text-gray-800" required />

              <label className="block font-semibold">Precio</label>
              <input type="number" name="price" value={product.price} onChange={handleChange}
                className="w-full p-2 border rounded bg-white text-gray-800" required />

              <label className="block font-semibold">Categoría</label>
              <input type="text" name="category" value={product.category} onChange={handleChange}
                className="w-full p-2 border rounded bg-white text-gray-800" required />

              <label className="block font-semibold">Características</label>
              <textarea name="features" value={product.features} onChange={handleChange}
                className="w-full p-2 border rounded bg-white text-gray-800" />

              <label className="block font-semibold">Detalles Técnicos</label>
              <textarea name="details" value={product.details} onChange={handleChange}
                className="w-full p-2 border rounded bg-white text-gray-800" />
            </div>
          </div>

          {/* Botones */}
          <div className="flex justify-between mt-6 flex-wrap gap-2">
            <button type="button" className="bg-[#66558A] text-white px-6 py-2 rounded-full" onClick={handleClear}>
              Limpiar
            </button>
            <button type="button" className="bg-gray-400 text-white px-6 py-2 rounded-full" onClick={() => setShowPreview(true)}>
              Vista Previa
            </button>
            <button type="button" className="bg-gray-400 text-white px-6 py-2 rounded-full">
              Guardar
            </button>
            <button type="button" className="bg-red-500 text-white px-6 py-2 rounded-full" onClick={() => navigate("/")}>
              Cancelar
            </button>
          </div>

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

      {/* Vista previa tipo ProductPage */}
      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto px-4 py-8">
          <div className="bg-white rounded-lg max-w-3xl w-full shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 bg-gray-100 flex items-center justify-center p-4">
                <img
                  src={product.images[0] ? URL.createObjectURL(product.images[0]) : "https://via.placeholder.com/150"}
                  alt="Preview"
                  className="max-h-60 object-contain"
                />
              </div>
              <div className="md:w-3/5 p-6 text-gray-800">
                <h2 className="text-2xl font-bold">{product.title}</h2>
                <p className="text-xl text-green-600 font-semibold mt-2">${product.price}</p>

                <div className="mt-4">
                  <h3 className="font-semibold">Características</h3>
                  <p>{product.features}</p>
                </div>

                <div className="mt-4">
                  <h3 className="font-semibold">Detalles Técnicos</h3>
                  <p>{product.details}</p>
                </div>

                <div className="mt-6">
                  <button
                    onClick={() => setShowPreview(false)}
                    className="bg-[#66558A] text-white px-4 py-2 rounded-full"
                  >
                    Cerrar Vista Previa
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewProductPage;
