// src/pages/Inspiration/GalleryPage.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import historicRouteImg from '../../assets/ToursAndPackages/ethiopia_route.jpg';
import simienMountainsImg from '../../assets/ToursAndPackages/trekking_semien_mountains.jpg';
import omoValleyImg from '../../assets/ToursAndPackages/omo_valley.jpg';
import kenyaWildlifeImg from '../../assets/ToursAndPackages/kenya_wildlife.jpg';
import zanzibarBeachesImg from '../../assets/ToursAndPackages/kenya_&_tanzania_grand_safari.jpg';
import danakilDepressionImg from '../../assets/ToursAndPackages/danakil_depression.jpg';
import hararImg from '../../assets/ToursAndPackages/streets_of_harar.jpg'; // Example
import baleMountainsImg from '../../assets/ToursAndPackages/bale_mountains.jpg'; // Example
import ugandaGorillaImg from '../../assets/ToursAndPackages/kibale_crater_lakes.jpg'; // Example
import djiboutiCoastImg from '../../assets/ToursAndPackages/mount_kilimanjaro.jpg';
import tanzaniaCardImg from '../../assets/destinations/tanzania.jpg';
import zanzibarCardImg from '../../assets/destinations/zanzibar.jpg';

import galleryBannerImg from '../../assets/inspiration/gallery.jpg'; // Adjust path for your banner image

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Define your photos with a more descriptive structure
  const photos = [
    { src: historicRouteImg, alt: "Ancient Ethiopian Monastery", category: "Ethiopia" },
    { src: simienMountainsImg, alt: "Maasai Warrior Portrait", category: "Kenya" },
    { src: omoValleyImg, alt: "Great Migration in Serengeti", category: "Tanzania" },
    { src: kenyaWildlifeImg, alt: "Zanzibar Dhow Sunset", category: "Zanzibar" },
    { src: zanzibarBeachesImg, alt: "Dallol Sulfur Pools", category: "Ethiopia" },
    { src: danakilDepressionImg, alt: "Elephants with Kilimanjaro View", category: "Kenya" },
    { src: hararImg, alt: "Wildlife in Ngorongoro Crater", category: "Tanzania" },
    { src: baleMountainsImg, alt: "Salt Formations at Lake Assal", category: "Djibouti" },
    { src: ugandaGorillaImg, alt: "Omo Valley Traditional Dress", category: "Ethiopia" },
    { src: djiboutiCoastImg, alt: "Giraffe Feeding in Nairobi", category: "Kenya" },
    { src: tanzaniaCardImg, alt: "Historic Alley in Stone Town", category: "Zanzibar" },
    { src: zanzibarCardImg, alt: "Gelada Baboons in Simien Mountains", category: "Ethiopia" },
  ];

  return (
    <div className="bg-lightBg">
      {/* Banner Section */}
      <section
        className="relative h-96 flex items-center justify-center text-center text-white overflow-hidden"
        style={{ backgroundImage: `url('${galleryBannerImg}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 p-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-xl mb-2">
            Photo & Video Gallery
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold">
            Immerse yourself in stunning visuals from our African adventures.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="mb-8">
          <Link to="/inspiration" className="text-primary hover:underline flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to Inspiration Overview
          </Link>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-darkBg mb-10 text-center">Our Visual Journey</h2>

        {/* Dynamic Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => {
            // Apply different span classes to create a more dynamic look
            let spanClasses = '';
            if (index % 5 === 0) spanClasses = 'col-span-2 row-span-2'; // Large square
            else if (index % 7 === 0) spanClasses = 'col-span-2'; // Wide rectangle
            else if (index % 3 === 0) spanClasses = 'row-span-2'; // Tall rectangle

            return (
              <div
                key={index}
                className={`relative group overflow-hidden rounded-lg shadow-md cursor-pointer
                            transform transition-transform duration-300 hover:scale-[1.03]
                            ${spanClasses}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:brightness-75 transition-filter duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <p className="text-lg font-semibold mb-1">{photo.alt}</p>
                    <p className="text-sm text-gray-200">{photo.category}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Videos Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-darkBg mb-8 mt-20 text-center">Featured Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-video rounded-lg shadow-xl overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=abcdef" // REPLACE WITH YOUR ACTUAL VIDEO EMBED LINK
              title="African Safari Adventure"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="aspect-video rounded-lg shadow-xl overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/another_video_id?si=12345" // REPLACE WITH YOUR ACTUAL VIDEO EMBED LINK
              title="Ethiopia's Wonders"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          {/* Add more video embeds as needed */}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;