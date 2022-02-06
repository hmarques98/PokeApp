import React from 'react';
import {render} from '@testing-library/react-native';
import HomeScreen from '.';

describe('HomeScreen', () => {
  it('should render correctly', () => {
    const {queryByText} = render(<HomeScreen />);
    expect(queryByText('HomeScreen')).toBeTruthy();
  });
});
