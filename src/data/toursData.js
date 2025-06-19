// --- IMPORT YOUR LOCAL IMAGES HERE ---
// Make sure these paths correctly point to where your images are located
import historicRouteImg from '../assets/ToursAndPackages/ethiopia_route.jpg';
import simienMountainsImg from '../assets/ToursAndPackages/trekking_semien_mountains.jpg';
import omoValleyImg from '../assets/ToursAndPackages/omo_valley.jpg';
import kenyaWildlifeImg from '../assets/ToursAndPackages/kenya_wildlife.jpg';
import zanzibarBeachesImg from '../assets/ToursAndPackages/kenya_&_tanzania_grand_safari.jpg';
import danakilDepressionImg from '../assets/ToursAndPackages/danakil_depression.jpg';
// If you have more images for other tours (e.g., for Harar, Bale, Uganda, Djibouti), import them too:
import hararImg from '../assets/ToursAndPackages/streets_of_harar.jpg'; // Example
import baleMountainsImg from '../assets/ToursAndPackages/bale_mountains.jpg'; // Example
import ugandaGorillaImg from '../assets/ToursAndPackages/kibale_crater_lakes.jpg'; // Example
import djiboutiCoastImg from '../assets/ToursAndPackages/mount_kilimanjaro.jpg'; // Example
// --- END IMAGE IMPORTS ---


