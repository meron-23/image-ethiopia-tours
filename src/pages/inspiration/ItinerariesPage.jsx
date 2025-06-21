// src/pages/Inspiration/ItinerariesPage.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import toursData from '../../data/toursData'; // Import toursData to feature itineraries

import itinerariesBannerImg from '../../assets/inspiration/itinerary.jpg'; // Adjust path

const ItinerariesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // You might want to filter specific 'featured' itineraries from your toursData
  const featuredItineraries = toursData.filter(tour =>
    ['ethiopia-historic-route', 'kenya-wildlife-safari', 'tanzania-northern-circuit', 'uganda-gorilla-chimpanzee'] // Example IDs
    .includes(tour.id)
  );

  return (
    <div className="bg-lightBg">
      <section
        className="relative h-96 flex items-center justify-center text-center text-white overflow-hidden"
        style={{ backgroundImage: `url('${itinerariesBannerImg}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 p-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-xl mb-2">
            Featured Itineraries
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold">
            Explore meticulously crafted travel plans for your next adventure.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="mb-8">
          <Link to="/inspiration" className="text-primary hover:underline flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to Inspiration Overview
          </Link>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-darkBg mb-8 text-center">Our Handpicked Journeys</h2>

        {featuredItineraries.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItineraries.map(tour => (
              <div key={tour.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-48 object-cover object-center"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-primary mb-2">{tour.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{tour.duration}</p>
                  <p className="text-gray-700 mb-4 flex-grow">{tour.summary}</p>
                  <Link
                    to={`/tours/${tour.id}`}
                    className="mt-auto bg-primary text-white px-6 py-3 rounded-lg hover:bg-accent transition-colors duration-300 self-start text-center"
                  >
                    View Full Itinerary
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-700 text-lg">No featured itineraries available at the moment. Please check back soon!</p>
        )}
      </div>
    </div>
  );
};

export default ItinerariesPage;