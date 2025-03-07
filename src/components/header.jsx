import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-blue-600">
          MyEcommerce
        </a>

        {/* Search Bar */}
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar productos..."
            className="w-full border rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <FaSearch size={20} />
          </button>
        </div>

        {/* User & Cart */}
        <div className="flex items-center gap-6">
          <a href="/account" className="text-gray-700 hover:text-blue-600">
            <FaUser size={24} />
          </a>
          <a href="/cart" className="relative text-gray-700 hover:text-blue-600">
            <FaShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              2
            </span>
          </a>
        </div>
      </div>

      {/* Categories */}
      <nav className="bg-gray-100 py-2">
        <div className="max-w-7xl mx-auto flex justify-center gap-6">
          <a href="/electronics" className="text-gray-700 hover:text-blue-600">
            Electrónica
          </a>
          <a href="/fashion" className="text-gray-700 hover:text-blue-600">
            Moda
          </a>
          <a href="/home" className="text-gray-700 hover:text-blue-600">
            Hogar
          </a>
          <a href="/sports" className="text-gray-700 hover:text-blue-600">
            Deportes
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
