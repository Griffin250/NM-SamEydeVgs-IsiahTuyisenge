import React, { useEffect, useState } from "react";
import axios from "axios";

const TallShipsCMS = () => {
  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE = "https://skolenm-api.griffintechs.no"; // Adjust as needed
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchTallShips = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_BASE}/cms/tallships`, {
          headers: { "X-API-Key": API_KEY },
        });
        setShips(response.data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch tall ships data", err);
        setError("Failed to load tall ships.");
      } finally {
        setLoading(false);
      }
    };

    fetchTallShips();
  }, []);

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">⛵ Tall Ships CMS</h2>

      {loading && <p className="text-gray-500">Loading ships...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ships
          .filter((ship) => ship.Bilde && ship.Bilde.url) // Avoid undefined
          .map((ship) => (
            <div
              key={ship.id || ship.name}
              className="border rounded p-4 shadow-md bg-white dark:bg-gray-800"
            >
              <h3 className="text-xl font-semibold mb-2">{ship.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                {ship.description || "No description available"}
              </p>
              <img
                src={ship.Bilde.url}
                alt={ship.name}
                className="w-full h-48 object-cover rounded"
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default TallShipsCMS;
