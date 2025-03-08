import React, { useState } from "react";
import aboutImg from "../../assests/images/img25.webp";

const AboutSection = () => {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <section className="relative w-full bg-white overflow-hidden py-8 sm:py-10 md:py-12 font-sans">
      {/* Responsive Right Wave shape */}
      <div className="absolute inset-y-0 right-0 w-full md:w-1/2 pointer-events-none">
        <svg
          className="w-full h-24 sm:h-32 md:h-full"
          viewBox="0 0 500 500"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#117554" />
              <stop offset="100%" stopColor="#6EC207" />
            </linearGradient>
          </defs>
          <path
            d="M0,0 C250,100 250,400 500,500 L500,0 Z"
            fill="url(#waveGradient)"/>
        </svg>
      </div>

      <div className="relative container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-6 md:gap-8">
        {/* Left Side border */}
        <div className="w-full md:w-1/2 border-l-2 border-[#6EC207] pl-4">
          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#117554] to-[#6EC207]">
            About Pavitra Foundation
          </h2>

          {/* Always Show Paragraph */}
          <p className="mb-4 text-gray-700 leading-relaxed text-base sm:text-lg first-letter:text-2xl sm:first-letter:text-3xl first-letter:font-semibold first-letter:text-[#117554]">
            Pavitra Foundation, founded by Dr. Subhashini Shivhare, a former dentist turned social activist, has been making a significant impact in India for over three years. With a PAN India presence and a dedicated team of 100+ members, the NGO has been instrumental in organizing 25+ health camps and free blood checkups, providing crucial healthcare services to underserved communities.
          </p>
          {/*Extra Paragraph */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              showFullText ? "max-h-[1000px]" : "max-h-0"
            }`}>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              Driven by a vision of empowerment, education, pollution control, and healthcare improvement, SS Foundation stands as a beacon of hope and change. Dr. Shivhare’s journey from a housewife and mother to a social welfare champion is a testament to the transformative power of one individual’s dedication and compassion.
            </p>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg mt-4">
              Through its various initiatives, SS Foundation is not only providing immediate relief but also working towards long-term solutions to societal challenges. Its holistic approach, coupled with the commitment of its members, is creating a lasting impact on communities across the country. As SS Foundation continues to grow and expand its reach, it remains committed to its core values of empowerment, education, pollution control, and healthcare improvement.
            </p>
          </div>

          {/* See More or See Less Button */}
          <button
            onClick={() => setShowFullText(!showFullText)}
            className="mt-4 text-[#117554] font-medium hover:text-[#6EC207] transition duration-300">
            {showFullText ? "See Less" : "See More"}
          </button>
        </div>
        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={aboutImg}
            alt="About Pavitra Foundation"
            className="w-full h-auto max-w-md object-cover"/>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
