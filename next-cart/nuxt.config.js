const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
    server: {
        port: 8000, // default: 3000
        host: '0.0.0.0', // default: localhost
    },
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@assets/sass/app.sass'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/carousel.js', ssr: false },
    { src: '~/plugins/bootstrap-vue.js', ssr: false },
    { src: '~/plugins/tns.js', ssr: false },
    { src: '~/plugins/no-ssr-plugins.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    postcss: {
      plugins: {
        'postcss-import' :{},
        'postcss-cssnext' :{}
      }
    },
    extend(config, ctx) {
      
    }
  }
}
