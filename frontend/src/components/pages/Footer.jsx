import React from "react";
import Logo from '../../assets/Logo.png';
import 'leaflet/dist/leaflet.css';
import Map from "../layouts/Map";
import { Facebook, Twitter, Instagram, Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 mt-32 pt-12 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Brand */}
        <div>
          <img src={Logo} alt="Logo" className="w-24 bg-gray-200 dark:bg-gray-200 rounded" />
          <p className="mt-2 text-sm">
            Empowering global innovators through technology and future-ready events.
          </p>
          <div className="flex mt-4 space-x-4">
            <a href="#" className="hover:text-blue-500"><Facebook size={24} /></a>
            <a href="#" className="hover:text-sky-500"><Twitter size={24} /></a>
            <a href="#" className="hover:text-pink-500"><Instagram size={24} /></a>
            <a href="#" className="hover:text-blue-700"><Linkedin size={24} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="text-sm space-y-1">
            <li><a href="/" className="hover:text-indigo-500">Home</a></li>
            <li><a href="/schedule" className="hover:text-indigo-500">Schedule</a></li>
            <li><a href="/speakers" className="hover:text-indigo-500">Speakers</a></li>
            <li><a href="/register" className="hover:text-indigo-500">Register</a></li>
            <li><a href="/admin" className="hover:text-indigo-500">Admin</a></li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About</h3>
          <ul className="text-sm space-y-1">
            <li><a href="/about" className="hover:text-indigo-500">Our Story</a></li>
            <li><a href="/team" className="hover:text-indigo-500">Team</a></li>
            <li><a href="/careers" className="hover:text-indigo-500">Careers</a></li>
            <li><a href="/sponsors" className="hover:text-indigo-500">Sponsors</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
          <p className="text-sm mb-2">Subscribe to our newsletter for event news.</p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2 rounded">
              Subscribe
            </button>
          </form>
        </div>

        {/* Map */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Location</h3>
          <div className="h-2xl rounded-lg overflow-hidden shadow-md"> 
          <Map />
          </div>
         
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 dark:text-gray-500 py-6 mt-10 border-t border-gray-300 dark:border-gray-700">
        &copy; {new Date().getFullYear()} Tallship Races. All rights reserved.
        <span className="block sm:inline ml-1">Crafted with 💻 & ❤️ by GriffinTechs.</span>
      </div>
    </footer>
  );
};

export default Footer;
