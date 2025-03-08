import React from "react";
import HealtWork from "../../assests/images/healthwork.jpg";

const Hero= () => {
  return (
    <div className="relative w-full h-96 md:h-[85vh]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HealtWork})` }}>
        </div>
      <div className="absolute inset-0 bg-black/50"></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4">
          Your Health, Our Priority
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-md md:max-w-2xl">
          We provide the best medical services and health consultations. Your well-being is our responsibility.
        </p>
        <button className="mt-6 relative overflow-hidden px-5 py-2 border-2 border-[#6EC207] rounded-lg text-white font-bold text-lg cursor-pointer 
          hover:bg-gradient-to-r from-[#117554] to-[#6EC207] shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 
          hover:shadow-[0px_8px_20px_rgba(110,194,7,0.8)] before:absolute before:inset-0 before:bg-white/10 before:opacity-0 before:transition-all before:duration-300 
          hover:before:opacity-100 active:scale-95">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
