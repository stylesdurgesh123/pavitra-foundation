import React from "react";
import Img1 from "../../assests/images/HealthImg1.jpg";
import Img2 from "../../assests/images/Healthimg2.webp";
import Img3 from "../../assests/images/Healthimg3.jpg";
import Img4 from "../../assests/images/Healthimg4.jpg";

const heroes = [
  {
    name: "Dr. A. P. Sharma",
    role: "Cardiologist",
    image: Img1,
    description: "Expert in heart-related diseases with 15 years of experience.",
  },
  {
    name: "Nurse Priya Singh",
    role: "Senior Nurse",
    image: Img2,
    description: "Dedicated to patient care and emergency handling.",
  },
  {
    name: "Dr. Ramesh Verma",
    role: "Pediatrician",
    image: Img3,
    description: "Specialist in child healthcare and vaccinations.",
  },
  {
    name: "Dr. Sunita Rao",
    role: "Surgeon",
    image: Img4,
    description: "Experienced in general and laparoscopic surgeries.",
  },
];

const HealthHero = () => {
  return (
    <section className="py-12 bg-gray-100 relative">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-serif">
          Health Specialist Doctor
        </h2>
        <div className="w-[40%] h-1 bg-gradient-to-r from-[#117554] to-[#6EC207] mx-auto mb-8"></div>
        <p className="text-gray-600 mb-10">
          Meet our dedicated health professionals who are saving lives every day.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 cursor-pointer">
          {heroes.map((hero, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={hero.image}
                alt={hero.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">{hero.name}</h3>
              <p className="text-blue-600 font-medium">{hero.role}</p>
              <p className="text-gray-600 mt-3 text-sm">{hero.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthHero;
