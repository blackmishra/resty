import react from 'react';
// import "./SearchResults.css"
// import SearchResult from 'components/SearchResult';
import DesktopSixteenColumnrectanglethirtyone from "components/DesktopSixteenColumnrectanglethirtyone";

export const RestaurantGridList = ({ searchr }) => {

    return (
        <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
            {
                searchr.map((search, id) => {
                    return <DesktopSixteenColumnrectanglethirtyone key={id} props={search} />
                })
            }

        </div>

    )
}

