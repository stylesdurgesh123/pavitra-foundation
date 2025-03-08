import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import teamEvent from "../../assests/images/WhatsApp Image.jpg";
import teamBrochure1 from "../../assests/images/img21.jpg";
import teamBrochure2 from "../../assests/images/img1.jpg";
import teamGallery1 from "../../assests/images/img3.jpg";
import teamGallery2 from "../../assests/images/WhatsApp Image.jpg";
import teamGallery3 from "../../assests/images/Img24.png";

const teamMembers = [

  {
    name: "Luv Dixit",
    role: "Co-Founder",
    image: teamGallery2,
    linkedin: "#",
    facebook: "#",
    instagram: "#",
  },
  {
    name: "Amit Kumar",
    role: "Volunteer",
    image: teamBrochure2,
    linkedin: "#",
    facebook: "#",
    instagram: "#",
  },
  {
    name: "Pranshu Dixit",
    role: "Event Coordinator",
    image: teamGallery1,
    linkedin: "#",
    facebook: "#",
    instagram: "#",
  },
  {
    name: "Rajesh Kumar",
    role: "Volunteer",
    image:  teamBrochure1,
    linkedin: "#",
    facebook: "#",
    instagram: "#",
  },
  {
    name: "Durgesh Yadav",
    role: "Social Media Manager",
    image: teamGallery3,
    linkedin: "#",
    facebook: "#",
    instagram: "#",
  },
  {
    name: "Rakesh Kumar",
    role: "Volunteer",
    image: teamEvent,
    linkedin: "#",
    facebook: "#",
    instagram: "#",
  },
];


const TeamMember = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          Meet Our <span className="text-green-600">Professional Team</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-xl mx-auto">
          A team of dedicated individuals committed to making a difference.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-500">{member.role}</p>
              </div>

              {/* Hover Social Icons */}
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-white text-2xl hover:text-green-500" />
                </a>
                <a
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-white text-2xl hover:text-green-500" />
                </a>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-white text-2xl hover:text-green-500" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ✅ Default export added here
export default TeamMember;
