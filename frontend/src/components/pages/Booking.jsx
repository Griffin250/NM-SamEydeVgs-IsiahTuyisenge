import React, { useState } from "react";
import axios from "axios";
import '../../../src/theme.css';
const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    event: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/bookings`, formData);
      setStatus("🎉 Booking submitted successfully!");
      setFormData({ name: "", email: "", event: "", message: "" });
    } catch (err) {
      console.error("Booking failed", err);
      setStatus("❌ Failed to submit booking. Please try again.");
    }
  };

  return (
    <section className="max-w-2xl mx-auto p-6 mt-8 text-gray-800 dark:text-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">🎫 Book Your Spot</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md grid gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-transparent"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-transparent"
        />
        <select
          name="event"
          required
          value={formData.event}
          onChange={handleChange}
          className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-transparent"
        >
          <option value="" disabled>
            Select Event Type
          </option>
          <option value="concert"  className="table-header">🎵 Concert</option>
          <option value="ship-tour" className="table-header">🚢 Ship Tour</option>
          <option value="workshop" className="table-header">🛠 Workshop</option>
        </select>
        <textarea
          name="message"
          placeholder="Additional Message (optional)"
          value={formData.message}
          onChange={handleChange}
          rows="3"
          className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-transparent"
        ></textarea>

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded transition"
        >
          Submit Booking
        </button>
      </form>

      {status && (
        <p className="mt-4 text-center text-sm font-medium">{status}</p>
      )}
    </section>
  );
};

export default Booking;
