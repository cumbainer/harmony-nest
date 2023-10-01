import {Await, useLoaderData} from "react-router";
import {Suspense} from "react";
import RoomsList from "../components/rooms/RoomsList.tsx";
import {RoomType} from "../util/rooms-loader.ts";

const RoomsPage = () => {
    const data = useLoaderData() as RoomType;
    const {rooms} = data;

    return (
        <>
            <Suspense fallback={<p>Loading...</p>}>
                <Await resolve={rooms}>
                    {(loadedRooms) => <RoomsList rooms={loadedRooms}/>}
                </Await>
            </Suspense>
        </>

    );
};
export default RoomsPage;