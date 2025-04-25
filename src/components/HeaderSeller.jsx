import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaUser } from "react-icons/fa";
import LogoutButton from "./LogoutButton";

const HeaderSeller = () => {
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const [headerHeight, setHeaderHeight] = useState(0);
  const [userName, setUserName] = useState("");
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
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 flex-nowrap gap-6 overflow-x-auto">

          {/* IZQUIERDA */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-blue-600">BBTech</Link>

            <Link to="/HomeSellerDashboard" className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Dashboard</Link>
            <Link to="/my-products" className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Productos</Link>
            <Link to="/newProductPage" className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Publicar</Link>
          </div>

          {/* CENTRO - Search */}
          <form onSubmit={handleSearch} className="flex-grow max-w-xl w-full">
            <div className="relative">
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
          <div className="flex items-center gap-4 flex-shrink-0 whitespace-nowrap">
            {userName && (
              <div className="flex items-center gap-2">
                <FaUser size={20} />
                <span className="text-gray-700">Hola, {userName}</span>
              </div>
            )}
            <LogoutButton />
          </div>
        </div>
      </header>

      <div style={{ paddingTop: `${headerHeight}px` }} />
    </>
  );
};

export default HeaderSeller;
