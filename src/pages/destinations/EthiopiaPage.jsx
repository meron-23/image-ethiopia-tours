// src/pages/Destinations/EthiopiaPage.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import your destination-specific banner image
import ethiopiaBannerImg from '../../assets/destinations/ethiopia.jpg'; // Adjust path as needed
// You might also want to import relevant tour images to feature
import historicRouteImg from '../../assets/ToursAndPackages/northern_ethiopia.jpg';
import simienMountainsImg from '../../assets/ToursAndPackages/trekking_semien_mountains.jpg';
import omoValleyImg from '../../assets/ToursAndPackages/omo_valley.jpg';
import danakilDepressionImg from '../../assets/ToursAndPackages/danakil_depression.jpg';

// You might want to import toursData if you want to dynamically feature relevant tours
import toursData from '../../data/toursData';

const EthiopiaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
  }, []);

  // Filter tours relevant to Ethiopia
  const relevantTours = toursData.filter(tour =>
    ['ethiopia-historic-route', 'simien-mountains-trek', 'omo-valley-cultural', 'danakil-depression', 'bale-mountains-wildlife', 'ethiopian-northern-birding', 'harar-cultural-tour']
    .includes(tour.id)
  );

  return (
    <div className="bg-lightBg">
      {/* Banner Section */}
      <section
        className="relative h-96 flex items-center justify-center text-center text-white overflow-hidden
                   filter saturate-125 contrast-105"
        style={{ backgroundImage: `url('${ethiopiaBannerImg}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 p-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-xl mb-2">
            Discover Ethiopia: Land of Origins
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold">
            Ancient history, diverse cultures, and stunning natural landscapes await.
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
          <h2 className="text-3xl md:text-4xl font-bold text-darkBg mb-6 text-center">Overview of Ethiopia</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Ethiopia, often called the "Land of Origins," is a country of immense historical, cultural, and natural significance. It's the cradle of humanity, home to ancient civilizations, and a land rich in unique traditions. From the rock-hewn churches of Lalibela to the dramatic landscapes of the Simien Mountains and the vibrant cultures of the Omo Valley, Ethiopia offers an unparalleled travel experience.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Unlike much of Africa, Ethiopia was never formally colonized, preserving its distinct cultural identity and ancient Christian heritage. Its diverse topography ranges from high-altitude mountains to the scorching Danakil Depression, making it a land of captivating contrasts.
          </p>
        </section>

        <hr className="my-12 border-gray-300" />

        {/* Top Experiences/Highlights Section */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-darkBg mb-8 text-center">Top Experiences in Ethiopia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Explore Ancient Rock-Hewn Churches</h3>
              <p className="text-gray-700">Witness the architectural marvels of Lalibela, carved directly out of solid rock, and the ancient obelisks of Axum.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Trek the Simien Mountains</h3>
              <p className="text-gray-700">Discover stunning afro-alpine landscapes and encounter endemic wildlife like Gelada Baboons and Walia Ibex.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Cultural Immersion in Omo Valley</h3>
              <p className="text-gray-700">Meet and learn from the diverse indigenous tribes of the Omo Valley, each with unique traditions and adornments.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Adventure in the Danakil Depression</h3>
              <p className="text-gray-700">Journey to the lowest and hottest place on Earth to see Dallol\'s kaleidoscopic landscapes and the Erta Ale lava lake.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Visit the Walled City of Harar</h3>
              <p className="text-gray-700">Wander through the narrow streets of this UNESCO World Heritage site and witness the famous Hyena Man feeding.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Wildlife in Bale Mountains</h3>
              <p className="text-gray-700">Spot the endangered Ethiopian Wolf and Mountain Nyala in the beautiful afro-alpine habitats of Bale Mountains National Park.</p>
            </div>
          </div>
        </section>

        <hr className="my-12 border-gray-300" />

        {/* Featured Tours Section (Linking to your existing tours) */}
        {relevantTours.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-darkBg mb-8 text-center">Our Featured Ethiopia Tours</h2>
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
                      className="mt-auto bg-accent text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300 self-start text-center"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            {relevantTours.length > 3 && ( // Optional: Link to all tours if more than 3
              <div className="text-center mt-8">
                <Link to="/tours-packages" className="btn btn-primary">
                  View All Ethiopia Tours
                </Link>
              </div>
            )}
          </section>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link to="/plan-your-trip" className="btn btn-primary text-xl md:text-2xl px-10 py-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Plan Your Custom Ethiopia Trip
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EthiopiaPage;