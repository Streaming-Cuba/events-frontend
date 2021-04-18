import { PayloadAction } from "@reduxjs/toolkit";
import { LayoutReducerState, TOGGLE_SIDEBAR_ACTION } from "./layout.types";

const initialState: LayoutReducerState = {
  isSidebarOpen: false,
};

function layoutReducer(state = initialState, action: PayloadAction): LayoutReducerState {
  switch (action.type) {
    case TOGGLE_SIDEBAR_ACTION:
      return {
        ...initialState,
        isSidebarOpen: !initialState.isSidebarOpen
      }
    default:
      return state;
  }
}

export default layoutReducer;
