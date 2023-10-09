import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import SearchResultList from "./SearchResultList.tsx";
import {useEffect, useState} from "react";
import useSpotifyApi from "../../hooks/useSpotifyApi.tsx";
import SearchResultsSelections from "../SearchResultsSelections.tsx";
import {SearchOption} from "../../util/options.ts";

const Search = () => {
    const {spotifyWebApi} = useSpotifyApi();
    const [inputQuery, setInputQuery] = useState("");
    const [searchResults, setSearchResults] = useState<SpotifyApi.SearchResponse>();
    const [selectedOption, setSelectedOption] = useState(SearchOption.Track)

    useEffect(() => {
        if(spotifyWebApi) {
            if(inputQuery.trim().length > 0) {
                spotifyWebApi.search(inputQuery, ['album', 'artist', 'playlist', 'track', 'show', 'episode'])
                    .then(data => {

                        console.log(data.body)
                        setSearchResults(data.body)
                    })
            } else {
                setSearchResults(null);
            }
        }
    }, [inputQuery, spotifyWebApi]);
    return (
        <div className="mx-32 relative block">
            <div className="sticky left-0 z-10">
                <input
                    type="text"
                    className={`bg-[#1B1F38] p-3 border-2 rounded-lg text-zinc-200 border-[#1D82CC]
            focus:outline-none focus:border-sky-400 font-semibold w-64 placeholder:text-gray-500
            placeholder:text-lg placeholder:mx-10 h-8 text-lg`}
                    placeholder="Search songs" onChange={(event) => {setInputQuery(event.target.value)}}
                />
                {!inputQuery && <FontAwesomeIcon
                    className="absolute top-1/2 transform -translate-y-1/2 right-3"
                    icon={faMagnifyingGlass}
                    size="lg"
                    style={{color: "#ffffff", zIndex: 1}}
                />}
            </div>
            <div className="h-fit p-3 space-y-1 w-[30rem] bg-[#1B1F38] absolute top-8 z-20">
                <SearchResultsSelections selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
                <SearchResultList response={searchResults} selectedOption={selectedOption}/>

            </div>
        </div>
    );
};

export default Search;
