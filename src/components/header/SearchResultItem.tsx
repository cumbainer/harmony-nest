import useSpotifyApi from "../../hooks/useSpotifyApi.tsx";
import { SearchOption } from "../../util/options.ts";

type Props = {
    id: string;
    type: SearchOption;
    title: string;
    image: string;
    authors?: SpotifyApi.ArtistObjectSimplified[];
    ownerName?: string;
    genres?: string[];
};

const SearchResultItem = ({
    id,
    type,
    genres,
    ownerName,
    image,
    title,
    authors,
}: Props) => {
    const { spotifyWebApi } = useSpotifyApi();

    const handleClick = (event) => {
        if (spotifyWebApi) {
            if (type == SearchOption.Track) {
                spotifyWebApi.play({ uris: [`spotify:track:${id}`] });
            }
        }
        //todo else
    };

    return (
        <li
            className="flex bg-none hover:bg-sky-700 p-2 cursor-pointer"
            onClick={handleClick}
        >
            {/*todo make smooth image loading state*/}
            <img src={image} alt="An image" className="w-[4rem] h-[4rem]" />
            <div className="w-full mx-2">
                <h1 className="text-white text-lg font-semibold">{title}</h1>
                <h3 className="text-gray-400 font-normal">
                    {authors
                        ? authors.map((author) => (
                              <p key={author.id}>{author.name}</p>
                          ))
                        : ownerName}
                </h3>
                <h3 className="text-gray-400 font-normal">
                    {genres?.map((genre, key) => <p key={key}>{genre}</p>)}
                </h3>
            </div>
        </li>
    );
};

export default SearchResultItem;
