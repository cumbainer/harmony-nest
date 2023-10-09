import {SearchOption} from "../../util/options.ts";

type Props = {
    selectedOption: SearchOption;
    response: SpotifyApi.SearchResponse,
}

const SearchResultList = ({response, selectedOption}: Props) => {
    let content;
    if (response) {
        switch (selectedOption) {
            case SearchOption.Track:
                content = <ul className="">
                    {response.tracks?.items.map(item => {
                        return (
                            <li key={item.id} className={"text-white"}>
                                {`Tracks ` + item.name}
                                <img src={item.album.images[2].url} alt=""/>
                            </li>
                        );
                    })}
                </ul>
                break;
            case SearchOption.Album:
                content = <ul className="">
                    {response.albums?.items.map(item => {
                        return (
                            <li key={item.id} className={"text-white"}>
                                {`Albums ` + item.name}
                                <img src={item.images[2].url} alt=""/>
                            </li>
                        );
                    })}
                </ul>
                break;
            case SearchOption.Artist:
                content = <ul className="">
                    {response.albums?.items.map(item => {
                        return (
                            <li key={item.id} className={"text-white"}>{item.name}</li>
                        );
                    })}
                </ul>
                break;
            case SearchOption.Playlist:
                content = <ul className="">
                    {response.albums?.items.map(item => {
                        return (
                            <li key={item.id} className={"text-white"}>{item.name}</li>
                        );
                    })}
                </ul>
                break;
        }
    }

    return (
        <>
            {response ? content : "No items found"}
        </>
    );
};

export default SearchResultList;