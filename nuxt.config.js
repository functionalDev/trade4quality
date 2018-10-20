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
    init: {
      appId: 'MmI3M2YyMzgtNjVjNi00MDUyLTlkY2ItNWYyYjI4MjUxY2Q5',
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: false
      }
    }
  }
}
