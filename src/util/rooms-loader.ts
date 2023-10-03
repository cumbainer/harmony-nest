import {defer, json} from "react-router";

export interface Room {
    id: string;
    title: string;
    currentlyIsPlaying: boolean;
    creationDate: Date;
    image: string;
    guests: [];
    songsListened: number;
    ownerName: string
}

export interface RoomType {
    rooms: Room[]
}

export const loader = async () => {
    // return defer({
    //     rooms: fetch("http://localhost:4040/api/rooms")
    //         .then((res) => res.json())
    //         .catch(error => {
    //             throw json(
    //                 {message: "Failed to load events,"}, {status: error.status}
    //             )
    //         }),
    // });
    const response = await fetch("http://localhost:4040/api/rooms");
    if (!response.ok) {
        const error = new Error('An error occurred while fetching the events');
        // error.code = response.status;
        // error.info = await response.json();
        throw {
            message: 'An error occurred while fetching the events',
            code: response.status,
            info: await response.json()
        };
    }

    const responseData = await response.json();
    return responseData;
}

