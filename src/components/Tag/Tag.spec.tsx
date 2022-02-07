import React from 'react'
import {render} from 'test/test.utils'
import Tag from '.'

describe('Tag', () => {
  test('SHOULD render label prop ', () => {
    const text = 'POKEMON'
    const {queryByText} = render(<Tag label={text} />)

    expect(queryByText(text)).toBeTruthy()
  })
})
