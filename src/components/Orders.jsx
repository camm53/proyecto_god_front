import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "/api";

const Orders = () => {
  const navigate = useNavigate();

  const [total, setTotal] = useState(0);
  const [estado, setEstado] = useState("pendiente");
  const [detallesPedido, setDetallesPedido] = useState([
    { productoId: "", cantidad: 1, precio: 0 },
  ]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        console.log("Parsed User in useEffect:", parsedUser);
        console.log("userId", userId);
        const extractedUserId = parsedUser.id;
  
        if (extractedUserId) {
          setUserId(extractedUserId);
          console.log("Extracted User ID:", extractedUserId);
        } else {
          console.error("No se pudo encontrar un ID de usuario válido");
          setError("No se pudo encontrar un ID de usuario válido");
        }
      } catch (err) {
        console.error("Error parsing user data:", err);
        setError("Error al procesar los datos de usuario");
      }
    }
  }, []);

  const handleDetalleChange = (index, e) => {
    const updatedDetalles = [...detallesPedido];
    updatedDetalles[index][e.target.name] = e.target.value;
    setDetallesPedido(updatedDetalles);
  };

  const handleAddDetalle = () => {
    setDetallesPedido([
      ...detallesPedido,
      { productoId: "", cantidad: 1, precio: 0 },
    ]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!userId) {
      setError("No se ha encontrado un ID de usuario válido");
      
      return;
    }

    try {
      // Preparar los detalles del pedido para el backend
      const pedidoData = {
        usuarioId: userId,
        total,
        estado,
        detallesPedido: detallesPedido.map(detalle => ({
          producto: { id: detalle.productoId }, // Objeto Producto con ID
          cantidad: detalle.cantidad,
          precio: detalle.precio
        }))
      };

      console.log("Pedido Data to Send:", pedidoData);

      // Enviar el pedido
      const response = await api.post("/pedidos", pedidoData);

      if (response.status === 201) {
        setSuccess("Pedido realizado exitosamente!");
        // Resetear el formulario
        setTotal(0);
        setEstado("pendiente");
        setDetallesPedido([{ productoId: "", cantidad: 1, precio: 0 }]);
      }
    } catch (err) {
      console.error("Error al crear el pedido:", err);
      setError(err.response?.data?.message || "Error al realizar el pedido");
    }
  };

  // El resto del código de renderizado permanece igual...
  return (
    <div className="flex-1 p-8 flex flex-col justify-center">
      {/* Contenido del formulario sin cambios */}
    </div>
  );
};

export default Orders;