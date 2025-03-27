import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "/api";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      // 1. Autenticación
      const authResponse = await api.post("/authenticate", { username, password });
      const token = authResponse.data;

      if (!token) {
        setError("Token no recibido. Revisa la respuesta del servidor.");
        return;
      }

      // Guardar el token inmediatamente
      localStorage.setItem("token", token);

      // 2. Obtener información del usuario
      try {
        // Asumiendo que tu backend tiene un endpoint para obtener info del usuario por nombre
        const userResponse = await api.get(`/usuarios/username/${username}`);
        const userData = userResponse.data;

        // Guardar toda la información del usuario en localStorage
        localStorage.setItem("user", JSON.stringify({
          id: userData.id,
          nombre: userData.nombre || username, // Usa el nombre o el username como fallback
          email: userData.email,
          // otros campos que necesites
        }));

        // Redirigir al home
        navigate("/");
      } catch (userError) {
        console.error("Error obteniendo datos del usuario:", userError);
        // Si falla pero tenemos token, guardamos al menos el username
        localStorage.setItem("user", JSON.stringify({
          nombre: username
        }));
        navigate("/");
      }

    } catch (err) {
      console.error("Error en el login:", err);
      setError(err.response?.data?.message || "Credenciales inválidas");
    }
  };

  return (
    <div className="flex-1 p-8 flex flex-col justify-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Iniciar sesión</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit}>
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
            required
          />
        </div>

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
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition-colors"
        >
          Iniciar sesión
        </button>
      </form>

      <div className="flex items-center my-6">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-2 text-gray-400">o</span>
        <hr className="flex-grow border-gray-300" />
      </div>

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