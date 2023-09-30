import {defer, json} from "react-router";

export interface Room {
    id: string;
    title: string;
    isPlaying: boolean;
    creationDate: Date;
    image: string;
    guests: [];
    songsListened: number;
    ownerName: string
}

export interface RoomType {
    rooms: Room[]
}

export const loader = () => {
    return defer({
        rooms: fetch("http://localhost:4040/api/rooms")
            .then((res) => res.json())
            .catch(error => {
                throw json(
                    {message: "Failed to load events,"}, {status: error.status}
                )
            }),
    });

}