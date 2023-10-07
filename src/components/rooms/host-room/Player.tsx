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
import {Slider as SliderVolume} from '@radix-ui/themes';
import * as Slider from '@radix-ui/react-slider';

import "./slider.css";

type Props = {
    isPlaying: boolean,
    isFavourited: boolean,
    togglePlayer: () => void
}
const Player = ({isFavourited, isPlaying, togglePlayer} : Props) => {

    return (
        <div>
            <div className="absolute top-5 right-10 items-center flex">
                <FontAwesomeIcon icon={faVolumeHigh} color={"white"} size="lg" className="me-3"/>
                <Slider.Root className="SliderRoot w-36" defaultValue={[50]} max={100} step={1}>
                    <Slider.Track className="SliderTrack">
                        <Slider.Range className="SliderRange" />
                    </Slider.Track>
                    <Slider.Thumb className="SliderThumb" aria-label="Volume" />
                </Slider.Root>
            </div>
            <SliderVolume
                defaultValue={[75]}
                min={0}
                max={100}
                step={0.1}
                className="w-full inset-0 transform scale-125 mb-6"
             />
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
        </div>
    );
};

export default Player;

