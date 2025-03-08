import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FaFacebookF, FaTwitter, FaDribbble, FaInstagram, FaEnvelope, 
  FaPhone, FaMapMarkerAlt, FaArrowRight
} from "react-icons/fa";

const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <footer className="bg-gradient-to-r from-[#117554] to-[#6EC207] text-white py-12 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#FFD700] cursor-pointer">Pavitra Foundation</h2>
          <p className="mt-2 text-gray-200 cursor-pointer">
            Making a difference with education, health, and empowerment.
          </p>
          <p className="mt-2 text-gray-300">Join us in our mission to create change.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-[#FFD700] inline-block cursor-pointer">Quick Links</h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-3 group">
              <FaArrowRight className="text-[#FFD700] transform group-hover:translate-x-2 transition duration-300 ease-in-out" />
              <Link to="/" className="text-gray-300 hover:text-[#FFD700] transition duration-300">Home</Link>
            </li>
            <li className="flex items-center space-x-3 group">
              <FaArrowRight className="text-[#FFD700] transform group-hover:translate-x-2 transition duration-300 ease-in-out" />
              <Link to="/about" className="text-gray-300 hover:text-[#FFD700] transition duration-300">About Us</Link>
            </li>
            <li className="flex items-center space-x-3 group">
              <FaArrowRight className="text-[#FFD700] transform group-hover:translate-x-2 transition duration-300 ease-in-out" />
              <Link to="/donate" className="text-gray-300 hover:text-[#FFD700] transition duration-300">Donate</Link>
            </li>
            <li className="flex items-center space-x-3 group">
              <FaArrowRight className="text-[#FFD700] transform group-hover:translate-x-2 transition duration-300 ease-in-out" />
              <Link to="/contact" className="text-gray-300 hover:text-[#FFD700] transition duration-300">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Our Works */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-[#FFD700] inline-block cursor-pointer">Our Works</h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-3 group">
              <FaArrowRight className="text-[#FFD700] transform group-hover:translate-x-2 transition duration-300 ease-in-out" />
              <Link to="/education" className="text-gray-300 hover:text-[#FFD700] transition duration-300">Education</Link>
            </li>
            <li className="flex items-center space-x-3 group">
              <FaArrowRight className="text-[#FFD700] transform group-hover:translate-x-2 transition duration-300 ease-in-out" />
              <Link to="/health" className="text-gray-300 hover:text-[#FFD700] transition duration-300">Health</Link>
            </li>
            <li className="flex items-center space-x-3 group">
              <FaArrowRight className="text-[#FFD700] transform group-hover:translate-x-2 transition duration-300 ease-in-out" />
              <Link to="/environment" className="text-gray-300 hover:text-[#FFD700] transition duration-300">Environment</Link>
            </li>
            <li className="flex items-center space-x-3 group">
              <FaArrowRight className="text-[#FFD700] transform group-hover:translate-x-2 transition duration-300 ease-in-out" />
              <Link to="/women-empowerment" className="text-gray-300 hover:text-[#FFD700] transition duration-300">Women Empowerment</Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-[#FFD700] inline-block">Get In Touch</h3>
          <ul className="space-y-4">
            <li className="flex items-center text-gray-300">
              <FaMapMarkerAlt className="text-[#FFD700] mr-3" /> 117 Q/61 ,R.K.H.S, Sharda Nagar  Near Parashuram Park, Kanpur
            </li>
            <li className="flex items-center text-gray-300">
              <FaPhone className="text-[#FFD700] mr-3" /> +91-6392254219
            </li>
            <li className="flex items-center text-gray-300">
              <FaEnvelope className="text-[#FFD700] mr-3" /> pavitrafoundation7@gmail.com
            </li>
          </ul>
          
          {/* Social Icons */}
          <div className="flex space-x-4 mt-5">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] hover:bg-opacity-80 transition">
              <FaFacebookF className="text-white" size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1DA1F2] hover:bg-opacity-80 transition">
              <FaTwitter className="text-white" size={20} />
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#EA4C89] hover:bg-opacity-80 transition">
              <FaDribbble className="text-white" size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#E4405F] hover:bg-opacity-80 transition">
              <FaInstagram className="text-white" size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-200 mt-10 border-t border-gray-400 pt-5">
        <p>© 2025 Pavitra Foundation. All Rights Reserved.</p>
        <p className="mt-2">Developed by <span className="font-bold text-[#FFD700]">Durgesh Yadav</span></p>
      </div>
    </footer>
  );
};

export default Footer;
