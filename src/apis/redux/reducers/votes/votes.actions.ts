import {createAction, PayloadAction} from "@reduxjs/toolkit";
import { ADD_VIDEO_TO_VOTE, REMOVE_VIDEO_FROM_VOTE } from "./votes.types";

export const addVideoToVote = createAction<number>(ADD_VIDEO_TO_VOTE);
export const removeVideoFromVote = createAction<number>(REMOVE_VIDEO_FROM_VOTE);

