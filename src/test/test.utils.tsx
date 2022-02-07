import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {render as rtlRender} from '@testing-library/react-native'

function render(ui: any, {...options} = {}) {
  // @ts-ignore
  const Wrapper = ({children}): ComponentType => (
    <NavigationContainer>{children}</NavigationContainer>
  )
  return rtlRender(ui, {
    wrapper: Wrapper,
    ...options,
  })
}

export * from '@testing-library/react-native'
// override React Testing Library's render with our own
export {render}
