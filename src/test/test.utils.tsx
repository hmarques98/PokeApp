/* eslint-disable no-undef */
import React, {FunctionComponent, PropsWithChildren} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {render as rtlRender, RenderOptions} from '@testing-library/react-native'
import {Provider} from 'react-redux'
import {RootState, store as reduxStore} from 'services/store'
import {renderHook} from '@testing-library/react-hooks'
import {PreloadedState} from '@reduxjs/toolkit'
import {setupApiStore} from './setupApiStore'

function render(ui: any, {...options} = {}) {
  const wrapper = ({children}: React.PropsWithChildren<FunctionComponent>) => (
    <Provider store={reduxStore}>
      <NavigationContainer>{children}</NavigationContainer>
    </Provider>
  )
  return rtlRender(ui, {
    wrapper,
    ...options,
  })
}

const customRenderHook = <T,>(
  hook: (props?: never) => T,
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

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: any
}

function renderWithProviders(
  ui: React.ReactElement,
  {store, ...renderOptions}: ExtendedRenderOptions = {},
) {
  const Wrapper = ({children}: PropsWithChildren<{}>): JSX.Element => (
    <Provider store={store}>
      <NavigationContainer>{children}</NavigationContainer>
    </Provider>
  )
  return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})}
}

export {renderWithProviders}
