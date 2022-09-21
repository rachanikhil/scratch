import { configureStore } from "@reduxjs/toolkit";
import degreeSlice from "./degreeSlice";
import lookSlice from "./lookSlice";
import positionSlice from "./positionSlice";

const store = configureStore({
  reducer: {
    position: positionSlice.reducer,
    rotation: degreeSlice.reducer,
    looks: lookSlice.reducer,
  },
});

export default store;
