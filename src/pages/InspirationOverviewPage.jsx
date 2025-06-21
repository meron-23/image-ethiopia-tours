// src/pages/InspirationOverviewPage.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import inspirationData from '../data/inspirationData'; // Import the inspiration data

// Import the banner image for this page
import inspirationOverviewBanner from '../assets/banners/inspiration_overview_banner.jpg'; // Adjust path

const InspirationOverviewPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when this page loads
  }, []);

  return (
    <div className="bg-lightBg min-h-screen"> {/* Removed padding from here, added to inner div */}
      {/* NEW: Banner Section for Inspiration Overview */}
      <section
        className="relative h-96 flex items-center justify-center text-center overflow-hidden"
        style={{ backgroundImage: `url('${inspirationOverviewBanner}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-primary opacity-70"></div> {/* Use primary green with opacity */}
        <div className="relative z-10 p-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-xl mb-2 text-white"> {/* Gold text */}
            Your Ultimate Source for Travel Inspiration
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white"> {/* Lighter gold text */}
            Dive into captivating narratives, stunning visuals, and expert advice for your next journey.
          </p>
        </div>
      </section>

      {/* Main Content Grid Area - Added padding here */}
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-darkBg mb-12">
          Explore Our Inspiration Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {inspirationData.map((item) => (
            <Link
              key={item.id}
              to={item.route}
              className="block bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-darkBg mb-2"> {/* Use darkBg for text on white card */}
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4">{item.description}</p>
                <span className="btn btn-secondary w-full inline-block text-center bg-secondary text-primary px-6 py-3 rounded-lg hover:bg-accent hover:text-darkBg transition-colors duration-300 shadow-md"> {/* Updated button colors */}
                  Discover More
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/"
            className="btn bg-primary text-secondary text-xl px-8 py-4 shadow-lg hover:bg-secondary hover:text-primary transition-all duration-300 transform hover:scale-105"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InspirationOverviewPage;