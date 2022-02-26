module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      screens: {
        sm: '960px',
        md: '960px',
        xl: '960px',
        '2xl': '960px',
      },
    },
    borderRadius: {
      15: '3.75rem',
    },
    extend: {
      colors: {
        f7f8fc: '#F7F8FC',
        '222f40': '#222F40',
        '1b2533': '#1B2533',
        ea4e34: '#EA4E34',
        '1a1b20': '#1A1B20',
        '2539f4': '#2539F4',
        f3efff: '#F3EFFF',
        fff9ec: '#FFF9EC',
        ffc75d: '#FFC75D',
        e8fff1: '#E8FFF1',
        '26c165': '#26C165',
        f7f8fc: '#F7F8FC',
        333: '#333',
        fff: '#fff',
        '2e2e2e': '#2e2e2e',
        error: '#B00020',
      },
      fontSize: {
        14: '3.5rem',
        16: '4rem',
        18: '4.5rem',
        20: '5rem',
        22: '5.5rem',
        24: '6rem',
        32: '8rem',
      },
      lineHeight: {
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        40: '10rem',
      },
      spacing: {
        8: '2rem',
        16: '4rem',
        18: '4.5rem',
        20: '5rem',
        28: '7rem',
        32: '8rem',
        40: '10rem',
        50: '12.5rem',
        72: '18rem',
      },
      boxShadow: {
        DEFAULT: '0 20px 40px 10px rgba(244, 244, 244, 0.2)',
      },
      borderRadius: {
        DEFAULT: '8px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
