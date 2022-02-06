import React from 'react'
import {render} from '@testing-library/react-native'
import DetailsScreen from '.'

describe('DetailsScreen', () => {
  it('should render correctly', () => {
    const {queryByText} = render(<DetailsScreen />)
    expect(queryByText('DetailsScreen')).toBeTruthy()
  })
})
