module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fyatu-primary': '#95137B',
        'fyatu-light': '#95137b1f',
        'fyatu-light-1': '#95137b0a',
        'fyatu-blue-light': '#0369a10f'
      },
      screens: {
        'phone': {
          'max': '300px'
        },
        'lgphone': {
          'max': '600px'
        },
      },
    },
  },
  plugins: [],
}