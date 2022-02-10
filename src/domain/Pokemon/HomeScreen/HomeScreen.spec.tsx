import React from 'react'
import {fireEvent, render} from 'test/test.utils'
import HomeScreen from '.'

const makeSut = () => render(<HomeScreen />)
describe('HomeScreen', () => {
  test('SHOULD render correctly', () => {
    makeSut()
  })

  test('SHOULD show the header', () => {
    const {queryByText} = makeSut()

    expect(queryByText('Pokedex')).toBeTruthy()
  })

  test('SHOULD press on search bar and type', () => {
    const {queryByTestId} = makeSut()
    const searchBarID = queryByTestId('home-screen-searchBar')
    const pokemonName = 'bubalsour'

    expect(searchBarID).toBeTruthy()
    expect(searchBarID).toHaveProp('value', '')

    fireEvent.changeText(searchBarID!, pokemonName)
    expect(queryByTestId('home-screen-searchBar')).toHaveProp(
      'value',
      pokemonName,
    )
  })
})
