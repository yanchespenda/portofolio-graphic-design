module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['"Poppins"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      'serif': ['"Poppins"', 'ui-serif', 'Georgia'],
      'display': ['"Poppins"', 'sans-serif'],
      'body': ['"Poppins"', 'sans-serif'],
    },
    color: {
      'base-primary': 'var(--primary)',
      'base-secondary': 'var(--secondary)'
    },
    extend: {
      // color: {
      //   'primary': '#080B1A',
      //   'secondary': '#9E8B7A'
      // },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
