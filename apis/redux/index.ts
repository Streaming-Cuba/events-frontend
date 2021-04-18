
// Infer the `RootState` and `AppDispatch` types from the redux itself
import store from "./store";
import {TypedUseSelectorHook, useSelector} from "react-redux";

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export {
    store
};
