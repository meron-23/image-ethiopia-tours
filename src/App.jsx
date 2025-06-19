import React from 'react';
// Import Routes and Route from react-router-dom
import { Routes, Route } from 'react-router-dom';

// Import components that are always visible (Header, Footer)
import Header from './components/Header';
import Footer from './components/Footer';

// Import your new page components
import Home from './pages/Home'; // Your consolidated homepage sections
import AboutPage from './pages/About'; // Your dedicated detailed About page (from src/pages/About.jsx)
import PlanYourTrip from './pages/PlanYourTrip'; // Your dedicated detailed About page (from src/pages/About.jsx)
import ToursPackages from './pages/ToursPackages';
import TourDetailPage from './pages/TourDetail'; 
import EthiopiaPage from './pages/destinations/EthiopiaPage';
import DjiboutiPage from './pages/destinations/DjiboutiPage';
import KenyaPage from './pages/destinations/KenyaPage';
import TanzaniaPage from './pages/destinations/TanzaniaPage';
import ZanzibarPage from './pages/destinations/ZanzibarPage';
import DestinationsOverviewPage from './pages/DestinationsOverviewPage';
import InspirationOverviewPage from './pages/InspirationOverviewPage'; // The main hub
import BlogPage from './pages/inspiration/BlogPage';
import GalleryPage from './pages/inspiration/GalleryPage';
import ItinerariesPage from './pages/inspiration/ItinerariesPage';
import GuidesPage from './pages/inspiration/GuidesPage';



function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header /> {/* Header is always visible */}

      {/* Routes will display only one component based on the URL */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Renders Home page content at '/' */}
        <Route path="/about" element={<AboutPage />} /> {/* Renders AboutPage content at '/about' */}
        {/* Add more Route components here as you create more pages */}
        <Route path="/planYourTrip" element={<PlanYourTrip />} />
        <Route path="/tours-packages" element={<ToursPackages />} />
        <Route path="/tours/:tourId" element={<TourDetailPage />} />

        <Route path="/destinations" element={<DestinationsOverviewPage />} />

        <Route path="/destinations/ethiopia" element={<EthiopiaPage />} />
        <Route path="/destinations/djibouti" element={<DjiboutiPage />} />
        <Route path="/destinations/kenya" element={<KenyaPage />} />
        <Route path="/destinations/tanzania" element={<TanzaniaPage />} />
        <Route path="/destinations/zanzibar" element={<ZanzibarPage />} />

        <Route path="/inspiration" element={<InspirationOverviewPage />} />
        <Route path="/inspiration/blog" element={<BlogPage />} />
        <Route path="/inspiration/gallery" element={<GalleryPage />} />
        <Route path="/inspiration/itineraries" element={<ItinerariesPage />} />
        <Route path="/inspiration/guides" element={<GuidesPage />} />
      </Routes>

      <Footer /> {/* Footer is always visible */}
    </div>
  );
}

export default App;