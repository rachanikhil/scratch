import { configureStore } from "@reduxjs/toolkit";
import positionSlice from "./positionSlice";

const store = configureStore({
  reducer: {
    position: positionSlice.reducer,
  },
});

export default store;
