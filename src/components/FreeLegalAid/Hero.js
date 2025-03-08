import React from 'react';
import { FaBalanceScale, FaHandshake, FaLock } from 'react-icons/fa';
import Freelegalaidimg from "../../assests/images/freelegalaid.avif";

const FreeLegalAid = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat h-[600px] flex items-center justify-center text-white shadow-lg overflow-hidden" style={{ backgroundImage: `url(${Freelegalaidimg})` }}>
        <div className="bg-black bg-opacity-60 p-8 text-center max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">Free Legal Aid</h1>
          <p className="text-lg mb-8">We provide free legal support and services to ensure justice for everyone.</p>
          <button className="bg-green-500 hover:opacity-90 text-white px-6 py-3 rounded-full text-lg duration-300 hover:scale-105 hover:shadow-2xl">Get Help Now</button>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Our Legal Aid Services?</h2>
            <p className="text-gray-600 text-lg">We are here to provide professional legal assistance at no cost.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-green-500 transition-transform transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <FaBalanceScale className="text-green-500 text-5xl mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-3">Expert Lawyers</h3>
              <p className="text-gray-600">Connect with skilled lawyers dedicated to your legal needs.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-green-500 transition-transform transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <FaHandshake className="text-green-500 text-5xl mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-3">Free Consultations</h3>
              <p className="text-gray-600">Get expert advice and initial consultations for free.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-green-500 transition-transform transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <FaLock className="text-green-500 text-5xl mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-gray-600">Our team is available round the clock to assist you.</p>
            </div>
          </div>

          <div className="text-center mt-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Need Legal Help?</h3>
            <p className="text-gray-600 text-lg mb-6">Reach out to us today and get the support you need.</p>
            <button className="bg-green-500 hover:opacity-90 text-white px-8 py-3 rounded-full text-lg duration-300 hover:scale-105 hover:shadow-2xl">Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreeLegalAid;