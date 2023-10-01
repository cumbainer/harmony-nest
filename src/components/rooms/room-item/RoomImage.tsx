
const RoomImage = (props: {isPlaying: boolean, imageUrl: string}) => {
    const roomImageStyle = {
        backgroundImage: `url(${props.imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '200px',
        height: '200px',
        borderRadius: '10px',
    };

    const a = {
        backgroundColor: `#13182B`,
        // backgroundImage: `url("porn"})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '200px',
        height: '200px',
        borderRadius: '10px',
    };

    return (
        <div style={props.isPlaying ? roomImageStyle : a}></div>
    );
};

export default RoomImage;