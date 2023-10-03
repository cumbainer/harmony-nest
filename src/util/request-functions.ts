
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

