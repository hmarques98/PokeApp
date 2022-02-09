/* eslint-disable no-undef */
import '@testing-library/jest-native/extend-expect'
import {jest} from '@jest/globals'
import AbortController from 'abort-controller'
import {fetch, Headers, Request, Response} from 'cross-fetch'
import {server} from './src/test/mocks/server'
import 'react-native-gesture-handler/jestSetup'
// Setting global.Promise takes care of act warnings that may occur due to 2 waitFor,
// as suggested https://github.com/callstack/react-native-testing-library/issues/379

global.fetch = require('node-fetch')

beforeEach(() => {
  global.fetch = jest.fn((...args) => {
    console.warn('global.fetch needs to be mocked in tests', ...args)
    throw new Error('global.fetch needs to be mocked in tests')
  })
  jest.useFakeTimers('legacy')
})

beforeAll(() => {
  // Enable the mocking in tests.
  server.listen({onUnhandledRequest: 'error'})
})

afterEach(() => {
  // Reset any runtime handlers tests may use.
  server.resetHandlers()
})

afterAll(() => {
  // Clean up once the tests are done.
  server.close()
})

jest.mock('react-native-gesture-handler', () => {
  const View = require('react-native/Libraries/Components/View/View')
  return {
    Swipeable: View,
    DrawerLayout: View,
    State: {},
    ScrollView: View,
    Slider: View,
    Switch: View,
    TextInput: View,
    ToolbarAndroid: View,
    ViewPagerAndroid: View,
    DrawerLayoutAndroid: View,
    WebView: View,
    NativeViewGestureHandler: View,
    TapGestureHandler: View,
    FlingGestureHandler: View,
    ForceTouchGestureHandler: View,
    LongPressGestureHandler: View,
    PanGestureHandler: View,
    PinchGestureHandler: View,
    RotationGestureHandler: View,
    /* Buttons */
    RawButton: View,
    BaseButton: View,
    RectButton: View,
    BorderlessButton: View,
    /* Other */
    FlatList: View,
    gestureHandlerRootHOC: () => null,
    Directions: {},
  }
})

// surpressing warning resulted by useLinking due to usage of NavigationContainer
jest.mock('@react-navigation/native/lib/commonjs/useLinking.native', () => ({
  default: () => ({getInitialState: {then: () => null}}),
  __esModule: true,
}))

// surpressing Animated: `useNativeDriver` is not supported warning
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

// jest.mock('react-native-reanimated', () => {
//   const Reanimated = require('react-native-reanimated/mock')

//   // The mock for `call` immediately calls the callback which is incorrect
//   // So we override it with a no-op
//   Reanimated.default.call = () => {}

//   return Reanimated
// })

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')
