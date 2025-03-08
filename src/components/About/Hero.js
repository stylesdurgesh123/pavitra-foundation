import React from "react";
import Img12 from "../../assests/images/img12.jpg";
import Img13 from "../../assests/images/img13.jpg";
import Img14 from "../../assests/images/img14.jpg";
import Img15 from "../../assests/images/img15.jpg";
import Img16 from "../../assests/images/img16.jpg";
import Img17 from "../../assests/images/img17.jpg";
import Img18 from "../../assests/images/img18.jpg";
import Img19 from "../../assests/images/img19.jpg";
import AboutPavitraFoundation from "../../assests/videos/AboutPavitraFoundation.mp4";

const Hero = () => {
  const images = [Img12, Img13, Img14, Img15, Img16, Img17, Img18, Img19];

  return (
    <div className="relative w-full mx-auto my-4 mt-0 px-2 sm:px-4 lg:px-6">
      {/* Video Section */}
      <div className="mb-6">
        <video
          controls
          className="w-full h-auto max-h-[500px] rounded-lg shadow-lg object-contain">
          <source src={AboutPavitraFoundation} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="text-center mb-6 px-2">
        <h2
          className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#117554] to-[#6EC207] pl-2 inline-block"
          style={{
            borderLeft: "4px solid",
            borderImage: "linear-gradient(to right, #117554, #6EC207) 1"
          }}
        >
          Pavitra Foundation: Our Journey
        </h2>
        <p className="text-gray-700 mt-2 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
          Pavitra Foundation is committed to transforming lives through impactful initiatives. Our journey reflects a deep dedication to community welfare, education, and environmental conservation. Embrace our mission as we empower communities and drive transformative change.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {images.map((imgSrc, index) => (
          <div key={index} className="relative overflow-hidden">
            <img
              src={imgSrc}
              alt={`Collage ${index}`}
              className="object-cover w-full h-28 sm:h-36 md:h-48 lg:h-56 transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Overlay Text */}
      <div className="absolute top-0 right-0 bg-purple-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-bl-md shadow-lg text-sm sm:text-base">
        Pavitra Foundation - Transforming Lives
      </div>
    </div>
  );
};

export default Hero;
