/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens : {
        'xl' : {min : '1025px'},
        'lg' : {max : '1024px' , min : '769px'},
        'tab' : {max : '768px' , min : '426px'},
        'm-lg' : {max : '426px' , min : '376px'},
        'm-md' : {max : '376px' , min : '321px'},
        'm-sm' : {max : '320px' , min : '0px'}
      },
      animation: {
        slide: 'slide 3s linear infinite',
        bigSlide : 'big 5s linear 2s infinite',
        toggle : 'toggle 3s linear infinite'
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(350px)' },
        },
        toggle: {
          '0%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(90deg)' },
          '100%': { transform: 'rotateY(0deg)' },
        },
        big : {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(-1550px)' },
        }
      },
    },
  },
  plugins: [],
}
