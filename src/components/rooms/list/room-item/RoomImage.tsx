const baseRoomStyles = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "200px",
    height: "200px",
    borderRadius: "10px",
};

const RoomImage = (props: { isPlaying: boolean; imageUrl: string }) => {
    const isPlayingRoomImage = {
        ...baseRoomStyles,
        backgroundImage: `url(${props.imageUrl})`,
    };

    const idleRoomImage = {
        ...baseRoomStyles,
        backgroundColor: `#13182B`,
    };

    return (
        <div style={props.isPlaying ? isPlayingRoomImage : idleRoomImage}></div>
    );
};

export default RoomImage;
