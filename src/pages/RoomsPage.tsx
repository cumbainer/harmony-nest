import RoomsList from "../components/rooms/RoomsList.tsx";
import {fetchRooms} from "../util/request-functions.ts";
import {PuffLoader} from "react-spinners";
import {useQuery} from "@tanstack/react-query";
import CreateNewRoomPage from "./CreateNewRoomPage.tsx";
import {useState} from "react";

const RoomsPage = () => {
    const [formIsActive, setFormIsActive] = useState(false);
    const formIsOpenedClasses = formIsActive ? "pointer-events-none blur-sm brightness-50":"";

    const {data, isLoading, isError} = useQuery({
        queryKey: ["rooms"],
        queryFn: fetchRooms,
    });
    let content;

    if (isLoading) {
        content = (
            <div className="h-screen flex justify-center items-center absolute">
                <PuffLoader color={"rgb(120, 156, 224)"} size={100}/>
            </div>
        );
    }
    if (data) {
        content = <RoomsList rooms={data}/>;
    }
    if(isError) {
        //todo make better
        content = "An error occured";
    }

    const openFormHandler = () => {


        setFormIsActive(true);

    };

    return (
        <>
            <div className={`relative ${formIsOpenedClasses}`}>
                {data && <div className="flex justify-between my-8">
                    <div className="flex items-center gap-2">
                        <div className="w-1 h-10 bg-white rounded-lg"></div>
                        <h1 className="text-4xl ms-1 text-sky-500 shadow-2xl font-bold">
                            Rooms List
                        </h1>
                    </div>
                    <button
                        className="bg-sky-500 rounded-full text-2xl text-white p-3 font-medium"
                        onClick={openFormHandler}
                    >
                        Create your room
                    </button>
                </div>}
                {content}
            </div>
            {formIsActive && (
                <CreateNewRoomPage cancel={() => setFormIsActive(false)}/>
            )}
        </>
    );
};
export default RoomsPage;