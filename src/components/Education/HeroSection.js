import React from "react";
import { motion } from "framer-motion";
import backgroundImage from "../../assests/images/img26.webp";

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-[50vh] lg:h-[70vh] flex items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center z-10 px-6 max-w-2xl"
      >
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 uppercase tracking-wide">
          Education
        </h1>
      </motion.div>
    </div>
  );
};

export default HeroSection;
