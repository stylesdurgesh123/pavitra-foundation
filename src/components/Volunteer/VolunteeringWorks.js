import React from 'react';
import TeamWorkImg from '../../assests/images/img1.jpg';

export default function OurTeamSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-16 space-y-8 md:space-y-0 md:space-x-8">
      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl font-semibold text-green-600">
          Meet the Heart of Pavitra Foundation
        </h2>
        <p className="text-gray-700 mt-4 text-sm sm:text-base">
          Our dedicated team is committed to preserving the environment and promoting sustainable practices. Together, we work to create a positive impact on society.
        </p>
        <p className="text-gray-700 mt-4 text-sm sm:text-base">
          From organizing eco-friendly events to raising awareness, our passionate members collaborate to drive meaningful change.
        </p>
        <p className="text-gray-700 mt-4 text-sm sm:text-base">
          Join our team and contribute to a cause that truly matters.
        </p>
        <button className="mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 transition duration-300 w-full md:w-auto">
          JOIN OUR TEAM
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 w-full">
        <img
          src={TeamWorkImg}
          alt="Pavitra Foundation team working together"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
