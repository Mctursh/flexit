import React from "react";

const Category = ({ name, seperator }) => {
    return (
        <div className={`categ ${seperator && "separator"}`}>
            <p>{name}</p>
            <i className="fas fa-chevron-down"></i>
        </div>
    )
}

export default Category