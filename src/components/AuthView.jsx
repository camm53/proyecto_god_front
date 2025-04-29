import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";
import Login from "./Login";
import Register from "./Register";

const AuthView = () => {
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  const handleShowRegister = () => {
    setIsRegister(true);
  };

  const handleShowLogin = () => {
    setIsRegister(false);
  };

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col min-h-screen  bg-quaternary/30">
      {/* Header fijo */}
      <Header className="sticky top-0 z-10" />

      {/* Contenedor principal posicionado en la parte superior */}
      <div className="flex-grow flex flex-col items-center justify-start mt-4">
        <div className="bg-white w-full max-w-6xl rounded-xl shadow-md flex overflow-hidden mt-4 border border-n-3">
          {/* Columna Izquierda: Login */}
          <div
            className={`
              transition-all duration-300 p-8 flex flex-col justify-center
              ${isRegister ? "w-1/3" : "w-2/3"}
            `}
          >
            {!isRegister ? (
              <Login onLogin={handleLogin} />
            ) : (
              <div className="flex flex-col items-center">
                <p className="mb-4 text-n-6 text-center font-sora">¿Ya tienes cuenta?</p>
                <button
                  className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors font-medium font-sora"
                  onClick={handleShowLogin}
                >
                  Iniciar sesión
                </button>
              </div>
            )}
          </div>

          {/* Columna Derecha: Register */}
          <div
            className={`
              transition-all duration-300 p-8 flex flex-col justify-center items-center bg-primary/5
              ${isRegister ? "w-2/3" : "w-1/3"}
            `}
          >
            {isRegister ? (
              <Register />
            ) : (
              <div className="flex flex-col items-center">
                <button
                  className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors font-medium font-sora"
                  onClick={handleShowRegister}
                >
                  Crear cuenta
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthView;