// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

export const reducerSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment: (state,action) => {
      state.count += action.payload; // Immer handles immutable updates
    },
    decrement: (state,action) => {
      state.count -= action.payload;
    },
  },
});

export const { increment, decrement } = reducerSlice.actions;
export default reducerSlice.reducer;