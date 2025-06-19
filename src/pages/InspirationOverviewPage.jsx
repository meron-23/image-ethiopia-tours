// src/pages/InspirationOverviewPage.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import inspirationData from '../data/inspirationData'; // Import the inspiration data

const InspirationOverviewPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when this page loads
  }, []);

  return (
    <div className="bg-lightBg py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-darkBg mb-12">
          Your Source for Travel Inspiration
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {inspirationData.map((item) => (
            <Link
              key={item.id}
              to={item.route} // Links to the specific inspiration category page
              className="block bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4">{item.description}</p>
                <span className="btn btn-secondary w-full inline-block text-center bg-accent text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300 shadow-md">
                  Discover More
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/" // Link back to the homepage
            className="btn btn-primary text-xl px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InspirationOverviewPage;