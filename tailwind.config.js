/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ground: '#1C5B74',
        ink: '#041e2e',
        accent: '#05F2DB',
        mist: '#B4ECEB',
        steel: '#6CA4AC',
        smoke: {
          dark: '#141414',
          mid: '#666666',
          light: '#D3D3D3',
        },
      },
      fontFamily: {
        head: ['Ubuntu', 'system-ui', 'sans-serif'],
        body: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
}
