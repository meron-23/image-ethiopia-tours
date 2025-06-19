// src/data/inspirationData.js

// Import your inspiration card images here
import blogCardImg from '../assets/inspiration/tour_blog.jpg'; // Example image
import galleryCardImg from '../assets/inspiration/gallery.jpg'; // Example image
import itinerariesCardImg from '../assets/inspiration/itinerary.jpg'; // Example image
import guidesCardImg from '../assets/inspiration/guide.jpg'; // Example image

const inspirationData = [
  {
    id: 'travel-stories-blog',
    image: blogCardImg,
    title: 'Travel Stories & Blog',
    description: 'Dive into captivating narratives, personal adventures, and cultural insights from our journeys.',
    route: '/inspiration/blog', // Route to the blog detail page
  },
  {
    id: 'photo-video-gallery',
    image: galleryCardImg,
    title: 'Photo & Video Gallery',
    description: 'Immerse yourself in stunning visuals of breathtaking landscapes, wildlife, and vibrant cultures.',
    route: '/inspiration/gallery', // Route to the gallery detail page
  },
  {
    id: 'featured-itineraries',
    image: itinerariesCardImg,
    title: 'Featured Itineraries',
    description: 'Explore curated travel plans, offering unique perspectives and optimized routes for unforgettable trips.',
    route: '/inspiration/itineraries', // Route to the itineraries detail page
  },
  {
    id: 'travel-guides-articles',
    image: guidesCardImg,
    title: 'Travel Guides & Articles',
    description: 'Find practical tips, destination insights, cultural etiquette, and essential planning advice.',
    route: '/inspiration/guides', // Route to the guides detail page
  },
];

export default inspirationData;