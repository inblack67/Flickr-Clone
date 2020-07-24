import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('App.js', () => {
  it('renders App.js', () => {
    const { asFragment } = render(<App />)
    expect(asFragment).toMatchSnapshot();
  })
})
