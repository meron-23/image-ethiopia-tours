import React from 'react';

const NewsletterCTA = () => {
  return (
    <section className="py-20 md:py-24 bg-darkBg text-center text-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Explore?</h2>
        <p className="text-xl md:text-2xl mb-10 text-gray-200">
          Sign up for our newsletter to get exclusive deals and travel inspiration!
        </p>
        <form className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full md:flex-grow p-4 rounded-md border-none focus:ring-2 focus:ring-primary focus:outline-none text-gray-800"
            required
          />
          <button type="submit" className="btn btn-primary w-full md:w-auto text-lg px-8 py-4">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterCTA;