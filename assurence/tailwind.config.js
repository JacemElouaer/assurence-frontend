module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
   
    screens: {
      '2xs': '290px',
      'xs': '340px',
      's' :  '540px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    container :{
      padding :  '1rem'
    },
    extend: {
      spacing: {
        '800': '800px',
        '500': '500px',
        '600': '600px',
        '150': "150px",
        '110' : '110px',
        '700': '700px',
        '750': '750px',
        '400': '400px',
        '300': '300px',
        '200': '200px',
        '100': '100px',
      }
    },
    fontFamily: {
      'font-p': ['Muli', 'Arial', 'sans-serif']
    },
  },
  plugins: [],
}
