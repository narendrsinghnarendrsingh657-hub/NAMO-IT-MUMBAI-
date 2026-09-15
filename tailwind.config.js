/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0A0A0B',
          900: '#121214',
          800: '#1B1B1E',
          700: '#28282C',
          600: '#3A3A40',
          500: '#57575F',
          400: '#7A7A82',
          300: '#A3A3AA',
          200: '#D4D4D8',
          100: '#ECECEF',
          50: '#F7F7F8'
        },
        steel: {
          900: '#0F2436',
          800: '#163349',
          700: '#1F4560',
          600: '#2A5A7A',
          500: '#3B7299',
          400: '#5C93B8',
          300: '#8FB8D4',
          200: '#C3DBEA',
          100: '#E4EFF6'
        }
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif']
      },
      maxWidth: {
        content: '1240px'
      }
    }
  },
  plugins: []
}
