import React from 'react'
import {render} from 'test/test.utils'
import HomeScreen from '.'

const makeSut = () => render(<HomeScreen />)
describe('HomeScreen', () => {
  it('should render correctly', () => {
    const {queryByText, debug} = makeSut()
    debug()
  })
})
