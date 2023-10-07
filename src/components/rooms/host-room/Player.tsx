import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faArrowRight,
    faPause,
    faPlay,
    faRepeat,
    faShuffle,
    faVolumeHigh
} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-solid-svg-icons/faHeart";
import {Slider} from "@radix-ui/themes";

type Props = {
    isPlaying: boolean,
    isFavourited: boolean,
    togglePlayer: () => void
}
const Player = ({isFavourited, isPlaying, togglePlayer} : Props) => {

    return (
        <>
            <div className="absolute top-5 right-10 items-center flex">
                <FontAwesomeIcon icon={faVolumeHigh} color={"white"} size="lg" className="me-3"/>
                <Slider
                    defaultValue={[75]}
                    min={0}
                    max={100}
                    step={0.1}
                    className="w-36"
                />
            </div>
            <div className="flex items-center justify-center gap-12 relative">

                {isFavourited ? <FontAwesomeIcon icon={faHeart} size={"2xl"} color="#31c469" className="cursor-pointer"/> :
                    <FontAwesomeIcon icon={faHeart} size={"2xl"} color="white" className="cursor-pointer"/>}
                <FontAwesomeIcon icon={faRepeat} size={"2xl"} color="white" className="cursor-pointer"/>
                <FontAwesomeIcon icon={faArrowLeft} size={"2xl"} color="white" className="cursor-pointer"/>
                <div className="h-16 w-16 rounded-full bg-[#2382DB] flex items-center justify-center align-middle cursor-pointer"
                     onClick={() => {togglePlayer()}}>
                    {isPlaying ? <FontAwesomeIcon icon={faPause} size="xl" color="white" className="cursor-pointer"/> :
                        <FontAwesomeIcon icon={faPlay} size="xl" color="white" className="cursor-pointer"/> }
                </div>
                <FontAwesomeIcon icon={faArrowRight} size={"2xl"} color="white" className="cursor-pointer"/>
                <FontAwesomeIcon icon={faShuffle} size={"2xl"} color="white" className="cursor-pointer"/>
            </div>
        </>
    );
};

export default Player;