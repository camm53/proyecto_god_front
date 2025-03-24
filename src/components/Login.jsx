import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "/api";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(""); // Usamos username en lugar de email
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(""); // Limpiar errores previos

    try {
      // Enviamos el objeto JSON con username y password
      const response = await api.post("/authenticate", { username, password });
      console.log("Respuesta de login:", response.data);

      // Se espera que el backend devuelva un token (como string)
      const token = response.data;
      if (!token) {
        setError("Token no recibido. Revisa la respuesta del servidor.");
        return;
      }

      // Guardamos el token en localStorage
      localStorage.setItem("token", token);

      // Redirigimos al usuario (por ejemplo, a la página principal)
      navigate("/");
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
        {/* Campo de Nombre de Usuario */}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-semibold text-gray-600 mb-2"
          >
            Nombre de usuario
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
            placeholder="tuUsuario"
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

      {/* Botones de Login Social (opcional) */}
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
