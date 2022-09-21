import { createSlice } from "@reduxjs/toolkit";

const initialLookState = { text: "Hello", duration: 2, isGreetClicked: false };

const lookSlice = createSlice({
  initialState: initialLookState,
  name: "lookSlice",
  reducers: {
    updateText(state, action) {
      state.text = action.payload;
    },
    updateDuration(state, action) {
      state.duration = action.payload;
    },
    updateLooks(state, action) {
      state.text = action.payload.text;
      state.duration = action.payload.time;
    },
    updateIsGreetClicked(state, action) {
      state.isGreetClicked = action.payload;
    },
  },
});

export const lookSliceActions = lookSlice.actions;

export default lookSlice;
