import React from 'react';
import TeamImg from '../../assests/pavita.jpg';

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-[70vh] md:min-h-[80vh] lg:min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${TeamImg})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 w-full px-4 md:px-8 text-white">
        <div className="max-w-lg mx-auto text-center lg:mx-0 lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Meet Our Dedicated Team
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6">
            At Pavitra Foundation, our passionate team works together to preserve the environment and promote sustainable practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
