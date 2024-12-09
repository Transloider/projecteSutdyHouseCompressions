/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./*.html", "./App/*.html"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'green': '#7BDCB5',
      'darkGreen': '#1ABC9C',
      'whiteBackgroun': '#F9EAE1',
      'whiteBackground': '#fff',
      'BlackBackground': '#000',
      'blueBackground': '#0084FF',
      'redBackground': '#FF0000',
      'whiteContainer': '#fafafa',
      'grey': '#d4d4d4',
      'darkGrey': '#a1a1a1'

    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      rubik: ['Rubik Mono One', 'sans-serif'],
      rosarivo: ['Rosarivo', 'sans-serif'],
      roboto_Medium: ['Roboto-medium', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif']
    },
  },
  plugins: [],
};
