import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";

const ImageCard = ({ image, title, link }) => {
  return (
    <Link to={link} className="relative min-w-[18rem] h-96 rounded-lg overflow-hidden shadow-lg block">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover brightness-75"
      />
      <div className="absolute bottom-4 left-4 text-white font-bold text-xl">
        {title}
      </div>
    </Link>
  );
};

const CardContainer = () => {
  const scrollRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let scrollInterval;
    
    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (scrollRef.current) {
          if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
            scrollRef.current.scrollLeft = 0;
          }
          scrollRef.current.scrollLeft += 2;
        }
      }, 20);
    };
    
    startScrolling();
    
    return () => clearInterval(scrollInterval);
  }, []);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ["Support A Cause", "Make A Difference"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });
    
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-gray-100 p-4 text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 relative inline-block px-6 py-2  rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.7)] bg-gradient-to-r from-[#117554] to-[#6EC207] text-white tracking-wide">
        <span className="absolute inset-0  rounded-lg animate-pulse shadow-[0_0_25px_#6EC207]"></span>
        <span ref={textRef} className="relative z-10"></span>
      </h2>
      <div ref={scrollRef} className="flex gap-4 w-full overflow-x-auto scroll-smooth whitespace-nowrap" style={{ scrollBehavior: "smooth" }}>
        {[...Array(2)].flatMap(() => (
          [
            { image: "https://media.istockphoto.com/id/870402320/photo/a-social-worker-meeting-with-a-group-of-villagers.jpg?s=612x612&w=0&k=20&c=2JlS1vqg4pU5lCp8oiFXjVgMPlHbhrmH4wmtRJdq384=", title: "TAYYARI KAL KI", link: "/tayyari-kal-ki" },
            { image: "https://thumbs.dreamstime.com/b/rural-education-program-outdoors-teaching-children-areas-isolated-villages-assam-india-classroom-50691803.jpg", title: "HEALTHCARE", link: "/healthcare" },
            { image: "https://media.ahmedabadmirror.com/am/uploads/mediaGallery/image/1677318699846.jpg-org", title: "SHIKSHA NA RUKE", link: "/shiksha-na-ruke" },
            { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRboxGtriAszdd0yjuKqY4JkuedU7UOPH8D7hGP8qj_u6egc7Orx377d-fNQZo2_Qz-aH0&usqp=CAU", title: "SHE CAN FLY", link: "/she-can-fly" }
          ].map((card, index) => (
            <ImageCard key={index} image={card.image} title={card.title} link={card.link} />
          ))
        ))}
      </div>
    </div>
  );
};

export default CardContainer;