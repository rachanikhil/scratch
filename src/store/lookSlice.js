import { createSlice } from "@reduxjs/toolkit";

const initialLookState = {
  text: "Hello",
  duration: 2,
  isGreetClicked: false,
  size: { width: 0, height: 0 },
  addedSize: {width: 0, height: 0},
};

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
    updateSize(state, action) {
      state.size = action.payload;
    },
    updateAddedSize(state, action) {
        state.addedSize = action.payload;
    }
  },
});

export const lookSliceActions = lookSlice.actions;

export default lookSlice;
