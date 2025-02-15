import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';
import { BsFillCartFill } from 'react-icons/bs';
import { NavLink } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold"
            >
              Best <span className="text-pink-400">Eats</span>
            </motion.h2>
            <p className="text-gray-300">
              Discover the best food in town. Order now and enjoy delicious meals delivered to your doorstep.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.instagram.com/yashrajsharma_007/"
                className="text-gray-300 hover:text-pink-400"
              >
                <FaInstagram size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://twitter.com"
                className="text-gray-300 hover:text-blue-400"
              >
                <FaTwitter size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/in/yash-raj-sharma-b60a37309/"
                className="text-gray-300 hover:text-blue-600"
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://youtube.com"
                className="text-gray-300 hover:text-red-600"
              >
                <FaYoutube size={24} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink to="/allitems" className="text-gray-300 hover:text-pink-400 transition-colors">
                  All Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Cart
                </NavLink>
              </li>
              <li>
                <NavLink to="/AboutUs" className="text-gray-300 hover:text-pink-400 transition-colors">
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-span-2">
            <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Get the latest updates, exclusive offers, and more delivered straight to your inbox.
            </p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-l-lg bg-gray-800 text-white focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-pink-500 text-white px-6 py-2 rounded-r-lg flex items-center space-x-2"
              >
                <MdEmail size={20} />
                <span>Subscribe</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center">
            <p className="text-gray-300">
              &copy; {new Date().getFullYear()} Best Eats. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Animation */}

      <NavLink to="/cart">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="fixed md:bottom-[50px]  bottom-[35px] right-[35px] md:right-[80px] transform "
      >
        <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center cursor-pointer justify-center">
          <BsFillCartFill size={24} className="text-white" />
        </div>
      </motion.div>
      </NavLink>
    </footer>
  );
};

export default Footer;