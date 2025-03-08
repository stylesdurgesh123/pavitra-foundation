import React from 'react';
import donateImage from '../../assests/images/Paymentimg.jpg'; // Update the path as per your project structure

const DonateHero = () => {
  return (
    <section className="relative w-full h-[500px] bg-gray-900 text-white flex items-center justify-center overflow-hidden">
      <img 
        src={donateImage} 
        alt="Donate" 
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
    </section>
  );
};

export default DonateHero;
