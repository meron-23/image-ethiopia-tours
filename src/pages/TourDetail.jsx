// src/pages/TourDetail.jsx
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import useParams and Link
import toursData from '../data/toursData'; // Import your centralized tour data

const TourDetail = () => {
  const { tourId } = useParams(); // Get the tourId from the URL

  // Find the tour data matching the tourId
  const tour = toursData.find(t => t.id === tourId);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!tour) {
    // Handle case where tour is not found
    return (
      <div className="min-h-screen bg-lightBg flex flex-col items-center justify-center py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-darkBg mb-4">Tour Not Found</h1>
        <p className="text-lg text-gray-700 mb-8">
          The tour you are looking for does not exist or has been removed.
        </p>
        <Link to="/tours-packages" className="btn btn-primary">
          Back to All Tours
        </Link>
      </div>
    );
  }

  // If tour is found, render its details
  return (
    <div className="bg-lightBg">
      {/* Tour Detail Banner Section */}
      <section
        className="relative h-96 flex items-center justify-center text-center text-white overflow-hidden
                   filter saturate-125 contrast-105"
        style={{ backgroundImage: `url('${tour.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 p-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-xl mb-2">
            {tour.name}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold">{tour.duration}</p>
          <p className="text-2xl md:text-3xl font-bold mt-2">{tour.price}</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        {/* Breadcrumb / Back button (Optional but good UX) */}
        <div className="mb-8">
          <Link to="/tours-packages" className="text-primary hover:underline flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to All Tours
          </Link>
        </div>

        {/* Tour Overview / Description */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-darkBg mb-6 text-center">Tour Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {tour.detailedDescription}
          </p>
          {tour.highlights && tour.highlights.length > 0 && (
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-3">Highlights:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {tour.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}
        </section>

        <hr className="my-12 border-gray-300" />

        {/* Itinerary Section */}
        {tour.itinerary && tour.itinerary.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-darkBg mb-8 text-center">Detailed Itinerary</h2>
            <div className="space-y-8">
              {tour.itinerary.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full text-xl font-bold mr-4">
                    Day {item.day}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-darkBg mb-2">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.activities}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <hr className="my-12 border-gray-300" />

        {/* Inclusions & Exclusions */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-darkBg mb-6 text-center">What's Included</h2>
            {tour.inclusions && tour.inclusions.length > 0 ? (
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {tour.inclusions.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700 text-center">No specific inclusions listed.</p>
            )}
          </div>
          <div>
            <h2 className="text-3xl font-bold text-darkBg mb-6 text-center">What's Excluded</h2>
            {tour.exclusions && tour.exclusions.length > 0 ? (
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {tour.exclusions.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700 text-center">No specific exclusions listed.</p>
            )}
          </div>
        </section>

        {/* Call to Action Button */}
        <div className="text-center mt-12">
          <button className="btn btn-primary text-xl md:text-2xl px-10 py-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Inquire About This Tour
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;