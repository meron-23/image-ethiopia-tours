import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="text-2xl font-bold text-gray-800">
          <a href="/" className="hover:text-primary transition-colors duration-300">
            Image Ethiopia Tours
          </a>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-600 hover:text-primary font-semibold transition-colors duration-300">
            About Ethiopia & East Africa
          </a>
          <Link to='/planYourTrip' className="text-gray-600 hover:text-primary font-semibold transition-colors duration-300">
            Plan Your Trip
          </Link>
          <Link to='/tours-packages' className="text-gray-600 hover:text-primary font-semibold transition-colors duration-300">
            Tours & Packages
          </Link>
          <Link to='/destinations' className="text-gray-600 hover:text-primary font-semibold transition-colors duration-300">
            Destinations
          </Link>
          <Link to='/inspiration' className="text-gray-600 hover:text-primary font-semibold transition-colors duration-300">
            Inspiration
          </Link>
          <a href="#contact" className="text-gray-600 hover:text-primary font-semibold transition-colors duration-300">
            Contact Us
          </a>
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-600 hover:text-primary focus:outline-none"
          aria-label="Toggle navigation"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden shadow-lg py-4">
          <nav className="flex flex-col items-center space-y-4">
            <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary font-semibold">About Ethiopia & East Africa</a>
            <a href="#plan-your-trip" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary font-semibold">Plan Your Trip</a>
            <a href="#tours-packages" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary font-semibold">Tours & Packages</a>
            <a href="#destinations" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary font-semibold">Destinations</a>
            <a href="#inspiration" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary font-semibold">Inspiration</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary font-semibold">Contact Us</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;