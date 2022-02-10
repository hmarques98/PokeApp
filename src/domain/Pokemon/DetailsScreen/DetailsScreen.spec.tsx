import {useRoute} from '@react-navigation/native'
import React from 'react'
import {render} from 'test/test.utils'
import DetailsScreen from '.'

const mockUseRoute = useRoute as jest.Mock

const makeSut = () => {
  mockUseRoute.mockReturnValue({
    params: {id: 1},
  })
  return render(<DetailsScreen />)
}

describe('DetailsScreen', () => {
  it('should render correctly', () => {
    const {queryByText} = makeSut()
  })
})
