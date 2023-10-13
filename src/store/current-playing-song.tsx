import { createSlice, createStore } from "@reduxjs/toolkit";
import { CurrentPlayingTrack } from "../util/types.ts";

const initialState: CurrentPlayingTrack = {
    artists: [],
    id: "",
    album: {
        id: "",
        artists: [],
        title: "",
        albumType: "",
        releaseDate: "",
        totalTracks: 0,
    },
    title: "",
    image: "",
    duration: 0,
    popularity: 0,
};
createSlice({
    name: "current-track",
    initialState,
    reducers: {},
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
