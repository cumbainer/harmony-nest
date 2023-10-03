import React, {ElementRef, useRef} from "react";

type Props = {
    onCancel: () => void,
    onSubmit: (roomTitle: string) => void
}

const CreateNewRoomForm = ({onCancel, onSubmit}: Props) => {
    const titleInputRef = useRef<HTMLInputElement | null>(null);

    const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        onSubmit(titleInputRef.current!.value);
    }

    //todo make the backdrop
    return (
        <form className="absolute w-[40rem] h-[25rem] bg-[#1B1F38] mt-10 opacity-[99%] text-center flex items-center justify-center"
              onSubmit={formSubmitHandler}>
            <div>
                <h1 className="text-4xl text-white font-semibold">Create Room</h1>
                <div className="mt-10">
                    <h1 className="text-2xl text-white font-medium">Enter Room Title</h1>
                    <input type="text" id={"room-title"} className="mt-2 w-[23rem] h-[3rem] text-xl bg-[#1B1F38]
                    text-zinc-300 font-semibold border-sky-500 rounded-md focus:outline-none focus:border-sky-400 border-2
                    placeholder:text-gray-500 placeholder:text-2xl px-3"
                    placeholder="Evening chill" ref={titleInputRef} />
                </div>
                <div className="mt-16 flex justify-between">
                    <button className="bg-none text-2xl text-white p-3 px-10 rounded-xl border border-red-700
                    hover:bg-red-700" onClick={onCancel}>Back</button>
                    <button className="bg-sky-500 text-2xl text-white p-3 px-14 rounded-xl">Create</button>
                </div>
            </div>
        </form>
    );
};

export default CreateNewRoomForm;