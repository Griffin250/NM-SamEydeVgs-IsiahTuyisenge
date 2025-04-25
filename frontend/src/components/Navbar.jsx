import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Location from "../assets/Location.png";
import ThemeToggle from "../components/layouts/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 border-b border-gray-200 transition duration-300">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 py-4 flex items-center justify-between">
        <h3 className="text-2xl font-bold text-indigo-700 company-name">
          {" "}
          <NavLink to="/" className="flex items-center space-x-2">
            <img
              src={Logo}
              className="w-28 h-24 bg-gray-200 dark:bg-gray-200 rounded m-1"
            />{" "}
          </NavLink>
        </h3>
        <section className="md:hidden">
          {" "}
          <ThemeToggle />{" "}
        </section>

        <form className="hidden md:flex items-center gap-2">
          {/* Combined Search & Location Input */}
          <div className="relative flex-1 flex items-center border border-gray-400 rounded-full overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
            {/* Search Input */}
            <div className="flex items-center flex-1 border-r-2 border-gray-500">
              <svg
                className="w-5 h-5 text-gray-400 ml-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="search"
                name="query"
                placeholder="Search..."
                className="w-full border-0 outline-none px-3 py-2 text-gray-700 placeholder-gray-400 focus:ring-0"
                aria-label="Search"
              />
            </div>

            {/* Location Input */}
            <div className="flex items-center flex-1">
              <img
                src={Location}
                className="w-5 h-5 ml-3 mr-2 text-gray-400"
                alt="Location pin"
                aria-hidden="true"
              />
              <input
                type="text"
                name="location"
                placeholder="Your Location..."
                className="w-full border-0 outline-none px-3 py-2 text-gray-700 placeholder-gray-400 focus:ring-0"
                aria-label="Location"
              />
              <button
                type="submit"
                className="m-1 p-1 rounded-full bg-red-200 hover:bg-red-400 transition-colors cursor-pointer"
                aria-label="Search"
              >
                <svg
                  className="w-6 h-6 text-red-400 hover:text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>

        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className="text-gray-200 hover:text-indigo-700 font-bold"
          >
            Home
          </NavLink>
          <NavLink
            to="/events"
            className="text-gray-200 hover:text-indigo-700 font-bold"
          >
            Events
          </NavLink>
          <NavLink
            to="/map"
            className="text-gray-200 hover:text-indigo-700 font-bold"
          >
            Map
          </NavLink>
          <NavLink
            to="/booking"
            className="text-gray-200 hover:text-indigo-700 font-bold"
          >
            Booking
          </NavLink>
          <NavLink
            to="/news"
            className="text-gray-200 hover:text-indigo-700 font-bold"
          >
            News
          </NavLink>
          <NavLink
            to="/contactForm"
            className="text-gray-200 hover:text-indigo-600 font-bold"
          >
            Contact
          </NavLink>
          <NavLink
            to="/register"
            className="bg-indigo-700 text-white font-bold px-4 py-2 rounded hover:bg-indigo-700 register"
          >
            Register
          </NavLink>
          <ThemeToggle />
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <NavLink to="/" className="block text-gray-200 font-bold">
            Home
          </NavLink>
          <NavLink to="/events" className="block text-gray-200 font-bold">
            Events
          </NavLink>
        
          <NavLink to="/news" className="block text-gray-200 font-bold">
            News
          </NavLink>
          <NavLink
            to="/contactForm"
            className="text-gray-200 hover:text-indigo-600 font-bold"
          >
            Contact
          </NavLink>
          <NavLink
            to="/register"
            className="block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Register
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
