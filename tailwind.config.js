/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // This line tells Tailwind to scan ALL files
    // within the 'src' directory and its subdirectories
    // that end with .js, .ts, .jsx, or .tsx.
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom colors for your brand
      colors: {
        primary: '#007bff', // A vibrant blue, common for primary CTAs
        secondary: '#6c757d', // A muted grey, good for secondary actions or text
        accent: '#ffc107', // A warm yellow/orange, for highlights
        darkBg: '#222', // Dark background for footer/newsletter
        lightBg: '#f9f9f9', // Light background for sections
      },
      // Custom keyframes for animations
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' }, // Starts invisible and slightly down
          '100%': { opacity: '1', transform: 'translateY(0)' },  // Ends fully visible at original position
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' }, // Moves up
          '50%': { transform: 'none', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' }, // Moves down
        }
      },
      // Apply the keyframes as Tailwind animation utilities
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards', // 1s duration, ease-out timing, stays at end state
        'bounce': 'bounce 1s infinite', // 1s duration, repeats infinitely
      },
    },
  },
  plugins: [],
}