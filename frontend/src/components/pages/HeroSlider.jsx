import React, { useState, useEffect } from 'react';
import Image1 from "../../assets/Image1.png";
import Image2 from "../../assets/Image2.png";
import Image3 from "../../assets/Image3.png";
;
const slides = [
  {
    title: "READY. SET. FEST.",
    subtitle: "GET INTO IT",
    description: "Find A World Of Festivals",
    image: Image1,
  },
  {
    title: "INSPIRE. BUILD. CONNECT.",
    subtitle: "JOIN THE COMMUNITY",
    description: "Explore Tech & Innovation",
    image: Image2,
  },
  {
    title: "LEARN. LAUNCH. LEVEL-UP.",
    subtitle: "START HERE",
    description: "Workshops, Talks & Live Coding",
    image: Image3,
  },
  {
    title: "EXPERIENCE THE FUTURE.",
    subtitle: "DISCOVER THE NEXT BIG THING",
    description: "Explore Trends in AI & DevOps",
    image: Image1
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % length);
    }, 7000);
    return () => clearInterval(timer);
  }, [length]);

  return (
    <div className="relative w-full h-[60vh] overflow-hidden mb-4 rounded-2xl shadow-lg">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 bg-cover bg-center ${index === current ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-opacity-25 flex flex-col justify-center items-center text-center px-4">
            <p className="text-lg md:text-3xl lg:text-2xl font-bold text-gray-900 mb-2 animate-fadeIn">
              {slide.subtitle}
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fadeIn">
              {slide.title}
            </h1>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors duration-300 animate-fadeIn">
              {slide.description}
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={() => setCurrent((current - 1 + length) % length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all z-10"
      >
        &#10094;
      </button>
      <button 
        onClick={() => setCurrent((current + 1) % length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all z-10"
      >
        &#10095;
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${index === current ? 'bg-white w-6' : 'bg-gray-400'}`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;