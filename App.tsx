import React from 'react'
import {Provider} from 'react-redux'

import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native'
import {useFlipper} from '@react-navigation/devtools'

import {store} from 'services/store'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import Routes from './src/navigation/Routes'

const App = () => {
  const navigationRef = useNavigationContainerRef()
  useFlipper(navigationRef)

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer ref={navigationRef}>
          <Routes />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  )
}

export default App
