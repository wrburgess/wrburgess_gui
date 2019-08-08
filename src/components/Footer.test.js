import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Footer from './Footer';

afterEach(cleanup);

const { getByText } = render(<Footer />);
describe('components/Footer', () => {
  it('renders', () => {
    expect(getByText('This is the Footer (Blue)')).toBeTruthy();
  });
});
