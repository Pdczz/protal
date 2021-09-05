import * as webpack from "webpack";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'protal',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet' ,href: '/css/bootstrap.min.css'},
      {rel: 'stylesheet' ,href: '/css/style.css'},
      {rel: 'stylesheet' ,href: '/css/nprogress.css'},

    ],
    script: [
      {src:'/js/jquery-2.1.4.min.js'},
      {src: '/js/bootstrap.min.js'},
      {src: '/js/easyform.js'},
      {src: '/js/html5shiv.min.js'},
      {src: '/js/nprogress.js'},
      {src: '/js/respond.min.js'},
      {src: '/js/selectivizr-min.js'},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // {src: '@/plugins/element-ui', ssr: true},
    {src: '~/plugins/router',ssr: false},
    {src: '~plugins/mavon-editor', ssr: false},
    '@/plugins/axios'
  ],
  axios:{
    proxy:true
  },
  proxy:{
    '/api/':{
      target:'http://localhost:9090',
      changeOrigin:true
    }
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/axios',
    'cookie-universal-nuxt'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build


  build: {
    vendor: 'axios'
  },

}
