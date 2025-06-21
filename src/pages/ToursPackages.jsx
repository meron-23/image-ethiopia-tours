// src/pages/ToursPackages.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import toursData from '../data/toursData'; // Import your centralized tour data

import toursPackagesBannerImg from '../assets/tour_packages.jpg'; // Adjust path as needed
const toursPackagesBannerImage = toursPackagesBannerImg;

const ToursPackages = () => {
  return (
    <div className="bg-lightBg">
      {/* Tours & Packages Page Banner Section */}
      <section
        className="relative h-96 flex items-center justify-center text-center overflow-hidden"
        style={{ backgroundImage: `url('${toursPackagesBannerImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 p-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-xl text-white">
            Our Exciting Tours & Packages
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white">
            Discover your next adventure across Ethiopia and East Africa!
          </p>
        </div>
      </section>

      {/* Main Content Area - Tour Listings */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <h2 className="text-4xl font-bold text-darkBg text-center mb-12">
          Explore Our Handcrafted Itineraries
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toursData.map(tour => (
            <div key={tour.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
              <img
                src={tour.image}
                alt={tour.name}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-primary mb-2">{tour.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{tour.duration}</p>
                <p className="text-lg font-bold text-darkBg mb-3">{tour.price}</p>
                <p className="text-gray-700 mb-4 flex-grow">{tour.summary}</p>
                {tour.highlights && (
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    {tour.highlights.map((highlight, index) => (
                      <li key={index} className="text-sm">{highlight}</li>
                    ))}
                  </ul>
                )}
                {/* CHANGED: Use Link to navigate to the dynamic tour detail page */}
                <Link
                  to={`/tours/${tour.id}`} // Dynamic path based on tour.id
                  className="mt-auto bg-primary text-white px-6 py-3 rounded-lg hover:bg-accent transition-colors duration-300 self-start text-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToursPackages;