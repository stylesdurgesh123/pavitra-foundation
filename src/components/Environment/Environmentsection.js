import React from 'react';
import { motion } from 'framer-motion';
import Envcommunity from '../../assests/images/Envcommunity.webp';

const environmentSection = {
  title: 'Protecting Nature with Every Step',
  description: 'Our foundation is dedicated to eco-friendly practices, ensuring that every action we take preserves the environment and upholds cultural values.'
};

const EnvironmentSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="py-16 bg-green-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-extrabold text-green-700 mb-4">{environmentSection.title}</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">{environmentSection.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 300 }}
            className="rounded-2xl overflow-hidden shadow-xl border border-green-400 cursor-pointer"
          >
            <img
              src={Envcommunity}
              alt="Community Involvement for Environment"
              className="w-full h-80 object-cover"
            />
          </motion.div>

          <div className="space-y-4">
            {['Eco-Friendly Immersion', 'Preserving Water Bodies', 'Community Awareness'].map((title, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.1, backgroundColor: '#d4f5e0', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)' }}
                className="p-6 bg-white rounded-lg shadow-lg border border-gray-300 cursor-pointer"
              >
                <h3 className="text-xl font-bold text-green-700">{title}</h3>
                <p className="text-gray-600">{`Learn how we apply sustainable techniques in ${title.toLowerCase()}.`}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EnvironmentSection;
