type Props = {
    title: string,
    image: string,
    releaseYear?: string
    //todo in future bind author, if its playlist - then author is SpotifyUser, but not the artist
    authors: SpotifyApi.ArtistObjectSimplified[]
};

const SearchResultItem = ({releaseYear, image, title, authors}: Props) => {
    return (
        <li className="flex">
            <img src={image} alt="An image" className="w-16 h-16"/>
            <div className="w-full mx-2">
                <h1 className="text-white text-lg font-semibold">{title}</h1>
                <h3 className="text-gray-400 font-normal">{authors.map(author =>
                    <p key={author.id}>{author.name}</p>)}</h3>
            </div>
        </li>
    );
};

export default SearchResultItem;