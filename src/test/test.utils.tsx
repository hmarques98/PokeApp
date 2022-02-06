import React from 'react'
import {render as rtlRender} from '@testing-library/react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'

function render(ui: any, {...options} = {}) {
  // @ts-ignore
  // const Wrapper = ({children}): ComponentType => (
  //   <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>
  // )
  // @ts-ignore
  return rtlRender(ui, {
    // wrapper: Wrapper,
    ...options,
  })
}

export * from '@testing-library/react-native'
// override React Testing Library's render with our own
export {render}

const Stack = createNativeStackNavigator()

export const renderWithNavigation = ({
  screens = {},
  navigatorConfig = {},
} = {}) =>
  render(
    <NavigationContainer>
      <Stack.Navigator {...navigatorConfig}>
        {Object.keys(screens).map(name => (
          // @ts-ignore
          <Stack.Screen key={name} name={name} component={screens[name]} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>,
  )
