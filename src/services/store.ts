import { configureStore } from "@reduxjs/toolkit";
import handbookReducer from "./handbookSlice/slice";
import teamReducer from "./teamSlice/slice";

export const store = configureStore({
  reducer: {
    handbook: handbookReducer,
    team: teamReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
