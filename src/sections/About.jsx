import React from 'react';
import EthiopiaAbout from '../assets/about_new.jpg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">About Ethiopia & East Africa</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="md:pr-10">
            <p className="mb-4 text-lg text-gray-700">
              Ethiopia, the cradle of humanity, offers a unique blend of ancient history, rich cultural traditions, and diverse natural beauty. From the rock-hewn churches of Lalibela to the majestic Simien Mountains, every corner tells a story waiting to be discovered.
            </p>
            <p className="mb-6 text-lg text-gray-700">
              Beyond Ethiopia, we invite you to explore the stunning landscapes of Djibouti, the vibrant wildlife of Kenya and Tanzania, and the pristine beaches of Zanzibar. Our expert guides ensure an unforgettable adventure across East Africa, tailored to your interests.
            </p>
            <Link to="/about" className="btn btn-secondary text-lg">
              Learn More About the Region
            </Link>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-xl">
            <img
              src={EthiopiaAbout}
              alt="Ancient Ethiopian Church or Cultural Scene"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;