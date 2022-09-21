import { configureStore } from "@reduxjs/toolkit";
import degreeSlice from "./degreeSlice";
import positionSlice from "./positionSlice";

const store = configureStore({
  reducer: {
    position: positionSlice.reducer,
    rotation: degreeSlice.reducer,
  },
});

export default store;
