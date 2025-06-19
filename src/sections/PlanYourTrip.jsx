import React from 'react';
import howToBook from '../assets/how_to_book.png';
import visaAndEntry from '../assets/visa_and_entry.png';
import gettingArround from '../assets/getting_arround.png';
import accomodation from '../assets/accomodation.png';
import packing from '../assets/packing.png';
import healthAndSafety from '../assets/health_and_safety.png';
import responsibleTravel from '../assets/responsible_travel.png';
import { Link } from 'react-router-dom';


const PlanYourTrip = () => {
  const planItems = [
    {
      id: 1,
      icon: howToBook,
      title: 'How to Book a Tour',
      description: 'Step-by-step guide to easily reserve your adventure with us.',
      link: '/planYourTrip#how-to-book',
    },
    {
      id: 2,
      icon: visaAndEntry,
      title: 'Visa & Entry Requirements',
      description: 'Essential information on visas for Ethiopia and other East African destinations.',
      link: '/planYourTrip#visa-requirements',
    },
    {
      id: 3,
      icon: gettingArround,
      title: 'Getting Around',
      description: 'Discover the best ways to travel within Ethiopia and connect to neighboring countries.',
      link: '/planYourTrip#getting-around',
    },
    {
      id: 4,
      icon: accomodation,
      title: 'Accommodation Options',
      description: 'From luxury lodges to charming guesthouses, find your perfect stay.',
      link: '/planYourTrip#accommodation-options',
    },
    {
      id: 5,
      icon: packing,
      title: 'Packing Guide',
      description: 'What to pack for different climates and activities on your East African journey.',
      link: '/planYourTrip#packing-guide',
    },
    {
      id: 6,
      icon: healthAndSafety,
      title: 'Health & Safety',
      description: 'Important tips and guidelines to ensure a safe and healthy journey.',
      link: '/planYourTrip#health-safety',
    },
    {
      id: 7,
      icon: responsibleTravel,
      title: 'Responsible Tourism',
      description: 'Learn how to travel sustainably and positively impact local communities.',
      link: '/planYourTrip#responsible-travel',
    },
  ];

  return (
    <section id="plan-your-trip" className="py-20 md:py-32 bg-lightBg">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Plan Your Unforgettable Trip</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {planItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-[1.02]"
            >
              <img src={item.icon} alt={item.title + " icon"} className="mx-auto mb-6 w-16 h-16 object-contain" />
              <h3 className="text-2xl font-semibold text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <Link
              to={item.link} // Link to specific ID on PlanYourTrip page
              className="inline-block bg-primary text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Read More
            </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanYourTrip;