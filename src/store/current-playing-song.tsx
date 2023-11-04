import { createSlice, createStore } from "@reduxjs/toolkit";
import {
    CurrentlyPlayingTrack,
    defaultCurrentlyPlayingTrack,
} from "../util/types.ts";

const initialState: CurrentlyPlayingTrack = {
    ...defaultCurrentlyPlayingTrack,
};
createSlice({
    name: "current-track",
    initialState,
    reducers: {
        toggleTrack(state, action) {

        },

    },
});
/*
    todo add the managing state of current playing track
    as well as skipping the track, going to prev, pause, play
    when skip happens - update info of current track
    if the action hasnt been triggered for 2 sec, update manually

 */
const counterReducer = (state, action) => {};
const store = createStore(counterReducer);
export default store;
