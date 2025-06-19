import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-darkBg text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-primary transition-colors duration-300">About Us</a></li>
              <li><a href="#tours-packages" className="text-gray-300 hover:text-primary transition-colors duration-300">Our Tours</a></li>
              <li><a href="#destinations" className="text-gray-300 hover:text-primary transition-colors duration-300">Destinations</a></li>
              <li><a href="#inspiration" className="text-gray-300 hover:text-primary transition-colors duration-300">Blog</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors duration-300">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors duration-300">Cookies Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary">Contact Us</h3>
            <p className="text-gray-300 mb-2">Image Ethiopia Tours</p>
            <p className="text-gray-300 mb-2">Your Office Address</p>
            <p className="text-gray-300 mb-2">Addis Ababa, Ethiopia</p>
            <p className="text-gray-300 mb-2">Email: <a href="mailto:info@imageethiopiatours.com" className="hover:text-primary transition-colors duration-300">info@imageethiopiatours.com</a></p>
            <p className="text-gray-300">Phone: <a href="tel:+2519XXXXXXXX" className="hover:text-primary transition-colors duration-300">+251 9XX XXX XXXX</a></p>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700 hover:bg-primary transition-colors duration-300">
                {/* Replace with actual SVG or Font Awesome icon */}
                <img src="https://via.placeholder.com/30x30?text=FB" alt="Facebook" className="w-6 h-6 filter invert" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700 hover:bg-primary transition-colors duration-300">
                <img src="https://via.placeholder.com/30x30?text=IG" alt="Instagram" className="w-6 h-6 filter invert" />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700 hover:bg-primary transition-colors duration-300">
                <img src="https://via.placeholder.com/30x30?text=TW" alt="Twitter" className="w-6 h-6 filter invert" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Image Ethiopia Tours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;