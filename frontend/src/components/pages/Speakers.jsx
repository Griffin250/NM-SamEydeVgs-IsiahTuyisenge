import { useEffect, useState } from "react";
import axios from "../api/axios";
import image from "../../assets/image.png";
const Events = () => {
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("/speakers");
        setSpeakers(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-200 mb-4">Our Main Speakers</h2>
      {loading ? (
        <p>Loading Speakers...</p>
      ) : speakers.length === 0 ? (
        <p>No Speakers available.</p>
      ) : (
        <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {speakers.map((speakers, item) => (
            <div key={item} className="bg-white p-4 rounded shadow-md">
               <img src={image} className="w-28" />
              <h3 className="text-xl font-semibold text-gray-800">{speakers.name}</h3>
              <p className="text-sm text-gray-700">{speakers.title}</p>
              <p className="text-gray-700 mt-2">{speakers.bio}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;
