/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/**
 * @format
 */

import {AppRegistry} from 'react-native'
import App from './App'
import {name as appName} from './app.json'

if (process.env.NODE_ENV === 'development') {
  require('react-native-url-polyfill/auto')
  const {server} = require('./src/test/mocks/server')

  server.listen()
}

AppRegistry.registerComponent(appName, () => App)
