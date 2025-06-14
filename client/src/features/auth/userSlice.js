import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './authApi';

const initialState = {
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      console.log(action.payload)
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    clearUser(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.userInfo.matchFulfilled,
        (state, action) => {
          state.user = action.payload.user;
          state.isAuthenticated = true;
        }
      )
      .addMatcher(
        authApi.endpoints.userInfo.matchRejected,
        (state) => {
          state.user = null;
          state.isAuthenticated = false;
        }
      );
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;