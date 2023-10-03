import {Await, useRouteLoaderData} from "react-router";
import {Suspense} from "react";
import RoomsList from "../components/rooms/RoomsList.tsx";
import {loader, RoomType} from "../util/rooms-loader.ts";
import {PuffLoader} from "react-spinners";
import {useQuery} from "@tanstack/react-query";
import loginPage from "./LoginPage.tsx";

const RoomsPage = () => {
    // const data = useRouteLoaderData("rooms") as RoomType;
    // const {rooms} = data;

    const {data, isLoading, error} = useQuery({
        queryKey: ["rooms"],
        queryFn: loader,
    });
    let content;

    if(isLoading) {
        const loadingDiv = (
            <div className="flex justify-center items-center top-[20rem] absolute">
                <PuffLoader color={"rgb(120, 156, 224)"} size={100}/>
            </div>
        );
        content = loadingDiv;
    }
    if(data) {
        content = <RoomsList rooms={data} />;
    }

    return (
        <>
            {content}

            {/*{data.toString()}*/}
            {/*<Suspense fallback={loadingDiv}>*/}
            {/*    <Await resolve={rooms}>*/}
            {/*        {(loadedRooms) => <RoomsList rooms={loadedRooms}/>}*/}
            {/*    </Await>*/}
            {/*</Suspense>*/}
        </>

    );
};
export default RoomsPage;