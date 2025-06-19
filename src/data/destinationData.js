// src/data/destinationsData.js

import ethiopiaCardImg from '../assets/destinations/ethiopia.jpg'; // Example path for small card images
import djiboutiCardImg from '../assets/destinations/djibouti.jpg';
import kenyaCardImg from '../assets/destinations/kenya.jpg';
import tanzaniaCardImg from '../assets/destinations/tanzania.jpg';
import zanzibarCardImg from '../assets/destinations/zanzibar.jpg';

const destinationsData = [
  {
    id: 'ethiopia',
    image: ethiopiaCardImg,
    title: 'Ethiopia',
    description: 'A land of ancient history, unique cultures, and dramatic landscapes.',
    route: '/destinations/ethiopia', // This is the route to its dedicated page
  },
  {
    id: 'djibouti',
    image: djiboutiCardImg,
    title: 'Djibouti',
    description: 'Explore otherworldly volcanic landscapes and the vibrant Red Sea.',
    route: '/destinations/djibouti',
  },
  {
    id: 'kenya',
    image: kenyaCardImg,
    title: 'Kenya',
    description: 'Witness the iconic wildlife safaris and diverse natural beauty.',
    route: '/destinations/kenya',
  },
  {
    id: 'tanzania',
    image: tanzaniaCardImg,
    title: 'Tanzania',
    description: 'Home to the Serengeti, Kilimanjaro, and rich cultural heritage.',
    route: '/destinations/tanzania',
  },
  {
    id: 'zanzibar',
    image: zanzibarCardImg,
    title: 'Zanzibar',
    description: 'Relax on pristine beaches and explore the historic Stone Town.',
    route: '/destinations/zanzibar',
  },
];

export default destinationsData;