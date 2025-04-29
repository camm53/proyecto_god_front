import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import LogoutButton from "./LogoutButton";

const Header = () => {
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const header2Ref = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [header2Height, setHeader2Height] = useState(0);
  const [userName, setUserName] = useState("");
  const [isSeller, setIsSeller] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Get user data from localStorage
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        setUserName(user.nombre || user.email.split("@")[0]);
        setIsSeller(user.rol === "VENDEDOR");
      }
    }
  }, []);
  
  // Separate useEffect to measure header heights
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
    
    // Small delay to ensure the second header is rendered if user is logged in
    const timer = setTimeout(() => {
      if (header2Ref.current) {
        setHeader2Height(header2Ref.current.offsetHeight);
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [userName]); // Re-measure when userName changes

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
          {/* IZQUIERDA - Solo con el logo */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-primary">BBTech</Link>
          </div>

          {/* CENTRO */}
          <form onSubmit={handleSearch} className="flex justify-center">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Buscar productos..."
                className="w-full border rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-500 bg-secondary/20 focus:bg-white focus:text-black/80 "
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

      {/* Navegación principal debajo del header */}
      <nav 
        ref={header2Ref} 
        className={`fixed w-full z-40 bg-primary text-white py-2 px-6 ${userName ? "" : "hidden"}`}
        style={{ top: headerHeight + 'px' }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-evenly space-x-6 overflow-x-auto">
          <Link to="/favorites" className="whitespace-nowrap text-sm hover:text-gray-300">Favoritos</Link>
          
          {isSeller && (
            <>
              <Link to="/HomeSellerDashboard" className="whitespace-nowrap text-sm hover:text-gray-300">Dashboard</Link>
              <Link to="/my-products" className="whitespace-nowrap text-sm hover:text-gray-300">Productos</Link>
              <Link to="/newProductPage" className="whitespace-nowrap text-sm hover:text-gray-300">Publicar</Link>
            </>
          )}
        </div>
      </nav>
      
      {/* Spacing to prevent content from being hidden under the fixed headers */}
      <div className="header-spacer" style={{ paddingTop: userName ? (headerHeight + header2Height) + 'px' : headerHeight + 'px' }} />
      
      {/* Add resize listener effect to handle window resizing */}
      {useEffect(() => {
        const handleResize = () => {
          if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
          }
          if (header2Ref.current) {
            setHeader2Height(header2Ref.current.offsetHeight);
          }
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, [])}
    </>
  );
};

export default Header;