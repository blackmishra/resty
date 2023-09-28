import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"
import "./SearchBar.css"

export const SearchBar = ({setSearchr}) => {
    const [searchi, setSearchi] = useState("")
    const fetchData = (value) => {
        fetch("http://127.0.0.1:8000/search")
            .then((response) => response.json())
            .then((json) => {
                // console.log(json);
                const results = json.filter((item) => {
                    return(
                        value&&
                        item && 
                        item.name &&
                        item.name.toLowerCase()
                        .includes(value.toLowerCase()))
                })
                setSearchr(results)
            });
    }
    const handleChange = (value) => {
        // console.log(value)
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