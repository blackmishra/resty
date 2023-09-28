import react from 'react';
import "./SearchResults.css"
import SearchResult from 'components/SearchResult';

export const SearchResultsList = ({ searchr }) => {

    return (
        <div className='search-results-list'>
            {
                searchr.map((search, id) => {
                    return <SearchResult key={id} search={search} />
                })
            }

        </div>

    )
}

