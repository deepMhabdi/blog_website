import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaDribbble, FaTwitter } from "react-icons/fa";
import { FaBars, FaXmark } from "react-icons/fa6";
import {motion} from "framer-motion"; 
import {fadeIn} from "../variants"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/about", link: "About" },
    { path: "/blogs", link: "Blogs" },
    { path: "/contact-us", link: "Contact" },
  ];

  return (
    <header className="bg-white text-black top-0 right-0 left-0">
      <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">

        <motion.a 
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}

        href="/" className="text-3xl font-bold text-black">
          Blog<span className="text-orange-400">ger</span>
        </motion.a>

        
        <ul className="hidden md:flex gap-8 text-lg font-medium">
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
        </ul>

        {/* Social icons */}
        <motion.div 
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}

        className="text-black lg:flex gap-4 items-center hidden">
          <a href="/"><FaFacebook /></a>
          <a href="/"><FaDribbble /></a>
          <a href="/"><FaTwitter /></a>
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
      <ul
        className={`md:hidden gap-4 text-lg font-medium px-6 py-4 bg-white z-50 ${
          isMenuOpen
            ? "fixed top-0 left-0 w-full transition-all duration-200"
            : "hidden"
        }`}
      >
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
    </header>
  );
};

export default Navbar;
