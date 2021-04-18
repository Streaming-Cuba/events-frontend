import { PayloadAction } from "@reduxjs/toolkit";
import { TOGGLE_SIDEBAR_ACTION } from "./layout.types";

export function toggleSidebar(): PayloadAction {
  return {
    type: TOGGLE_SIDEBAR_ACTION,
    payload: undefined
  };
}
