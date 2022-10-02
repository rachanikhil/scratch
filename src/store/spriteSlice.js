import { createSlice } from "@reduxjs/toolkit";

const initialSpriteState = {
  characters: [{ id: "sprite0", angle: 0 }],
  active: "sprite0",
};

const spriteSlice = createSlice({
  initialState: initialSpriteState,
  name: "spriteSlice",
  reducers: {
    addCharacter(state, action) {
      state.characters = action.payload;
    },
    setActiveSprite(state, action) {
      state.active = action.payload;
    },
  },
});

export const spriteSliceActions = spriteSlice.actions;

export default spriteSlice;
