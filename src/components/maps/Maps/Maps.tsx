import React from "react";
import "./Maps.css";

const Maps: React.FC = () => {
  const apiKey = "API_KEY";
  const cities = [
    { name: "La Coruña", coordinates: "43.3623,-8.4115" },
    { name: "Buenos Aires", coordinates: "-34.6037,-58.3816" },
    { name: "Curitiba", coordinates: "-25.4284,-49.2733" },
    { name: "New York", coordinates: "40.7128,-74.0060" },
  ];

  return (
    <div className="maps-container">
      <h2 className="maps-title">Maps page - Component: Maps</h2>
      <div className="maps-grid">
        {cities.map((city, index) => (
          <div className="map-card" key={index}>
            <h3 className="map-heading">Location: {city.name}</h3>
            <iframe
              className="map-frame"
              src={`https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=${city.coordinates}&zoom=12`}
              allowFullScreen
              loading="lazy"
              title={`Map of ${city.name}`}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Maps;
