import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import { NavLink } from "react-router"; // Corrected import
import {  AiOutlineClose } from "react-icons/ai";
import { TbBrandAppgallery, TbProgressHelp } from "react-icons/tb";

import { HiMenuAlt2 } from "react-icons/hi";
import { LuShoppingCart } from "react-icons/lu";
import { SiAboutdotme } from "react-icons/si";
import { IoWalletOutline } from "react-icons/io5";
import { GiThreeFriends } from "react-icons/gi";

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-r from-blue-600 to-indigo-600 py-6 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-white text-2xl font-bold"
          >
            Best <span className="text-pink-400">Eats</span>
          </motion.div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <motion.a
              whileHover={{ scale: 1.1, color: "#f472b6" }}
              href="/menu"
              className="text-white hover:text-pink-400 transition-colors"
            >
              <NavLink to="/">Menu</NavLink>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, color: "#f472b6" }}
              href="/allitems"
              className="text-white hover:text-pink-400 transition-colors"
            >
              <NavLink to="/allitems">All Items</NavLink>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1, color: "#f472b6" }}
              href="/cart"
              className="text-white hover:text-pink-400 transition-colors"
            >
              <NavLink to="/cart">Cart</NavLink>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, color: "#f472b6" }}
              href="/AboutUs"
              className="text-white hover:text-pink-400 transition-colors"
            >
              <NavLink to="AboutUs"> About Us </NavLink>
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setNav(!nav)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>

            {/* Overlay */}
            <AnimatePresence>
              {nav && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setNav(false)}
                  className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"
                ></motion.div>
              )}
            </AnimatePresence>

            {/* Mobile Menu */}
            <AnimatePresence>
              {nav && (
                <motion.div
                  initial={{ x: 300 }} // Start from the right side
                  animate={{ x: 0 }} // Animate to the left (0)
                  exit={{ x: 300 }} // Animate back to the right (300)
                  transition={{ duration: 0.3 }}
                  className="fixed top-0 right-0 w-[300px] h-screen bg-white z-20"
                >
                  <AiOutlineClose
                    size={30}
                    onClick={() => setNav(false)}
                    className="absolute right-4 top-4 cursor-pointer"
                  />
                  <h2 className="text-2xl p-4">
                    Best <span className="font-bold">Eats</span>
                  </h2>
                  <nav>
                    <ul className="flex flex-col p-4 text-gray-800">
                      <li className="text-xl py-4 flex">
                        <HiMenuAlt2 size={25} className="mr-4" />
                         <NavLink to="/">Menu</NavLink>
                      </li>
                      <li className="text-xl py-4 flex">
                        <TbBrandAppgallery size={25} className="mr-4" />
                       <NavLink to='/allitems'> All Items</NavLink>
                      </li>
                      <li className="text-xl py-4 flex">
                        <LuShoppingCart size={25} className="mr-4" />
                         <NavLink to="/cart">Cart Page </NavLink>
                      </li>
                      <li className="text-xl py-4 flex">
                        <SiAboutdotme size={25} className="mr-4" />
                        <NavLink to="/AboutUs"> About Us </NavLink>
                      </li>
                      
                      <li className="text-xl py-4 flex">
                        < IoWalletOutline  size={25} className="mr-4" />
                        Wallet
                      </li>
                      <li className="text-xl py-4 flex">
                        <TbProgressHelp size={25} className="mr-4" />
                        Help
                      </li>
                      <li className="text-xl py-4 flex">
                        <GiThreeFriends size={25} className="mr-4" />
                        Invite Friends
                      </li>
                    </ul>
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;