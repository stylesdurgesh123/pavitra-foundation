import React from "react";
import { motion } from "framer-motion";
import EnvironmentImg from "../../assests/images/Env3.jpg";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-green-100 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
           style={{ backgroundImage: `url(${EnvironmentImg})` }}>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 150 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="relative text-center text-white px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
          Protect Our Planet
        </h1>
        <p className="mt-4 text-lg md:text-xl drop-shadow-lg">
          Join us in making the Earth a better place for future generations. 
        </p>
        <motion.button 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }}
          className="mt-6 border-2 border-[#6EC207] text-white font-bold py-3 px-6 rounded-full shadow-lg  hover:bg-gradient-to-r from-[#117554] to-[#6EC207] hover:bg-gradient-to-r from-[#117554] to-[#6EC207] shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 
          hover:before:opacity-100 active:scale-95 transition-all duration-300 ease-in-out transform hover:scale-110">
          Get Involved
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HeroSection;
