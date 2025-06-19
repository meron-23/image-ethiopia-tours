// src/pages/Inspiration/BlogPage.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import blogBannerImg from '../../assets/inspiration/tour_blog.jpg'; // Adjust path

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-lightBg">
      <section
        className="relative h-96 flex items-center justify-center text-center text-white overflow-hidden"
        style={{ backgroundImage: `url('${blogBannerImg}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 p-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-xl mb-2">
            Travel Stories & Blog
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold">
            Dive into captivating narratives and cultural insights from our journeys.
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

        <h2 className="text-3xl md:text-4xl font-bold text-darkBg mb-8 text-center">Our Latest Stories</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder Blog Post Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://via.placeholder.com/400x250?text=Blog+Post+1" alt="Blog Post 1" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">A Week in the Simien Mountains</h3>
              <p className="text-gray-700 text-sm mb-4">An exhilarating account of trekking through Ethiopia's stunning Simien Mountains, encountering Gelada baboons and breathtaking views.</p>
              <Link to="#" className="text-accent hover:underline text-sm font-semibold">Read Full Story &rarr;</Link>
            </div>
          </div>
          {/* Placeholder Blog Post Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://via.placeholder.com/400x250?text=Blog+Post+2" alt="Blog Post 2" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Meeting the Tribes of Omo Valley</h3>
              <p className="text-gray-700 text-sm mb-4">A profound cultural immersion exploring the unique traditions and daily lives of indigenous communities in Southern Ethiopia.</p>
              <Link to="#" className="text-accent hover:underline text-sm font-semibold">Read Full Story &rarr;</Link>
            </div>
          </div>
          {/* Placeholder Blog Post Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://via.placeholder.com/400x250?text=Blog+Post+3" alt="Blog Post 3" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Safari Thrills in the Maasai Mara</h3>
              <p className="text-gray-700 text-sm mb-4">Recounting thrilling encounters with the Big Five and the epic spectacle of the Great Migration in Kenya.</p>
              <Link to="#" className="text-accent hover:underline text-sm font-semibold">Read Full Story &rarr;</Link>
            </div>
          </div>
        </div>
        {/* You can add more blog posts or a pagination here */}
      </div>
    </div>
  );
};

export default BlogPage;