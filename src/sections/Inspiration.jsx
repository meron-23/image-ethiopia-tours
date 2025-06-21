// src/components/sections/InspirationSection.jsx (or wherever it is on your homepage)
import React from 'react';
import { Link } from 'react-router-dom';
import inspirationData from '../data/inspirationData'; // Import data

const Inspiration = () => {
  return (
    <section id="inspiration" className="py-20 md:py-32 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center text-4xl font-bold text-darkBg mb-10">Get Inspired for Your Next Adventure</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Display a selection of cards, or all of them */}
          {inspirationData.map((item) => (
            <Link
              key={item.id}
              to={item.route} // Link directly to the specific inspiration page
              className="block bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4">{item.description}</p>
                <span className="btn btn-secondary w-full inline-block text-center bg-accent text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors duration-300 shadow-md">
                  Discover More
                </span>
              </div>
            </Link>
          ))}
        </div>
        {/* Optional: Add a "View All Inspiration" button if you don't show all on homepage */}
        <div className="text-center mt-12">
          <Link
            to="/inspiration" // Link to the main Inspiration overview page
            className="inline-block bg-primary text-white text-lg font-semibold px-8 py-3 rounded-lg hover:bg-secondary transition-colors duration-300 shadow-md"
          >
            Explore All Inspiration
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Inspiration;