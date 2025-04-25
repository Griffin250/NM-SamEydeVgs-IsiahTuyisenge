import { useEffect, useState } from "react";
import axios from "../api/axios";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [Events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState("");


  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    if (!selectedEvent){
      alert("Please select an Event!")
      return;
    }
    console.log("selectedEvent:", selectedEvent)
    
    try {
      const res = await axios.post("/register", formData);
      setSuccessMessage(res.data.message);
      setFormData({ name: "", email: "", event: "" });
    } catch (err) {
      console.error(err);
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("/events");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-indigo-500 mb-4">
        Register for the Event
      </h2>

      {successMessage && (
        <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-4">
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-300">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded shadow-sm text-gray-200"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded shadow-sm text-gray-200"
          />
        </div>

        <div>
          <label className="text-gray-300 font-semibold">
            {" "}
            Which Event do you want to join?
          </label>
          <select
        required
        value={selectedEvent}
        onChange={(e) => setSelectedEvent(e.target.value)}
        className="border text-gray-200 rounded border-gray-200 w-full p-2 bg-gray-600 outline-none"
      >
        <option
          disabled
          hidden
          value="" // Empty value to fail `required` if not changed
          className="text-gray-200"
        >
          Choose the Event You want to register for!
        </option>
        {Events.map((event, idx) => (
          <option key={idx} value={event.id} className="text-gray-300">
            {event.title}
          </option>
        ))}
      </select>
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
