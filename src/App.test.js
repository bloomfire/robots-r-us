import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { container, getByText } = render(<App />);
  const title = getByText(/Robots-R-Us/i);
  expect(title).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
