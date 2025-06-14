import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './features/auth/authApi';
import { userApi } from './features/user/userApi';
// import { messagesAPi } from './features/messages/messagesApi';
import { messagesApi } from './features/messages/messagesApi';
import  userReducer from './features/auth/userSlice'
import  chatReducer from './features/messages/chatSlice'
const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
     user: userReducer, 
     [userApi.reducerPath]:userApi.reducer,
     [messagesApi.reducerPath]:messagesApi.reducer,
     chat:chatReducer

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(authApi.middleware)
    .concat(userApi.middleware)
    .concat(messagesApi.middleware),
});

export default store;
