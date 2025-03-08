import React from "react";
import Patient1 from "../../assests/images/Patients.jpeg";
import Patient2 from "../../assests/images/Patient2.webp";
import Patient3 from "../../assests/images/Patient3.jpg";

const testimonials = [
  {
    name: "Rahul Verma",
    title: "Patient",
    image: Patient1,
    quote:
      "Thanks to the dedicated care, I regained my health quickly and feel rejuvenated!",
  },
  {
    name: "Sneha Sharma",
    title: "Patient",
    image: Patient2,
    quote:
      "The professionalism and empathy of the doctors and staff were outstanding.",
  },
  {
    name: "Amit Kumar",
    title: "Patient",
    image: Patient3,
    quote:
      "State-of-the-art facilities and genuine care made my recovery swift and smooth.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What Our Patients
        </h2>
        {/* Gradient Divider */}
        <div className="w-[33%] h-1 bg-gradient-to-r from-[#117554] to-[#6EC207] mx-auto mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 cursor-pointer">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg relative transition-transform duration-300 hover:scale-105 border border-gray-200"
            >
              {/* Decorative Quote Icon */}
              <svg
                className="w-10 h-10 text-green-500 absolute -top-5 left-1/2 transform -translate-x-1/2"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.17 6A4.001 4.001 0 003 10v4a4 4 0 004 4h.09A4.001 4.001 0 0011 14V10a4.001 4.001 0 00-3.83-4zm9 0A4.001 4.001 0 0012 10v4a4 4 0 004 4h.09A4.001 4.001 0 0021 14V10a4.001 4.001 0 00-3.83-4z" />
              </svg>
              <div className="flex justify-center mb-6 mt-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full border-4 border-green-500 object-cover"
                />
              </div>
              <p className="text-gray-600 italic mb-4">
                "{testimonial.quote}"
              </p>
              <h3 className="text-xl font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-gray-500 text-sm">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;