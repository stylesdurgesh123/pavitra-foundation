import React from "react";
import { FaLeaf, FaGlobe } from "react-icons/fa";

const MissionVision = () => {
  return (
    <section className="bg-green-50 py-16 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-green-800 mb-6">Our Mission & Vision</h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Pavitra Foundation is dedicated to preserving the sanctity of religious idols by ensuring proper immersion and recycling. Our goal is to create a sustainable and environmentally friendly solution to prevent pollution and maintain cultural heritage.
        </p>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-green-600 transform transition duration-300 hover:scale-105 cursor-pointer">
            <div className="flex justify-center mb-4">
              <FaLeaf className="text-green-600 text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold text-green-700 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To collect, recycle, and properly immerse discarded idols with the aim of reducing water pollution and promoting eco-friendly practices. We aim to foster a sense of responsibility towards nature and tradition.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-green-600 transform transition duration-300 hover:scale-105 cursor-pointer">
            <div className="flex justify-center mb-4">
              <FaGlobe className="text-green-600 text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold text-green-700 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To establish a widespread movement that ensures environmental consciousness while respecting religious sentiments. We envision a future where sustainability and spirituality go hand in hand, making the world a cleaner place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;