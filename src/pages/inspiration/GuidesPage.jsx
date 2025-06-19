// src/pages/Inspiration/GuidesPage.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import guidesBannerImg from '../../assets/inspiration/guide.jpg'; // Adjust path

const GuidesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Placeholder for travel guides/articles
  const guides = [
    { id: 1, title: 'Ethiopia Travel Guide: Essential Tips', excerpt: 'Navigate the historical north, Omo Valley, and Danakil Depression with these vital tips.', category: 'Ethiopia' },
    { id: 2, title: 'Kenya Safari Planning: Best Time & Parks', excerpt: 'Discover the optimal seasons and top national parks for an unforgettable Kenyan safari.', category: 'Kenya' },
    { id: 3, title: 'Zanzibar Uncovered: Beaches & Culture', excerpt: 'A guide to the best beaches, hidden gems, and cultural experiences on the Spice Island.', category: 'Zanzibar' },
    { id: 4, title: 'Djibouti: Off-the-Beaten-Path Adventure', excerpt: 'Explore the unique landscapes, from salt lakes to volcanic terrains, in this guide to Djibouti.', category: 'Djibouti' },
    { id: 5, title: 'Packing for an African Safari: What to Bring', excerpt: 'Comprehensive checklist for clothes, gear, and essentials for your safari adventure.', category: 'General' },
  ];

  return (
    <div className="bg-lightBg">
      <section
        className="relative h-96 flex items-center justify-center text-center text-white overflow-hidden"
        style={{ backgroundImage: `url('${guidesBannerImg}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 p-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-xl mb-2">
            Travel Guides & Articles
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold">
            Practical tips, destination insights, and essential planning advice for your journey.
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

        <h2 className="text-3xl md:text-4xl font-bold text-darkBg mb-8 text-center">Our Comprehensive Guides</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map(guide => (
            <div key={guide.id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
              <div>
                <span className="text-sm font-semibold text-accent uppercase mb-2 block">{guide.category}</span>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{guide.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{guide.excerpt}</p>
              </div>
              <Link to={`/guides/${guide.id}`} className="text-accent hover:underline text-sm font-semibold mt-4 block self-start">
                Read More &rarr;
              </Link>
            </div>
          ))}
        </div>
        {/* You can add more articles or a search/filter functionality here */}
      </div>
    </div>
  );
};

export default GuidesPage;