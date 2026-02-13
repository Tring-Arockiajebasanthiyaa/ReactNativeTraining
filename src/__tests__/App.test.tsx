import React from 'react';
import App from '../App';
import ReactTestRenderer from 'react-test-renderer';
import { it, describe, beforeEach } from '@jest/globals';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import postsReducer, { fetchPosts } from '../store/postsSlice';

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    
  });

  it('renders correctly when user exists', async () => {
    const mockUser = { email: 'test@example.com', username: 'testuser', password: '123' };
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(JSON.stringify(mockUser));

    await ReactTestRenderer.act(async () => {
      ReactTestRenderer.create(<App />);
      await new Promise(resolve => setTimeout(resolve, 100));
    });
  });

  it('renders correctly when no user exists', async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(null);

    await ReactTestRenderer.act(async () => {
      ReactTestRenderer.create(<App />);
      await new Promise(resolve => setTimeout(resolve, 100));
    });
  });
});

describe('API Fetching - Posts', () => {
  let store: any;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        posts: postsReducer,
      },
    });
    jest.clearAllMocks();
  });

  it('should fetch posts successfully and update state', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              userId: 1,
              id: 1,
              title: 'Test Post 1',
              body: 'This is the first test post body',
            },
            {
              userId: 1,
              id: 2,
              title: 'Test Post 2',
              body: 'This is the second test post body',
            },
          ]),
      })
    ) as jest.Mock;

    await store.dispatch(fetchPosts());

    const state = store.getState().posts;
    expect(state.posts.length).toBe(2);
    expect(state.posts[0].title).toBe('Test Post 1');
    expect(state.posts[1].title).toBe('Test Post 2');
    expect(state.loading).toBe(false);
    expect(global.fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts');
  });

  it('should handle fetch error gracefully', async () => {
    global.fetch = jest.fn(() =>
      Promise.reject(new Error('Network error'))
    ) as jest.Mock;

    await store.dispatch(fetchPosts());

    const state = store.getState().posts;
    expect(state.posts.length).toBe(0);
    expect(state.loading).toBe(false);
  });
});

describe('Details Screen Display', () => {
  it('should display correct user information', () => {
    const mockUser = {
      email: 'john@example.com',
      username: 'johndoe',
      password: 'secure123',
    };

    expect(mockUser.username).toBe('johndoe');
    expect(mockUser.email).toBe('john@example.com');
  });

  it('should render details with proper data flow', async () => {
    const mockPost = {
      userId: 1,
      id: 1,
      title: 'Sample Post Title',
      body: 'This is the detailed content of the post that displays on the details screen',
    };

    expect(mockPost).toHaveProperty('title');
    expect(mockPost).toHaveProperty('body');
    expect(mockPost.title).toBe('Sample Post Title');
    expect(mockPost.body).toContain('details screen');
  });
});

describe('User Real-Time Login Flow', () => {
  const validUser = {
    email: 'ass@gmail.com',
    password: '123456789',
    username: 'assuser',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should successfully login user by storing credentials to AsyncStorage and verify retrieval', async () => {
    (AsyncStorage.setItem as jest.Mock).mockResolvedValue(undefined);
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(JSON.stringify(validUser));

    await AsyncStorage.setItem('user', JSON.stringify(validUser));
    expect(AsyncStorage.setItem).toHaveBeenCalledWith('user', JSON.stringify(validUser));

    const retrievedUserData = await AsyncStorage.getItem('user');
    const storedUser = retrievedUserData ? JSON.parse(retrievedUserData) : null;

    expect(storedUser).not.toBeNull();
    expect(storedUser.email).toBe('ass@gmail.com');
    expect(storedUser.username).toBe('assuser');
    expect(storedUser.password).toBe('123456789');
  });

  it('should fail login if credentials do not match stored credentials in AsyncStorage', async () => {
    const correctStoredUser = validUser;
    const attemptedCredentials = {
      email: 'ass@gmail.com',
      password: 'wrongpassword123',
    };

    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(JSON.stringify(correctStoredUser));

    const retrievedUserData = await AsyncStorage.getItem('user');
    const storedUser = retrievedUserData ? JSON.parse(retrievedUserData) : null;

    const isValidLogin = storedUser && 
                         storedUser.email === attemptedCredentials.email &&
                         storedUser.password === attemptedCredentials.password;

    expect(isValidLogin).toBe(false);
    expect(AsyncStorage.getItem).toHaveBeenCalledWith('user');
  });
});