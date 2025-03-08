import React, { useEffect, useState, useRef } from "react";
import Typed from "typed.js";
import Impactimg from "../assests/images/img12.jpg";

const ImpactSection = () => {
  const [count, setCount] = useState({ 
    lives: 0, 
    yearsOfService: 0, 
    healthCamps: 0, 
    volunteers: 0 
  });
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);
  const impactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startCount) return;

    const target = { 
      lives: 200,           
      yearsOfService: 4, 
      healthCamps: 15, 
      volunteers: 40 
    };
    const speed = 100;

    const interval = setInterval(() => {
      setCount((prev) => {
        const newValues = {
          lives: Math.min(prev.lives + 1, target.lives),
          yearsOfService: Math.min(prev.yearsOfService + 1, target.yearsOfService),
          healthCamps: Math.min(prev.healthCamps + 1, target.healthCamps),
          volunteers: Math.min(prev.volunteers + 1, target.volunteers),
        };

        if (
          newValues.lives === target.lives &&
          newValues.yearsOfService === target.yearsOfService &&
          newValues.healthCamps === target.healthCamps &&
          newValues.volunteers === target.volunteers
        ) {
          clearInterval(interval);
        }

        return newValues;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [startCount]);

  useEffect(() => {
    const typed = new Typed(impactRef.current, {
      strings: ["Impact"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative bg-cover bg-center h-auto min-h-[350px] md:h-[450px] flex flex-col items-center justify-center text-white px-4 sm:px-8"
      style={{ backgroundImage: `url(${Impactimg})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Heading */}
      <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wider text-center">
        <span className="text-white">OUR</span>{" "}
        <span
          ref={impactRef}
          className="bg-gradient-to-r from-[#117554] to-[#6EC207] text-transparent bg-clip-text"
        ></span>
      </h2>

      {/* Stats Section */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 lg:gap-14 text-center w-full max-w-5xl">
        {[
          { value: count.lives.toLocaleString(), label: "LIVES IMPACTED" },
          { value: count.yearsOfService, label: "Years of Service" },
          { value: count.healthCamps, label: "Health Camps" },
          { value: count.volunteers, label: "Volunteers" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-4 sm:p-6 w-full max-w-[180px] border border-white shadow-lg mx-auto"
          >
            <p className="text-4xl sm:text-5xl font-extrabold text-yellow-300 drop-shadow-md">
              {item.value}+
            </p>
            <p className="text-sm sm:text-lg font-medium uppercase mt-2 tracking-wide text-white">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactSection;
