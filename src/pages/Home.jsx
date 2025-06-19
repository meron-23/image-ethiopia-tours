// src/pages/Home.jsx
import React from 'react';
import Hero from '../sections/Hero';
import AboutSection from '../sections/About'; // Renamed import to avoid conflict with pages/About.jsx
import PlanYourTrip from '../sections/PlanYourTrip';
import ToursPackages from '../sections/ToursPackages';
import Destinations from '../sections/Destinations';
import Inspiration from '../sections/Inspiration';
import NewsletterCTA from '../components/NewsletterCTA';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <main className="flex-grow"> {/* This main will now be part of the Home page */}
      <Hero />
      <AboutSection /> {/* This is your existing 'sections/About.jsx' content */}
      <PlanYourTrip />
      <ToursPackages />
      <Destinations />
      <Inspiration />
      <NewsletterCTA />
      <Contact />
    </main>
  );
};

export default Home;