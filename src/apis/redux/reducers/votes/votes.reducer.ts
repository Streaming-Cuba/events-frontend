import {createReducer, PayloadAction } from "@reduxjs/toolkit";
import { VotesReducerState } from "./votes.types";
import { addVideoToVote, removeVideoFromVote } from "./votes.actions";

const initialState: VotesReducerState = {
  selectedVideos: []
};

export const votesReducer = createReducer(initialState, (builder => {
  builder.addCase(addVideoToVote, (state, action: PayloadAction<number>) => {
    state.selectedVideos.push(action.payload.valueOf());
  });
  builder.addCase(removeVideoFromVote, (state, action: PayloadAction<number>) => {
    state.selectedVideos = state.selectedVideos.filter(value => value !== action.payload.valueOf());
  });
}));
