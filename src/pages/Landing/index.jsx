import {useState} from "react";

import { Img, Text } from "components";
import { SearchBar } from "components/SearchBar";
import { SearchResultsList } from "components/SearchResultsList";

function Search(){
    const [searchr, setSearchr] = useState([]);

    return(
        <div className="Main">
            <div className="search-bar-container">
                <SearchBar setSearchr={setSearchr}/>
                <SearchResultsList searchr={searchr} />

            </div>
        </div>
    )
}
export default Search;