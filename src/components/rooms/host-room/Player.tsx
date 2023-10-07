import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight, faPause, faPlay, faRepeat, faShuffle} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-solid-svg-icons/faHeart";

type Props = {
    isPlaying: boolean,
    isFavourited: boolean,
    togglePlayer: () => void
}
const Player = ({isFavourited, isPlaying, togglePlayer} : Props) => {

    return (
        <div className="flex items-center justify-center gap-12">
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
    );
};

export default Player;