import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from './Header';

afterEach(cleanup);

describe('components/Header', () => {
  it('renders with the default property', () => {
    const { getByText } = render(<Header />);
    expect(getByText('This is the Header (Red)')).toBeTruthy();
  });

  it('renders with the submitted property', () => {
    const { getByText } = render(<Header color="Blue" />);
    expect(getByText('This is the Header (Blue)')).toBeTruthy();
  });
});
