/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          blue: '#324157',
          lightBlue: '#3A71A8',
          red: '#C03639',
          pink: '#E65D6E',
          green: '#30B08F',
          tiffany: '#4AB7BD',
          yellow: '#FEC171',
          panGreen: '#30B08F',

          primary: '#409EFF',
          success: '#67C23A',
          warning: '#E6A23C',
          danger: '#F56C6C',
          info: '#909399',
        },
        'logoTitleColor': '#ffffff',
        'logoTitleColorLight': '#001529',
        'menuColor': '#bfcbd9',
        'menuColorLight': 'rgba(0, 0, 0, 0.7)',
        'subMenuHover': '#001528',
        'menuColorActive': '#f4f4f5',
      },
      backgroundColor: {
        'menuBackground': '#304156',
        'menuBackgroundLight': '#ffffff',
        'subMenuBackground': '#1f2d3d',
      },
      width: {
        base: {
          sidebar: '200px'
        }
      }
    },
  },
  plugins: [],
}

