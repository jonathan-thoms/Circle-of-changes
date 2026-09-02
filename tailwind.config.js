/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-ocean': '#114B5F',
        'teal-green': '#317B78',
        'sky-renewal': '#A3D9FF',
        'sand-beige': '#EDE4D4',
        'charcoal-ink': '#1F1F1F',
        'impact-green': '#1A7F5A',
        'eco-cream': '#F3F1EC',
        'recycled-navy': '#123154',
        'regen-mint': '#9FE7C1',
        'lavender-gray': '#D2D7E3',
        // EarthShare Exact DNA Colors
        'earth-yellow': '#FFD000',
        'earth-coral': '#E05A2B',
        'earth-teal': '#1B7B87',
        'earth-dark': '#0B0C0C',
        'earth-canvas': '#F4F5F6',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
        script: ['var(--font-caveat)', 'Caveat', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
