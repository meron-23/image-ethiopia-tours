import historicRouteImg from '../assets/ToursAndPackages/ethiopia_route.jpg';
import simienMountainsImg from '../assets/ToursAndPackages/trekking_semien_mountains.jpg';
import omoValleyImg from '../assets/ToursAndPackages/omo_valley.jpg';
import kenyaCardImg from '../assets/destinations/kenya.jpg';
import tanzaniaCardImg from '../assets/destinations/tanzania.jpg';

const blogData = [
  {
    id: 'simien-mountains-trek',
    image: historicRouteImg,
    title: 'A Week in the Simien Mountains',
    description: 'An exhilarating account of trekking through Ethiopia\'s stunning Simien Mountains, encountering Gelada baboons and breathtaking views.',
    route: '/inspiration/blog/simien-mountains-trek', // Placeholder for individual blog post page
    date: 'March 15, 2024',
    author: 'Travel Enthusiast',
  },
  {
    id: 'omo-valley-tribes',
    image: simienMountainsImg,
    title: 'Meeting the Tribes of Omo Valley',
    description: 'A profound cultural immersion exploring the unique traditions and daily lives of indigenous communities in Southern Ethiopia.',
    route: '/inspiration/blog/omo-valley-tribes',
    date: 'February 28, 2024',
    author: 'Cultural Explorer',
  },
  {
    id: 'maasai-mara-safari',
    image: omoValleyImg,
    title: 'Safari Thrills in the Maasai Mara',
    description: 'Recounting thrilling encounters with the Big Five and the epic spectacle of the Great Migration in Kenya.',
    route: '/inspiration/blog/maasai-mara-safari',
    date: 'January 10, 2024',
    author: 'Wildlife Photographer',
  },
  {
    id: 'historic-route-ethiopia',
    image: kenyaCardImg,
    title: 'Ethiopia\'s Historic Route: A Journey Through Time',
    description: 'Exploring the ancient rock-hewn churches of Lalibela, the castles of Gondar, and the obelisks of Axum.',
    route: '/inspiration/blog/historic-route-ethiopia',
    date: 'December 5, 2023',
    author: 'History Buff',
  },
  {
    id: 'zanzibar-spice-island',
    image: tanzaniaCardImg,
    title: 'Zanzibar: The Spice Island\'s Allure',
    description: 'Discovering the vibrant markets, fragrant spice farms, and pristine beaches of this East African gem.',
    route: '/inspiration/blog/zanzibar-spice-island',
    date: 'November 20, 2023',
    author: 'Beach Lover',
  },
];

export default blogData;