import React from "react";
import teamEvent from "../../assests/images/img27.webp";
import teamBrochure1 from "../../assests/images/img21.jpg";
import teamBrochure2 from "../../assests/images/img1.jpg";
import teamGallery1 from "../../assests/images/img3.jpg";
import teamGallery2 from "../../assests/images/img19.jpg";
import teamGallery3 from "../../assests/images/Img24.png";
import teamGallery4 from "../../assests/images/img23.jpg";
import teamGallery5 from "../../assests/images/img25.webp";

const teamImages = [
  teamEvent,
  teamBrochure1,
  teamBrochure2,
  teamGallery1,
  teamGallery2,
  teamGallery3,
  teamGallery4,
  teamGallery5,
];

const OurTeam = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4 text-gray-800">
          Meet <span className="text-green-600">Our Join Members</span>
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          Passionate individuals working together to create a positive impact through Pavitra Foundation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <img
                src={image}
                alt={`Team Member ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-lg font-semibold">
               Our Team Members
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default OurTeam;
