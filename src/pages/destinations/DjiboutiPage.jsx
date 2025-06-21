// src/pages/Destinations/DjiboutiPage.jsx (or KenyaPage.jsx, TanzaniaPage.jsx, ZanzibarPage.jsx)
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import your destination-specific banner image
import destinationBannerImg from '../../assets/destinations/djibouti.jpg'; // <<< CHANGE THIS PATH AND IMAGE
// You might also want to import toursData if you want to feature relevant tours
import toursData from '../../data/toursData';

const DjiboutiPage = () => { // <<< CHANGE COMPONENT NAME (e.g., KenyaPage, TanzaniaPage)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter tours relevant to this destination (adjust IDs accordingly)
  const relevantTours = toursData.filter(tour =>
    ['ethiopia-djibouti-coast'].includes(tour.id) // <<< ADJUST TOUR IDs FOR EACH DESTINATION
  );

  return (
    <div className="bg-lightBg">
      {/* Banner Section */}
      <section
        className="relative h-96 flex items-center justify-center text-center text-white overflow-hidden
                   filter saturate-125 contrast-105"
        style={{ backgroundImage: `url('${destinationBannerImg}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 p-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-xl mb-2">
            Discover Djibouti: The Horn of Africa's Hidden Gem {/* <<< CHANGE TITLE */}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold">
            Volcanic landscapes, salt lakes, and pristine Red Sea waters. {/* <<< CHANGE SUBTITLE */}
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
          <h2 className="text-3xl md:text-4xl font-bold text-darkBg mb-6 text-center">Overview of Djibouti</h2> {/* <<< CHANGE TITLE */}
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Djibouti is a small yet captivating nation on the Horn of Africa, known for its otherworldly landscapes and unique geological features. It's a land of active volcanoes, vast salt lakes, and stunning marine biodiversity in the Red Sea. Ideal for adventure seekers and divers. {/* <<< FILL IN DJIBOUTI-SPECIFIC OVERVIEW */}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Despite its small size, Djibouti offers a rich cultural tapestry influenced by its Afar and Issa Somali communities, and its strategic location at the Bab-el-Mandeb strait. {/* <<< ADD MORE DJIBOUTI CONTENT */}
          </p>
        </section>

        <hr className="my-12 border-gray-300" />

        {/* Top Experiences/Highlights Section */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-darkBg mb-8 text-center">Top Experiences in Djibouti</h2> {/* <<< CHANGE TITLE */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Lake Assal</h3>
              <p className="text-gray-700">Visit Africa's lowest point, a stunning salt lake surrounded by volcanic landscapes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Whale Shark Diving (seasonal)</h3>
              <p className="text-gray-700">Swim with gentle giants in the Gulf of Tadjoura's warm waters.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Lake Abbe</h3>
              <p className="text-gray-700">Explore a surreal landscape of limestone chimneys and hot springs.</p>
            </div>
            {/* Add more Djibouti-specific experiences */}
          </div>
        </section>

        <hr className="my-12 border-gray-300" />

        {/* Featured Tours Section (Linking to your existing tours) */}
        {relevantTours.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-darkBg mb-8 text-center">Our Featured Djibouti Tours</h2> {/* <<< CHANGE TITLE */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relevantTours.slice(0, 3).map(tour => (
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
                  View All Djibouti Tours
                </Link>
              </div>
            )}
          </section>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link to="/plan-your-trip" className="btn btn-primary text-xl md:text-2xl px-10 py-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Plan Your Custom Djibouti Trip
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DjiboutiPage; // <<< CHANGE EXPORT NAME