import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"
import "./SearchBar.css"

export const SearchBar = ({setSearchr}) => {
    const [searchi, setSearchi] = useState("")
    const base_url = process.env.REACT_APP_BASE_URL
    const search_url = base_url + 'search'

    const fetchData = (value) => {
        fetch(search_url)
            .then((response) => response.json())
            .then((json) => {
                // console.log('Data received', json)
                // console.log(typeof(json));

                const results = json.filter((item) => {

                    return(
                        value&&
                        item && 
                        item.name &&
                        item.name.toLowerCase()
                        .includes(value.toLowerCase()))
                })
                console.log('Results are:', results)

                setSearchr(results)
            });
    }
    const handleChange = (value) => {
        console.log(value)
        setSearchi(value)
        fetchData(value)
    }

    return (
        <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input placeholder="Type to search..."
                value={searchi}
                onChange={(e) => { handleChange(e.target.value); }}
            />

        </div>
    )
}