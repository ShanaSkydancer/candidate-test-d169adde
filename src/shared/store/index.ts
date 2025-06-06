import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../../shared/store/userSlice";

export const rootReducer = combineReducers({
  user: userReducer
});

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
