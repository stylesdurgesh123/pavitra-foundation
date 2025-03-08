import React, { useState, useRef, useEffect } from "react";
import Typed from "typed.js";

const videos = [
  {
    id: 1,
    title: "Beach Waves",
    description: "Relaxing view of beach waves.",
    src: "https://youtu.be/JHUJyXdSavs?si=EcBNO93P47XMz61f&t=7",
  },
  {
    id: 2,
    title: "Mountain View",
    description: "A scenic mountain landscape.",
    src: "https://youtu.be/gX14MI97aIY?si=ntm8IlHb8RMs_agz&t=28",
  },
  {
    id: 3,
    title: "City Life",
    description: "Time-lapse of a busy city.",
    src: "https://youtu.be/kvjnlO24wY0?si=LyMplpREvjoKUZTa&t=2",
  },
];

const VideoCards = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (selectedVideo && videoRef.current) {
      videoRef.current.play();
    }
  }, [selectedVideo]);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ["STORIES IN MOTION"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const closeVideo = (e) => {
    e.stopPropagation();
    setSelectedVideo(null);
  };

  
  const getYouTubeId = (url) => {
    const parts = url.split("youtu.be/");
    if (parts.length > 1) {
      return parts[1].split("?")[0];
    }
    return null;
  };

  return (
    <div className="p-6 md:p-12 flex flex-col items-center">
      {/* Heading with Animated Text */}
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 relative inline-block px-4 py-2  border-green-600 rounded-lg shadow-lg bg-gradient-to-r from-[#117554] to-[#6EC207] text-white tracking-wide text-center">
        <span className="absolute inset-0 border-[#6EC207] rounded-lg animate-pulse shadow-[0_0_25px_#6EC207]"></span>
        <span ref={textRef} className="relative z-10 "></span>
      </h2>
      {/* Video Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12 mt-6 w-full">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer w-full h-[200px] md:h-[240px]"
            onClick={() => setSelectedVideo(video)}>
      
            {video.src.includes("youtu") ? (
              <img
                src={`https://img.youtube.com/vi/${getYouTubeId(video.src)}/maxresdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <video src={video.src} className="w-full h-full object-cover" muted />
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <div className="rounded-full p-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-12 h-12 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 3l14 9-14 9V3z"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4">
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold w-12 h-12 flex items-center justify-center rounded-full hover:text-red-500 transition-all duration-300 hover:scale-110"
            onClick={closeVideo}
          >
            ✖
          </button>
          <div className="bg-white p-4 md:p-6 rounded-lg relative max-w-4xl w-full">
            {selectedVideo.src.includes("youtu") ? (
              <div className="relative pb-[56.25%]">
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeId(selectedVideo.src)}?si=lwcrlP86FAGSfBP1`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-md"
                ></iframe>
              </div>
            ) : (
              <video
                ref={videoRef}
                src={selectedVideo.src}
                controls
                className="w-full h-[50vh] md:h-[70vh] object-cover rounded-md"
              ></video>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCards;
