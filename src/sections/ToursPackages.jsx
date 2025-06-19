// src/sections/ToursPackages.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import toursData from '../data/toursData'; // IMPORT YOUR CENTRALIZED TOUR DATA

// Since this is a "featured" section, we'll only pick a few tours from the main data.
// You can adjust which tours you want to feature here.
const featuredTourIds = [
  'ethiopia-historic-route',
  'simien-mountains-trek',
  'omo-valley-cultural',
  'danakil-depression', // Added Danakil as a featured example
  'uganda-gorilla-chimpanzee' // Added Gorilla trek as a featured example
];

const ToursPackages = () => {
  // Filter the toursData to only show the featured ones
  const featuredTours = toursData.filter(tour => featuredTourIds.includes(tour.id));

  return (
    <section id="tours-packages" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center text-4xl font-bold text-darkBg mb-10">Our Popular Tours & Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTours.map((tour) => ( // Use featuredTours here
            <div
              key={tour.id} // Use tour.id from the centralized data
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src={tour.image}
                alt={tour.name} // Use tour.name for alt text
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {tour.name} {/* Use tour.name */}
                </h3>
                <p className="text-gray-700 text-sm mb-4">{tour.summary}</p> {/* Use tour.summary */}
                <Link
                  to={`/tours/${tour.id}`} // Link to the specific tour detail page
                  className="btn btn-secondary w-full inline-block text-center bg-accent text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300 shadow-md"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/tours-packages"
            className="inline-block bg-accent text-white text-lg font-semibold px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300 shadow-md">
            View All Tours & Packages
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ToursPackages;