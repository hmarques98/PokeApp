import React from 'react'
import {fireEvent, render} from 'test/test.utils'
import {CardPokemonItemProps} from './CardPokemonItem'
import CardPokemonItem from '.'

const props: CardPokemonItemProps = {
  name: 'Bulbassour',
  number: 1,
  tags: ['PAISON', 'FIRE'],
  onPressItem: jest.fn(),
  image:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png',
}

const makeSut = (newProps?: Partial<CardPokemonItemProps>) =>
  render(<CardPokemonItem {...props} {...newProps} />)
describe('CardPokemonItem', () => {
  test('SHOULD render correctly', () => {
    makeSut()
  })

  test('SHOULD render with props', () => {
    const {queryByText, queryByTestId} = makeSut()

    expect(queryByText(props.name)).toBeTruthy()

    expect(
      queryByText(`#${String(props.number).padStart(3, '00')}`),
    ).toBeTruthy()
    props.tags.forEach(tag => {
      expect(queryByText(tag)).toBeTruthy()
    })

    const image = queryByTestId('card-pokemon-item-image')
    expect(image).toBeTruthy()
  })
  test('SHOULD image have uri', () => {
    const {queryByTestId} = makeSut()
    const image = queryByTestId('card-pokemon-item-image')
    expect(image).toBeTruthy()
    expect(image).toHaveProp('source', {
      uri: props.image,
      height: 150,
      width: 150,
    })
  })

  test('SHOULD call onPressItem', () => {
    const {queryByText} = makeSut()
    const card = queryByText(props.name)
    expect(card).toBeTruthy()
    fireEvent.press(card!)
    expect(props.onPressItem).toHaveBeenCalled()
  })

  test('WHEN prop number is undefined SHOULD pokemon number TO BE "#000"', () => {
    const {queryByText} = makeSut({number: undefined})

    expect(queryByText('#000')).toBeTruthy()
  })

  test('WHEN prop tags is undefined SHOULD render correctly', () => {
    makeSut({tags: undefined})
  })
})
