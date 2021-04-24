import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./reducers/layout";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    layout: layoutReducer,
  },
  middleware: [thunk],
  devTools: process.env.NODE_ENV === "development",
});

export default store;
