import React from 'react';
import ethiopia from '../assets/about/ethiopia.jpg';
import eastAfrica from '../assets/about/east_africa.jpg';
import safari from '../assets/about/safari.jpg';


// Import the image for the About page banner
// REMINDER: Replace this with your own local image, similar to how you did for Hero.jsx
// Example: import aboutBannerImg from '../assets/about-banner.jpg';
const aboutBannerImage = eastAfrica;


const About = () => {
  return (
    <div className="bg-lightBg"> {/* Removed overall py-16, now handled by sections */}

      {/* About Page Banner Section - Like a mini-hero */}
      <section
        className="relative h-96 flex items-center justify-center text-center text-white overflow-hidden"
        style={{ backgroundImage: `url('${aboutBannerImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Overlay for Readability */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Banner Content */}
        <div className="relative z-10 p-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-xl">
            Our Journey Through East Africa
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 md:px-6 py-16"> {/* Added padding here */}

        {/* Section 1: Introduction - Expanded */}
        <section className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-darkBg mb-6">
            Welcome to Image Ethiopia Tours
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-4">
            At Image Ethiopia Tours, we believe travel is more than just seeing new places;
            it's about experiencing cultures, connecting with history, and embarking on adventures
            that transform your perspective. Founded with a deep passion for the rich heritage
            and stunning natural beauty of Ethiopia and the wider East African region,
            we are dedicated to crafting unforgettable journeys tailored to your dreams.
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Our expertise lies in unlocking the ancient secrets of Ethiopia, from its biblical
            history and ancient churches to its breathtaking highlands and vibrant tribal communities.
            Beyond Ethiopia, we extend our passion to the iconic wildlife safaris of Kenya and Tanzania,
            the majestic peaks of the continent, and the idyllic coastal escapes of Zanzibar.
          </p>
        </section>

        <hr className="my-12 border-gray-300" />

        {/* Section 2: Ethiopia - Land of Origins - Expanded */}
        <section className="flex flex-col md:flex-row items-center justify-between mb-16 gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-darkBg mb-4">
              Ethiopia: Where History and Nature Converge
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ethiopia, often called the "Cradle of Humanity," offers an extraordinary journey
              through time. Explore **Lalibela's** mystical rock-hewn churches, carved from
              single blocks of stone, a testament to ancient faith and engineering marvel.
              Wander through the ancient castles of **Gondar**, often referred to as the
              "Camelot of Africa," reflecting a bygone era of emperors and empresses.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Venture into the dramatic landscapes of the **Simien Mountains National Park**,
              a UNESCO World Heritage site, home to unique endemic wildlife like the Gelada baboon,
              Walia ibex, and Ethiopian wolf. Discover the vibrant traditions and unique lifestyles
              of the tribes in the **Omo Valley**, a truly immersive cultural experience.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From the historic route that traces ancient empires to the natural wonders of
              the Danakil Depression, Ethiopia promises an adventure that touches the soul.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={ethiopia}
              alt="Lalibela Rock-Hewn Churches, Ethiopia"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </section>

        <hr className="my-12 border-gray-300" />

        {/* Section 3: East Africa - Wildlife & Coastal Wonders - Expanded */}
        <section className="flex flex-col md:flex-row-reverse items-center justify-between mb-16 gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-darkBg mb-4">
              East Africa: Safari Spectacles & Coastal Serenity
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Beyond Ethiopia's historical grandeur, East Africa unfolds into a realm of
              unparalleled wildlife and stunning coastlines. Witness the drama of the
              **Great Migration** in Kenya's **Maasai Mara** and Tanzania's **Serengeti**, where millions of
              wildebeest and zebras embark on an epic journey. Encounter the "Big Five"
              (lion, leopard, elephant, rhino, and buffalo) in their natural habitat
              on expertly guided safaris.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              For the adventurous, scale the majestic **Mount Kilimanjaro**, Africa's highest peak,
              or trek through the lush forests of Uganda and Rwanda for an intimate encounter
              with endangered mountain gorillas.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Conclude your East African odyssey on the pristine white-sand beaches of
              **Zanzibar**, where history, spice, and relaxation blend seamlessly. Dive into
              crystal-clear waters, explore the labyrinthine alleys of Stone Town, or simply
              unwind under the tropical sun.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={safari}
              alt="Wildlife Safari in Maasai Mara, Kenya"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </section>

        <hr className="my-12 border-gray-300" />

        {/* Section 4: Why Travel with Image Ethiopia Tours - Expanded */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-darkBg mb-8">
            Your Trusted Partner for Unforgettable Journeys
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-10">
            Choosing Image Ethiopia Tours means opting for unparalleled expertise, personalized
            service, and a commitment to sustainable travel. We are passionate about sharing
            the beauty of East Africa responsibly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-primary mb-3">
                <span className="block text-4xl mb-2">🌍</span> Expert Local Guides
              </h3>
              <p className="text-gray-700">
                Our team consists of highly experienced and enthusiastic local guides who offer
                deep cultural insights and ensure a safe, enriching adventure.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-primary mb-3">
                <span className="block text-4xl mb-2">✈️</span> Tailored & Flexible Itineraries
              </h3>
              <p className="text-gray-700">
                Every journey is unique. We specialize in crafting custom itineraries that perfectly
                match your interests, budget, and desired pace, from historical expeditions to thrilling safaris.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-primary mb-3">
                <span className="block text-4xl mb-2">🌱</span> Commitment to Sustainability
              </h3>
              <p className="text-gray-700">
                We are dedicated to responsible tourism that directly benefits local communities,
                supports conservation efforts, and minimizes environmental impact.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;