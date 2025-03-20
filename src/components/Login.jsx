import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "/api";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(""); // Limpiar errores previos
    try {
      const response = await api.post("/authenticate", { email, password });
      console.log("Respuesta de login:", response.data);

      // Verificar que se reciba el token
      if (!response.data.token) {
        setError("Token no recibido. Revisa la respuesta del servidor.");
        return;
      }

      localStorage.setItem("token", response.data.token);

      const userRole = response.data.role; // Se espera que el backend envíe el rol
      if (userRole === "ADMIN") {
        navigate("/admin");
      } else if (userRole === "VENDEDOR") {
        navigate("/vendedor");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Error en el login:", err);
      setError("Credenciales inválidas");
    }
  };

  return (
    <div className="flex-1 p-8 flex flex-col justify-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Iniciar sesión</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit}>
        {/* Campo de Correo */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-600 mb-2"
          >
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
            placeholder="tucorreo@ejemplo.com"
          />
        </div>

        {/* Campo de Contraseña */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-gray-600 mb-2"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
            placeholder="••••••••"
          />
        </div>

        {/* Botón de Iniciar Sesión */}
        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition-colors"
        >
          Iniciar sesión
        </button>
      </form>

      {/* Separador con "o" */}
      <div className="flex items-center my-6">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-2 text-gray-400">o</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      {/* Botones de Login Social */}
      <div className="flex gap-4 justify-center">
        <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
          <span className="font-medium text-gray-600">Google</span>
        </button>
        <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
          <span className="font-medium text-gray-600">Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
