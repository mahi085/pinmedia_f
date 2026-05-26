/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#6B46C1', // Adjust to exact Pin Media purple
          blue: '#3B82F6',   // Adjust to exact Pin Media blue
          dark: '#111827',
          light: '#F9FAFB',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Or any clean geometric sans-serif
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
        'floating': '0 20px 50px -20px rgba(107, 70, 193, 0.15)',
      }
    },
  },
  plugins: [],
}