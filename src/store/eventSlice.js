import { createSlice } from "@reduxjs/toolkit";

const initialEventState = { isClicked: false };

const eventSlice = createSlice({
  initialState: initialEventState,
  name: "eventSlice",
  reducers: {
    updateIsClicked(state, action) {
      state.isClicked = action.payload;
    },
  },
});

export const eventSliceActions = eventSlice.actions;

export default eventSlice;
