import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import MainImage from "../assests/images/img3.jpg";  
import SmallImage from "../assests/images/img5.jpg"; 

const Section1 = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const typed = new Typed(textRef.current, {
        strings: ["WELCOME TO PAVITRA FOUNDATION", "Join Our Team"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Title Section */}
    <div className="flex justify-center items-center mt-6 sm:mt-9 px-4">
  <h2 className="text-lg sm:text-2xl md:text-2xl lg:text-3xl font-bold text-center 
  px-4 sm:px-8 py-2  border-[#6EC207] rounded-lg text-white tracking-wide 
  bg-gradient-to-r from-[#117554] to-[#6EC207] 
  max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] 
  inline-block whitespace-nowrap">
    <span ref={textRef} className="inline-block"></span>
  </h2>
</div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-10 mt-6 sm:mt-10 px-2 sm:px-4 py-6 sm:py-8 mx-auto">
        {/* Left Side - Images */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <img
            src={MainImage}
            alt="Happy children"
            className="rounded-lg shadow-lg w-full sm:w-3/4 md:w-3/4 lg:w-full h-48 sm:h-64 md:h-80 lg:h-[70vh] border-2 border-green-600"
          />
          <div className="absolute top-2 sm:top-5 left-2 sm:left-5 bg-[#FFB200] text-white text-xs sm:text-lg font-bold px-3 sm:px-6 py-1 sm:py-3 rounded-full shadow-lg border-4">
            4+ <br /> YEARS
          </div>
          <img
            src={SmallImage}
            alt="Child studying"
            className="absolute bottom-[-10px] sm:bottom-[-30px] right-[-10px] sm:right-[-20px] w-20 sm:w-40 md:w-48 lg:w-60 h-24 sm:h-40 md:h-48 lg:h-[40vh] rounded-lg shadow-lg border-l-4 sm:border-l-8 border-t-4 sm:border-t-8 border-green-600"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left px-4 sm:px-6">
          <p className="text-black mt-4 text-lg">
            <span className="text-3xl font-bold text-black">I</span>ndia is a land of festivals, and during occasions like  
            Diwali, Ganesh Chaturthi, and Dussehra, people bring idols for worship. Unfortunately, after the  
            rituals, many idols are carelessly discarded in drains, streets, or water bodies, harming both the environment and religious sentiments.
          </p>
          <p className="text-black mt-4 text-lg">
            At Pavitra Foundation, we are committed to collecting these abandoned  
            idols from different locations and ensuring their proper immersion with dignity.  
            Our goal is to preserve cultural values while protecting nature  
            from pollution caused by non-biodegradable materials used in idol-making.
          </p>
          <p className="text-black mt-4 text-lg">
            We ensure our efforts create a lasting impact and promote  
            dignity and respect for traditions while protecting nature.
          </p>

        
        </div>
      </div>

      {/* New SVG Wave Effect */}
      <svg 
        className="block w-full h-auto" 
        xmlns="http://www.w3.org/2000/svg" 
        version="1.1" 
        viewBox="0 0 1516 150" 
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#117554", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#6EC207", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path 
          d="M 0,145 C 101.2,119 303.6,28.6 506,15 C 708.4,1.4 810,77.8 1012,77 C 1214,76.2 1415.2,24.2 1516,11L1516 150L0 150z" 
          fill="url(#waveGradient)"
        />
      </svg>
    </section>
  );
};

export default Section1;
