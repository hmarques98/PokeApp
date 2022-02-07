import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {render as rtlRender} from '@testing-library/react-native'
import {Provider} from 'react-redux'
import {store} from 'services/store'

function render(ui: any, {...options} = {}) {
  // @ts-ignore
  const Wrapper = ({children}): ComponentType => (
    <Provider store={store}>
      <NavigationContainer>{children}</NavigationContainer>
    </Provider>
  )
  return rtlRender(ui, {
    wrapper: Wrapper,
    ...options,
  })
}

export * from '@testing-library/react-native'
// override React Testing Library's render with our own
export {render}
