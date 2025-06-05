import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './features/auth/authApi';
import  userReducer from './features/auth/userSlice'
const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
     user: userReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
