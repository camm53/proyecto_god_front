import { Link } from "react-router-dom";
import { useState } from "react";
import { HomeIcon, MagnifyingGlassIcon, BellIcon, UserCircleIcon } from "@heroicons/react/24/outline";

const HeaderSeller = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Buscando:", search);
  };

  return (
    <header className="bg-gray-50 py-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Sección Izquierda: Inicio y Navegación */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-gray-800 hover:text-gray-600">
            <HomeIcon className="h-7 w-7" />
          </Link>
          <Link
            to="/my-products"
            className="bg-[#66558A] text-white px-6 py-2 rounded-full text-base shadow-sm hover:bg-[#574774] transition"
          >
            Mis Productos
          </Link>
        </div>

        {/* Barra de búsqueda */}
        <form
          className="flex flex-grow max-w-2xl mx-8 items-center bg-gray-200 rounded-full px-5 py-2 shadow-sm"
          onSubmit={handleSearch}
        >
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-600" />
          <input
            type="text"
            placeholder="Buscar productos..."
            className="w-full bg-transparent focus:outline-none ml-3 placeholder-gray-500 text-gray-900 text-base"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        {/* Sección Derecha: Publicar, Notificaciones y Perfil */}
        <div className="flex items-center space-x-8">
          <Link
            to="/newProductPage"
            className="bg-[#66558A] text-white px-6 py-2 rounded-full text-base shadow-sm hover:bg-[#574774] transition"
          >
            Publicar Nuevo Producto
          </Link>
          <div className="flex flex-col items-center">
            <BellIcon className="h-7 w-7 text-gray-800" />
            <span className="text-gray-600 text-sm mt-1">Notificaciones</span>
          </div>
          <UserCircleIcon className="h-9 w-9 text-[#66558A]" />
        </div>
      </div>
    </header>
  );
};

export default HeaderSeller;
