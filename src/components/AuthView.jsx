import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header'; // Ajusta la ruta según tu proyecto
import Login from './Login';
import Register from './Register';

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
    // Lógica de autenticación aquí. Si es exitosa, redirige a Home:
    navigate('/');
  };

  return (
    <div>
      <Header />
      {/* Usamos pt-4 para un pequeño espacio desde el header.
          Se elimina la alineación vertical para que el contenido aparezca más arriba */}
      <div className="min-h-screen bg-gray-50 pt-40">
        <div className="flex justify-center">
          <div className="bg-white w-full max-w-6xl rounded-xl shadow-lg flex overflow-hidden mt-4">

            {/* Columna Izquierda: Login */}
            <div
              className={`
                transition-all duration-300 p-8 flex flex-col justify-center
                ${isRegister ? 'w-1/3' : 'w-2/3'}
              `}
            >
              {!isRegister ? (
                <Login onLogin={handleLogin} />
              ) : (
                <div className="flex flex-col items-center">
                  <p className="mb-4 text-gray-700 text-center">¿Ya tienes cuenta?</p>
                  <button
                    className="bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600 transition-colors"
                    onClick={handleShowLogin}
                  >
                    Iniciar sesión
                  </button>
                </div>
              )}
            </div>

            {/* Columna Derecha: Register (fondo púrpura) */}
            <div
              className={`
                transition-all duration-300 p-8 flex flex-col justify-center items-center bg-purple-50
                ${isRegister ? 'w-2/3' : 'w-1/3'}
              `}
            >
              {isRegister ? (
                <Register />
              ) : (
                <div className="flex flex-col items-center">
                  <button
                    className="bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600 transition-colors"
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
    </div>
  );
};

export default AuthView;
