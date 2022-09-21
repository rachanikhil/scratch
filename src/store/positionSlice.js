import { createSlice } from "@reduxjs/toolkit";

const initialPositionState = {xPosition: 0, yPosition: 0};

const positionSlice= createSlice({
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
            state.xPosition += action.payload.x;
            state.yPosition += action.payload.y;
        }
    }
})

export const positionSliceActions = positionSlice.actions;

export default positionSlice;