import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Baysallar Mobilya navigation and header without crashing', () => {
  const { getAllByText } = render(<App />);
  const logoElements = getAllByText(/BAYSALLAR/i);
  expect(logoElements.length).toBeGreaterThan(0);
});
