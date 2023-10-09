import {SearchOption} from "../../util/options.ts";
import SearchResultItem from "./SearchResultItem.tsx";
import {ScrollArea} from "@radix-ui/themes";

type Props = {
    selectedOption: SearchOption;
    response: SpotifyApi.SearchResponse,
}

const SearchResultList = ({response, selectedOption}: Props) => {
    let content;
    if (response) {
        switch (selectedOption) {
            case SearchOption.Track:
                content = response.tracks?.items.map(item => {
                        return (
                           <SearchResultItem
                               key={item.id}
                               title={item.name}
                               image={item.album.images[2].url}
                               authors={item.artists}
                           />
                        );
                    })
                break;
            case SearchOption.Album:
                content = response.albums?.items.map(item => {
                        return (
                            <li key={item.id} className={"text-white"}>
                                {`Albums ` + item.name}
                                <img src={item.images[2].url} alt=""/>
                            </li>
                        );
                    })
                break;
            case SearchOption.Artist:
                content = response.artists?.items.map(item => {
                        return (
                            <li key={item.id} className={"text-white"}>{item.name}</li>
                        );
                    })
                break;
            case SearchOption.Playlist:
                content = response.playlists?.items.map(item => {
                    return (
                        <li key={item.id} className={"text-white"}>{item.name}</li>
                    );
                })
                break;
        }
    }

    return (
        <>
            {/*//todo check not response, but if tracks are selected now - check the length of tracks*/}
            {response ?
                <ScrollArea className="h-40" type="always" scrollbars="vertical">
                    <ul className="space-y-4 h-96">
                        {content}
                    </ul>
                </ScrollArea>
                : <h1 className="text-white">No items found</h1>}
        </>
    );
};

export default SearchResultList;