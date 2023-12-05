/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT"
export default withMT(
  {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '19.5px'],
        lg: ['18px', '160%'],
        xl: ['20px', '24.38px'],
        '2xl': ['24px', '29.26px'],
        '3xl': ['28px', '50px'],
        '4xl': ['48px', '58px'],
        '6xl': ['72px', '82px'],
        '8xl': ['96px', '106px']
      },
      screens:{
        'sm': '640px',
        'max-sm': {'max': '639px'},
        'min-sm': {'min': '639px'},
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        'max-md': {'max': '768px'},
        'min-md': {'min': '768px'},
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        'max-lg': {'max': '1024px'},
        'min-lg': {'min': '1024px'},
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        'max-xl': {'max': '1280px'},
        'min-xl': {'min': '1280px'},
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        'max-2xl': {'max': '1536px'},
        'min-2xl': {'min': '1536px'},
        // => @media (min-width: 1536px) { ... }
      },
      extend: {
        fontFamily: {
          epilogue: ['Epilogue', 'sans-serif'],
          clashDisplay: ['Clash Display', 'sans-serif'],
        },
        colors: {
          "brand-primary": "#4640DE",
          "brand-secondary": "#CCCCF5",
          "brand-tertiary": "#E7F6FD",
          "accent-blue": "#26A4FF",
          "accent-green": "#56CDAD",
          "accent-red": "#FF6550",
          "accent-yellow": "#FFB836",
          "accent-purple": "#7B61FF",
          "neutral-100": "#25324B",
          "neutral-80": "#515B6F",
          "neutral-60": "#7C8493",
          "neutral-40": "#A8ADB7",
          "neutral-20": "#D6DDEB",
          "neutral-10": "#F9FAFC",
          "neutral-0": "#F8F8FD",
        },
        boxShadow: {
          '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
        },
        backgroundImage: {
          'hero': "url('assets/images/hero_background.svg')",
        },
        screens: {
          "wide": "1440px"
        }
      },
    },
    plugins: [],
  }
)