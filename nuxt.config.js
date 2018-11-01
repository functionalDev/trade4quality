require('dotenv').config({ path: `.env${process.env.NODE_ENV === 'production' ? '.production' : ''}` });

module.exports = {
  /*
  ** Build configuration
  */
  build: {},
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    title: 't4q',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070',
    short_name: 'speedy',
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/onesignal',
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
  ],
  apollo: {
    clientConfigs: {
      // default: '../config/apolloClient.js',
      default: {
        // required
        httpEndpoint: process.env.HTTP_ENDPOINT,
        // optional
        // See https://www.apollographql.com/docs/link/links/http.html#options
        httpLinkOptions: {
          credentials: 'same-origin',
        },
        // You can use `wss` for secure connection (recommended in production)
        // Use `null` to disable subscriptions
        wsEndpoint: process.env.WS_ENDPOINT, // optional
        // LocalStorage token
        tokenName: 'apollo-token', // optional
        // Enable Automatic Query persisting with Apollo Engine
        persisting: false, // Optional
        // Use websockets for everything (no HTTP)
        // You need to pass a `wsEndpoint` for this to work
        websocketsOnly: false, // Optional
      },
      production: {
        httpEndpoint: 'http://localhost:5000/graphql',
      },
    },
  },
  oneSignal: {
    cdn: true,
    init: {
      appId: 'c62ce64e-13a5-46e9-bda8-bf0bb90bdebe',
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: false,
      },
    },
  },
};
