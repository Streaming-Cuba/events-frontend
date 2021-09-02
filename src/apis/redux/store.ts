import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./reducers/layout";
import votesReducer  from "./reducers/votes";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    layout: layoutReducer,
    votes: votesReducer,
  },
  middleware: [thunk],
  devTools: process.env.NODE_ENV === "development",
});

export default store;
