import React, { useState, useEffect } from "react";
import Img1 from "../assests/images/Ngo1.avif";
import Img2 from "../assests/images/Ngo2.jpg";
import Img3 from "../assests/medi1.jpg";
import Img4 from "../assests/images/Ngo3.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const images = [Img1, Img2, Img3, Img4];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  const nextSlide = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen bg-white px-0 sm:px-0">
      {/* Image Slider Section */}
      <div className="relative w-full lg:w-[70%] h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen overflow-hidden flex items-center justify-center">
        <div className="relative w-full h-full">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-700 ease-in-out rounded-lg shadow-xl ${
                index === currentIndex ? "opacity-100 scale-105" : "opacity-0 scale-95"
              }`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 bg-black/60 text-white p-3 rounded-full z-20 hover:bg-black/80 transition-transform transform hover:scale-110"
        >
          <FaChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 bg-black/60 text-white p-3 rounded-full z-20 hover:bg-black/80 transition-transform transform hover:scale-110"
        >
          <FaChevronRight size={24} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                currentIndex === index ? "bg-white scale-125 shadow-lg" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>

      {/* Login Form Section */}
      <div className="bg-gradient-to-r from-[#117554] to-[#6EC207] p-10 w-full lg:w-[30%] flex flex-col items-center justify-center text-center min-h-[50vh] md:min-h-[60vh] lg:min-h-screen">
        <h2 className="text-2xl sm:text-3xl text-white font-extrabold mb-6">Login to Your Account</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-5">
          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          {/* Password Input with Show/Hide Icon */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4 cursor-pointer text-gray-500"
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-white text-[#117554] py-3 rounded-lg font-bold hover:bg-gray-200 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Login
          </button>

          {/* Links */}
          <p className="text-white mt-3 cursor-pointer hover:underline">Forgot password?</p>
          <p className="text-white mt-1 cursor-pointer hover:underline">
            Don't have an account? <Link to="/contact" className="font-bold">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Hero;