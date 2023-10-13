import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import SearchResultList from "./SearchResultList.tsx";
import { useEffect, useState } from "react";
import useSpotifyApi from "../../hooks/useSpotifyApi.tsx";
import SearchResultsSelections from "../SearchResultsSelections.tsx";
import { SearchOption } from "../../util/types.ts";
import SpotifyWebApi from "spotify-web-api-node";
import { useQuery } from "@tanstack/react-query";

const fetchData = (
    spotifyWebApiParam: SpotifyWebApi,
    searchQueryParam: string,
) => {
    if (spotifyWebApiParam) {
        if (searchQueryParam.trim().length > 0) {
            return spotifyWebApiParam
                .search(
                    searchQueryParam,
                    ["album", "artist", "playlist", "track"],
                    { limit: 50 },
                )
                .then((data) => {
                    console.log(data.body);
                    return data.body;
                });
        }
    }
    return null;
};

const Search = () => {
    const { spotifyWebApi } = useSpotifyApi();
    const [inputQuery, setInputQuery] = useState("");
    const [searchResults, setSearchResults] =
        useState<SpotifyApi.SearchResponse>();
    const [selectedOption, setSelectedOption] = useState(SearchOption.Track);
    const { refetch, isLoading } = useQuery(
        ["search", inputQuery],
        async () => {
            if (spotifyWebApi && inputQuery.trim().length > 0) {
                const data = await fetchData(spotifyWebApi, inputQuery);
                setSearchResults(data);
                return data;
            }
            return null;
        },
    );

    useEffect(() => {
        refetch();
    }, [inputQuery, refetch]);

    return (
        <div className="mx-32 relative block">
            <div className="sticky left-0 z-10">
                <input
                    type="text"
                    className={`bg-[#1B1F38] p-3 border-2 rounded-lg text-zinc-200 border-[#1D82CC]
            focus:outline-none focus:border-sky-400 font-semibold w-64 placeholder:text-gray-500
            placeholder:text-lg placeholder:mx-10 h-8 text-lg`}
                    placeholder="Search songs"
                    onChange={(event) => {
                        setInputQuery(event.target.value);
                    }}
                />
                {!inputQuery && (
                    <FontAwesomeIcon
                        className="absolute top-1/2 transform -translate-y-1/2 right-3"
                        icon={faMagnifyingGlass}
                        size="lg"
                        style={{ color: "#ffffff", zIndex: 1 }}
                    />
                )}
            </div>
            {inputQuery && (
                <div className="h-fit p-3 space-y-1 w-[30rem] bg-[#1B1F38] absolute top-8 z-20">
                    <SearchResultsSelections
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                    />
                    <SearchResultList
                        isLoading={isLoading}
                        response={searchResults}
                        selectedOption={selectedOption}
                    />
                </div>
            )}
        </div>
    );
};

export default Search;
