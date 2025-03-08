import React from 'react';
import HeroImg from '../../assests/images/contactimg.avif';
import { Link } from 'react-router-dom';

const ContactHero = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <img
        src={HeroImg}
        alt="Contact Us"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">CONTACT US</h1>
        <p className="text-lg md:text-xl lg:text-2xl">
          <Link to="/" className="text-blue-400 hover:text-blue-300">Home</Link> / CONTACT US
        </p>
      </div>
    </div>
  );
};

export default ContactHero;
