import React from 'react'
import {Text} from 'react-native'
import {render} from 'test/test.utils'
import BackgroundPokeBall from '.'

describe('BackgroundPokeBall', () => {
  test('SHOULD render correctly', () => {
    render(<BackgroundPokeBall />)
  })

  test('SHOULD render with children', () => {
    const text = 'POKEMON'
    const {queryByText} = render(
      <BackgroundPokeBall>
        <Text>{text}</Text>
      </BackgroundPokeBall>,
    )

    expect(queryByText(text)).toBeTruthy()
  })
})
