import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const scaleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 to-red-500 text-white">
      {/* Navbar */}
      <motion.nav
        className="p-6 flex justify-between items-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
       
      </motion.nav>

      {/* Hero Section */}
      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2 className="text-5xl font-bold mb-4">The Best Foods Delivered</h2>
        <p className="text-xl mb-8">Order your favorite meals from the best restaurants in town.</p>
        <motion.button
          className="px-8 py-3 bg-white text-orange-500 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Order Now
        </motion.button>
      </motion.div>

      {/* Food Categories */}
      <motion.div
        className="container mx-auto p-6 mt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h3 className="text-3xl font-bold mb-8 text-center">Categories</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Category 1 - Fast Food */}
          <motion.div
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/10"
            variants={itemVariants}
          >
            <img
              src="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="Fast Food"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-2xl font-bold mb-4">Fast Food</h4>
            <p className="text-gray-200">Quick and delicious meals for every craving.</p>
          </motion.div>

          {/* Category 2 - Healthy Options */}
          <motion.div
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/10"
            variants={itemVariants}
          >
            <img
              src="https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="Healthy Options"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-2xl font-bold mb-4">Healthy Options</h4>
            <p className="text-gray-200">Fresh and nutritious meals to keep you energized.</p>
          </motion.div>

          {/* Category 3 - Desserts */}
          <motion.div
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/10"
            variants={itemVariants}
          >
            <img
              src="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
              alt="Desserts"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-2xl font-bold mb-4">Desserts</h4>
            <p className="text-gray-200">Sweet treats to satisfy your sweet tooth.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Featured Restaurants */}
      <motion.div
        className="container mx-auto p-6 mt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h3 className="text-3xl font-bold mb-8 text-center">Featured Restaurants</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Restaurant 1 - Burger Haven */}
          <motion.div
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/10"
            variants={scaleVariants}
          >
            <img
              src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="Burger Haven"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-2xl font-bold mb-4">Burger Haven</h4>
            <p className="text-gray-200">Home of the juiciest burgers in town.</p>
          </motion.div>

          {/* Restaurant 2 - Green Bites */}
          <motion.div
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/10"
            variants={scaleVariants}
          >
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="Green Bites"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-2xl font-bold mb-4">Green Bites</h4>
            <p className="text-gray-200">Healthy and organic meals for a better you.</p>
          </motion.div>

          {/* Restaurant 3 - Sweet Dreams */}
          <motion.div
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/10"
            variants={scaleVariants}
          >
            <img
              src="https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
              alt="Sweet Dreams"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-2xl font-bold mb-4">Sweet Dreams</h4>
            <p className="text-gray-200">Indulge in our decadent desserts.</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;