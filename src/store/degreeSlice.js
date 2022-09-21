import { createSlice } from "@reduxjs/toolkit";

const initialDegreeState = { degree: 0 };

const degreeSlice = createSlice({
  initialState: initialDegreeState,
  name: "degreeSlice",
  reducers: {
    updateDegree(state, action) {
      state.degree += action.payload;
    },
    changeDegree(state, action) {
      state.degree = action.payload;
    },
  },
});

export const degreeSliceActions = degreeSlice.actions;

export default degreeSlice;
