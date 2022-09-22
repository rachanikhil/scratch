import { createSlice } from "@reduxjs/toolkit";

const initialControlState = {
  ifCondition: "",
  comparaters: [">", "<", "==", "!", "==="],
};

const controlSlice = createSlice({
  initialState: initialControlState,
  name: "controlSlice",
  reducers: {
    updateIfCondition(state, action) {
      state.ifCondition = action.payload;
    },
  },
});

export const controlSliceActions = controlSlice.actions;

export default controlSlice;
