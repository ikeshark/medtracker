module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    mode: 'all',
    content: ['./src/**/*.svelte', './src/**/*.html'],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