const toursData = [
  {
    id: 'ethiopia-historic-route',
    name: 'Ethiopia: Grand Historic Route',
    duration: '10 Days / 9 Nights',
    price: 'Starting from $1800',
    image: historicRouteImg,
    summary: 'A journey through Ethiopia\'s ancient kingdoms, rock-hewn churches, and imperial castles.',
    detailedDescription: 'This classic tour delves deep into Ethiopia\'s rich past, exploring the historical wonders of Lalibela with its rock-hewn churches, the ancient city of Axum with its obelisks and St. Mary of Zion church, and the medieval castles of Gondar. You\'ll also visit the monasteries of Lake Tana and experience the vibrant atmosphere of Addis Ababa. This itinerary is perfect for history buffs and those seeking profound cultural immersion.',
    highlights: ['Lalibela', 'Gondar', 'Axum', 'Lake Tana Monasteries', 'Addis Ababa'],
    itinerary: [
      { day: 1, title: 'Arrival in Addis Ababa', activities: 'Meet & Greet, transfer to hotel. City tour including National Museum and Holy Trinity Cathedral.' },
      { day: 2, title: 'Flight to Bahir Dar & Lake Tana', activities: 'Morning flight to Bahir Dar. Boat trip on Lake Tana to visit ancient monasteries (Ura Kidane Mihret, Azwa Mariam).' },
      { day: 3, title: 'Blue Nile Falls & Gondar', activities: 'Morning excursion to Blue Nile Falls. Drive to Gondar. Explore Fasil Ghebbi Royal Enclosure and Debre Berhan Selassie Church.' },
      { day: 4, title: 'Gondar to Simien Mountains (Optional)', activities: 'Optional day trip/trek to Simien Mountains National Park for stunning views and wildlife. Or explore more of Gondar.' },
      { day: 5, title: 'Flight to Axum', activities: 'Morning flight to Axum. Discover the Axum Stelae Field, Queen of Sheba\'s Palace ruins, and St. Mary of Zion Church.' },
      { day: 6, title: 'Flight to Lalibela', activities: 'Morning flight to Lalibela. Begin exploring the first group of rock-hewn churches (Bete Medhane Alem, Bete Mariam, Bete Meskel, Bete Denagel, Debre Sina, Golgotha-Mikael).' },
      { day: 7, title: 'Lalibela Churches (Second Group)', activities: 'Continue exploring the second group of churches (Bete Gabriel-Rufael, Bete Merkorios, Bete Amanuel, Bete Abba Libanos) and the iconic Bete Giyorgis.' },
      { day: 8, title: 'Lalibela Excursion', activities: 'Morning excursion to the Yemrehanna Kristos cave church (outside Lalibela). Afternoon free for exploration or local market visit.' },
      { day: 9, title: 'Flight back to Addis Ababa', activities: 'Morning flight back to Addis Ababa. Free afternoon for souvenir shopping or relaxing.' },
      { day: 10, title: 'Departure', activities: 'Transfer to the airport for your international flight.' },
    ],
    inclusions: [
      'All internal flights', 'Accommodation as per itinerary', 'All meals (B,L,D)',
      'All entrance fees', 'English-speaking local guide', 'Private transportation',
      'Airport transfers'
    ],
    exclusions: [
      'International flights', 'Visa fees', 'Travel insurance',
      'Personal expenses', 'Tips/gratuities', 'Drinks'
    ],
  },
  {
    id: 'simien-mountains-trek',
    name: 'Simien Mountains Trekking Adventure',
    duration: '7 Days / 6 Nights',
    price: 'Starting from $1500',
    image: simienMountainsImg, // Use the imported image variable
    summary: 'Trek through breathtaking landscapes and encounter unique wildlife in the Simien Mountains National Park.',
    detailedDescription: 'Embark on an unforgettable trekking adventure through the dramatic peaks and deep valleys of the Simien Mountains National Park. This UNESCO World Heritage site is home to unique endemic wildlife, including the Gelada baboon, Walia ibex, and Ethiopian wolf. Experience stunning escarpment views, challenging climbs, and nights under starry skies.',
    highlights: ['Gelada Baboons', 'Walia Ibex', 'Spectacular escarpments', 'Mountain trekking'],
    itinerary: [
      { day: 1, title: 'Gondar to Debark & Sankaber', activities: 'Drive to Debark (Simien HQ). Meet scouts/guides. Trek to Sankaber (3-4 hrs). Views & Gelada baboons.' },
      { day: 2, title: 'Sankaber to Geech', activities: 'Trek to Geech (5-6 hrs). En route: Jinbar Waterfall, scenic cliffs. Sunset views.' },
      { day: 3, title: 'Geech to Imet Gogo & Chennek', activities: 'Trek to Imet Gogo (best views, 3926m). Continue to Chennek (4-5 hrs). Chance to see Walia Ibex.' },
      { day: 4, title: 'Chennek to Ambiko (Bwahit Peak)', activities: 'Ascend Bwahit Peak (4430m) for panoramic views. Descend to Ambiko (6-7 hrs).' },
      { day: 5, title: 'Ambiko to Ras Dashen & Ambiko', activities: 'Summit Ras Dashen (4550m), Ethiopia\'s highest peak (10-12 hrs return). Return to Ambiko.' },
      { day: 6, title: 'Ambiko to Chiro Leba & Gondar', activities: 'Descend from Ambiko to Chiro Leba. Meet vehicle & drive back to Gondar.' },
      { day: 7, title: 'Departure from Gondar', activities: 'Transfer to Gondar Airport for flight to Addis Ababa or onward journey.' },
    ],
    inclusions: [
      'National Park fees', 'Local guides & scouts', 'Mule & muleteer support', 'Camping equipment',
      'All meals during trek', 'Bottled water', 'Private transport to/from park'
    ],
    exclusions: [
      'International/domestic flights', 'Sleeping bags', 'Personal trekking gear',
      'Travel insurance', 'Tips'
    ],
  },
  {
    id: 'omo-valley-cultural',
    name: 'Omo Valley Tribal & Cultural Expedition',
    duration: '8 Days / 7 Nights',
    price: 'Starting from $2200',
    image: omoValleyImg, // Use the imported image variable
    summary: 'Discover the diverse cultures and traditions of indigenous tribes in the remote Omo Valley.',
    detailedDescription: 'An extraordinary expedition into the heart of Ethiopia\'s Omo Valley, a region renowned for its incredible cultural diversity and untouched tribal traditions. This journey offers a rare opportunity to interact with and learn from communities like the Mursi, Hamer, Karo, and Konso, each with their distinct customs, languages, and artistic expressions.',
    highlights: ['Mursi, Hamer, Karo Tribes', 'Local markets', 'Cultural ceremonies', 'Authentic encounters'],
    itinerary: [
      { day: 1, title: 'Arrive Addis Ababa & Fly to Arba Minch', activities: 'Morning flight to Arba Minch. Check in. Afternoon boat trip on Lake Chamo to see crocs & hippos.' },
      { day: 2, title: 'Arba Minch to Jinka', activities: 'Drive to Jinka. En route visit the Konso village (UNESCO site) known for terraced farming and unique totems.' },
      { day: 3, title: 'Mursi Tribe Excursion', activities: 'Morning drive to Mago National Park to visit a Mursi village. Learn about their lip-plate and earlobe traditions.' },
      { day: 4, title: 'Jinka to Turmi (Hamer Tribe)', activities: 'Drive to Turmi, heartland of the Hamer tribe. Witness their unique hairstyles and body decoration. Opportunity for Bull Jumping ceremony (seasonal).' },
      { day: 5, title: 'Karo & Dassanech Tribes', activities: 'Morning visit to a Karo village by the Omo River, known for body painting. Afternoon drive to Omorate to cross the Omo River to visit the Dassanech tribe.' },
      { day: 6, title: 'Turmi to Konso', activities: 'Drive back to Konso. Explore more of Konso cultural landscape. Overnight in Konso.' },
      { day: 7, title: 'Konso to Arba Minch', activities: 'Morning drive back to Arba Minch. Relax or explore. Afternoon: Nechisar National Park for plains wildlife.' },
      { day: 8, title: 'Flight Arba Minch to Addis Ababa & Departure', activities: 'Morning flight back to Addis Ababa. Connect to international flight.' },
    ],
    inclusions: [
      'All internal flights', 'Accommodation', 'All meals',
      'All entrance fees & permits', 'English-speaking guide', '4x4 vehicle with driver',
      'Boat trip on Lake Chamo'
    ],
    exclusions: [
      'International flights', 'Visa fees', 'Travel insurance',
      'Personal expenses', 'Tips', 'Drinks', 'Photography fees at villages'
    ],
  },
  {
    id: 'danakil-depression',
    name: 'Danakil Depression Extreme Adventure',
    duration: '4 Days / 3 Nights',
    price: 'Starting from $1300',
    image: danakilDepressionImg, // Use the imported image variable
    summary: 'Experience the otherworldly landscapes of the hottest place on Earth, including Erta Ale volcano.',
    detailedDescription: 'An exhilarating and challenging expedition into the Danakil Depression, one of the hottest and lowest places on Earth. Witness the surreal landscapes of Dallol\'s colorful hydrothermal fields, trek to the active lava lake of Erta Ale volcano, and observe ancient salt caravans. This is an adventure for the truly intrepid traveler seeking otherworldly vistas.',
    highlights: ['Dallol colorful landscapes', 'Erta Ale active volcano trek', 'Salt caravans', 'Lake Afdera'],
    itinerary: [
      { day: 1, title: 'Mekelle to Hamed Ela & Dallol', activities: 'Drive to Hamed Ela. Afternoon: explore Dallol (colorful mineral springs, salt pillars, sulfuric lakes).' },
      { day: 2, title: 'Hamed Ela to Erta Ale', activities: 'Morning: salt flats visit. Drive to base of Erta Ale. Late afternoon/evening trek to the rim of the active volcano. Overnight camping near crater rim.' },
      { day: 3, title: 'Erta Ale to Hamed Ela', activities: 'Sunrise views of lava lake. Descend from Erta Ale. Drive back to Hamed Ela.' },
      { day: 4, title: 'Hamed Ela to Mekelle', activities: 'Morning: visit Lake Afdera salt extraction. Drive back to Mekelle for departure.' },
    ],
    inclusions: [
      'All ground transportation (4x4)', 'Local guides & scouts', 'All meals',
      'Bottled water', 'Entrance fees & permits', 'Camping equipment at Erta Ale'
    ],
    exclusions: [
      'Flights to/from Mekelle', 'Visa fees', 'Travel insurance',
      'Personal expenses', 'Tips', 'Drinks'
    ],
  },
  {
    id: 'kenya-wildlife-safari', // Changed ID to be more descriptive and unique if needed later
    name: 'Kenya Wildlife Safari',
    duration: '7 Days / 6 Nights', // Adjusted duration
    price: 'Starting from $2800', // Adjusted price
    image: kenyaWildlifeImg, // Use the imported image variable
    summary: 'Witness the Great Migration and vast wildlife in Maasai Mara and other national parks.',
    detailedDescription: 'Embark on an unforgettable wildlife adventure in Kenya, visiting iconic national parks like Maasai Mara, Lake Nakuru, and Amboseli. Experience thrilling game drives, witness the Great Migration (seasonal), and get up close with Africa\'s Big Five in their natural habitat. This safari promises breathtaking landscapes and abundant wildlife viewing opportunities.',
    highlights: ['Maasai Mara', 'Lake Nakuru', 'Amboseli National Park', 'Big Five sightings', 'Maasai culture'],
    itinerary: [
        { day: 1, title: 'Arrival Nairobi & Transfer to Maasai Mara', activities: 'Arrive Nairobi, flight or drive to Maasai Mara. Afternoon game drive. Dinner & overnight at safari lodge/camp.' },
        { day: 2, title: 'Full Day Maasai Mara', activities: 'Two extensive game drives (morning & afternoon) exploring the Mara\'s vast plains for wildlife.' },
        { day: 3, title: 'Maasai Mara to Lake Nakuru', activities: 'Morning game drive, then drive to Lake Nakuru National Park. Afternoon game drive, famous for flamingos and rhinos.' },
        { day: 4, title: 'Lake Nakuru to Amboseli', activities: 'Morning game drive. Drive to Amboseli National Park, famous for its large elephant herds and views of Mt. Kilimanjaro.' },
        { day: 5, title: 'Full Day Amboseli', activities: 'Morning and afternoon game drives in Amboseli, focusing on elephants, lions, and diverse birdlife with Kilimanjaro backdrop.' },
        { day: 6, title: 'Amboseli to Nairobi', activities: 'Morning game drive. Drive back to Nairobi. Visit Giraffe Centre or Karen Blixen Museum (optional).' },
        { day: 7, title: 'Departure from Nairobi', activities: 'Transfer to Jomo Kenyatta International Airport for departure.' },
    ],
    inclusions: [
        'Accommodation as per itinerary', 'All meals on safari (B,L,D)', 'Park entrance fees',
        '4x4 safari vehicle with pop-up roof', 'English-speaking driver/guide', 'Bottled water during game drives',
        'Airport transfers'
    ],
    exclusions: [
        'International flights', 'Visa fees', 'Travel insurance',
        'Personal expenses', 'Tips/gratuities', 'Drinks', 'Optional activities (e.g., balloon safari)'
    ],
  },
  {
    id: 'zanzibar-beach-escape', // Changed ID for clarity
    name: 'Zanzibar Beach Escape',
    duration: '5 Days / 4 Nights', // Adjusted duration
    price: 'Starting from $950', // Adjusted price
    image: zanzibarBeachesImg, // Use the imported image variable
    summary: 'Relax on pristine beaches, explore Stone Town, and enjoy water activities in Zanzibar.',
    detailedDescription: 'Escape to the idyllic "Spice Island" of Zanzibar, where pristine white-sand beaches meet the warm turquoise waters of the Indian Ocean. This tour offers a perfect blend of relaxation, cultural exploration in historic Stone Town (a UNESCO site), and thrilling water activities like snorkeling and diving.',
    highlights: ['Pristine beaches', 'Stone Town (UNESCO)', 'Spice plantations', 'Snorkeling/Diving'],
    itinerary: [
        { day: 1, title: 'Arrival Zanzibar', activities: 'Arrive at Zanzibar International Airport. Transfer to your beach resort for relaxation.' },
        { day: 2, title: 'Stone Town & Spice Tour', activities: 'Morning: Explore the narrow alleys, markets, and historical sites of Stone Town. Afternoon: Spice Tour, learning about Zanzibar\'s rich spice heritage.' },
        { day: 3, title: 'Beach Relaxation & Optional Activities', activities: 'Full day at leisure on the beach. Optional: Prison Island tour, Blue Lagoon snorkeling, or dolphin tour.' },
        { day: 4, title: 'North Coast Beaches & Sunset', activities: 'Explore the northern beaches (Nungwi/Kendwa) known for stunning sunsets and vibrant local life. Leisure time for swimming or relaxing.' },
        { day: 5, title: 'Departure Zanzibar', activities: 'Enjoy a final morning at the beach. Transfer to Zanzibar Airport for your departure.' },
    ],
    inclusions: [
        'Accommodation (B&B basis)', 'Airport transfers', 'Stone Town tour', 'Spice Tour',
        'All necessary transfers for activities', 'Local English-speaking guide for tours'
    ],
    exclusions: [
        'International flights', 'Visa fees', 'Travel insurance',
        'Personal expenses', 'Tips', 'Drinks', 'Optional water activities'
    ],
  },
  {
    id: 'harar-cultural-tour',
    name: 'Harar: Ancient City & Hyena Man',
    duration: '3 Days / 2 Nights',
    price: 'Starting from $750',
    image: hararImg, // Use the imported image variable
    summary: 'Explore the walled city of Harar Jugol, a UNESCO World Heritage site, and witness the famous hyena feeding.',
    detailedDescription: 'Step back in time in the fortified city of Harar Jugol, a UNESCO World Heritage site and a vibrant center of Islamic culture in Ethiopia. This tour allows you to explore its labyrinthine alleys, visit traditional Harari homes, and witness the unique tradition of the "Hyena Man" feeding wild hyenas by hand at night.',
    highlights: ['Ancient city walls & gates', 'Harari culture', 'Hyena Man experience', 'Vibrant markets'],
    itinerary: [
      { day: 1, title: 'Flight Addis Ababa to Harar', activities: 'Morning flight to Dire Dawa. Drive to Harar. Check in. Afternoon: explore Harar Jugol - market, mosques, traditional houses.' },
      { day: 2, title: 'Full Day Harar Exploration', activities: 'Morning: continue exploring Harar, including Arthur Rimbaud House. Evening: witness the Hyena Man feeding.' },
      { day: 3, title: 'Harar to Dire Dawa & Departure', activities: 'Morning: visit Harar\'s Feres Megala (Horse Market). Drive back to Dire Dawa for flight to Addis Ababa or onward.' },
    ],
    inclusions: [
      'Internal flights (Addis-Dire Dawa)', 'Accommodation', 'All meals',
      'Entrance fees', 'Local guide', 'Private transportation'
    ],
    exclusions: [
      'International flights', 'Visa fees', 'Travel insurance',
      'Personal expenses', 'Tips', 'Drinks'
    ],
  },
  {
    id: 'bale-mountains-wildlife',
    name: 'Bale Mountains National Park Expedition',
    duration: '6 Days / 5 Nights',
    price: 'Starting from $1400',
    image: baleMountainsImg, // Use the imported image variable
    summary: 'A pristine wilderness offering a chance to spot rare Ethiopian endemic wildlife and stunning afro-alpine scenery.',
    detailedDescription: 'Journey to the breathtaking Bale Mountains National Park, a biodiversity hotspot in Ethiopia and home to several endemic species found nowhere else on Earth. This expedition offers prime opportunities to spot the elusive Ethiopian Wolf, the graceful Mountain Nyala, and a myriad of unique birdlife amidst stunning afro-alpine landscapes and ancient Harenna forest.',
    highlights: ['Ethiopian Wolf', 'Mountain Nyala', 'Diverse birdlife', 'Sanetti Plateau'],
    itinerary: [
      { day: 1, title: 'Addis Ababa to Bale Mountains (Dinsho)', activities: 'Drive south to Dinsho, Bale Mountains HQ. Afternoon short walk to spot endemic wildlife like Mountain Nyala, Menelik\'s Bushbuck.' },
      { day: 2, title: 'Dinsho to Goba (Sanetti Plateau)', activities: 'Morning: explore Gaysay grasslands for birds. Drive to Goba. Afternoon: explore Sanetti Plateau - highest all-weather road in Africa, Ethiopian Wolf sighting.' },
      { day: 3, title: 'Full Day Sanetti Plateau & Harenna Forest', activities: 'Morning: return to Sanetti for more wolf spotting & endemic birds. Afternoon: explore the lush Harenna Forest for colobus monkeys, forest birds.' },
      { day: 4, title: 'Goba to Sof Omar Caves', activities: 'Morning drive to Sof Omar Caves, Ethiopia\'s largest cave system with impressive geological formations and religious significance. Return to Goba.' },
      { day: 5, title: 'Goba to Lake Langano', activities: 'Morning in Bale. Drive to Lake Langano in the Rift Valley. Relax by the lake. Birdwatching opportunities.' },
      { day: 6, title: 'Langano to Addis Ababa & Departure', activities: 'Morning leisure by lake. Drive back to Addis Ababa for departure.' },
    ],
    inclusions: [
      'All ground transportation (4x4)', 'Accommodation', 'All meals',
      'National Park fees', 'Local guides', 'Bottled water'
    ],
    exclusions: [
      'International flights', 'Visa fees', 'Travel insurance',
      'Personal expenses', 'Tips', 'Drinks'
    ],
  },
  {
    id: 'uganda-gorilla-chimpanzee',
    name: 'Uganda: Gorilla & Chimpanzee Trekking',
    duration: '7 Days / 6 Nights',
    price: 'Starting from $4000',
    image: ugandaGorillaImg, // Use the imported image variable
    summary: 'An unparalleled wildlife experience: track mountain gorillas in Bwindi and chimpanzees in Kibale.',
    detailedDescription: 'Embark on the ultimate primate adventure in Uganda, offering a rare opportunity to trek and spend time with endangered mountain gorillas in Bwindi Impenetrable Forest and playful chimpanzees in Kibale Forest National Park. This tour combines thrilling wildlife encounters with the stunning natural beauty of Uganda\'s national parks.',
    highlights: ['Bwindi Impenetrable Forest', 'Kibale Forest National Park', 'Gorilla trekking permit included', 'Chimpanzee tracking'],
    itinerary: [
      { day: 1, title: 'Arrival Entebbe & Transfer', activities: 'Arrive Entebbe, transfer to hotel in Kampala.' },
      { day: 2, title: 'Kampala to Kibale Forest', activities: 'Morning drive to Fort Portal/Kibale Forest. Afternoon: swamp walk (Bigodi Wetland Sanctuary) for monkeys & birds.' },
      { day: 3, title: 'Chimpanzee Tracking & Transfer to Queen Elizabeth NP', activities: 'Morning: Chimpanzee tracking in Kibale. Afternoon: Drive to Queen Elizabeth National Park. Evening game drive.' },
      { day: 4, title: 'Queen Elizabeth NP Game Drives & Boat Safari', activities: 'Morning game drive. Afternoon: Kazinga Channel boat safari (hippos, crocs, birds). Evening game drive.' },
      { day: 5, title: 'Queen Elizabeth NP to Bwindi (Gorilla Trekking Prep)', activities: 'Morning game drive. Drive to Bwindi Impenetrable Forest. Briefing for gorilla trekking.' },
      { day: 6, title: 'Gorilla Trekking in Bwindi', activities: 'Morning: Briefing, then begin your gorilla trek. Spend 1 hour with a gorilla family. Return to lodge.' },
      { day: 7, title: 'Bwindi to Entebbe & Departure', activities: 'Morning: relaxed start. Drive to Kihihi/Ishasha airstrip for flight back to Entebbe. Connect to international flight.' },
    ],
    inclusions: [
      'Gorilla trekking permit', 'Chimpanzee tracking permit', 'Park entrance fees',
      'Accommodation', 'All meals', '4x4 safari vehicle with driver/guide',
      'Bottled water', 'Boat cruise on Kazinga Channel'
    ],
    exclusions: [
      'International flights', 'Visa fees', 'Travel insurance',
      'Personal expenses', 'Tips', 'Drinks'
    ],
  },
  {
    id: 'ethiopian-northern-birding',
    name: 'Ethiopian Northern Birding Tour',
    duration: '12 Days / 11 Nights',
    price: 'Starting from $2000',
    // You might need a specific birding image, or use one of your existing ones if suitable
    image: historicRouteImg, // Placeholder if no specific birding image is available
    summary: 'A specialist tour for birdwatchers, exploring diverse habitats for endemic and migratory species.',
    detailedDescription: 'This specialized birding tour takes you through Ethiopia\'s diverse ecosystems, from high-altitude afro-alpine zones to lowland acacia woodlands and Rift Valley lakes, providing unparalleled opportunities to spot a wide array of endemic and migratory bird species. Led by expert ornithologists, this journey is a true delight for bird enthusiasts.',
    highlights: ['Bale Mountains', 'Awash National Park', 'Rift Valley Lakes', 'Endemic birds'],
    itinerary: [
      { day: 1, title: 'Arrival Addis Ababa', activities: 'Birding around Gafersa Reservoir for endemic species. Overnight in Addis.' },
      { day: 2, title: 'Addis to Awash National Park', activities: 'Drive to Awash. Birding along the way. Afternoon: Awash Falls & Fentale Plain for raptors, bustards, game birds.' },
      { day: 3, title: 'Full Day Awash', activities: 'Explore different habitats in Awash: Kudu Valley, acacia woodlands for dryland species.' },
      { day: 4, title: 'Awash to Langano (Rift Valley Lakes)', activities: 'Drive south to Langano. Birding around Lake Langano and Lake Abijatta-Shalla National Park for waterbirds.' },
      { day: 5, title: 'Langano to Goba (Bale Mountains)', activities: 'Morning birding around lakes. Drive to Goba, gateway to Bale Mountains National Park.' },
      { day: 6, title: 'Bale Mountains - Sanetti Plateau & Harenna Forest', activities: 'Full day birding in Bale: Sanetti Plateau (Ethiopian Wolf, Wattled Ibis, Rouget\'s Rail) and Harenna Forest (Abyssinian Owl, African Goshawk).' },
      { day: 7, title: 'Bale Mountains - Dinsho & Gaysay Grasslands', activities: 'Morning birding around Dinsho Lodge. Explore Gaysay Grasslands for Mountain Nyala, various raptors.' },
      { day: 8, title: 'Goba to Wendo Genet', activities: 'Drive to Wendo Genet, a birding hotspot. Forest and garden birding for turacos, hornbills, barbets.' },
      { day: 9, title: 'Wendo Genet to Yabelo', activities: 'Long drive south to Yabelo, a dry acacia habitat. Birding on route for unique southern endemics.' },
      { day: 10, title: 'Yabelo & Mega', activities: 'Birding around Yabelo and Mega for Stresemann\'s Bushcrow, White-tailed Swallow, Prince Ruspoli\'s Turaco.' },
      { day: 11, title: 'Yabelo to Addis Ababa', activities: 'Flight back to Addis Ababa. Farewell dinner.' },
      { day: 12, title: 'Departure', activities: 'Transfer to Bole International Airport.' },
    ],
    inclusions: [
      'All internal flights', 'Accommodation', 'All meals',
      'All park fees & permits', 'Expert birding guide', 'Private 4x4 vehicle',
      'Bottled water'
    ],
    exclusions: [
      'International flights', 'Visa fees', 'Travel insurance',
      'Personal expenses', 'Tips', 'Drinks', 'Camera fees'
    ],
  },
  {
    id: 'kilimanjaro-zanzibar',
    name: 'Kilimanjaro Climb & Zanzibar Beach',
    duration: '14 Days / 13 Nights',
    price: 'Starting from $4500',
    image: zanzibarBeachesImg, // Using Zanzibar image as placeholder, you might have a Kili specific one
    summary: 'Conquer Africa\'s highest peak, then unwind on the idyllic beaches of Zanzibar.',
    detailedDescription: 'This ultimate East African adventure combines the challenge of summiting Mount Kilimanjaro, Africa\'s highest freestanding mountain, with the serene reward of relaxing on Zanzibar\'s pristine beaches. The journey begins with a professionally guided trek up Kilimanjaro (Lemosho or Machame route), followed by transfers to the Spice Island for well-deserved relaxation and exploration.',
    highlights: ['Mount Kilimanjaro trek', 'Stone Town', 'Spice plantations', 'Zanzibar beaches'],
    itinerary: [
      { day: 1, title: 'Arrival Kilimanjaro Airport', activities: 'Transfer to Moshi. Briefing & gear check.' },
      { day: 2, title: 'Lemosho Gate to Mti Mkubwa Camp', activities: 'Trek through rainforest (3-4 hrs).' },
      { day: 3, title: 'Mti Mkubwa to Shira 2 Camp', activities: 'Trek through moorland (7-8 hrs).' },
      { day: 4, title: 'Shira 2 to Lava Tower to Barranco Camp', activities: 'Acclimatization day: climb Lava Tower (4600m), then descend to Barranco Camp (6-8 hrs).' },
      { day: 5, title: 'Barranco to Karanga Camp', activities: 'Trek up Barranco Wall, then across valleys (4-5 hrs).' },
      { day: 6, title: 'Karanga to Barafu Camp', activities: 'Ascend to Barafu Camp (4600m), preparation for summit night (3-4 hrs).' },
      { day: 7, title: 'Summit Day: Barafu to Uhuru Peak to Mweka Camp', activities: 'Midnight ascent to Uhuru Peak (5895m). Descend to Mweka Camp (12-16 hrs).' },
      { day: 8, title: 'Mweka Camp to Mweka Gate & Transfer to Moshi', activities: 'Final descent to gate (3-4 hrs). Receive certificates. Drive to Moshi.' },
      { day: 9, title: 'Fly Moshi to Zanzibar', activities: 'Transfer to Kilimanjaro Airport for flight to Zanzibar. Transfer to beach resort.' },
      { day: 10, title: 'Zanzibar Leisure & Stone Town', activities: 'Relax on beach. Afternoon: explore historical Stone Town.' },
      { day: 11, title: 'Zanzibar Spice Tour & Jozani Forest', activities: 'Morning Spice Tour. Afternoon: Jozani Forest (Red Colobus monkeys).' },
      { day: 12, title: 'Zanzibar Beach & Relaxation', activities: 'Full day leisure or optional water activities (snorkeling, diving).' },
      { day: 13, title: 'Zanzibar Beach & Leisure', activities: 'Full day at leisure.' },
      { day: 14, title: 'Departure Zanzibar', activities: 'Transfer to Zanzibar Airport for departure.' },
    ],
    inclusions: [
      'Kilimanjaro climb: Park fees, guides, porters, cooks, all meals on mountain, camping equipment (tents)',
      'Zanzibar: Airport transfers, B&B accommodation in resort',
      'Internal flights (JRO-ZNZ)', 'Bottled water on mountain'
    ],
    exclusions: [
      'International flights', 'Visa fees', 'Travel insurance',
      'Personal trekking gear', 'Sleeping bag', 'Tips/gratuities', 'Drinks', 'Optional tours'
    ],
  },
  {
    id: 'ethiopia-djibouti-coast',
    name: 'Ethiopia & Djibouti: Highlands to Red Sea',
    duration: '12 Days / 11 Nights',
    price: 'Starting from $2800',
    image: djiboutiCoastImg, // Use the imported image variable
    summary: 'Combine Ethiopia\'s historic route with the unique landscapes and Red Sea beauty of Djibouti.',
    detailedDescription: 'This unique itinerary seamlessly blends the ancient history and cultural richness of Ethiopia with the stark, surreal landscapes and vibrant marine life of neighboring Djibouti. Explore rock-hewn churches and castles, then transition to volcanic lakes, salt flats, and the crystal-clear waters of the Red Sea for snorkeling and relaxation.',
    highlights: ['Lalibela', 'Axum', 'Lake Assal (Djibouti)', 'Gulf of Tadjoura', 'Snorkeling/Diving'],
    itinerary: [
      { day: 1, title: 'Arrival Addis Ababa', activities: 'Meet & Greet. Explore National Museum. Overnight in Addis.' },
      { day: 2, title: 'Flight to Lalibela', activities: 'Explore the first group of rock-hewn churches.' },
      { day: 3, title: 'Lalibela Churches & Excursion', activities: 'Explore second group of churches. Optional Yemrehanna Kristos.' },
      { day: 4, title: 'Flight to Axum', activities: 'Explore Axum Stelae Field, Queen of Sheba\'s Palace.' },
      { day: 5, title: 'Axum to Adigrat', activities: 'Drive to Adigrat. Visit the impressive Gheralta churches.' },
      { day: 6, title: 'Adigrat to Mekelle', activities: 'Explore more Tigray churches. Drive to Mekelle.' },
      { day: 7, title: 'Flight Mekelle to Djibouti City', activities: 'Morning flight to Djibouti. Transfer to hotel. Afternoon city tour.' },
      { day: 8, title: 'Lake Assal & Grand Bara Desert', activities: 'Full day excursion to Lake Assal (lowest point in Africa) and Grand Bara Desert.' },
      { day: 9, title: 'Lake Abbe', activities: 'Full day trip to Lake Abbe, famous for its limestone chimneys and hot springs. Overnight camping near lake.' },
      { day: 10, title: 'Djibouti Coast & Tadjoura', activities: 'Morning back to Djibouti City. Drive to Tadjoura. Explore the city. Optional snorkeling.' },
      { day: 11, title: 'Moucha Islands Snorkeling', activities: 'Boat trip to Moucha Islands for snorkeling or diving in Red Sea. Lunch on island.' },
      { day: 12, title: 'Departure Djibouti', activities: 'Transfer to Djibouti Airport for international flight.' },
    ],
    inclusions: [
      'All internal flights', 'Accommodation', 'All meals',
      'All entrance fees & permits', 'English-speaking guides', 'Private transportation (4x4)',
      'Lake Abbe camping equipment', 'Moucha Islands boat trip'
    ],
    exclusions: [
      'International flights', 'Visa fees', 'Travel insurance',
      'Personal expenses', 'Tips', 'Drinks', 'Diving gear rental'
    ],
  },
];

export default toursData;