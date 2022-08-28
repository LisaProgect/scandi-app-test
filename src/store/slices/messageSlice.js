import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: {},
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    showMessage: (state, { payload }) => {
      state.message = {
        type: payload.type,
        text: payload.text,
      };
    },
    hideMessage: (state) => {
      state.message = {};
    },
  },
});

export const { showMessage, hideMessage } = messageSlice.actions;

export default messageSlice.reducer;
