/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/**
 * @format
 */

import {AppRegistry} from 'react-native'
import {server} from 'test/mocks/server'
import App from './App'
import {name as appName} from './app.json'

if (__DEV__) {
  require('react-native-url-polyfill/auto')
  server.listen()
}

AppRegistry.registerComponent(appName, () => App)
