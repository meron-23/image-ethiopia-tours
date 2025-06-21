// src/pages/PlanYourTrip.jsx
import React, { useState, useEffect, useRef } from 'react'; // Import useEffect and useRef
import { useLocation } from 'react-router-dom'; // Import useLocation to get URL hash

// Import your banner image
import planTripBannerImg from '../assets/plan_your_trip.jpg'; 
const planTripBannerImage = planTripBannerImg;

// --- CollapsibleSection Component ---
// This component will handle the logic for each collapsible section
// Now accepts an 'id' prop and checks location.hash for initial opening
const CollapsibleSection = ({ id, title, summary, children }) => {
  const location = useLocation(); // Get current URL location within this component
  const sectionRef = useRef(null); // Ref to the section element

  // Check if this section's ID matches the URL hash on initial render
  const initialOpen = location.hash === `#${id}`;
  const [isOpen, setIsOpen] = useState(initialOpen);

  // Effect to scroll into view and potentially open if deep linked
  useEffect(() => {
    if (initialOpen && sectionRef.current) {
      // Small delay to ensure content is rendered before scrolling
      // (sometimes useful for dynamically rendered content like accordions)
      setTimeout(() => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsOpen(true); // Ensure it's open if linked to
      }, 100);
    }
  }, [initialOpen]); // Only run if initialOpen state changes (which is tied to location.hash)

  return (
    <section id={id} ref={sectionRef} className="mb-8 p-6 bg-white rounded-lg shadow-md">
      <button
        className="w-full flex justify-between items-center text-left py-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-2xl font-bold text-darkBg">
          {title}
        </h3>
        <span className="text-darkBg text-3xl transition-transform duration-300 transform">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      <p className="text-gray-700 leading-relaxed mb-4">
        {summary}
      </p>

      {/* Conditional rendering for the detailed content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pt-4 border-t border-gray-200 mt-4">
          {children}
        </div>
      </div>
    </section>
  );
};
// --- End CollapsibleSection Component ---


const PlanYourTrip = () => {
  return (
    <div className="bg-lightBg">
      {/* Plan Your Trip Page Banner Section */}
      <section
        className="relative h-80 flex items-center justify-center text-center text-white overflow-hidden
                   filter saturate-125 contrast-105"
        style={{ backgroundImage: `url('${planTripBannerImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 p-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-xl">
            Plan Your Unforgettable Journey
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 md:px-6 py-16">

        {/* Introduction / Overview */}
        <section className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-darkBg mb-6">
            Everything You Need to Know Before You Go
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Preparing for an international trip can be exciting, but also requires careful planning.
            Here, we provide essential information to help you get ready for your adventure in
            Ethiopia and East Africa, ensuring a smooth and enjoyable experience from start to finish.
          </p>
        </section>

        {/* Collapsible Sections for each topic - ADDING UNIQUE IDS */}

        <CollapsibleSection
          id="how-to-book" // UNIQUE ID for this section
          title="How to Book a Tour with Us"
          summary="Booking your dream tour with Image Ethiopia Tours is simple and straightforward. We offer personalized consultation to craft an itinerary that perfectly matches your interests and budget."
        >
          <p className="text-gray-700 leading-relaxed space-y-4">
            <strong>Detailed Steps:</strong>
            <ol className="list-decimal list-inside pl-4 mt-2">
              <li><strong>Browse & Inquire:</strong> Explore our website for tour ideas or tell us your vision. Fill out our inquiry form or send us an email.</li>
              <li><strong>Consultation:</strong> Our travel experts will contact you to discuss your preferences, dates, and any special requests.</li>
              <li><strong>Custom Itinerary & Quote:</strong> We'll design a detailed itinerary with a transparent quote. We're happy to revise until it's perfect.</li>
              <li><strong>Confirmation & Payment:</strong> Once satisfied, confirm your booking with a deposit. We'll provide all necessary documentation.</li>
              <li><strong>Pre-Departure Support:</strong> Receive a comprehensive pre-departure guide with essential tips. We're here for any last-minute questions!</li>
            </ol>
          </p>
        </CollapsibleSection>

        <CollapsibleSection
          id="visa-requirements" // UNIQUE ID for this section
          title="Visa and Entry Requirements"
          summary="Visa regulations vary by nationality for Ethiopia and other East African countries (Kenya, Tanzania, Uganda, Rwanda). It's crucial to check specific requirements well in advance of your trip."
        >
          <p className="text-gray-700 leading-relaxed space-y-4">
            <strong>Ethiopia:</strong> Most visitors require a visa. An e-Visa (online application) is generally available and recommended for tourists entering through Addis Ababa Bole International Airport. Some nationalities may be eligible for visa-on-arrival. Always check the official Ethiopian Immigration website.
          </p>
          <p className="text-gray-700 leading-relaxed space-y-4">
            <strong>Kenya/Tanzania/Uganda/Rwanda:</strong> The East African Tourist Visa covers Kenya, Uganda, and Rwanda for a single entry. Tanzania requires a separate visa. E-Visas are common and highly recommended for these countries too.
          </p>
          <p className="text-gray-700 leading-relaxed space-y-4">
            <strong>Important:</strong> Passport validity (usually 6 months beyond intended stay), sufficient blank pages, and sometimes onward tickets are required. Always consult the official embassy/consulate websites for the most up-to-date information for your specific nationality.
          </p>
        </CollapsibleSection>

        <CollapsibleSection
          id="getting-around" // UNIQUE ID for this section
          title="Getting Around East Africa"
          summary="Your tour package will cover most of your ground and internal air transportation. For independent travel, options include domestic flights, private cars, buses, and public transport."
        >
          <p className="text-gray-700 leading-relaxed space-y-4">
            <strong>Internal Flights:</strong> For covering long distances quickly, especially between major cities or to remote attractions (like Lalibela or Omo Valley), internal flights are the most efficient. Ethiopian Airlines has an extensive domestic network.
          </p>
          <p className="text-gray-700 leading-relaxed space-y-4">
            <strong>Road Travel:</strong> For safaris and exploring rural areas, 4x4 vehicles are standard. Roads vary in quality. Within cities, taxis, ride-hailing apps (like Feres, Ride in Ethiopia; Uber, Bolt in Kenya), and tuk-tuks (bajaj) are common.
          </p>
          <p className="text-gray-700 leading-relaxed space-y-4">
            <strong>Guided Tours:</strong> For seamless travel, especially to remote or culturally sensitive areas, our guided tours provide dedicated transportation with experienced drivers, ensuring comfort and safety.
          </p>
        </CollapsibleSection>

        <CollapsibleSection
          id="accommodation-options" // UNIQUE ID for this section
          title="Accommodation Options"
          summary="East Africa offers a wide range of accommodation, from luxury lodges and international hotels to charming guesthouses and rustic eco-camps, catering to every budget and preference."
        >
          <p className="text-gray-700 leading-relaxed space-y-4">
            <strong>Luxury & Boutique:</strong> High-end hotels in major cities and exclusive safari lodges/tented camps offering unparalleled service, gourmet dining, and prime locations for wildlife viewing.
          </p>
          <p className="text-gray-700 leading-relaxed space-y-4">
            <strong>Mid-Range:</strong> Comfortable hotels with good amenities, often locally owned, providing a balance of comfort and authenticity.
          </p>
          <p className="text-gray-700 leading-relaxed space-y-4">
            <strong>Budget-Friendly:</strong> Guesthouses, hostels, and basic hotels are available for those on a tighter budget, offering clean and safe stays.
          </p>
          <p className="text-gray-700 leading-relaxed space-y-4">
            <strong>Specialty Stays:</strong> Unique options include traditional tukuls (circular huts) in cultural villages, eco-lodges, and even houseboat stays on lakes.
          </p>
          <p className="text-gray-700 leading-relaxed space-y-4">
            Our tours customize accommodation based on your chosen package level and preferences.
          </p>
        </CollapsibleSection>

        <CollapsibleSection
          id="packing-guide" // UNIQUE ID for this section
          title="Packing Guide"
          summary="Packing smartly for East Africa involves considering diverse climates, cultural sensitivities, and activity types (safari, trekking, city exploration)."
        >
          <p className="text-gray-700 leading-relaxed space-y-4">
            <strong>Clothing:</strong> Lightweight, breathable fabrics (cotton, linen) in neutral colors for safaris (avoid brights and dark blues which attract tsetse flies). Long sleeves and trousers for sun protection and insect bite prevention. A warm jacket/fleece for cool evenings or high altitudes. Modest clothing (shoulders/knees covered) for cultural/religious sites.
          </p>
          <p className="text-gray-700 leading-relaxed space-y-4">
            <strong>Footwear:</strong> Comfortable walking shoes/hiking boots (broken in!), sandals/flip-flops.
          </p>
          <p className="text-gray-700 leading-relaxed space-y-4">
            <strong>Essentials:</strong> Sunscreen (high SPF!), wide-brimmed hat, sunglasses, insect repellent (DEET recommended), personal first-aid kit, hand sanitizer, rehydration salts, camera with extra batteries/memory, power bank.
          </p>
          <p className="text-gray-700 leading-relaxed space-y-4">
            <strong>Documentation:</strong> Passport, visas, flight tickets, travel insurance details, photocopies of important documents (keep separate).
          </p>
          <p className="text-gray-700 leading-relaxed space-y-4">
            <strong>Luggage:</strong> Soft-sided bags are often preferred for safaris (especially light aircraft flights).
          </p>
        </CollapsibleSection>

        <CollapsibleSection
          id="health-safety" // UNIQUE ID for this section
          title="Health and Safety"
          summary="Your health and safety are paramount. Consult your doctor well before traveling regarding vaccinations and malaria prophylaxis. Be aware of local conditions and take standard precautions."
        >
          <p className="text-gray-700 leading-relaxed space-y-4">
            <strong>Vaccinations:</strong> Recommended vaccinations typically include Yellow Fever (often mandatory for entry, especially if arriving from an endemic country), Hepatitis A & B, Typhoid, Tetanus, Diphtheria, Measles, Mumps, Rubella. Consult a travel clinic.
          </p>
          <p className="text-gray-700 leading-relaxed space-y-4">
            <strong>Malaria:</strong> Malaria is present in many areas. Discuss prophylaxis with your doctor. Use insect repellent, sleep under mosquito nets, and wear long sleeves/trousers at dusk/dawn.
          </p>
          <p className="text-gray-700 leading-relaxed space-y-4">
            <strong>Food & Water Safety:</strong> Drink only bottled or purified water. Avoid ice cubes, uncooked foods (unless peeled by you), and street food (unless you see it cooked fresh and hot).
          </p>
          <p className="text-gray-700 leading-relaxed space-y-4">
            <strong>Altitude Sickness:</strong> If visiting high-altitude areas (e.g., Simien Mountains), be aware of symptoms and acclimatize gradually.
          </p>
          <p className="text-gray-700 leading-relaxed space-y-4">
            <strong>Personal Safety:</strong> Be aware of your surroundings, especially in crowded areas. Avoid displaying valuables. Use reputable transport. Follow your guide's advice. Travel insurance is highly recommended.
          </p>
          <p className="text-gray-700 leading-relaxed space-y-4">
            <strong>Emergency Contacts:</strong> Keep local embassy/consulate and tour operator contact details accessible.
          </p>
        </CollapsibleSection>

        <CollapsibleSection
          id="responsible-travel" // UNIQUE ID for this section
          title="Responsible Travel"
          summary="Your health and safety are paramount. Consult your doctor well before traveling regarding vaccinations and malaria prophylaxis. Be aware of local conditions and take standard precautions."
        >
          <p className="text-gray-700 leading-relaxed space-y-4">
            <strong>Vaccinations:</strong> Recommended vaccinations typically include Yellow Fever (often mandatory for entry, especially if arriving from an endemic country), Hepatitis A & B, Typhoid, Tetanus, Diphtheria, Measles, Mumps, Rubella. Consult a travel clinic.
          </p>
          <p className="text-gray-700 leading-relaxed space-y-4">
            <strong>Malaria:</strong> Malaria is present in many areas. Discuss prophylaxis with your doctor. Use insect repellent, sleep under mosquito nets, and wear long sleeves/trousers at dusk/dawn.
          </p>
          <p className="text-gray-700 leading-relaxed space-y-4">
            <strong>Food & Water Safety:</strong> Drink only bottled or purified water. Avoid ice cubes, uncooked foods (unless peeled by you), and street food (unless you see it cooked fresh and hot).
          </p>
          <p className="text-gray-700 leading-relaxed space-y-4">
            <strong>Altitude Sickness:</strong> If visiting high-altitude areas (e.g., Simien Mountains), be aware of symptoms and acclimatize gradually.
          </p>
          <p className="text-gray-700 leading-relaxed space-y-4">
            <strong>Personal Safety:</strong> Be aware of your surroundings, especially in crowded areas. Avoid displaying valuables. Use reputable transport. Follow your guide's advice. Travel insurance is highly recommended.
          </p>
          <p className="text-gray-700 leading-relaxed space-y-4">
            <strong>Emergency Contacts:</strong> Keep local embassy/consulate and tour operator contact details accessible.
          </p>
        </CollapsibleSection>

      </div>
    </div>
  );
};

export default PlanYourTrip;