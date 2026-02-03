/**
 * @format
 */

import React from 'react';
import App from '../App';
import ReactTestRenderer from 'react-test-renderer';
import {it} from '@jest/globals';
// Note: import explicitly to use the types shipped with jest.
it('renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<App />);
  });
});