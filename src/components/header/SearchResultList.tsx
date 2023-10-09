const SearchResultList = ({items}: {items: []}) => {
    return (
        <ul className="h-fit p-3 space-y-1 w-[35rem] bg-[#1B1F38] absolute top-8 z-20">
            {items && items.map(item =>  {
                return (
                    <li key={item.id} className={"text-white"}>{item.name}</li>
                );
            })}

        </ul>
    );
};

export default SearchResultList;