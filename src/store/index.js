import { combineReducers, configureStore } from "@reduxjs/toolkit";
import agencySlice from "./agencySlice";

const rootReducer = combineReducers({
  agency: agencySlice,
});

export const store = configureStore({
  reducer: rootReducer,
});