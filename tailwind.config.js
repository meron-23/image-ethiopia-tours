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
       primary: '#0D4740',

        // Secondary brand gold (main buttons, primary text highlights)
        secondary: '#C9B07E',

        // Accent brand gold (lighter highlights, hover states, secondary text)
        accent: '#E1CEAA',

        // Light background for content areas (for contrast with dark primary)
        lightBg: '#F5F5F5',

        // Remap existing generic dark/light background names to new theme colors
        // This makes it easier to replace throughout your components
        darkBg: '#0D4740', // Your main dark green
        
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