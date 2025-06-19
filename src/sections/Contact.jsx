import React from 'react';
import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons/instagram.svg';
import twitter from '../assets/icons/twitter.svg';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="contact-info">
            <p className="text-lg text-gray-700 mb-6">
              Have questions or ready to book your adventure? Reach out to us through the details below or fill out the contact form.
            </p>
            <ul className="text-gray-800 space-y-3 mb-8 text-lg">
              <li><strong>Email:</strong> <a href="mailto:info@imageethiopiatours.com" className="text-primary hover:underline">info@imageethiopiatours.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:+2519XXXXXXXX" className="text-primary hover:underline">+251 9XX XXX XXXX</a></li>
              <li><strong>Address:</strong> Your Office Address, Addis Ababa, Ethiopia</li>
            </ul>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 hover:bg-primary transition-colors duration-300 group">
                {/* Replace with actual SVG or Font Awesome icon */}
                <img src={facebook} alt="Facebook" className="w-6 h-6 group-hover:filter group-hover:brightness-0 group-hover:invert" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 hover:bg-primary transition-colors duration-300 group">
                <img src={instagram} alt="Instagram" className="w-6 h-6 group-hover:filter group-hover:brightness-0 group-hover:invert" />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 hover:bg-primary transition-colors duration-300 group">
                <img src={twitter} alt="Twitter" className="w-6 h-6 group-hover:filter group-hover:brightness-0 group-hover:invert" />
              </a>
            </div>
          </div>
          <div className="contact-form">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject (Optional)"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Your Message</label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  rows="6"
                  className="w-full p-3 border border-gray-300 rounded-md resize-y focus:ring-primary focus:border-primary transition-all duration-200"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full text-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;