import React, { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";

import { HiMenuAlt2 } from "react-icons/hi";
import { TbBrandAppgallery, TbProgressHelp } from "react-icons/tb";
import { LuShoppingCart } from "react-icons/lu";
import { SiAboutdotme } from "react-icons/si";
import { IoWalletOutline } from "react-icons/io5";
import { GiThreeFriends } from "react-icons/gi";
import { NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./Hero";
import Catagory from "./Catagory";
import HadelineCards from "./HadelineCards";
import { Context } from "../MainContext";
import Footer from "./Footer";
import Topitems from "./Topitems";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <div className="max-w-[1640px] mx-auto flex border justify-between items-center p-4">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <div onClick={() => setNav(!nav)} className="cursor-pointer">
            <AiOutlineMenu size={30} />
          </div>
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-2xl sm:text-3xl lg:text-4xl px-2"
          >
            Best <span className="font-bold">Eats</span>
          </motion.h1>
          <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
            <p className="bg-black text-white rounded-full p-2">Delivery</p>
            <p className="p-2">Pickup</p>
          </div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-200 rounded-full hidden md:flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]"
        >
          <AiOutlineSearch />
          <input
            className="bg-transparent p-2 focus:outline-none w-full"
            type="text"
            placeholder="Search Foods"
          />
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center space-x-4"
        >
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
            href="/allitems"
            className="bg-black ml-3 md:ml:1 hover:bg-white border hover:text-blue-600 hover:border-black text-white px-4 py-2 rounded-[25px] transition-colors duration-300 flex"
          >
            All <span className="hidden md:flex ml-1">Items</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
            href="/Cart"
            className="bg-black hover:bg-white border hover:text-blue-600 hover:border-black text-white px-4 py-2 rounded-[25px] transition-colors duration-300 flex items-center"
          >
            <span className="pr-2 hidden md:flex">Cart</span>
            <BsFillCartFill />
          </motion.a>
        </motion.div>

        {/* Mobile Menu Overlay */}
        <div>
          <AnimatePresence>
            {nav && (
              <motion.div
                initial={{ x: 300 }}
                animate={{ x: 0 }}
                exit={{ x: 300 }}
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
                      <NavLink to="/allItems">All Items</NavLink>
                    </li>
                    <li className="text-xl py-4 flex">
                      <LuShoppingCart size={25} className="mr-4" />
                      <NavLink to="/cart">Cart Page</NavLink>
                    </li>
                    <li className="text-xl py-4 flex">
                      <SiAboutdotme size={25} className="mr-4" />
                      <NavLink to="/AboutUs">About Us</NavLink>
                    </li>
                    <li className="text-xl py-4 flex">
                      <IoWalletOutline size={25} className="mr-4" />
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
      <Hero />
      <HadelineCards />
      <Topitems />
      <Catagory />
      <Footer />
    </>
  );
};

export default Navbar;