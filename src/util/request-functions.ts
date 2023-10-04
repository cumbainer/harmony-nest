
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

export const fetchRooms = async () => {
    const response = await fetch("http://localhost:4040/api/rooms");
    if (!response.ok) {
        const j = {
            message: 'An error occurred while fetching the events',
            code: response.status,
            info: await response.json()
        };
        throw j;
    }

    const responseData = await response.json();
    return responseData;
}

type NewRoom = {
    title: string
}

export const createNewRoom =  async (room: NewRoom) => {

    // const hostId = localStorage.getItem("host_id");
    const requestRoom = {
        roomTitle: room.title,
        hostId: localStorage.getItem("host_id")
    };
    const response = await fetch("http://localhost:4040/api/rooms/new", {
        method: "POST",
        body: JSON.stringify(requestRoom),
        headers: {
            'Content-Type': 'application/json',
        },
    })

};
