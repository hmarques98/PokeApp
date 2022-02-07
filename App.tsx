import React from 'react'
import {Provider} from 'react-redux'

import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native'
import {useFlipper} from '@react-navigation/devtools'

import Routes from './src/navigation/Routes'
import {store} from 'services/store'

const App = () => {
  const navigationRef = useNavigationContainerRef()
  useFlipper(navigationRef)

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Routes />
      </NavigationContainer>
    </Provider>
  )
}

export default App
