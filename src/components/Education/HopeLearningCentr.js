import React from 'react';
import LeftImg from "../../assests/images/img27.webp";
import RightImg from "../../assests/images/img28.avif";

const HopeLearningCentre = () => {
  return (
    <section className="bg-gradient-to-r from-white to-gray-50 py-20 px-6 md:px-12 space-y-16">
      {/* First container: Image on left, Text on right */}
      <div className="container mx-auto flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-12">
        {/* Left side image */}
        <div className="md:w-1/2">
          <img
            src={LeftImg}
            alt="Hope Learning Centre"
            className="w-full h-[60vh] rounded-lg shadow-2xl transform hover:scale-110 transition duration-500"
          />
        </div>
        
        {/* Right side content with border */}
        <div className="md:w-1/2 md:pl-16 border-l-8 border-gradient-to-r from-[#117554] to-[#6EC207] p-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 font-serif leading-tight">
            HOPE LEARNING 
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mb-6 leading-relaxed">
          When one is illiterate, there is a compulsory dependency on others. And when that someone is taught to read, write, do basic math and use a computer, a whole new world opens up before them. And this massive difference provides opportunities to escape poverty, reduce healthcare costs, find sustainable jobs and ultimately, change their life.
         </p>
         
        </div>
      </div>

      {/* Second container: Text on left, Image on right */}
      <div className="container mx-auto flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-12">
        {/* Left side content with border */}
        <div className="md:w-1/2 md:pr-16 border-l-8 border-gradient-to-r from-[#117554] to-[#6EC207] p-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 font-serif leading-tight">
          SKILL DEVELOPMENT
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mb-6 leading-relaxed">
        Many migrant workers - along with their families - settle down in the slum areas and often have a poor quality of life, especially in areas of health, social security and wage structure. Children leave school to work and contribute to the household income, resulting in another uneducated and unskilled generation who have few options for the future.
        </p>
        </div>
        
        {/* Right side image */}
        <div className="md:w-1/2">
          <img
            src={RightImg}
            alt="Hope Learning Centre"
            className="w-full h-[60vh] rounded-lg shadow-2xl transform hover:scale-110 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default HopeLearningCentre;
