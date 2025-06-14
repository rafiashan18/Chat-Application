import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedUserId: null,
  selectedUserName:null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setSelectedUserId: (state, action) => {
      state.selectedUserId = action.payload;
    },
     setSelectedUserName: (state, action) => {
      state.selectedUserName = action.payload;
    },
  },
});

export const { setSelectedUserId ,setSelectedUserName } = chatSlice.actions;
export default chatSlice.reducer;
