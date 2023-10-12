import CreateNewRoomForm from "../components/CreateNewRoomForm.tsx";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createNewRoom } from "../util/request-functions.ts";

const CreateNewRoomPage = (props: { cancel: () => void }) => {
    const navigate = useNavigate();

    const { mutate } = useMutation({
        mutationKey: ["rooms", "new"],
        mutationFn: createNewRoom,
        onSuccess: () => {
            // queryClient.invalidateQueries({queryKey: ['rooms']});
            // navigate("/roomfgsds");
        },
    });

    const handleSubmit = (roomTitle: string) => {
        mutate({ title: roomTitle });
    };

    return (
        <CreateNewRoomForm onCancel={props.cancel} onSubmit={handleSubmit} />
    );
};

export default CreateNewRoomPage;
