import CreateNewRoomForm from "../components/CreateNewRoomForm.tsx";
import {useMutation} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import {createNewRoom} from "../util/login-util.ts";

const CreateNewRoomPage = (props: { cancel: () => void }) => {
    const navigate = useNavigate();

    const {mutate, isError, error} = useMutation({
        mutationKey: ["rooms", "new"],
        mutationFn: createNewRoom,
        onSuccess: () => {
            // queryClient.invalidateQueries({queryKey: ['events']});
            navigate("sdgfsdgsfdgsdfgjsdfhjgksjk");
        },

    });

    const handleSubmit = (roomTitle: string) => {
        mutate({title: roomTitle});
    };
    return (
        <>
            {/*todo after user clicks -> check if he is authed*/}
            <CreateNewRoomForm onCancel={props.cancel} onSubmit={handleSubmit}/>
            {error}
        </>
    );
};

export default CreateNewRoomPage;