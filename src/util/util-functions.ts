import {CurrentlyPlayingTrack, defaultAlbum} from "./types.ts";

export const makeCapital = (inputText: string) => {
    return inputText?.charAt(0).toUpperCase() + inputText?.slice(1);
};
export const mapResponseTrackToObject = (
    item: SpotifyApi.TrackObjectFull | null,
): CurrentlyPlayingTrack => {
    const defaultTrack: CurrentlyPlayingTrack = {
        id: "",
        title: "",
        image: "",
        artists: [],
        duration: 0,
        album: defaultAlbum,
        popularity: 0,
    };

    if (!item) {
        return defaultTrack;
    }

    return {
        id: item.id || defaultTrack.id,
        title: item.name || defaultTrack.title,
        image: item.album?.images[0]?.url || defaultTrack.image,
        artists: item.artists || defaultTrack.artists,
        duration: item.duration_ms || defaultTrack.duration,
        album: item.album || defaultTrack.album,
        popularity: item.popularity || defaultTrack.popularity,
    };
};
