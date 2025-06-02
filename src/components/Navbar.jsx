import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaDribbble, FaTwitter } from "react-icons/fa";
import { FaBars, FaXmark } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/blogs", link: "Blogs" },
    { path: "/contact-us", link: "Contact" },
  ];

  return (
    <header className="bg-[#f5efda] text-black top-0 right-0 left-0">
      <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <motion.a
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          href="/"
          className="text-3xl font-bold text-black"
        >
          Blog<span className="text-orange-400">ger</span>
        </motion.a>

        <motion.ul
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="hidden md:flex gap-8 text-lg font-medium"
        >
          {navItems.map(({ path, link }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "text-black" : "hover:text-orange-500"
                }
              >
                {link}
              </NavLink>
            </li>
          ))}
        </motion.ul>

        {/* Social icons */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-black lg:flex gap-4 items-center hidden"
        >
          <a href="/">
            <FaFacebook />
          </a>
          <a href="/">
            <FaDribbble />
          </a>
          <a href="/">
            <FaTwitter />
          </a>
        </motion.div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="cursor-pointer text-black">
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 transition-all duration-300 px-6 py-4">
          {/* Cross icon inside menu */}
          <div className="flex justify-end">
            <button onClick={toggleMenu} className="text-black">
              <FaXmark className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation items */}
          <ul className="mt-6 space-y-6 text-lg font-medium">
            {navItems.map(({ path, link }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    isActive ? "text-orange-500" : "hover:text-orange-500"
                  }
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
