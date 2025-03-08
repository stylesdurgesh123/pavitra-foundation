import React from 'react';

const EducationSection = () => {
  return (
    <section className="relative bg-gray-50 py-12 px-4 md:px-8">
      {/* Responsive Left Wave shape */}
      <div className="absolute inset-y-0 left-0 w-full md:w-1/2 pointer-events-none">
        <svg
          className="w-full h-24 sm:h-32 md:h-full"
          viewBox="0 0 500 500"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: 'scaleX(-1)' }}
        >
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#117554" />
              <stop offset="100%" stopColor="#6EC207" />
            </linearGradient>
          </defs>
          <path
            d="M0,0 C250,100 250,400 500,500 L500,0 Z"
            fill="url(#waveGradient)"
          />
        </svg>
      </div>
      
      <div className="relative max-w-4xl mx-auto text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 font-serif">
          WHY EDUCATION MATTERS
        </h2>
        
        <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-sans">
          <p>
            Pavitra Foundation is a leading educational organization dedicated to providing quality education to children and youth. Our mission is to create equal educational opportunities for all sections of society, ensuring a brighter future for every child.
          </p>
          
          <p>
            Our educational system includes modern curriculums, advanced teaching methods, and supportive learning resources, all contributing to the holistic development of students. We believe that education is not just the transfer of knowledge, but also the development of social, ethical, and practical skills.
          </p>
          
          <p>
            Through various educational programs, workshops, and community initiatives, Pavitra Foundation aims to empower children to become self-reliant and informed citizens. Our goal is that every child not only achieves academic success but also excels in all areas of life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
