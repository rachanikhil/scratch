import { createSlice } from "@reduxjs/toolkit";

const initialPositionState = {
  xPosition: 0,
  yPosition: 0,
  maxLeft: 0,
  maxTop: 0,
  isRandom: false,
};

const positionSlice = createSlice({
  initialState: initialPositionState,
  name: "positionSlice",
  reducers: {
    updatePositionX(state, action) {
      state.xPosition += action.payload;
    },
    updatePositionY(state, action) {
      state.yPosition += action.payload;
    },
    updateCatPosition(state, action) {
      state.xPosition = action.payload.x;
      state.yPosition = action.payload.y;
    },
    updateMaxPosition(state, action) {
      state.maxLeft = action.payload.left;
      state.maxTop = action.payload.top;
    },
    updateRandom(state, action) {
      state.isRandom = action.payload;
    },
    changePositionX(state, action) {
      state.xPosition = action.payload;
    },
    changePositionY(state, action) {
      state.yPosition = action.payload;
    },
  },
});

export const positionSliceActions = positionSlice.actions;

export default positionSlice;
