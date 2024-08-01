import { combineReducers } from "@reduxjs/toolkit";
import { firstReducer } from "../slices/firstSlice/firstSlice";
const rootReducer = combineReducers({
  firstReducer,
});

export default rootReducer;
