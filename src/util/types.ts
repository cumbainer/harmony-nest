export enum SearchOption {
    Track = "Track",
    Album = "Album",
    Artist = "Artist",
    Playlist = "Playlist",
}

export type Artist = {
    id: string;
    name: string;
};

export type Album = {
    id: string;
    title: string;
    releaseDate: string;
    artists: Artist[];
    totalTracks: number;
    albumType: string;
};

export type CurrentPlayingTrack = {
    id: string;
    title: string;
    image: string;
    artists: Artist[];
    duration: number;
    album: Album;
    popularity: number;
};
