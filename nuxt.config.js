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
      default: '../config/apolloClient.js',
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
