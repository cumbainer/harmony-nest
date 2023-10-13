import { SearchOption } from "../util/types.ts";

type Props = {
    selectedOption: SearchOption;
    setSelectedOption: (option: SearchOption) => void;
};
const SearchResultsSelections = ({
    selectedOption,
    setSelectedOption,
}: Props) => {
    return (
        <div className="flex mx-2 gap-6">
            <button
                className={`mb-5 text-white font-medium text-xl p-2.5 rounded-lg border-sky-600 border w-24 ${
                    selectedOption === "Track" ? "bg-sky-500" : "bg-none"
                } hover:bg-sky-500`}
                onClick={() => setSelectedOption(SearchOption.Track)}
            >
                Track
            </button>
            <button
                className={`mb-5 text-white font-medium text-xl p-2.5 rounded-lg border-sky-600 border w-24 ${
                    selectedOption === "Album" ? "bg-sky-500" : "bg-none"
                } hover:bg-sky-500`}
                onClick={() => setSelectedOption(SearchOption.Album)}
            >
                Album
            </button>
            <button
                className={`mb-5 text-white font-medium text-xl p-2.5 rounded-lg border-sky-600 border w-24 ${
                    selectedOption === "Artist" ? "bg-sky-500" : "bg-none"
                } hover:bg-sky-500`}
                onClick={() => setSelectedOption(SearchOption.Artist)}
            >
                Artist
            </button>
            <button
                className={`mb-5 text-white font-medium text-xl p-2.5 rounded-lg border-sky-600 border w-24 ${
                    selectedOption === "Playlist" ? "bg-sky-500" : "bg-none"
                } hover:bg-sky-500`}
                onClick={() => setSelectedOption(SearchOption.Playlist)}
            >
                Playlist
            </button>
        </div>
    );
};

export default SearchResultsSelections;
