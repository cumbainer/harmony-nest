export enum SearchOption {
    Track = "Track",
    Album = "Album",
    Artist = "Artist",
    Playlist = "Playlist",
}

export type Artist = SpotifyApi.ArtistObjectSimplified;
export type Album = SpotifyApi.AlbumObjectSimplified;

export type CurrentlyPlayingTrack = {
    id: string;
    title: string;
    image: string;
    artists: Artist[];
    duration: number;
    album: Album;
    popularity: number;
    isPlaying?: boolean;
};

export const defaultAlbum: SpotifyApi.AlbumObjectSimplified = {
    id: "",
    name: "",
    artists: [],
    images: [],
    album_type: "album",
    href: "",
    uri: "",
    type: "album",
    total_tracks: 0,
    available_markets: [],
    release_date: "",
    release_date_precision: "day",
    external_urls: { spotify: "" },
};

export const defaultCurrentlyPlayingTrack= {
    id: "",
    title: "",
    image: "",
    artists: [],
    duration: 0,
    album: defaultAlbum,
    popularity: 0,
    isPlaying: false,
};
