import axios from "axios";

export interface Room {
    id: string;
    title: string;
    currentlyIsPlaying: boolean;
    creationDate: Date;
    image: string;
    guests: [];
    songsListened: number;
    ownerName: string;
}

export interface RoomType {
    rooms: Room[];
}

export const fetchRooms = async () => {
    const response = await axios.get("http://localhost:4040/api/rooms", {
        withCredentials: true,
    });

    return response.data;
};

type NewRoom = {
    title: string;
};

export const createNewRoom = async (room: NewRoom) => {
    const response = await axios.post(
        "http://localhost:4040/api/rooms/new",
        {
            roomTitle: room.title,
            hostId: localStorage.getItem("host_id"),
        },
        {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
        },
    );
};
