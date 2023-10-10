import {SearchOption} from "../../util/options.ts";
import SearchResultItem from "./SearchResultItem.tsx";
import {ScrollArea} from "@radix-ui/themes";
import {PuffLoader} from "react-spinners";

type Props = {
    isLoading: boolean;
    selectedOption: SearchOption;
    response?: SpotifyApi.SearchResponse;
};

const SearchResultList = ({isLoading, response, selectedOption}: Props) => {
    let content;

    if (response) {
        let selectedItems = [];
        switch (selectedOption) {
            case SearchOption.Track:
                selectedItems = response.tracks?.items || [];
                break;
            case SearchOption.Album:
                selectedItems = response.albums?.items || [];
                break;
            case SearchOption.Artist:
                selectedItems = response.artists?.items || [];
                break;
            case SearchOption.Playlist:
                selectedItems = response.playlists?.items || [];
                break;
            default:
                selectedItems = [];
                break;
        }

        const hasItems = selectedItems.length > 0;

        content = hasItems
            ? selectedItems.map((item) => {
                switch (selectedOption) {
                    case SearchOption.Track:
                        return (
                            <SearchResultItem
                                key={item.id}
                                title={item.name}
                                image={item.album.images[0].url}
                                authors={item.artists}
                            />
                        );
                    case SearchOption.Album:
                        return (
                            <SearchResultItem
                                key={item.id}
                                title={item.name}
                                image={item.images[0].url}
                                authors={item.artists}
                            />
                        );
                    case SearchOption.Artist:
                        return (
                            <SearchResultItem
                                key={item.id}
                                title={item.name}
                                image={item.images[0]?.url}
                                genres={item.genres}
                            />
                        );
                    case SearchOption.Playlist:
                        return (
                            <SearchResultItem
                                key={item.id}
                                title={item.name}
                                image={item.images[0].url}
                                ownerName={item.owner.display_name}
                            />
                        );
                    default:
                        return null;
                }
            })
            : <h1 className="text-white">No items found</h1>;
    }

    return (
        <>
            {response && (
                <ScrollArea className="h-46" type="always" scrollbars="vertical">
                    {isLoading ? (
                        <div className="flex items-center justify-center h-96">
                            <PuffLoader color={"rgb(120, 156, 224)"} size={100}/>
                        </div>
                    ) : (
                        <div className="h-96">
                            <ul className="space-y-4">{content}</ul>
                        </div>
                    )}
                </ScrollArea>
            )}
        </>
    );
};

export default SearchResultList;
