import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'webgems',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name:'theme-color', content: '#ffffff' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
      { rel:'manifest', href:'/site.webmanifest' },
      { rel:'icon', type:'image/png', sizes:'16x16', href:'/favicon-16x16.png' },
      { rel:'icon', type:'image/png', sizes:'32x32', href:'/favicon-32x32.png' },
      { rel:'apple-touch-icon', sizes:'76x76', href:'/apple-touch-icon.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-clipboard2',
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
