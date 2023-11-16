import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react'

import "./SearchResult.css"

const SearchResult = ({search}) => {
  const navigate = useNavigate(); 
  // const data = new URLSearchParams();
  // data.append('rest_id', search.id);
  // const [rest_details, setRest_details] = useState("")

  
  // const fetchData = () =>{
  //     fetch(`http://127.0.0.1:8000/find/${search.id}`)
  //         .then((response) => response.json())
  //         .then((json) => setRest_details(json))
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const handleChange = (value) => {
    console.log(`You clicked on ${search.rest_id}`)
    // console.log(rest_details)
    const venue_id = search.rest_id
    let path = `/desktopsix`; 
    // fetchData();
    navigate(path, {replace:true, state:{venue_id}});
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
