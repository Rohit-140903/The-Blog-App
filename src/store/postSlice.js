import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: []
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    resetPosts: (state) => {
      state.posts = [];
    }
  }
});

export const { setPosts, resetPosts } = postSlice.actions;
export default postSlice.reducer;
