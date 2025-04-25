import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // <-- usa useNavigate
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import LogoutButton from "./LogoutButton";

const Header = () => {
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const [headerHeight, setHeaderHeight] = useState(0);
  const [userName, setUserName] = useState("");
  const [isSeller, setIsSeller] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }

    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        setUserName(user.nombre || user.email.split("@")[0]);
        setIsSeller(user.rol === "VENDEDOR");
      }
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/buscar?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <header ref={headerRef} className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 items-center gap-4">
          {/* IZQUIERDA */}
          <div className="flex items-center gap-4">
            <Link to="/" className="text-xl font-bold text-blue-600">BBTech</Link>
            <Link to="/favorites" className="text-sm text-gray-600 hover:text-blue-600 border border-gray-300 rounded px-3 py-1">Favoritos</Link>
            {isSeller && (
              <>
                <Link to="/HomeSellerDashboard" className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Dashboard</Link>
                <Link to="/my-products" className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Productos</Link>
                <Link to="/newProductPage" className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Publicar</Link>
              </>
            )}
          </div>

          {/* CENTRO */}
          <form onSubmit={handleSearch} className="flex justify-center">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Buscar productos..."
                className="w-full border rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                <FaSearch size={20} />
              </button>
            </div>
          </form>

          {/* DERECHA */}
          <div className="flex justify-end items-center gap-4">
            {userName ? (
              <>
                <div className="flex items-center gap-2">
                  <FaUser size={20} />
                  <span className="text-gray-700 whitespace-nowrap">Hola, {userName}</span>
                </div>
                <LogoutButton />
              </>
            ) : (
              <button
                onClick={() => window.location.href = "/login"}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
              >
                <FaUser size={20} />
                <span>Identifícate</span>
              </button>
            )}
            <Link to="/orders" className="text-sm text-gray-700 hover:text-blue-600 border border-gray-300 rounded px-3 py-1">Pedidos</Link>
            <Link to="/carrito" className="relative text-gray-700 hover:text-blue-600">
              <FaShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                2
              </span>
            </Link>
          </div>
        </div>
      </header>
      <div style={{ paddingTop: `${headerHeight}px` }} />
    </>
  );
};

export default Header;
