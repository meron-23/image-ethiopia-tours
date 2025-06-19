// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';

import semienMountainsImg from '../assets/semien_mountains.jpg';
import maasaiMaraImg from '../assets/maassai_mara.jpg';
import lalibelaImg from '../assets/lalibela.jpg';
import zanzibarBeachImg from '../assets/zanzibar_beach.jpg';

const Hero = () => {
  const images = [
    semienMountainsImg,
    maasaiMaraImg,
    lalibelaImg,
    zanzibarBeachImg,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Image Carousel */}
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${image}')` }}
          aria-hidden={index !== currentImageIndex}
        />
      ))}

      {/* Overlay for Readability */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Hero Content */}
      <div className="relative z-10 p-6 max-w-5xl mx-auto">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-extrabold leading-tight mb-6 drop-shadow-xl"
          // Apply custom animation here
          style={{ animation: 'floatUpDown 4s infinite ease-in-out' }}
        >
          Unlock the Ancient Secrets & Wild Wonders of East Africa
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 drop-shadow-md animate-fade-in-up delay-200">
          From the sacred lands of Ethiopia to the vibrant savannas of Kenya and the pristine shores of Zanzibar, your epic journey begins.
        </p>
        <a href="#tours-packages" className="btn btn-primary text-xl md:text-2xl px-10 py-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-400">
          Discover Your Adventure
        </a>
      </div>

      {/* Scroll indicator with inverted chevron and bounce */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#about"
           // Apply custom animation here
           style={{ animation: 'arrowBounce 2s infinite ease-in-out' }}
           aria-label="Scroll down"
        >
          {/* Changed SVG path to a double chevron pointing down (inverted caret) */}
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path> {/* First chevron */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 15l-7 7-7-7"></path> {/* Second chevron */}
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;