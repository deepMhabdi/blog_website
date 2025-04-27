import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-200 to-[#F0EBE3] text-gray-800 py-12 rounded-4xl">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 lg:max-w-5xl lg:mx-auto">

        {/* About Section */}
        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-semibold mb-4">ABOUT</h3>
          <p className="mb-6">
            We are leading in agro tourism in Maharashtra, promoting farming and increasing knowledge among
            people.
          </p>
          <form className="flex items-center w-full max-w-sm">
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 w-full text-gray-900 rounded-l-lg outline-none"
            />
            <button type="submit" className="bg-gray-800 p-3 rounded-r-lg text-white">
              {/* Arrow icon */}
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>

        {/* Explore Section */}
        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-semibold mb-4">EXPLORE</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-600 transition-colors duration-300">About Us</a></li>
            <li><a href="#" className="hover:text-green-600 transition-colors duration-300">Activities</a></li>
            <li><a href="#" className="hover:text-green-600 transition-colors duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-semibold mb-4">CONTACT</h3>
          <p>Miraj Pandharpur road, Bhose</p>
          <p>Taluka : Miraj, District : Sangli</p>
          <p className="mt-4 text-green-600">hello@chaloKisan.in</p>
          <p>8767 526 281</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-gray-800 hover:text-green-600 transition duration-300">
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-800 hover:text-green-600 transition duration-300">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-800 hover:text-green-600 transition duration-300">
              <FaTwitter className="w-6 h-6" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-400 mt-8 pt-6 text-center text-sm text-gray-600">
        © Copyright 2024 All Right Reserved, Chalo Kisan
      </div>
    </footer>
  );
};

export default Footer;
