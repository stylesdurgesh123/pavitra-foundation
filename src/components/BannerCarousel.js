import React from "react";
import Img1 from "../assests/images/img7.jpg";
import Img2 from "../assests/images/img9.jpg";
import Img3 from "../assests/images/img10.jpg";
import Img4 from "../assests/images/img11.jpg";
import NatureImg from "../assests/images/Env.avif";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useState } from "react";

const BannerCarousel = () => {
  const slides = [
    {
      img: Img1,
      title: "Dr. Nidhi Bhatnagar - Awarded Luv Dixit",
      subtitle: "For Exceptional Environmental Contribution",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    },
    {
      img: Img2,
      title: "Dr. Sarbhani Bhatia - Honoring Luv Dixit",
      subtitle: "For Sustainable Cultural Practices",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    },
    {
      img: Img3,
      title: "Dr. Sarbhani Bhatia - Recognizing Luv Dixit",
      subtitle: "For Environmental Awareness Initiatives",
      text: "Be part of our efforts to ensure that cultural celebrations remain respectful and environmentally responsible.",
    },
    {
      img: Img4,
      title: "Dr. Nidhi Bhatnagar - Felicitating Luv Dixit",
      subtitle: "For Promoting Eco-Friendly Idol Immersion",
      text: "We provide a safe and spiritual alternative for idol immersion, preventing water pollution.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative flex items-center justify-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] bg-gray-100 overflow-hidden">
      {/* Background with Transparent Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(17, 117, 84, 0.6), rgba(110, 194, 7, 0.6)), url(${NatureImg})`,
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Content Box */}
      <div className="relative w-[95%] sm:w-[90%] md:w-[85%] lg:w-5/6 flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden z-10">
        {/* Left Image Carousel */}
        <div className="w-full md:w-2/5 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[350px]">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full h-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <img
                  src={slide.img}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg shadow-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-3/5 p-6 sm:p-8 transition-all duration-500 ease-in-out">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            {slides[activeIndex].title}
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-green-700 font-semibold mt-2">
            {slides[activeIndex].subtitle}
          </h2>
          <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
            {slides[activeIndex].text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerCarousel;
