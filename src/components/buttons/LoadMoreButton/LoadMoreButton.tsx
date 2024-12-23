import React, { useState } from "react";
import Spinner from "../../utils/Spinner/Spinner"; // Componente Spinner
import "./LoadMoreButton.css";

const LoadMoreButton = ({ onClick }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true); // Mostrar el spinner
    try {
      await onClick(); // Llamar la función pasada como prop
    } finally {
      setTimeout(() => setLoading(false), 350); // Ocultar el spinner después de 1 segundo
    }
  };

  return (
    <div className="load-more-button-container">
      <button
        onClick={handleClick}
        className="load-more-button"
        id="load-more-button"
        disabled={loading} // Deshabilitar el botón mientras se carga
      >
        Cargar más
      </button>
      {loading && (
        <div className="spinner-overlay">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default LoadMoreButton;
