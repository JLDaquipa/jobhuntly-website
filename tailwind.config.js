/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '6xl': ['72px', '82px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
        clashDisplay: ['Clash Display', 'sans-serif'],
      },
      colors: {
        'primary': "#FFFFFF",
        "primary-blue": "#4640DE",
        "accent-blue": "#26A4FF",
        "accent-green": "#56CDAD",
        "accent-red": "#FF6550",
        "accent-yellow": "#FFB836",
        "neutral-100": "#25324B",
        "neutral-80": "#25324B",
        "neutral-60": "#7C8493",
        "neutral-40": "#A8ADB7",
        "neutral-20": "#D6DDEB",
        "lights-gray": "#F8F8FD",
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('assets/images/hero-background.svg')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}