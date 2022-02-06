import {render as rtlRender} from '@testing-library/react-native'

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
