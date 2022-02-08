import React from 'react'
import {render} from 'test/test.utils'
import {fireEvent} from '@testing-library/react-native'
import SearchBar from '.'

describe('BackgroundPokeBall', () => {
  test('should render correctly', () => {
    const onChangeTextMock = jest.fn()
    const {queryByPlaceholderText} = render(
      <SearchBar onChangeText={onChangeTextMock} />,
    )

    const placeholder = queryByPlaceholderText('Pesquisar')
    expect(placeholder).toBeTruthy()
    fireEvent.changeText(placeholder!, 'pokemon')
    expect(onChangeTextMock).toHaveBeenCalledWith('pokemon')
  })
})
