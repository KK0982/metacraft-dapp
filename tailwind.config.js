module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'f7f8fc': '#F7F8FC',
        '222f40': '#222F40',
        '1b2533': '#1B2533',
        'fff': '#fff'
      },
      fontSize: {
        20: '5rem',
        24: '6rem',
      },
      lineHeight: {
        28: '7rem',
        32: '8rem',
      },
      spacing: {
        18: '4.5rem',
        20: '5rem',
        28: '7rem',
        72: '18rem',
      },
      boxShadow: {
        DEFAULT: "0 20px 40px 10px rgba(244, 244, 244, 0.2)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
