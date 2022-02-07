import React from 'react'
import {render} from 'test/test.utils'
import HomeScreen from '.'

describe('HomeScreen', () => {
  it('should render correctly', () => {
    const {queryByText} = render(<HomeScreen />)
    // expect(queryByText('Pokedex')).toBeTruthy()
  })
})
