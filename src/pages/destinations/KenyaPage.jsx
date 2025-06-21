// src/pages/Destinations/KenyaPage.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import your destination-specific banner image
import kenyaBannerImg from '../../assets/destinations/kenya.jpg'; 
import toursData from '../../data/toursData';

const KenyaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
  }, []);

  // Filter tours relevant to Kenya (adjust IDs as per your toursData.js)
  const relevantTours = toursData.filter(tour =>
    ['kenya-classic-safari', 'masai-mara-migration', 'amboseli-kilimanjaro-views', 'kenya-cultural-wildlife', 'laikipia-conservancy-safari']
    .includes(tour.id)
  );

  return (
    <div className="bg-lightBg">
      {/* Banner Section */}
      <section
        className="relative h-96 flex items-center justify-center text-center text-white overflow-hidden
                   filter saturate-125 contrast-105"
        style={{ backgroundImage: `url('${kenyaBannerImg}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 p-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-xl mb-2">
            Discover Kenya: The Heart of African Safari
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold">
            Iconic wildlife, vast savannas, and stunning landscapes await.
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
          <h2 className="text-3xl md:text-4xl font-bold text-darkBg mb-6 text-center">Overview of Kenya</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Kenya, a jewel of East Africa, is synonymous with safari. It's a land of breathtaking diversity, from the endless plains of the Maasai Mara teeming with wildlife to the snow-capped peaks of Mount Kenya, and the pristine beaches of the Indian Ocean. Witness the Great Migration, encounter the "Big Five," and immerse yourself in the rich culture of the Maasai people.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Beyond its world-class safaris, Kenya offers vibrant city life in Nairobi, stunning Rift Valley lakes, and unique cultural experiences. Its commitment to conservation makes it a prime destination for ethical wildlife viewing.
          </p>
        </section>

        <hr className="my-12 border-gray-300" />

        {/* Top Experiences/Highlights Section */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-darkBg mb-8 text-center">Top Experiences in Kenya</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Maasai Mara Safari</h3>
              <p className="text-gray-700">Experience the world-famous Great Migration and abundant wildlife, including the Big Five.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Amboseli National Park</h3>
              <p className="text-gray-700">Capture iconic shots of elephants against the backdrop of Mount Kilimanjaro.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Coastal Relaxation (Diani Beach)</h3>
              <p className="text-gray-700">Unwind on white sandy beaches, enjoy water sports, and explore vibrant coral reefs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Lake Nakuru National Park</h3>
              <p className="text-gray-700">Witness millions of flamingos painting the lake pink and spot rhinos and Rothschild's giraffes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Mount Kenya Trekking</h3>
              <p className="text-gray-700">Embark on a challenging trek to Africa's second-highest peak, offering diverse ecosystems.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Nairobi City & Wildlife</h3>
              <p className="text-gray-700">Visit Nairobi National Park, Giraffe Centre, and Sheldrick Wildlife Trust, all within the city.</p>
            </div>
          </div>
        </section>

        <hr className="my-12 border-gray-300" />

        {/* Featured Tours Section (Linking to your existing tours) */}
        {relevantTours.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-darkBg mb-8 text-center">Our Featured Kenya Tours</h2>
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
                  View All Kenya Tours
                </Link>
              </div>
            )}
          </section>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link to="/plan-your-trip" className="btn btn-primary text-xl md:text-2xl px-10 py-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Plan Your Custom Kenya Trip
          </Link>
        </div>
      </div>
    </div>
  );
};

export default KenyaPage;