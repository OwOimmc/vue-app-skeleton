module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '32em',
      sm: '48em',
      md: '60em',
      lg: '77em',
      xl: '90em',
      xxlg: '104em',
      xxxlg: '121em'
    },

    colors: {
      white: '#fff',
      black: '#000'
    },

    extend: {
      maxWidth: {},
      borderRadius: {}
    },

    spacing: {
      50: '5rem'
    }
  },

  variants: {
    extend: {}
  },
  plugins: [],
  corePlugins: {
    container: false
  }
}
