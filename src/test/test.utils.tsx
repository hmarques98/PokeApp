import React, {FunctionComponent} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {render as rtlRender} from '@testing-library/react-native'
import {Provider} from 'react-redux'
import {store} from 'services/store'
import {renderHook} from '@testing-library/react-hooks'
import {setupApiStore} from './setupApiStore'

function render(ui: any, {...options} = {}) {
  const wrapper = ({children}: React.PropsWithChildren<FunctionComponent>) => (
    <Provider store={store}>
      <NavigationContainer>{children}</NavigationContainer>
    </Provider>
  )
  return rtlRender(ui, {
    wrapper,
    ...options,
  })
}

const customRenderHook = <T,>(
  hook: (props: never) => T,
  apiReduxStore?: any,
) => {
  const wrapper = ({children}: React.PropsWithChildren<never>) => {
    const storeRef = setupApiStore(apiReduxStore)
    return <Provider store={storeRef.store}>{children}</Provider>
  }

  return renderHook(hook, {
    wrapper,
  })
}

export * from '@testing-library/react-native'
// override React Testing Library's render with our own
export {render, customRenderHook}
