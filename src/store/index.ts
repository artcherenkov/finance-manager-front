import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user";
import dataReducer from "./slices/data";

export const store = configureStore({
  reducer: {
    user: userReducer,
    data: dataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
