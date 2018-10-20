module.exports = {
  /*
  ** Build configuration
  */
  build: {},
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {},
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070',
    short_name: 'speedy'
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/onesignal',
    '@nuxtjs/pwa'
  ],
  oneSignal: {
    cdn: true,
    init: {
      appId: 'c62ce64e-13a5-46e9-bda8-bf0bb90bdebe',
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: false
      }
    }
  }
}
