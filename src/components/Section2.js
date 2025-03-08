import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import EnvironmentImg from "../assests/images/Env2.avif";

const categories = [
  { name: "Education", icon: "🎓", link: "/education" },
  { name: "Environment", icon: "🌍", link: "/environment" },
  { name: "Empowerment", icon: "✊", link: "/empowerment" },
  { name: "Health", icon: "❤️", link: "/health" },
];

const Section2 = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ["Our Works", "What We Do", "Join Our Mission"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      className="relative bg-fixed bg-cover bg-center min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-16"
      style={{ backgroundImage: `url(${EnvironmentImg})` }}>
      
      {/* Animated Heading */}
      <div className="absolute top-10 sm:top-16 w-full flex justify-center px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white drop-shadow-lg 
        px-4 sm:px-6 py-2 rounded-lg text-center 
        shadow-[0_0_20px_rgba(34,197,94,0.7)] bg-gradient-to-r from-[#117554] to-[#6EC207] 
        tracking-wide relative inline-block whitespace-nowrap max-w-full overflow-hidden">
          {/* Typed Text */}
          <span ref={textRef} className="relative z-10"></span>
        </h2>
      </div>

      {/* Card Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 
      p-4 sm:p-6 md:p-10 mt-24 w-full max-w-6xl">
        {categories.map((category, index) => (
          <Link to={category.link} key={index}>
            <div
              className="relative flex flex-col items-center justify-center rounded-3xl p-6 shadow-xl 
              transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl 
              backdrop-blur-md border border-gray-200 bg-white bg-opacity-30 text-gray-900 hover:bg-opacity-50 
              h-auto w-full min-h-[150px] sm:min-h-[180px] md:min-h-[200px] overflow-hidden">
              
              {/* Icon */}
              <div className="text-3xl sm:text-4xl md:text-5xl drop-shadow-md transition-transform duration-500 
              ease-in-out hover:scale-125">
                {category.icon}
              </div>
              
              {/* Category Name */}
              <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold transition-colors 
              duration-500 ease-in-out hover:text-green-700 text-center">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Section2;
