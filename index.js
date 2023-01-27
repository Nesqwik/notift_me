'use strict'
// Views

module.exports = async () => {
  return {
    views: {
      main: require('./views/main'),
      home: require('./views/home'),
      menu: require('./views/menu'),
    },
    listeners: {
      notify: require('./listeners/notify'),
      onEnvStart: require('./listeners/onEnvStart'),
      onSessionStart: require('./listeners/onSessionStart'),
      onUserFirstJoin: require('./listeners/onUserFirstJoin')
    },
    rootView: 'main'
  }
}