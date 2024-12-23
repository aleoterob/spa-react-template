import React, { useState, useEffect } from "react";
import LoadMoreButton from "../../buttons/LoadMoreButton/LoadMoreButton";
import "./UnsplashGallery.css";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1); // Controla la página de las imágenes

  // Función para cargar las imágenes desde Unsplash
  const fetchImages = async (page) => {
    const accessKey = "ZAUk3Wdt70RuEwFF9RCwnmknYxKqbmif83qRh8AcLRA";
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos?page=${page}&per_page=8&client_id=${accessKey}`
      );
      const data = await response.json();
      setImages((prevImages) => [...prevImages, ...data]); // Agrega las nuevas imágenes
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  // Efecto para cargar imágenes al iniciar y al cambiar de página
  useEffect(() => {
    fetchImages(page);
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1); // Incrementa la página cuando se hace clic
  };

  return (
    <div className="gallery-container">
      <h2>Unsplash API Image Gallery - Component: UnsplashGallery</h2>
      <div className="gallery">
        {images.map((image) => (
          <div key={image.id} className="card">
            <img
              src={image.urls.small}
              alt={image.alt_description || "Unsplash Image"}
              className="card-image"
            />
            <div className="card-details">
              <p>
                <strong>URL:</strong>{" "}
                <a
                  href={image.links.html}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {image.links.html}
                </a>
              </p>
              <p>
                <strong>Author:</strong> {image.user.name}
              </p>
              <p>
                <strong>Likes:</strong> {image.likes}
              </p>
            </div>
          </div>
        ))}
      </div>
      <LoadMoreButton onClick={handleLoadMore} />
    </div>
  );
};

export default Gallery;
