import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './features/auth/authApi';
import { userApi } from './features/user/userApi';
import  userReducer from './features/auth/userSlice'
const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
     user: userReducer, 
     [userApi.reducerPath]:userApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(authApi.middleware)
    .concat(userApi.middleware),
});

export default store;
