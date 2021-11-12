import React, { useState } from "react";



const Search = ({ handleChange }) => {    
    const [query, setQuery] = useState('')

    const handle = (e) => {
        setQuery(e.target.value)
        handleChange(e.target.value)
    }

    return (
        <div className="search-parent">
            <i className="fas fa-search"></i>
            <input type="text" onChange={(e) => handle(e)} value={query} placeholder="Find Somethings" />
            <button>
                <p>
                    Search
                </p>
            </button>
        </div>
    )
}

export default Search