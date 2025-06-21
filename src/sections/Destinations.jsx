// src/components/sections/Destinations.jsx (or wherever your Destinations section is)
import React from 'react';
import { Link } from 'react-router-dom';
import destinationsData from '../data/destinationData'; // Import your new destinations data

const Destinations = () => { // Renamed component for clarity if used on homepage
  return (
    <section id="destinations" className="py-20 md:py-32 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center text-4xl font-bold text-darkBg mb-10">Explore Our Top Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinationsData.map((destination) => ( // Use destinationsData
            <Link
              key={destination.id}
              to={destination.route} // Use the 'route' property for navigation
              className="block bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {destination.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4">{destination.description}</p>
                <span className="btn btn-secondary w-full inline-block text-center bg-accent text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors duration-300 shadow-md">
                  Discover More
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;