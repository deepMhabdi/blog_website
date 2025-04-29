import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";


const Navbar = () => {

    const [isMenuOpen,setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen)
    }


    const navItems = [
        {path : "/", link : "Home "},
        {path : "/services", link : "Services "},
        {path : "/about", link : "About "},
        {path : "/blogs", link : "Blogs "},
        {path : "/contact", link : "Contact "}
    ]
  return (
    <header className='bg-white text-black top-0 right-0 left-0 '>
        <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
            <a href="/" className='text-3xl font-bold text-black'>Blog
            <span className='text-orange-400'>
                ger
            </span>
            </a>

          
        <ul className='md:flex gap-12 text-lg hidden'>
            {navItems.map(({ path, link }) => (
            <li key={path} className='text-black font-medium'>
            <NavLink  className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }to={path}>{link}</NavLink>
            </li>
            ))}
        </ul>
           
    

           <div className='text-black lg:flex gap-4 items-center hidden'>
            <a href="/" className=''><FaFacebook /></a>
            <a href="/" className=''>< FaDribbble /></a>
            <a href="/" className=''>< FaTwitter /></a>
        {/*    <button className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500'>Log in</button>   */}
           </div>


  
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='cursor-pointer text-black'>
                  {
                    isMenuOpen ? <FaXmark className='w-5 h-5' /> : <FaBars className='w-5 h-5' />
                  }
                </button>
            </div>
        </nav>

    

        <div>
        <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
            {navItems.map(({ path, link }) => (
            <li key={path} className='text-black'>
            <NavLink onClick={toggleMenu}to={path}>{link}</NavLink>
            </li>
            ))}
        </ul>
        </div>


    </header>
  )
}

export default Navbar
