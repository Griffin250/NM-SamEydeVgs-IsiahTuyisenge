import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "../src/components/pages/Home";
import Events from "../src/components/pages/Events";
import News from "../src/components/pages/News";
import Register from "../src/components/pages/Register";
import CountDown from "../src/components/pages/CountDown";
import Footer from "./components/pages/Footer";
import AdminDashboard from "./components/pages/AdminDashBoard";
import NotFound from "./components/pages/NotFound";
import Login from "../src/components/pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import "./theme.css";
import ContactForm from "../src/components/pages/ContactForm";
import Booking from "./components/pages/Booking";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="max-w-7xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/news" element={<News />} />
            <Route path="/register" element={<Register />} />
            <Route path="/countdown" element={<CountDown />} />
            <Route path="/login" element={<Login />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/contactForm" element={<ContactForm />} />
            {/* Protected Admin Route */}
            <Route
              path="/admin"
              element={
                <PrivateRoute>
                  <AdminDashboard />
                </PrivateRoute>
              }
            />

            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
