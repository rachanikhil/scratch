import { configureStore } from "@reduxjs/toolkit";
import controlSlice from "./controlSlice";
import degreeSlice from "./degreeSlice";
import eventSlice from "./eventSlice";
import lookSlice from "./lookSlice";
import positionSlice from "./positionSlice";

const store = configureStore({
  reducer: {
    position: positionSlice.reducer,
    rotation: degreeSlice.reducer,
    looks: lookSlice.reducer,
    events: eventSlice.reducer,
    controls: controlSlice.reducer,
  },
});

export default store;
