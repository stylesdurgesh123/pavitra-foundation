import React from 'react';
import { motion } from 'framer-motion';
import Envimg1 from "../../assests/images/Env5.png";
import Envimg2 from "../../assests/images/Env6.jpg";
import Envimg3 from "../../assests/images/Env7.png";
import Envimg4 from "../../assests/images/Env8.jpg";
const features = [
  {
    icon: Envimg1,
    title: 'Eco-Friendly Immersion',
    description: 'Safe idol immersion following environmental guidelines.'
  },
  {
    icon: Envimg2,
    title: 'Community Involvement',
    description: 'Engaging volunteers to promote cultural and environmental awareness.'
  },
  {
    icon: Envimg3,
    title: 'Environmental Care',
    description: 'Preserving water bodies and reducing pollution through proper idol immersion.'
  },
  {
    icon: Envimg4,
    title: 'Respect for Traditions',
    description: 'Ensuring rituals are performed with respect and care.'
  }
];

const Features = () => {
  return (
    <div className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-green-800 text-center mb-12">Our Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center border-t-4 border-green-500"
            >
              <div className="flex justify-center mb-4">
                <img src={feature.icon} alt={feature.title} className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
