import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostsState {
  posts: Post[];
  loading: boolean;
}

const initialState: PostsState = {
  posts: [],
  loading: false,
};

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await res.json();
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(fetchPosts.rejected, state => {
        state.loading = false;
      });
  },
});

export default postsSlice.reducer;
