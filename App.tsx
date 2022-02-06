import React from 'react'

import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native'
import {useFlipper} from '@react-navigation/devtools'

import Routes from './src/navigation/Routes'

const App = () => {
  const navigationRef = useNavigationContainerRef()
  useFlipper(navigationRef)

  return (
    <NavigationContainer ref={navigationRef}>
      <Routes />
    </NavigationContainer>
  )
}

export default App
