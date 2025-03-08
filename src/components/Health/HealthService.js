import React from "react";
import emergencyImg from "../../assests/images/HealthService.jpg";
import diagnosticsImg from "../../assests/images/Diagnosis.png";
import surgeonsImg from "../../assests/images/ExpertSurgeon.webp";
import personalizedImg from "../../assests/images/PersonalizedCare.jpg";

const services = [
  {
    title: "24/7 Emergency",
    description: "Immediate care available round the clock for all critical conditions.",
    image: emergencyImg,
  },
  {
    title: "Advanced Diagnostics",
    description: "State-of-the-art diagnostic services to accurately identify health issues.",
    image: diagnosticsImg,
  },
  {
    title: "Expert Surgeons",
    description: "Highly skilled and experienced surgeons for a wide range of procedures.",
    image: surgeonsImg,
  },
  {
    title: "Personalized Care",
    description: "Tailored treatment plans to ensure the best outcomes for every patient.",
    image: personalizedImg,
  },
];

const HealthServices = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Services
        </h2><div className="w-[20%] h-1 bg-gradient-to-r from-[#117554] to-[#6EC207] mx-auto mb-6"></div>
        
        <p className="text-gray-600 mb-10">
          Discover our comprehensive range of health services designed to provide you the best care.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 cursor-pointer">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-1 rounded-xl transition-transform duration-300 transform hover:-translate-y-3 hover:scale-105"
            >
              <div className="bg-white p-6 rounded-xl shadow-md transition duration-300 hover:shadow-2xl">
                <div className="flex justify-center mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthServices;
