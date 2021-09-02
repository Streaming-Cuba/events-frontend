import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type SliceState = {
  selectedVideos: number[]
}

const initialState: SliceState = {
  selectedVideos: []
};

export const metricsSlice = createSlice({
  name: "votes",
  initialState: initialState,
  reducers: {
    addVideoToVote: (state, action: PayloadAction<number>) => {
      state.selectedVideos.push(action.payload.valueOf());
    },
    removeVideoFromVotes: (state, action: PayloadAction<number>) => {
      state.selectedVideos = state.selectedVideos.filter(video => (
        video !== action.payload.valueOf()
      ));
    },
    clearAllVideos: (state) => {
      state.selectedVideos.length = 0;
    }
  }
});

export const { addVideoToVote, removeVideoFromVotes, clearAllVideos } = metricsSlice.actions;

export default metricsSlice.reducer;
