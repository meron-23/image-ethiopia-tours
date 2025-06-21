// src/components/Header.jsx
import React, { useState, useEffect } from 'react'; // <-- Import useEffect
import { Link, NavLink } from 'react-router-dom';

import companyLogo from '../assets/logo.png'; // Adjust path to your logo

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Effect to handle scroll
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled to true if pageYOffset (scroll position) is greater than, say, 50px
      const offset = window.scrollY;
      if (offset > 50) { // Adjust this value as needed
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount


  // Define base and conditional classes for the header
  const headerClasses = `
    py-4 px-6 md:px-12 fixed w-full z-50
    transition-all duration-300 ease-in-out
    ${scrolled ? 'bg-primary shadow-lg' : 'bg-transparent'}
    ${scrolled ? 'text-white' : 'text-white'}
  `;

  // Define classes for navigation links
  const navLinkClasses = `
    hover:text-accent transition-colors duration-200
  `;

  return (
    <header className={headerClasses}> {/* Use the dynamic headerClasses */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={companyLogo} alt="Company Logo" className="h-10 rounded" />
          <span className="text-2xl font-bold text-white">Image Ethiopia Tours</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <NavLink to="/"
           className={({ isActive }) =>
             `${navLinkClasses} ${isActive ? 'text-accent font-semibold underline' : ''}`
           }> 
           Home
         </NavLink>
        <NavLink to="/destinations"
           className={({ isActive }) =>
             `${navLinkClasses} ${isActive ? 'text-accent font-semibold underline' : ''}`
           }> 
           Destinations
         </NavLink>
          <NavLink to="/tours-packages"
           className={({ isActive }) =>
             `${navLinkClasses} ${isActive ? 'text-accent font-semibold underline' : ''}`
           }> 
           Tours & Packages
         </NavLink>
          <NavLink to="/inspiration"
           className={({ isActive }) =>
             `${navLinkClasses} ${isActive ? 'text-accent font-semibold underline' : ''}`
           }> 
          Inspiration
         </NavLink>
          <NavLink to="/about"
           className={({ isActive }) =>
             `${navLinkClasses} ${isActive ? 'text-accent font-semibold underline' : ''}`
           }> 
          About Us
         </NavLink>
         
        <NavLink to="/planYourTrip"
           className={({ isActive }) =>
            `btn bg-primary text-white px-4 py-2 rounded-md hover:bg-accent hover:text-darkBg transition-colors duration-300 ${isActive ? 'btn bg-primary text-white px-4 py-2 rounded-md hover:bg-accent hover:text-darkBg transition-colors duration-300text-accent font-semibold underline' : ''}` 
            }> 
          Plan Your Trip
         </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className={`focus:outline-none ${scrolled ? 'text-secondary' : 'text-secondary'}`}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation (always solid for better readability when open) */}
      <nav className={`md:hidden bg-primary absolute left-0 w-full py-4 transition-all duration-300 ease-in-out ${isMenuOpen ? 'top-full opacity-100 visible' : 'top-0 opacity-0 invisible'}`}>
        <div className="flex flex-col items-center space-y-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
            `text-secondary hover:text-accent transition-colors duration-200 ${isActive ? 'text-accent font-semibold underline' : ''}` // ADDED underline here
            }
            onClick={toggleMenu}
          >Home</NavLink>
          <NavLink
            to="/destinations"
            className={({ isActive }) =>
              `text-secondary hover:text-accent transition-colors duration-200 ${isActive ? 'text-accent font-semibold underline' : ''}` // ADDED underline here
            }
            onClick={toggleMenu}
          >Destinations</NavLink>
          <NavLink
            to="/tours-packages"
            className={({ isActive }) =>
              `text-secondary hover:text-accent transition-colors duration-200 ${isActive ? 'text-accent font-semibold underline' : ''}` // ADDED underline here
            }
            onClick={toggleMenu}
          >Tours & Packages</NavLink>
          <NavLink
            to="/inspiration"
            className={({ isActive }) =>
             `text-secondary hover:text-accent transition-colors duration-200 ${isActive ? 'text-accent font-semibold underline' : ''}` // ADDED underline here
            }
            onClick={toggleMenu}
          >Inspiration</NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-secondary hover:text-accent transition-colors duration-200 ${isActive ? 'text-accent font-semibold underline' : ''}` // ADDED underline here
            }
            onClick={toggleMenu}
          >About Us</NavLink>
          <NavLink
            to="/plan-your-trip"
            className={({ isActive }) =>
              `text-secondary hover:text-accent transition-colors duration-200 ${isActive ? 'text-accent font-semibold underline' : ''}` // ADDED underline here
            }
            onClick={toggleMenu}
          >Plan Your Trip</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;