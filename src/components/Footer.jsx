import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import {motion} from "framer-motion";
import { fadeIn } from "../variants";

const Footer = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.3 }}
      className="px-4 md:px-8 lg:px-16 mt-30"
    >
      <footer className="bg-gray-300 text-gray-800 py-12 rounded-t-xl shadow-md">
        <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8 lg:max-w-5xl">
          {/* About Section */}
          <div className="flex flex-col items-start">
            <h3 className="text-2xl font-semibold mb-4">ABOUT</h3>
            <p className="mb-6">
              Welcome to Blogger, where we share tips, ideas, and inspiration on
              daily news. Our goal is to bring fresh insights and stories to
              readers around the world.
            </p>
            <form className="flex items-center w-full max-w-sm">
              <input
                type="email"
                placeholder="Email Address"
                className="p-3 w-full text-gray-900 rounded-l-lg outline-none"
              />
              <button
                type="submit"
                className="bg-gray-800 p-3 rounded-r-lg text-white"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </button>
            </form>
          </div>

          {/* Explore Section */}
          <div className="flex flex-col items-start pl-16">
            <h3 className="text-2xl font-semibold mb-4">EXPLORE</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition-colors duration-300"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start pl-8">
            <h3 className="text-2xl font-semibold mb-4">CONTACT</h3>
            <p>Miraj Pandharpur road, Bhose</p>
            <p>Taluka : Miraj, District : Sangli</p>
            <p className="mt-4 text-black">hello@blogger</p>
            <p>8767 526 281</p>

            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-800 hover:text-green-600 transition duration-300"
              >
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-green-600 transition duration-300"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-green-600 transition duration-300"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-400 mt-8 pt-6 text-center text-sm text-gray-600">
          © Copyright 2025 All Rights Reserved, Blogger
        </div>
      </footer>
    </motion.div>
  );
};

export default Footer;
