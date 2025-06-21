// src/pages/Destinations/ZanzibarPage.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import your destination-specific banner image
import zanzibarBannerImg from '../../assets/destinations/zanzibar.jpg'; // Adjust path as needed
// You might also want to import toursData if you want to dynamically feature relevant tours
import toursData from '../../data/toursData';

const ZanzibarPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
  }, []);

  // Filter tours relevant to Zanzibar (adjust IDs as per your toursData.js)
  const relevantTours = toursData.filter(tour =>
    ['zanzibar-beach-holiday', 'spice-island-adventure', 'tanzania-safari-zanzibar']
    .includes(tour.id)
  );

  return (
    <div className="bg-lightBg">
      {/* Banner Section */}
      <section
        className="relative h-96 flex items-center justify-center text-center text-white overflow-hidden
                   filter saturate-125 contrast-105"
        style={{ backgroundImage: `url('${zanzibarBannerImg}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 p-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-xl mb-2">
            Discover Zanzibar: The Spice Island Paradise
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold">
            Pristine beaches, rich history, and a vibrant cultural fusion.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        {/* Breadcrumb / Back button */}
        <div className="mb-8">
          <Link to="/destinations" className="text-primary hover:underline flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to All Destinations
          </Link>
        </div>

        {/* Overview Section */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-darkBg mb-6 text-center">Overview of Zanzibar</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Zanzibar, the legendary "Spice Island," is an archipelago off the coast of Tanzania, boasting some of the world's most idyllic white-sand beaches, crystal-clear turquoise waters, and a fascinating blend of Arab, African, and European influences. Its rich history as a trading hub is palpable in the labyrinthine alleys of Stone Town, a UNESCO World Heritage site.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Beyond relaxation, Zanzibar offers vibrant marine life for divers and snorkelers, aromatic spice plantations, and the chance to encounter the rare red colobus monkeys in Jozani Forest. It's the perfect serene complement to an exhilarating safari adventure.
          </p>
        </section>

        <hr className="my-12 border-gray-300" />

        {/* Top Experiences/Highlights Section */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-darkBg mb-8 text-center">Top Experiences in Zanzibar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Explore Stone Town</h3>
              <p className="text-gray-700">Wander through the historic UNESCO World Heritage site with its unique architecture and vibrant markets.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Beach Relaxation & Water Sports</h3>
              <p className="text-gray-700">Enjoy the stunning beaches of Nungwi, Kendwa, or Paje for swimming, sunbathing, snorkeling, and diving.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Spice Tour</h3>
              <p className="text-gray-700">Discover the island's rich history as a spice trade center on a sensory tour of plantations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Prison Island & Giant Tortoises</h3>
              <p className="text-gray-700">Visit Changuu Island, home to a sanctuary for giant Aldabra tortoises and beautiful beaches.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Jozani Forest National Park</h3>
              <p className="text-gray-700">Encounter the endemic and playful Zanzibar red colobus monkeys in their natural habitat.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Dhow Sunset Cruise</h3>
              <p className="text-gray-700">Enjoy a traditional wooden dhow cruise along the coast, offering stunning sunset views.</p>
            </div>
          </div>
        </section>

        <hr className="my-12 border-gray-300" />

        {/* Featured Tours Section (Linking to your existing tours) */}
        {relevantTours.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-darkBg mb-8 text-center">Our Featured Zanzibar Tours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relevantTours.slice(0, 3).map(tour => ( // Display up to 3 relevant tours
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
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            {relevantTours.length > 3 && (
              <div className="text-center mt-8">
                <Link to="/tours-packages" className="btn btn-primary">
                  View All Zanzibar Tours
                </Link>
              </div>
            )}
          </section>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link to="/plan-your-trip" className="btn btn-primary text-xl md:text-2xl px-10 py-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Plan Your Custom Zanzibar Trip
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ZanzibarPage;