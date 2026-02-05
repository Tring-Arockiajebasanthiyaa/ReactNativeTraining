/**
 * @format
 */

import React from 'react';
import App from '../App';
import ReactTestRenderer from 'react-test-renderer';
import { it, describe, beforeEach } from '@jest/globals';
import AsyncStorage from '@react-native-async-storage/async-storage';

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly when user exists', async () => {
    const mockUser = { email: 'test@example.com', username: 'testuser', password: '123' };
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(JSON.stringify(mockUser));

    await ReactTestRenderer.act(async () => {
      ReactTestRenderer.create(<App />);
      // Wait for async operations to complete
      await new Promise(resolve => setTimeout(resolve, 100));
    });
  });

  it('renders correctly when no user exists', async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(null);

    await ReactTestRenderer.act(async () => {
      ReactTestRenderer.create(<App />);
      // Wait for async operations to complete
      await new Promise(resolve => setTimeout(resolve, 100));
    });
  });
});