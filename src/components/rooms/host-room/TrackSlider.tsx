import { Slider } from "@radix-ui/themes";
import { useEffect, useState } from "react";

type Props = {
    duration: number;
    isPlaying: boolean
};

const TrackSlider = ({ duration, isPlaying}: Props) => {
    const [value, setValue] = useState([0]);
    const maxDuration = duration / 1000;

    useEffect(() => {
        if(isPlaying) {
            const interval = setInterval(() => {
                setValue((prevValue) => [(prevValue[0] + 1) % (maxDuration + 1)]);
            }, 1000);

            return () => {
                clearInterval(interval);
            };
        }
    }, [duration, isPlaying, maxDuration]);

    return (
        <Slider
            value={value}
            min={1}
            max={maxDuration}
            className="pointer-events-none w-full inset-0 transform scale-125 mb-6"
        />
    );
};

export default TrackSlider;


