import { useEffect, useState } from "react";
import axios from "../api/axios";
import '../../theme.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get("/admin/registers")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("User fetch failed", err));

    axios.get("/admin/subscribers")
      .then((res) => setSubscribers(res.data))
      .catch((err) => console.error("Subscriber fetch failed", err));

    axios.get("/admin/bookings")
      .then((res) => setBookings(res.data))
      .catch((err) => console.error("Booking fetch failed!", err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">
      <h2 className="text-4xl font-bold text-gray-900 text-center">
        Admin Dashboard
      </h2>

      {/* Registered Users */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Registered Users</h2>
        <table className="w-full text-left border">
          <thead className="bg-indigo-100">
            <tr>
              <th className="p-2 table-header">Name</th>
              <th className="p-2 table-header">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, idx) => (
              <tr key={idx} className="border-t">
                <td className="p-2 text-gray-200">{u.name}</td>
                <td className="p-2 text-gray-200">{u.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Subscribers */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Subscribers</h2>
        <table className="w-full text-left border">
          <thead className="bg-indigo-100">
            <tr>
              <th className="p-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((s, idx) => (
              <tr key={idx} className="border-t">
                <td className="p-2 text-gray-200">{s.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bookings */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Bookings</h2>
        <table className="w-full text-left border">
          <thead className="bg-indigo-100">
            <tr>
              <th className="p-2 table-header">Name</th>
              <th className="p-2 table-header">Email</th>
              <th className="p-2 table-header">Event</th>
              <th className="p-2 table-header">Message</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b, idx) => (
              <tr key={idx} className="border-t">
                <td className="p-2 text-gray-200">{b.name}</td>
                <td className="p-2 text-gray-200">{b.email}</td>
                <td className="p-2 text-gray-200">{b.event}</td>
                <td className="p-2 text-gray-200">{b.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
