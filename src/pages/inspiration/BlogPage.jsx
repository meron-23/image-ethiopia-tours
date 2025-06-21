// src/pages/Inspiration/BlogPage.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import blog data
import blogData from '../../data/blogData'; // <-- Import blogData

// Import the banner image for this page
import blogBannerImg from '../../assets/banners/blog_banner.jpg'; // Adjust path (consider moving to src/assets/banners)

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-lightBg min-h-screen"> {/* Added min-h-screen for better layout */}
      <section
        className="relative h-96 flex items-center justify-center text-center overflow-hidden"
        style={{ backgroundImage: `url('${blogBannerImg}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-primary opacity-70"></div> {/* Use primary green with opacity */}
        <div className="relative z-10 p-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-xl mb-2 text-secondary"> {/* Gold text */}
            Travel Stories & Blog
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-accent"> {/* Lighter gold text */}
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
          {blogData.map((post) => ( // <-- Map through blogData
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-darkBg mb-2">{post.title}</h3> {/* Use darkBg for text on white card */}
                <p className="text-gray-700 text-sm mb-4">{post.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>By {post.author}</span>
                  <span>{post.date}</span>
                </div>
                {/* Link to individual blog post, currently placeholder # */}
                <Link to={post.route} className="text-secondary hover:text-accent hover:underline text-sm font-semibold flex items-center"> {/* Updated link colors */}
                  Read Full Story &nbsp; &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* You can add more blog posts or a pagination here */}

        <div className="text-center mt-16">
          <Link
            to="/inspiration"
            className="btn bg-primary text-secondary text-xl px-8 py-4 shadow-lg hover:bg-secondary hover:text-primary transition-all duration-300 transform hover:scale-105"
          >
            Back to Inspiration Overview
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;