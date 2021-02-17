import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders employee directory', () => {
  const { getByText, getByTestId } = render(<App />);
  expect(getByText('Robots-R-Us')).toBeVisible()
  expect(getByTestId('employee-table')).toBeVisible()
});
