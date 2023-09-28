import React from 'react'
import { useNavigate } from "react-router-dom";
import "./SearchResult.css"

const SearchResult = ({search}) => {
  let navigate = useNavigate(); 

  const handleChange = (value) => {
    console.log(`You clicked on ${search.id}`)
    let path = `/desktopsix`; 
    navigate(path);

}
  return (
    <div 
    className='search-results-elem'
    onClick={handleChange}
    >
      {search.name}
    </div>
  )
}

export default SearchResult
