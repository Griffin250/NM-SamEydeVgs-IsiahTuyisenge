import { useEffect, useState } from "react";
import axios from "../api/axios";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("/events");
        setEvents(response.data);
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
      <h2 className="text-2xl font-bold text-gray-200 mb-4">Event Schedule</h2>
      {loading ? (
        <p>Loading events...</p>
      ) : events.length === 0 ? (
        <p>No events available.</p>
      ) : (
        <ul className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event, idx) => (
            <li key={idx} className="bg-white p-4 rounded shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
              <p className="text-sm text-gray-600 italic">
                {new Date(event.date).toLocaleString()}
              </p>
              <p className="text-gray-700 mt-2">{event.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Events;
