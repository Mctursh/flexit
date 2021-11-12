import React from "react";

const Search = () => {
    return (
        <div className="search-parent">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Find Somethings" />
            <button>
                <p>
                    Search
                </p>
            </button>
        </div>
    )
}

export default Search