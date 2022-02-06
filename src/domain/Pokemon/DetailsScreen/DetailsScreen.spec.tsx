import React from 'react'
import {render} from 'test/test.utils'
import DetailsScreen from '.'

describe('DetailsScreen', () => {
  it('should render correctly', () => {
    const {queryByText} = render(<DetailsScreen />)
    expect(queryByText('DetailsScreen')).toBeTruthy()
  })
})
